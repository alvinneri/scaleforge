import { Skeleton } from "@/components/ui/skeleton";
import { TableCell, TableRow } from "@/components/ui/table";
import { type ColumnDef } from "@tanstack/react-table";

interface AppSkeletonLoaderProps<TData> {
  columns: ColumnDef<TData>[];
  rows?: number;
}

export function AppSkeletonLoader<TData>({
  columns,
  rows = 10,
}: AppSkeletonLoaderProps<TData>) {
  return (
    <>
      {Array.from({ length: rows }).map((_, rowIndex) => (
        <TableRow key={rowIndex}>
          {columns.map((column, colIndex) => (
            <TableCell key={colIndex}>
              <Skeleton className="h-6 w-full" style={{ backgroundColor: '#2E2E2E' }} />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </>
  );
} 