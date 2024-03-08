import Banner from "@/components/Banner";
import Image from "next/image";
import CrisisSection from "@/components/CrisisSection";
import DigitalPR from "@/components/DigitalPR";
import MediaRelations from "@/components/MediaRelations";
import ServiceCard from "@/components/ServiceCard";
import Sustainability from "@/components/Sustainability";

export default function Home() {
  return (
    <main className="flex flex-col space-y-20">
      <Banner />
      <ServiceCard />
    </main>
  );
}
