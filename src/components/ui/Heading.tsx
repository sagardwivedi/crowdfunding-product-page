import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const headingVariants = cva("text-3xl font-bold text-black antiliased", {
  variants: {
    align: {
      start: "text-start",
      center: "text-center",
    },
    size: {
      lg: "text-3xl",
      md: "text-2xl",
      sm: "text-xl",
    },
  },
  defaultVariants: {
    align: "center",
    size: "lg",
  },
});

interface HeadingProps
  extends ButtonHTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, align, size, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn(headingVariants({ align, size, className }))}
      >
        {children}
      </h1>
    );
  }
);

Heading.displayName = "Heading";

export default Heading;
