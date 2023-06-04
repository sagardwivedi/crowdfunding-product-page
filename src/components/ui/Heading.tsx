import { cn } from "@/lib/utils";
import { ButtonHTMLAttributes, forwardRef } from "react";

interface HeadingProps extends ButtonHTMLAttributes<HTMLHeadingElement> {}

const Heading = forwardRef<HTMLHeadingElement, HeadingProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <h1
        ref={ref}
        {...props}
        className={cn("text-3xl font-bold text-black antialiased text-center", className)}
      >
        {children}
      </h1>
    );
  }
);

Heading.displayName = "Heading";

export default Heading;
