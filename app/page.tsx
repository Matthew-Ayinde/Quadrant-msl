import Image from "next/image";
import Banner from "@/components/Banner";
import ServiceCard from "@/components/ServiceCard";
export default function Home() {
  return (
    <main className="flex flex-col space-y-20">
      <Banner />
      <ServiceCard />
    </main>
  );
}
