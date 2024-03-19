import Banner from "@/components/Banner";
import CareerSection from "@/components/CareerSection";
import HumansSection from "@/components/HumansSection";
import ServiceCard from "@/components/ServiceCard";
import React from "react";

const Page = () => {
  return (
    <div>
      <Banner />

      <ServiceCard />

      <HumansSection />

      <CareerSection />
    </div>
  );
};

export default Page;
