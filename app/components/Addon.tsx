import React, { Dispatch, SetStateAction, useState } from "react";
import { FormDataSection3 } from "./Type";
import Headtext from "./Headtext";
import Clickmark from "./icon/Clickmark";
export default function Addon(props: {
  setdata: Dispatch<SetStateAction<FormDataSection3>>;
  formdata3: FormDataSection3;
  next: () => void;
  back: () => void;
  year: "m" | "y";
}) {
  const [p1, sp1] = useState<boolean>(props.formdata3.p1);
  const [p2, sp2] = useState<boolean>(props.formdata3.p2);
  const [p3, sp3] = useState<boolean>(props.formdata3.p3);

  return (
    <section className="flex xl:bg-white max-xl:bg-Magnolia h-full flex-row flex-wrap content-between 2xl:px-28 xl:px-20 xl:pt-10 xl:pb-5 text-lg">
      <div
        className="xl:basis-full max-xl:basis-10/12 max-xl:mx-auto 
      max-xl:relative max-xl:bg-White max-xl:-top-20 max-xl:p-5  
      max-xl: rounded-2xl max-xl:shadow-lg"
      >
        <Headtext
          head="Pick add-ons"
          title="Add-ons help enhance your gaming experience."
        />

        <div className="xl:mt-10 xl:mb-20">
          <div
            className={
              p1
                ? "flex flex-row border-[1px] rounded-lg my-5 border-Purplishblue bg-Magnolia h-20"
                : "flex flex-row border-[1px] rounded-lg my-5 border-Coolgray h-20"
            }
          >
            <div className="basis-2/12 flex items-center justify-center ">
              <span onClick={() => sp1(!p1)}>
                <Clickmark clicked={p1} />
              </span>
            </div>

            <div className="basis-8/12 flex flex-col justify-center">
              <div className="xl:text-xl text-lg text-Marineblue font-bold">
                Online service
              </div>
              <div className="xl:text-base text-sm  text-Coolgray">
                Access to multiplayer games
              </div>
            </div>

            <div className="basis-2/12 flex flex-col justify-center text-Purplishblue xl:text-base text-sm max-xl:me-5 ">
              {props.year === "m" ? "+$1/mo" : "+$10/yr"}
            </div>
          </div>

          <div
            className={
              p2
                ? "flex flex-row border-[1px] rounded-lg my-5 border-Purplishblue bg-Magnolia h-20"
                : "flex flex-row border-[1px] rounded-lg my-5 border-Coolgray h-20"
            }
          >
            <div className="basis-2/12 flex items-center justify-center ">
              <span onClick={() => sp2(!p2)}>
                <Clickmark clicked={p2} />
              </span>
            </div>

            <div className="basis-8/12 flex flex-col justify-center">
              <div className="xl:text-xl text-lg text-Marineblue font-bold">
                Larger storage
              </div>
              <div className="xl:text-base text-sm  text-Coolgray">
                Extra 1TB of cloud save
              </div>
            </div>

            <div className="basis-2/12 flex flex-col justify-center text-Purplishblue xl:text-base text-sm max-xl:me-5 ">
              {props.year === "m" ? "+$2/mo" : "+$20/yr"}
            </div>
          </div>

          <div
            className={
              p3
                ? "flex flex-row border-[1px] rounded-lg my-5 border-Purplishblue bg-Magnolia h-20"
                : "flex flex-row border-[1px] rounded-lg my-5 border-Coolgray h-20"
            }
          >
            <div className="basis-2/12 flex items-center justify-center ">
              <span onClick={() => sp3(!p3)}>
                <Clickmark clicked={p3} />
              </span>
            </div>

            <div className="basis-8/12 flex flex-col justify-center">
              <div className="xl:text-xl text-lg text-Marineblue font-bold">
                Customizable Profile
              </div>
              <div className="xl:text-base text-sm  text-Coolgray">
                Custom theme on your profile
              </div>
            </div>

            <div className="basis-2/12 flex flex-col justify-center text-Purplishblue xl:text-base text-sm max-xl:me-5 ">
              {props.year === "m" ? "+$2/mo" : "+$20/yr"}
            </div>
          </div>
        </div>

        <div className="basis-full flex flex-row-reverse justify-between max-xl:hidden">
          <button
            className="next"
            type="button"
            onClick={() => {
              props.setdata({ p1, p2, p3 });
              props.next();
            }}
          >
            Next Step
          </button>
          <button
            className="back"
            type="button"
            onClick={() => {
              props.back();
            }}
          >
            Go Back
          </button>
        </div>
      </div>
      <div className="max-xl:fixed bottom-0 w-full left-0 bg-white p-5 xl:hidden">
        <div className="basis-full xl:relative xl:top-20 ">
          <div className="flex flex-row-reverse justify-between">
            <button
              className="next"
              type="button"
              onClick={() => {
                props.setdata({ p1, p2, p3 });
                props.next();
              }}
            >
              Next Step
            </button>
            <button
              className="back"
              type="button"
              onClick={() => {
                props.back();
              }}
            >
              Go Back
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
