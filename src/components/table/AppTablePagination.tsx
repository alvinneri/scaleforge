import {
    ChevronLeftIcon,
    ChevronRightIcon,
  } from "@radix-ui/react-icons"
  
  import { Button } from "@/components/ui/button"
  import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"
  
  interface DataTablePaginationProps {
    pageSize: number
    setPageSize: (pageSize: number) => void
    previousPage: () => void
    nextPage: () => void
    canPreviousPage: boolean
    canNextPage: boolean
  }
  
  export function AppTablePagination({
    pageSize,
    setPageSize,
    previousPage,
    nextPage,
    canPreviousPage,
    canNextPage
  }: DataTablePaginationProps) {
    return (
      <div className="flex items-center justify-end px-2">
        <div className="flex items-center space-x-6 lg:space-x-8">
          <div className="flex items-center space-x-2">
            <Select
              value={`${pageSize}`}
              onValueChange={(value: string) => {
                setPageSize(Number(value))
              }}
            >
              <SelectTrigger className="h-10 w-[120px]" style={{ backgroundColor: '#0A1117', border: '1px solid #2E2E2E', color: '#C2C2C2' }}>
                <SelectValue placeholder={pageSize} />
              </SelectTrigger>
              <SelectContent side="top" style={{ backgroundColor: '#0A1117', border: '1px solid #2E2E2E', color: '#C2C2C2' }}>
                {[10, 20, 30, 40, 50].map((size) => (
                  <SelectItem key={size} value={`${size}`}>
                    {size} Entries
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              className="h-10 w-auto p-2"
              style={{ backgroundColor: '#0A1117', border: '1px solid #2E2E2E', color: '#C2C2C2' }}
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <ChevronLeftIcon className="h-4 w-4" />
              <span className="ml-2">Previous</span>
            </Button>
            <Button
              variant="outline"
              className="h-10 w-auto p-2"
              style={{ backgroundColor: '#0A1117', border: '1px solid #2E2E2E', color: '#C2C2C2' }}
              onClick={() => nextPage()}
              disabled={!canNextPage}
            >
                <span className="mr-2">Next</span>
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    )
  } 