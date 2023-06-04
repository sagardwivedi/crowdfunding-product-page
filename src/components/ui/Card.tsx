import { cn } from "@/lib/utils";
import { FC, HTMLAttributes } from "react";

interface CardProps extends HTMLAttributes<HTMLDivElement> {}

const Card: FC<CardProps> = ({ children, className, ...props }) => {
  return (
    <div {...props} className={cn("rounded-2xl border bg-white", className)}>
      {children}
    </div>
  );
};

export default Card;
