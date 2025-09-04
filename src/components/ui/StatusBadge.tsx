import * as React from "react"
import { type VariantProps, cva } from "class-variance-authority"
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
} from "lucide-react"

import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-sm font-medium",
  {
    variants: {
      variant: {
        Active:
          "border-transparent bg-green-500/20 text-green-500",
        BlackListed: "border-transparent bg-red-500/20 text-red-500",
        Disabled:
          "border-transparent bg-gray-500/20 text-gray-500",
      },
    },
    defaultVariants: {
      variant: "Active",
    },
  }
)

const iconVariants = {
  Active: CheckCircle2,
  BlackListed: AlertCircle,
  Disabled: XCircle,
}

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function StatusBadge({ className, variant, children, ...props }: BadgeProps) {
  if (!variant) {
    return null
  }
  const Icon = iconVariants[variant]

  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props}>
      <Icon className="mr-2 h-4 w-4" />
      {children}
    </div>
  )
}

export { StatusBadge } 