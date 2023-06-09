import Image from "next/image";
import Heading from "@/ui/Heading";
import Paragraph from "@/ui/Paragraph";
import Button from "@/ui/Button";
import Card from "@/ui/Card";

const TopCard = () => {
  return (
    <Card className="relative -mt-16 px-4 pb-10 pt-16 md:-mt-28 md:px-16">
      <Image
        className="absolute -top-8 left-[45%] h-16 w-16"
        src={"/images/logo-mastercraft.svg"}
        alt=""
        width={100}
        height={100}
      />
      <div className="space-y-4">
        <Heading>Mastercraft Bamboo Monitor Riser</Heading>
        <Paragraph>
          A beautiful & handcrafted monitor stand to reduce neck and eye strain
        </Paragraph>
      </div>
      <div className="mt-8 flex items-center justify-center gap-x-2 md:justify-between">
        <Button>Back this project</Button>
        <Button
          variant={"ghost"}
          size={"no"}
          className="inline-flex items-center"
        >
          <Image
            className="h-full w-full"
            src={"/images/icon-bookmark.svg"}
            alt=""
            width={100}
            height={100}
          />
          <span className="px-4 max-md:hidden">Bookmark</span>
        </Button>
      </div>
    </Card>
  );
};

export default TopCard;
