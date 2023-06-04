import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";

interface ParagraphProps extends HTMLAttributes<HTMLParagraphElement> {}

const Paragraph = forwardRef<HTMLParagraphElement, ParagraphProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <p ref={ref} {...props} className={cn("text-center text-gray-500 text-base", className)}>
        {children}
      </p>
    );
  }
);

Paragraph.displayName = "Paragraph";

export default Paragraph;
