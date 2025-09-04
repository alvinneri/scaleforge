"use client";
import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useQuery } from "@apollo/client";
import { GET_MEMBERS_BY_EMAIL_ADDRESS, GET_MEMBERS } from "@/graphql/queries";
import { Member as MemberType } from "@/graphql/generated/graphql";
import { FilterListItem } from "./FilterListItem";
import { useMemberStore } from "@/lib/store";
import { Member } from "@/lib/store";
import { Search } from "lucide-react";

export const EmailFilter = () => {
  const [search, setSearch] = useState("");
  const { selectedMembers } = useMemberStore();

  const { data: searchData, loading: searchLoading } = useQuery(GET_MEMBERS_BY_EMAIL_ADDRESS, {
    variables: { search: search },
    skip: !search,
  });

  const { data: initialData, loading: initialLoading } = useQuery(GET_MEMBERS, {
    skip: !!search,
  });

  const members = search
    ? searchData?.membersByEmailAddress
    : (initialData?.members?.edges?.map((edge) => edge.node) as MemberType[]);

  const loading = search ? searchLoading : initialLoading;

  return (
    <div className="flex justify-between items-center mb-4">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" style={{ backgroundColor: '#0A1117', border: '1px solid #2E2E2E', color: '#C2C2C2' }}>
            {selectedMembers.length > 0
              ? `${selectedMembers.length} selected`
              : "Search Email"}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-64 p-2" style={{ backgroundColor: '#0A1117', border: '1px solid #2E2E2E', color: '#C2C2C2' }}>
          <div className="relative">
            <Search className="absolute left-2 top-1/2 -translate-y-1/2 h-4 w-4" style={{ color: '#C2C2C2' }} />
            <Input
              placeholder="Search Email"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-8"
              style={{ backgroundColor: '#0A1117', border: '1px solid #2E2E2E', color: '#C2C2C2' }}
            />
          </div>
          <div className="mt-2 max-h-60 overflow-y-auto">
            {loading && <p className="text-center text-sm" style={{ color: '#C2C2C2' }}>Loading...</p>}
            {!loading && members && members.length > 0 &&
              members.map((member) => (
                <FilterListItem key={member.id} member={member as Member} displayValue={member.emailAddress ?? ''} />
              ))}
            {!loading && (!members || members.length === 0) && (
              <p className="text-center text-sm" style={{ color: '#C2C2C2' }}>No data</p>
            )}
          </div>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}; 