/* eslint-disable react/no-unescaped-entities */
import ContactForm from "@/components/ContactForm";
import React from "react";

const Page = () => {
  return (
    <section className="max-w-screen-xxl w-full mx-auto">
      <div className="bg-custom-black lg:px-20 px-6 lg:py-[110px] py-20 flex flex-col lg:flex-row lg:gap-32 gap-20 justify-between">
        <div className="py-11 lg:w-2/3 w-full">
          <div className="text-custom-white">
            <h2 className="text-56xl leading-12 font-bold">
              Welcome to our contact hub! Connect with Us.
            </h2>
            <p className="mt-10 text-xl leading-8">
              We're just a message away from answering your queries, addressing
              your concerns, or simply engaging in a conversation. Send us a
              message, and we'll get back to you soon!
            </p>
          </div>
        </div>

        <div className="lg:w-[453px] w-full min-h-[460px] rounded-2xl bg-custom-lightgray"></div>
      </div>

      <ContactForm />
    </section>
  );
};

export default Page;
