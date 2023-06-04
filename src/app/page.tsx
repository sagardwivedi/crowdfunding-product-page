import AboudCard from "@/components/AboudCard";
import Header from "@/components/Header";
import StatsCard from "@/components/StatsCard";
import TopCard from "@/components/TopCard";
import Image from "next/image";

const Home = () => {
  return (
    <main className="h-screen">
      <section className="relative">
        <Header className="absolute inset-0" />
        <Image
          className="max-md:hidden"
          src={"/images/image-hero-desktop.jpg"}
          alt=""
          width={100000}
          height={100000}
          priority={true}
        />
        <Image
          className="md:hidden"
          src={"/images/image-hero-mobile.jpg"}
          alt=""
          width={100000}
          height={100000}
          priority={true}
        />
      </section>
      <section className="bg-gray-50">
        <div className="mx-auto w-[90%] max-w-3xl space-y-4 pb-16">
          <TopCard />
          <StatsCard />
          <AboudCard />
        </div>
      </section>
    </main>
  );
};

export default Home;
