import React, { useState } from "react";

const Section3 = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="md:w-[80%] w-[90%] m-auto py-[120px]">
      <h1 className="text-white md:text-[58px] text-[28px]">
        <span className="text-[#CAFF33]">Frequently</span> Asked Questions
      </h1>

      <p className="text-[#B3B3B3] mt-3">
        Still you have any questions? Contact our Team via
        support@yourbank.com
      </p>

      <div className="grid md:grid-cols-2 gap-6 mt-12">
        <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="bg-[#1C1C1C] border border-[#262626] rounded-2xl md:p-8">
          <h2 className="text-white text-[20px]">
            How do I open an account with YourBank?
          </h2>

          <hr className="border-[#262626] my-6" />

          <p className="text-[#B3B3B3]">
            Opening an account with YourBank is easy. Simply visit our website
            and click on the "Open an Account" button.
          </p>
        </div>

        <div data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500" className="bg-[#1C1C1C] border border-[#262626] rounded-2xl md:p-8">
          <h2 className="text-white text-[20px]">
            What documents do I need to provide to apply for a loan?
          </h2>

          <hr className="border-[#262626] my-6" />

          <p className="text-[#B3B3B3]">
            Generally, you will need identification documents and proof of
            income for a loan application.
          </p>
        </div>

        <div data-aos="fade-right"
          data-aos-offset="300"
          data-aos-easing="ease-in-sine" className="bg-[#1C1C1C] border border-[#262626] rounded-2xl md:p-8">
          <h2 className="text-white text-[20px]">
            How can I access my accounts online?
          </h2>

          <hr className="border-[#262626] my-6" />

          <p className="text-[#B3B3B3]">
            Visit our website and click the Login button. Enter your username
            and password to access your account.
          </p>
        </div>

        <div data-aos="fade-left"
          data-aos-anchor="#example-anchor"
          data-aos-offset="500"
          data-aos-duration="500" className="bg-[#1C1C1C] border border-[#262626] rounded-2xl md:p-8">
          <h2 className="text-white text-[20px]">
            Are my transactions and personal information secure?
          </h2>

          <hr className="border-[#262626] my-6" />

          <p className="text-[#B3B3B3]">
            Yes. We employ industry-leading encryption and multi-factor
            authentication to keep your information secure.
          </p>
        </div>

        {showMore && (
          <>
            <div className="bg-[#1C1C1C] border border-[#262626] rounded-2xl md:p-8">
              <h2 className="text-white text-[20px]">
                Can I transfer money internationally?
              </h2>

              <hr className="border-[#262626] my-6" />

              <p className="text-[#B3B3B3]">
                Yes, international transfers are available through our online
                banking platform.
              </p>
            </div>

            <div className="bg-[#1C1C1C] border border-[#262626] rounded-2xl md:p-8">
              <h2 className="text-white text-[20px]">
                How can I contact customer support?
              </h2>

              <hr className="border-[#262626] my-6" />

              <p className="text-[#B3B3B3]">
                You can contact us via email, phone, or live chat 24/7.
              </p>
            </div>
          </>
        )}
      </div>

      <div className="flex justify-center mt-10">
        <button
          onClick={() => setShowMore(!showMore)}
          className="bg-[#1C1C1C] text-white px-6 py-3 rounded-full border border-[#262626]"
        >
          {showMore ? "Show Less" : "Load All FAQ's"}
        </button>
      </div>
    </div>
  );
};

export default Section3;