/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";

const Page = () => {
  return (
    <div className="max-w-screen-xxl w-full mx-auto">
      <section className="flex flex-col items-center px-6 py-10 lg:p-32xl">
        <div className="flex flex-col text-center mb-6 lg:mb-16  ">
          <h1 className="text-3xl font-bold lg:leading-12 lg:text-64xl">
            We are driven to offer first-rate solutions to our clients
          </h1>
          <p className="text-lg mt-3 lg:text-2xl lg:mt-6">
            From advisory to execution we deliver distinctive and creative
            services that add value and
          </p>
        </div>

        <div className="w-full h-[540px] bg-custom-lightgray rounded-2xl">
          {/* <Image
          src="/assets/svg/bigFrame.svg"
          width="1280"
          height="540"
          alt="Showcase"
        /> */}
        </div>
      </section>

      <section className="bg-custom-white px-6 py-30xl lg:px-32xl lg:py-40xl">
        <div className="flex flex-col gap-5 mb-8 lg:flex-row lg:mb-16 lg:items-center lg:gap-10">
          {/* <Image
            src="/assets/svg/sideFrame.svg"
            width="480"
            height="600"
            alt="Corporate Communication"
          /> */}
          <div className="w-full lg:w-1/2 lg:h-[600px] h-[500px] bg-custom-lightgray rounded-2xl"></div>

          <div className="flex content-center flex-col gap-4 lg:gap-10 w-full lg:w-1/2">
            <div className="text-custom-darkblue text-2xl lg:text-4xl font-bold">
              Corporate communications and strategic advisory
            </div>
            <div className="text-custom-lightgray">
              To achieve market success in the evolving landscape, business
              leaders trust us to be their eyes and ears as they navigate
              challenges unique to their various industries. We serve as
              objective truth-sayers who are an insight away from leading
              clients to effective solutions. With access to industry experts
              from diverse backgrounds, we work alongside clients seeking
              corporate communications and strategic advisory to offer
              communication strategies, stakeholder engagement roadmaps, as well
              as tailored advisory on industry trends that keep our client's
              competitive edge sharp and precise. <br />
              <br />
              Our capabilities <br /> - Stakeholder engagement strategy <br />-
              Corporate positioning and narrative development <br />-
              Communications planning <br />- Media intelligence and reporting
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 items-center ">
              <div className="border border-custom-black px-4 py-2 lg:px-6 lg:py-3 rounded-lg">
                <Link href="#" className="text-sm">
                  Explore our case studies
                </Link>
              </div>
              <div className="underline">
                <Link href="#">Let's work with you</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mb-8 lg:flex-row lg:mb-16 lg:items-center lg:gap-10">
          {/* <Image
            src="/assets/svg/sideFrame.svg"
            width="480"
            height="600"
            alt="Crisis Management"
          /> */}
          <div className="w-full lg:w-1/2 lg:h-[600px] h-[500px] bg-custom-lightgray rounded-2xl"></div>

          <div className="flex content-center flex-col gap-4 lg:gap-10 w-full lg:w-1/2">
            <div className="text-custom-darkblue text-2xl lg:text-4xl font-bold">
              Crisis Management
            </div>
            <div className="text-custom-lightgray">
              Our belief is simple: the best crisis is the one that never
              occurs. We stand side by side with our clients and work tirelessly
              to prepare, predict, pivot, and respond swiftly before issues
              escalate into crises - and beyond. Using our proprietary
              vulnerability assessment framework for crisis management, we
              support companies in managing their reputations and market
              positions with strategic counsel and comprehensive crises
              mitigation strategies that mitigate repercussions. <br />
              <br />
              Our capabilities <br />- Reputation management <br />-
              Vulnerability assessment and strategic counsel <br />- Risk
              response strategy and execution <br />- Crisis mitigation mapping
              <br />- Community management
              <br />- Montoring and intelligence
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 items-center ">
              <div className="border border-custom-black px-4 py-2 lg:px-6 lg:py-3 rounded-lg">
                <Link href="#" className="text-sm">
                  Explore our case studies
                </Link>
              </div>
              <div className="underline">
                <Link href="#">Let's work with you</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mb-8 lg:flex-row lg:mb-16 lg:items-center lg:gap-10">
          {/* <Image
            src="/assets/svg/sideFrame.svg"
            width="480"
            height="600"
            alt="Media Relations"
          /> */}
          <div className="w-full lg:w-1/2 lg:h-[600px] h-[500px] bg-custom-lightgray rounded-2xl"></div>

          <div className="flex content-center flex-col gap-4 lg:gap-10 w-full lg:w-1/2">
            <div className="text-custom-darkblue text-2xl lg:text-4xl font-bold">
              Media Relations
            </div>
            <div className="text-custom-lightgray">
              Our commitment extends beyond coverage and media placements, we
              amplify infuence and create opportunities for impact. We equip our
              clients with the indispensable tools needed to thrive in today's
              media landscape as thought leaders. Our team of media specialists
              design and execute bespoke media campaigns to raise the position
              and core messages of each client. With us, your brand is not just
              seen; it's celebrated.
              <br />
              <br />
              Our capabilities <br />- Thought leadershp and positioning <br />-
              Media training <br />- Listening and analytics <br />- Event
              management
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 items-center ">
              <div className="border border-custom-black px-4 py-2 lg:px-6 lg:py-3 rounded-lg">
                <Link href="#" className="text-sm">
                  Explore our case studies
                </Link>
              </div>
              <div className="underline">
                <Link href="#">Let's work with you</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mb-8 lg:flex-row lg:mb-16 lg:items-center lg:gap-10">
          {/* <Image
            src="/assets/svg/sideFrame.svg"
            width="480"
            height="600"
            alt="Sustainability and Impact"
          /> */}
          <div className="w-full lg:w-1/2 lg:h-[600px] h-[500px] bg-custom-lightgray rounded-2xl"></div>

          <div className="flex content-center flex-col gap-4 lg:gap-10 w-full lg:w-1/2">
            <div className="text-custom-darkblue text-2xl lg:text-4xl font-bold">
              Sustainability and impact advisory
            </div>
            <div className="text-custom-lightgray">
              Purpose is at the center of what we do - and we help our clients
              live out theirs to the fullest as well. We thrive at supporting
              clients integrate sustainable practices that deepen their impact
              and opportunities to connect with their partners and the
              communities they serve. Through strategic alliances, grassroots
              initiatives, advocacy campaigns, and deft impact advisory, we
              support our clients in authentically delivering on their promises
              and benchmarks
              <br />
              <br />
              Our capabilities <br />- Investor relations <br />- Policy
              research and advisory
              <br />- Benchmark reporting
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 items-center ">
              <div className="border border-custom-black px-4 py-2 lg:px-6 lg:py-3 rounded-lg">
                <Link href="#" className="text-sm">
                  Explore our case studies
                </Link>
              </div>
              <div className="underline">
                <Link href="#">Let's work with you</Link>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-5 mb-8 lg:flex-row lg:mb-16 lg:items-center lg:gap-10">
          {/* <Image
            src="/assets/svg/sideFrame.svg"
            width="480"
            height="600"
            alt="Digital PR"
          /> */}
          <div className="w-full lg:w-1/2 lg:h-[600px] h-[500px] bg-custom-lightgray rounded-2xl"></div>

          <div className="flex content-center flex-col gap-4 lg:gap-10 w-full lg:w-1/2">
            <div className="text-custom-darkblue text-2xl lg:text-4xl font-bold">
              Digital PR
            </div>
            <div className="text-lightgray">
              Our digital world is driven by influence and authenticity. From
              the content creation to building engagement, we work with our
              clients to curate digital experiences and stories that expand
              influence and market their businesses authentically. Across
              channels and audiences, we drive conversations around our clients'
              products, services, activities, and more to boost their digital
              presence and brand affinity.
              <br />
              <br />
              Our capabilities <br />- Digital media engagement strategy <br />-
              Influencer relations <br />- Brand marketing <br />- Digital
              storytelling and amplification <br />- Content creation and
              planning <br />- SEO advisory <br />- Listening and analytics{" "}
            </div>
            <div className="flex flex-col lg:flex-row lg:gap-8 gap-4 items-center ">
              <div className="border border-custom-black px-4 py-2 lg:px-6 lg:py-3 rounded-lg">
                <Link href="#" className="text-sm">
                  Explore our case studies
                </Link>
              </div>
              <div className="underline">
                <Link href="#">Let's work with you</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-custom-black px-6 py-30xl text-white lg:px-32xl lg:py-40xl">
        <div className="flex flex-col items-center">
          <div className="border w-auto border-white px-4 py-2 rounded-lg">
            <Link href="#">Our Team</Link>
          </div>
          <h1 className="text-3xl lg:text-46xl font-bold">
            Meet the Humans of Quadrant MSL
          </h1>
          <p className="color-custom-white text-xs lg:text-base">
            We know great work begins with great people and we’ve got the
            industry’s best.{" "}
          </p>
        </div>
        <div className="flex gap-10 flex-col lg:flex-row lg:justify-between mt-16">
          <div className="w-full lg:w-1/3">
            {/* <Image
              src="/assets/svg/frame.svg"
              width="350"
              height="440"
              alt="Profile Picture"
              className=" mb-4"
            /> */}
            <div className="w-full h-[440px] bg-custom-lightgray rounded-2xl mb-4"></div>

            <h3 className="text-2xl">Firstname Lastname</h3>
            <p className="text-lg">Position</p>
          </div>

          <div className="w-full lg:w-1/3">
            {/* <Image
              src="/assets/svg/frame.svg"
              width="350"
              height="440"
              alt="Profile Picture"
              className=" mb-4"
            /> */}
            <div className="w-full h-[440px] bg-custom-lightgray rounded-2xl mb-4"></div>

            <h3 className="text-2xl">Firstname Lastname</h3>
            <p className="text-lg">Position</p>
          </div>

          <div className="w-full lg:w-1/3">
            {/* <Image
              src="/assets/svg/frame.svg"
              width="350"
              height="440"
              alt="Profile Picture"
              className=" mb-4"
            /> */}
            <div className="w-full h-[440px] bg-custom-lightgray rounded-2xl mb-4"></div>

            <h3 className="text-2xl">Firstname Lastname</h3>
            <p className="text-lg">Position</p>
          </div>
        </div>

        <div className="lex gap-10 flex-col lg:flex-row lg:justify-between mt-16">
          <div className="w-full lg:w-1/3">
            {/* <Image
              src="/assets/svg/frame.svg"
              width="350"
              height="440"
              alt="Profile Picture"
              className=" mb-4"
            /> */}

            <div className="w-full h-[440px] bg-custom-lightgray rounded-2xl mb-4"></div>

            <h3 className="text-2xl">Firstname Lastname</h3>
            <p className="text-lg">Position</p>
          </div>

          <div className="w-full lg:w-1/3">
            {/* <Image
              src="/assets/svg/frame.svg"
              width="350"
              height="440"
              alt="Profile Picture"
              className=" mb-4"
            /> */}
            <div className="w-full h-[440px] bg-custom-lightgray rounded-2xl mb-4"></div>

            <h3 className="text-2xl">Firstname Lastname</h3>
            <p className="text-lg">Position</p>
          </div>
          <div className="w-full lg:w-1/3">
            {/* <Image
              src="/assets/svg/frame.svg"
              width="350"
              height="440"
              alt="Profile Picture"
              className=" mb-4"
            /> */}
            <div className="w-full h-[440px] bg-custom-lightgray rounded-2xl mb-4"></div>

            <h3 className="text-2xl">Firstname Lastname</h3>
            <p className="text-lg">Position</p>
          </div>
        </div>
      </section>

      <section className="bg-custom-white px-6 py-30xl lg:px-30xl lg:py-40xl flex justify-center align-middle">
        <p className="text-2xl leading-10 lg:text-5xl lg:leading-12">
          Our tool box is a Swiss Army Knife and more <br />
          We distill and transform your communication needs into opportunities
          to build/unlock your impact and influence.
          <br />
          Our expertise covers Our tool box is a Swiss Army Knife and more
        </p>
      </section>
    </div>
  );
};

export default Page;
