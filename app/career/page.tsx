import React from "react";
import CareerComponent from "@/components/CareerComponent";
import TaglineComponent from "@/components/Tagline";
import MissingPiece from "@/components/MissingPiece";
import GetToKnow from "@/components/GetToKnow";

const careerPage = () => {
  return (
    <div>
      <CareerComponent />

      <TaglineComponent />

      <MissingPiece />

      <GetToKnow />
    </div>
  );
};

export default careerPage;
