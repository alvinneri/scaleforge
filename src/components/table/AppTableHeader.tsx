import { flexRender, type Table as ReactTable } from "@tanstack/react-table"

import { TableHead, TableHeader, TableRow } from "@/components/ui/table"

interface AppTableHeaderProps<TData> {
  table: ReactTable<TData>
}

export function AppTableHeader<TData>({ table }: AppTableHeaderProps<TData>) {
  return (
    <TableHeader style={{ backgroundColor: '#0C1820' }}>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id}>
          {headerGroup.headers.map((header) => {
            return (
              <TableHead
                key={header.id}
                style={{
                  width: header.getSize(),
                  backgroundColor: '#0C1820',
                  color: '#667085'
                }}
              >
                {header.isPlaceholder
                  ? null
                  : flexRender(
                      header.column.columnDef.header,
                      header.getContext()
                    )}
              </TableHead>
            )
          })}
        </TableRow>
      ))}
    </TableHeader>
  )
} 