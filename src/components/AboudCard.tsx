import Card from "@/ui/Card";
import Heading from "@/ui/Heading";
import Paragraph from "@/ui/Paragraph";
import RewardCard, { RewardCardProps } from "./RewardCard";

const CardData: RewardCardProps[] = [
  {
    leftNumber: 101,
    pledgeAmount: 25,
    text: "You get an ergonomic stand made of natural bamboo. You've helped us launch our promotional campaign, and you'll be added to a special Backer member list.",
    title: "Bamboo Stand",
  },
  {
    leftNumber: 64,
    pledgeAmount: 75,
    text: "You get a Black Special Edition computer stand and a personal thank you. You’ll be added to our Backer member list. Shipping is included.",
    title: "Black Edition Stand",
  },
  {
    leftNumber: 0,
    pledgeAmount: 200,
    text: "You get two Special Edition Mahogany stands, a Backer T-Shirt, and a personal thank you. You'll be added to our Backer member list. Shipping is included.",
    title: "Mahogany Special Edition",
  },
];

const AboudCard = () => {
  return (
    <Card className="p-6 md:p-10">
      <div className="space-y-8">
        <Heading className="text-start text-lg ">About this project</Heading>
        <Paragraph className="text-start tracking-wide">
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </Paragraph>
        <Paragraph className="text-start tracking-wide">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </Paragraph>
      </div>
      <div className="space-y-4 py-8">
        {CardData.map((data) => (
          <RewardCard key={data.title} {...data} />
        ))}
      </div>
    </Card>
  );
};

export default AboudCard;
