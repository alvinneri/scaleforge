import {
  type ColumnDef,
  flexRender,
  type Table as ReactTable,
} from "@tanstack/react-table"

import {
  TableBody,
  TableCell,
  TableRow,
} from "@/components/ui/table"

interface AppTableBodyProps<TData> {
  table: ReactTable<TData>
  columns: ColumnDef<TData>[]
}

export function AppTableBody<TData>({
  table,
  columns,
}: AppTableBodyProps<TData>) {
  return (
    <TableBody>
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row) => (
          <TableRow
            key={row.id}
            data-state={row.getIsSelected() && "selected"}
          >
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))
      ) : (
        <TableRow>
          <TableCell colSpan={columns.length} className="h-24 text-center">
            No results.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
} 