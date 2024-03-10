import Homepage from "@/components/Homepage";
import Banner from "@/components/Banner";
import ServiceCard from "@/components/ServiceCard";
export default function Home() {
  return (
    <main className="flex flex-col space-y-20">
      <Banner />
      <ServiceCard />
      <div>
        <Homepage />
      </div>
    </main>
  );
}
