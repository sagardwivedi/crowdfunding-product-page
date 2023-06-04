import { cn } from "@/lib/utils";
import { VariantProps, cva } from "class-variance-authority";
import { ButtonHTMLAttributes, forwardRef } from "react";

const buttonVariants = cva(
  "rounded-full bg-moderate_cyan text-white font-bold antialiased",
  {
    variants: {
      variant: {
        default: "hover:bg-cyan/80 active:bg-cyan",
        ghost: "bg-gray-300 text-gray-500",
        disabled: "bg-dark_gray",
      },
      size: {
        lg: "px-14 py-4",
        md: "px-4 py-2",
        sm: "px-2 py-1",
        no: "",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  }
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        {...props}
        className={cn(buttonVariants({ variant, className, size }))}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export default Button;
