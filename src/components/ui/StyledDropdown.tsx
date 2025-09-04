import { DropdownMenuContent } from "@/components/ui/dropdown-menu";
import { COLORS } from "@/constants/colors";
import { forwardRef } from "react";

interface StyledDropdownProps extends React.ComponentProps<typeof DropdownMenuContent> {}

export const StyledDropdown = forwardRef<HTMLDivElement, StyledDropdownProps>(
  ({ style, ...props }, ref) => {
    const baseStyle = {
      backgroundColor: COLORS.background,
      border: `1px solid ${COLORS.border}`,
      color: COLORS.text,
      ...style
    };

    return (
      <DropdownMenuContent
        ref={ref}
        style={baseStyle}
        {...props}
      />
    );
  }
);

StyledDropdown.displayName = "StyledDropdown";