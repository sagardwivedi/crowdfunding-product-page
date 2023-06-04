import Card from "@/ui/Card";
import Heading from "@/ui/Heading";
import Paragraph from "@/ui/Paragraph";

const AboudCard = () => {
  return (
    <Card className="p-10">
      <div className="space-y-8">
        <Heading className="text-start text-lg ">About this project</Heading>
        <Paragraph className="text-start -tracking-wider">
          {" "}
          The Mastercraft Bamboo Monitor Riser is a sturdy and stylish platform
          that elevates your screen to a more comfortable viewing height.
          Placing your monitor at eye level has the potential to improve your
          posture and make you more comfortable while at work, helping you stay
          focused on the task at hand.
        </Paragraph>
        <Paragraph className="text-start -tracking-wider">
          Featuring artisan craftsmanship, the simplicity of design creates
          extra desk space below your computer to allow notepads, pens, and USB
          sticks to be stored under the stand.
        </Paragraph>
      </div>
    </Card>
  );
};

export default AboudCard;
