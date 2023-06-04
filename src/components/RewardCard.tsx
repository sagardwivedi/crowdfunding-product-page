import { FC } from "react";
import Card from "@/ui/Card";
import Paragraph from "@/ui/Paragraph";
import Heading from "@/ui/Heading";
import Button from "@/ui/Button";
import { cn } from "@/lib/utils";

export interface RewardCardProps {
  title: string;
  text: string;
  pledgeAmount: number;
  leftNumber: number;
}

const RewardCard: FC<RewardCardProps> = ({
  leftNumber,
  pledgeAmount,
  text,
  title,
}) => {
  return (
    <Card
      className={cn(
        "space-y-5 rounded-lg px-4 py-6",
        leftNumber === 0 ? "bg-dark_gray/5" : "hover:border-moderate_cyan"
      )}
    >
      <div className="flex justify-between max-md:flex-col md:items-center">
        <Heading
          className={leftNumber === 0 ? "text-dark_gray" : ""}
          size={"sm"}
          align={"start"}
        >
          {title}
        </Heading>
        <Paragraph
          className={cn(
            "font-bold text-start",
            leftNumber === 0 ? "text-moderate_cyan/50" : "text-moderate_cyan"
          )}
        >
          Pledge ${pledgeAmount} or more
        </Paragraph>
      </div>
      <Paragraph
        className={cn(
          "text-start leading-relaxed",
          leftNumber === 0 && "text-gray-300"
        )}
      >
        {text}
      </Paragraph>
      <div className="flex max-md:flex-col md:items-center justify-between">
        <div className="flex items-center md:justify-center gap-x-2">
          <Heading className={leftNumber === 0 ? "text-dark_gray" : ""}>
            {leftNumber}
          </Heading>
          <Paragraph>left</Paragraph>
        </div>
        <Button
          variant={leftNumber === 0 ? "disabled" : "default"}
          disabled={leftNumber === 0 ? true : false}
        >
          Select Reward
        </Button>
      </div>
    </Card>
  );
};

export default RewardCard;
