import statistics from "@/lib/stats";
import Card from "@/ui/Card";
import Heading from "@/ui/Heading";
import Paragraph from "@/ui/Paragraph";

const StatsCard = () => {
  const { amount, backers, days_left } = statistics();

  const progress = (amount / 100000) * 100;

  return (
    <Card className="py-8">
      <div className="flex items-center justify-center flex-col space-y-5">
        <div className="flex max-md:divide-y-2 md:divide-x-2">
          <div>
            <Heading>${amount.toLocaleString()}</Heading>
            <Paragraph>of $100,000 backed</Paragraph>
          </div>
          <div>
            <Heading>{backers}</Heading>
            <Paragraph>total backers</Paragraph>
          </div>
          <div>
            <Heading>{days_left}</Heading>
            <Paragraph>days left</Paragraph>
          </div>
        </div>
        <progress
          className="w-[90%]"
          value={progress}
          max={100}
          color="#3CB4AC"
        />
      </div>
    </Card>
  );
};

export default StatsCard;
