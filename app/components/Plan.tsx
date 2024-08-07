"use client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import { FormDataSection2 } from "./Type";
import Headtext from "./Headtext";

export default function Plan(props: {
  formdata2: FormDataSection2;
  setdata: Dispatch<SetStateAction<FormDataSection2>>;
  next: () => void;
  back: () => void;
}) {
  const [plan, setplan] = useState<"Arcade" | "Advanced" | "Pro">(
    props.formdata2.plan
  );
  const [year, setyear] = useState<"m" | "y">(props.formdata2.year);
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    console.log(ref.current);
    if (ref.current) {
      if (year === "m") {
        ref.current.classList.remove("left-6");
        ref.current.classList.add("left-0");
      } else {
        ref.current.classList.remove("left-0");
        ref.current.classList.add("left-6");
      }
    }
  }, [year]);
  const next = () => {
    props.setdata({ plan, year });
    props.next();
  };
  return (
    <section className="flex xl:bg-white max-xl:bg-Magnolia h-full flex-row flex-wrap content-between 2xl:px-28 xl:px-20 xl:pt-10 xl:pb-5 text-lg">
      <div
        className="xl:basis-full max-xl:basis-10/12 max-xl:mx-auto 
      max-xl:relative max-xl:bg-White max-xl:-top-20 max-xl:p-5  
      max-xl: rounded-2xl max-xl:shadow-lg"
      >
        <Headtext
          head="Select your plan"
          title="You have the option of monthly or yearly billing."
        />
        <div className="xl:grid xl:grid-cols-3 max-xl:flex-row 2xl:gap-10 gap-5 justify-between my-10">
          <div
            onClick={() => {
              setplan("Arcade");
            }}
            className={
              plan == "Arcade"
                ? "border-2 rounded-2xl xl:h-44 h-22 basis-full max-xl:flex max-xl:items-center max-xl:flex-row max-xl:flex-nowrap p-5 hover:cursor-pointer border-Purplishblue bg-Magnolia "
                : "border-2 rounded-2xl xl:h-44 h-22 basis-full max-xl:flex max-xl:items-center max-xl:flex-row max-xl:flex-nowrap p-5 hover:cursor-pointer hover:border-Purplishblue border-Coolgray"
            }
          >
            <img
              className="xl:mb-5"
              src="/assets/images/icon-arcade.svg"
              alt=""
            />
            <div className="ms-5">
              <div className="basis-2/4 text-Marineblue font-bold">Arcade</div>
              <div className="text-base text-Coolgray">
                {year == "m" ? "9$/mo" : "90$/yr"}
              </div>
              {year == "m" ? (
                ""
              ) : (
                <div className="text-sm text-Marineblue font-medium">
                  2 months free{" "}
                </div>
              )}
            </div>
          </div>

          <div
            onClick={() => {
              setplan("Advanced");
            }}
            className={
              plan == "Advanced"
                ? "border-2 rounded-2xl xl:h-44 h-22 basis-full max-xl:flex max-xl:items-center max-xl:flex-row max-xl:flex-nowrap p-5 hover:cursor-pointer border-Purplishblue bg-Magnolia "
                : "border-2 rounded-2xl xl:h-44 h-22 basis-full max-xl:flex max-xl:items-center max-xl:flex-row max-xl:flex-nowrap p-5 hover:cursor-pointer hover:border-Purplishblue border-Coolgray"
            }
          >
            <img
              className="xl:mb-5"
              src="/assets/images/icon-advanced.svg"
              alt=""
            />
            <div className="ms-5">
              <div className="text-Marineblue font-bold">Advanced</div>
              <div className="text-base text-Coolgray">
                {year == "m" ? "12$/mo" : "120$/yr"}
              </div>
              {year == "m" ? (
                ""
              ) : (
                <div className="text-sm text-Marineblue font-medium">
                  2 months free{" "}
                </div>
              )}
            </div>
          </div>
          <div
            onClick={() => {
              setplan("Pro");
            }}
            className={
              plan == "Pro"
                ? "border-2 rounded-2xl xl:h-44 h-22 basis-full max-xl:flex max-xl:items-center max-xl:flex-row max-xl:flex-nowrap p-5 hover:cursor-pointer border-Purplishblue bg-Magnolia "
                : "border-2 rounded-2xl xl:h-44 h-22 basis-full max-xl:flex max-xl:items-center max-xl:flex-row max-xl:flex-nowrap p-5 hover:cursor-pointer hover:border-Purplishblue border-Coolgray"
            }
          >
            <img className="xl:mb-5" src="/assets/images/icon-pro.svg" alt="" />
            <div className="ms-5">
              <div className="text-Marineblue font-bold">Pro</div>
              <div className="text-base text-Coolgray">
                {year == "m" ? "15$/mo" : "150$/yr"}
              </div>
              {year == "m" ? (
                ""
              ) : (
                <div className="text-sm text-Marineblue font-medium">
                  2 months free{" "}
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="bg-Alabaster h-12  my-5 flex flex-row content-center items-center justify-center text-Marineblue">
          <div
            className={
              year === "m"
                ? "basis-2/12 text-center mx-5 font-bold"
                : "basis-2/12 text-center mx-5 "
            }
          >
            Monthly
          </div>
          <div
            onClick={() => {
              if (year === "m") {
                setyear("y");
              } else {
                setyear("m");
              }
            }}
            className="w-12 h-6 bg-Marineblue rounded-full p-1 hover:cursor-pointer"
          >
            <div
              ref={ref}
              className="relative h-4 w-4 bg-white rounded-full transition-all duration-200 ease-in-out left-6"
            ></div>
          </div>
          <div
            className={
              year === "y"
                ? "basis-2/12 text-center mx-5 font-bold"
                : "basis-2/12 text-center mx-5 "
            }
          >
            Yearly
          </div>
        </div>

        <div className="basis-full xl:relative xl:top-20 max-xl:hidden ">
          <div className="flex flex-row-reverse justify-between">
            <button
              className="next"
              type="button"
              onClick={() => {
                next();
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
      <div className="max-xl:fixed bottom-0 w-full bg-white p-5 xl:hidden">
        <div className="basis-full xl:relative xl:top-20 ">
          <div className="flex flex-row-reverse justify-between">
            <button
              className="next"
              type="button"
              onClick={() => {
                next();
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
