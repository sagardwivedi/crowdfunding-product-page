import statistics from "@/lib/stats";
import Card from "@/ui/Card";
import Heading from "./ui/Heading";
import Paragraph from "./ui/Paragraph";

const StatsCard = () => {
  const { amount, backers, days_left } = statistics();
  return (
    <Card className="p-10">
      <div className="space-y-5">
        <div className="flex divide-x">
          <div className="pr-16">
            <Heading>${amount.toLocaleString()}</Heading>{" "}
            <Paragraph>of $100000 backed</Paragraph>
          </div>
          <div className="px-16">
            {" "}
            <Heading>{backers.toLocaleString()}</Heading>{" "}
            <Paragraph>total backers</Paragraph>
          </div>
          <div className="px-16">
            {" "}
            <Heading>{days_left}</Heading> <Paragraph>days left</Paragraph>
          </div>
        </div>
        <div className="h-5 w-full rounded-full bg-gray-100"></div>
      </div>
    </Card>
  );
};

export default StatsCard;
