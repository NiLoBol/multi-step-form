import React from "react";

export default function Thankyou() {
  return (
    <section className="flex xl:bg-white max-xl:bg-Magnolia h-full flex-row flex-wrap content-center 2xl:px-28 xl:px-20 xl:pt-10 xl:pb-5 text-lg">
      <div className="xl:basis-full max-xl:basis-10/12 max-xl:mx-auto 
      max-xl:relative max-xl:bg-White max-xl:-top-20 max-xl:p-5  
      max-xl: rounded-2xl max-xl:shadow-lg text-center max-xl:py-16">
        <img className="mx-auto my-5" src="/assets/images/icon-thank-you.svg" alt="" />
        <div className="text-3xl my-5 font-bold text-Marineblue">Thank you!</div>
        <div className="text-Coolgray">
          Thanks for confirming your subscription! We hope you have fun using
          our platform. If you ever need support, please feel free to email us
          at support@loremgaming.com.
        </div>
      </div>
    </section>
  );
}
