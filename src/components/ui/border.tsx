import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const borderedVariants = cva(
  "inline-flex items-center rounded-md border-2 px-2.5 py-.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        default: "border-primary",
        secondary: "border-secondary",
        destructive: "border-destructive",
        outline: "border-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface BorderedDivProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof borderedVariants> {}

function BorderedDiv({ className, variant, ...props }: BorderedDivProps) {
  return (
    <div className={cn(borderedVariants({ variant }), className)} {...props} />
  );
}

export { BorderedDiv, borderedVariants };
