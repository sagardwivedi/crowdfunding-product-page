import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva("rounded-full font-bold antialiased", {
  variants: {
    variant: {
      default:
        "bg-moderate_cyan px-8 py-4 text-white hover:bg-cyan/80 active:bg-cyan",
      ghost: "bg-gray-300 text-gray-500",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(buttonVariants({ variant, className }))}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
