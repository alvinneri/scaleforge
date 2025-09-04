import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium",
  {
    variants: {
      variant: {
        Verified: "border-green-500 text-green-500",
        Unverified: "border-red-500 text-red-500",
        Pending: "border-orange-500 text-orange-500",
      },
    },
  }
)

const badgeDotVariants = cva("h-2 w-2 mr-2 rounded-full", {
  variants: {
    variant: {
      Verified: "bg-green-500",
      Unverified: "bg-red-500",
      Pending: "bg-orange-500",
    },
  },
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, children, ...props }: BadgeProps) {
  if (!variant) {
    return null
  }

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      <div className={cn(badgeDotVariants({ variant }))} />
      {children}
    </div>
  )
}

export { Badge } 