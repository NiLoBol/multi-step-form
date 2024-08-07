"use client";
import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useMemo,
  useState,
} from "react";
import { FormDataSection2, FormDataSection3 } from "./Type";
import Headtext from "./Headtext";

export default function Finishing(props: {
  formdata2: FormDataSection2;
  formdata3: FormDataSection3;
  next: () => void;
  back: () => void;
  setformstate: Dispatch<SetStateAction<number>>;
}) {
  const year = props.formdata2.year;
  const plan = props.formdata2.plan;
  const planprice: number =
    plan === "Arcade" ? 9 : plan === "Advanced" ? 12 : plan === "Pro" ? 15 : 0;
  const [data, setdata] = useState<{ name: string; price: number }[]>();
  const [total, settotal] = useState<number>(0);
  useEffect(() => {
    setdata(() => {
      const newData = [
        props.formdata3.p1 ? { name: "Online service", price: 1 } : null,
        props.formdata3.p2 ? { name: "Larger storage", price: 2 } : null,
        props.formdata3.p3 ? { name: "Customizable Profile", price: 2 } : null,
      ].filter((item) => item !== null);
      let sum = 0;
      for (let index = 0; index < newData.length; index++) {
        sum += newData[index].price;
      }
      sum += planprice;
      settotal(sum);
      return newData;
    });

    console.log();
  }, []);

  const LIST = () => {
    console.log(data);
    return (
      <div>
        {data?.map((item, index) => {
          return (
            <div className="flex text-base" key={index}>
              <div className="basis-11/12 text-Coolgray">{item.name}</div>
              <div className="basis-1/12 text-Marineblue font-medium">
                +
                {year == "m"
                  ? "$" + item.price + "/mo"
                  : "$" + item.price * 10 + "/yr"}
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <section className="flex xl:bg-white max-xl:bg-Magnolia h-full flex-row flex-wrap content-between 2xl:px-28 xl:px-20 xl:pt-10 xl:pb-5 text-lg">
      


      <div className="xl:basis-full max-xl:basis-10/12 max-xl:mx-auto 
      max-xl:relative max-xl:bg-White max-xl:-top-20 max-xl:p-5  
      max-xl: rounded-2xl max-xl:shadow-lg" >
        <Headtext
          head=" Finishing up"
          title="Double-check everything looks OK before confirming."
        />
        <div className="bg-Magnolia p-5 mt-5">
          <div className="flex flex-row items-center">
            <div className="basis-11/12 ">
              <div className="text-lg text-Marineblue font-medium">
                {plan}({year == "m" ? "Mounty" : "Year"})
              </div>
              <span
                onClick={() => props.setformstate(2)}
                className="underline text-Coolgray cursor-pointer text-base"
              >
                Change
              </span>
            </div>
            <div className="basis-1/12  text-Marineblue  font-bold text-lg">
              {year == "m"
                ? " $" + planprice + "/mo"
                : " $" + planprice * 10 + "/yr"}
            </div>
          </div>
          <hr className="my-5" />
          <LIST />
        </div>
        <div className="flex flex-row mt-10 px-5">
          <div className="basis-10/12 text-Coolgray">
            Total ({year == "m" ? "per mouth" : "per year"})
          </div>
          <div className="basis-2/12 text-Purplishblue xl:text-2xl text-lg font-bold">
            +{year == "m" ? "$" + total + "/mo" : "$" + total * 10 + "/yr"}
          </div>
        </div>
      </div>
      <div className="max-xl:fixed bottom-0 left-0 w-full bg-white p-5 ">
        <div className="basis-full flex flex-row-reverse justify-between ">
          <button
            className="confirm"
            type="button"
            onClick={() => {
              props.next();
            }}
          >
            Confirm
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
    </section>
  );
}
