import { Button } from "@/components/ui/button";
import { COLORS } from "@/constants/colors";
import { forwardRef } from "react";

interface StyledButtonProps extends React.ComponentProps<typeof Button> {
  variant?: 'outline' | 'ghost' | 'default';
}

export const StyledButton = forwardRef<HTMLButtonElement, StyledButtonProps>(
  ({ variant = 'outline', style, className, ...props }, ref) => {
    const baseStyle = {
      backgroundColor: COLORS.background,
      border: `1px solid ${COLORS.border}`,
      color: COLORS.text,
      ...style
    };

    const hoverClass = variant === 'ghost' 
      ? 'hover:bg-[#FBBD2D] hover:text-[#0A1117]' 
      : '';

    return (
      <Button
        ref={ref}
        variant={variant}
        style={baseStyle}
        className={`${className} ${hoverClass}`}
        {...props}
      />
    );
  }
);

StyledButton.displayName = "StyledButton";