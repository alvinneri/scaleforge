"use client";

import * as React from "react";
import {
  ColumnDef,
  getCoreRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
} from "@tanstack/react-table";
import { Badge } from "@/components/ui/Badge";
import { StatusBadge } from "@/components/ui/StatusBadge";
import { Table, TableBody } from "@/components/ui/table";
import { AppTableBody } from "./AppTableBody";
import { AppTableHeader } from "./AppTableHeader";
import { useQuery } from "@apollo/client";
import { GET_MEMBERS } from "@/graphql/queries";
import {
  Member,
  MemberVerificationStatus,
  MemberStatus,
  GetMembersQuery,
  GetMembersQueryVariables,
} from "@/graphql/generated/graphql";
import { TypedDocumentNode } from "@graphql-typed-document-node/core";
import { AppTablePagination } from "./AppTablePagination";
import { EmptySection } from "../ui/EmptySection";
import { AppSkeletonLoader } from "./AppSkeletonLoader";
import { useMemberStore } from "@/lib/store";

export const columns: ColumnDef<Member>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => (
      <div className="capitalize" style={{ color: '#FBBD2C' }}>{row.getValue("name")}</div>
    ),
    size: 180,
  },
  {
    accessorKey: "verificationStatus",
    header: "Verification Status",
    cell: ({ row }) => {
      const status = row.getValue(
        "verificationStatus"
      ) as MemberVerificationStatus;
      const variant =
        status === MemberVerificationStatus.Verified
          ? "Verified"
          : status === MemberVerificationStatus.Unverified
          ? "Unverified"
          : "Pending";
      return <Badge variant={variant}>{status}</Badge>;
    },
    size: 150,
  },

  {
    accessorKey: "wallet.balance",
    header: "Balance",
    cell: ({ row }) => {
      const numBalance = Number(row.original.wallet?.balance);
      return <div style={{ color: '#475467' }}>{numBalance ? numBalance.toLocaleString("en-US") : "-"}</div>;
    },
  },
  {
    accessorKey: "emailAddress",
    header: "Email Address",
    cell: ({ row }) => (
      <div className="lowercase" style={{ color: '#475467' }}>{row.getValue("emailAddress") || "-"}</div>
    ),
    size: 200,
  },
  {
    accessorKey: "mobileNumber",
    header: "Mobile Number",
    cell: ({ row }) => {
      const raw = row.getValue("mobileNumber") as string | undefined;
      if (!raw) return <div style={{ color: '#475467' }}>-</div>;
      const cleaned = raw.replace(/\D/g, "");
      let formatted = raw;
      // Try to match +CC (AAA) BBB CCC
      // Assume country code is 1-3 digits, then 3, then 3, then 3
      const match = cleaned.match(/^(\d{1,3})(\d{3})(\d{3})(\d{3})$/);
      if (match) {
        formatted = `+${match[1]} (${match[2]}) ${match[3]} ${match[4]}`;
      } else {
        // fallback: show as is
        formatted = raw;
      }
      return <div style={{ color: '#475467' }}>{formatted}</div>;
    },
    size: 150,
  },
  {
    accessorKey: "domain",
    header: "Domain",
    cell: ({ row }) => {
      const domain = row.getValue("domain") as string | undefined;
      if (!domain) return <div style={{ color: '#475467' }}>-</div>;
      const url = domain.startsWith("http") ? domain : `https://${domain}`;
      return (
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          style={{ color: '#475467' }}
        >
          {url}
        </a>
      );
    },
    size: 200,
  },
  {
    accessorKey: "dateTimeCreated",
    header: "Date Registered",
    cell: ({ row }) => {
      const date = new Date(row.getValue("dateTimeCreated"));
      const formattedDate = date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      });
      return <div style={{ color: '#475467' }}>{formattedDate}</div>;
    },
    size: 200,
  },
  {
    accessorKey: "dateTimeLastActive",
    header: "Date Time Last Active",
    cell: ({ row }) => {
      const dateTimeLastActive = row.getValue("dateTimeLastActive") as
        | string
        | null;
      if (!dateTimeLastActive) return <div style={{ color: '#475467' }}>-</div>;
      const date = new Date(dateTimeLastActive);
      const formattedDate = date.toLocaleString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      });
      return <div style={{ color: '#475467' }}>{formattedDate}</div>;
    },
    size: 200,
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      const status = row.getValue("status") as MemberStatus;
      const variant =
        status === MemberStatus.Active
          ? "Active"
          : status === MemberStatus.Blacklisted
          ? "BlackListed"
          : "Disabled";
      return <StatusBadge variant={variant}>{status}</StatusBadge>;
    },
    size: 120,
  },
];

export function AppTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [rowSelection, setRowSelection] = React.useState({});
  const [pageSize, setPageSize] = React.useState(10);
  const [cursorHistory, setCursorHistory] = React.useState<
    (string | undefined)[]
  >([undefined]);
  const [currentPageIndex, setCurrentPageIndex] = React.useState(0);
  const {
    selectedMembers,
    dateRange,
    dateRangeCreated,
    verificationStatus,
    status,
  } = useMemberStore();

  const filter: any = {};

  if (selectedMembers && selectedMembers.length > 0) {
    filter.id = { in: selectedMembers.map((m) => m.id) };
  }

  if (dateRange.startDate && dateRange.endDate) {
    filter.dateTimeLastActive = {
      greaterThanOrEqual: dateRange.startDate.toISOString(),
      lesserThan: dateRange.endDate.toISOString(),
    };
  }

  if (dateRangeCreated.startDate && dateRangeCreated.endDate) {
    filter.dateTimeCreated = {
      greaterThanOrEqual: dateRangeCreated.startDate.toISOString(),
      lesserThan: dateRangeCreated.endDate.toISOString(),
    };
  }

  if (verificationStatus) {
    filter.verificationStatus = { equal: verificationStatus };
  }

  if (status) {
    filter.status = { equal: status };
  }

  const { data, loading, error, refetch } = useQuery<
    GetMembersQuery,
    GetMembersQueryVariables
  >(
    GET_MEMBERS as TypedDocumentNode<GetMembersQuery, GetMembersQueryVariables>,
    {
      variables: { first: pageSize, filter },
      notifyOnNetworkStatusChange: true,
    }
  );

  const tableData = React.useMemo(
    () => (data?.members?.edges?.map((edge) => edge.node) as Member[]) ?? [],
    [data]
  );

  const pageInfo = React.useMemo(() => data?.members?.pageInfo, [data]);

  const table = useReactTable({
    data: tableData,
    columns,
    onSortingChange: setSorting,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    onRowSelectionChange: setRowSelection,
    manualPagination: true,
    pageCount: -1,
    state: {
      sorting,
      rowSelection,
    },
  });

  const handleNextPage = () => {
    if (pageInfo?.hasNextPage) {
      const nextCursor = pageInfo.endCursor;
      refetch({ first: pageSize, after: nextCursor });

      if (currentPageIndex === cursorHistory.length - 1) {
        setCursorHistory([...cursorHistory, nextCursor]);
      }
      setCurrentPageIndex(currentPageIndex + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPageIndex > 0) {
      const prevPageIndex = currentPageIndex - 1;
      const prevPageCursor = cursorHistory[prevPageIndex];
      refetch({ first: pageSize, after: prevPageCursor });
      setCurrentPageIndex(prevPageIndex);
    }
  };

  const handlePageSizeChange = (newPageSize: number) => {
    setPageSize(newPageSize);
    refetch({ first: newPageSize, after: undefined });
    setCursorHistory([undefined]);
    setCurrentPageIndex(0);
  };

  if (loading && !data) {
    return (
      <div className="w-full">
        <div className="rounded-md border">
          <Table>
            <AppTableHeader table={table} />
            <TableBody>
              <AppSkeletonLoader columns={columns} />
            </TableBody>
          </Table>
        </div>
      </div>
    );
  }

  if (error)
    return (
      <EmptySection title="An error occurred" description={error.message} />
    );

  const canPreviousPage = currentPageIndex > 0;
  const canNextPage =
    currentPageIndex < cursorHistory.length - 1 ||
    (pageInfo?.hasNextPage ?? false);

  return (
    <div className="w-full">
      <div className="rounded-md border">
        <Table>
          <AppTableHeader table={table} />
          <AppTableBody table={table} columns={columns} />
        </Table>
      </div>
      <div className="flex items-center justify-end space-x-2 py-4">
        <AppTablePagination
          pageSize={pageSize}
          setPageSize={handlePageSizeChange}
          previousPage={handlePreviousPage}
          nextPage={handleNextPage}
          canPreviousPage={canPreviousPage}
          canNextPage={canNextPage}
        />
      </div>
    </div>
  );
}
