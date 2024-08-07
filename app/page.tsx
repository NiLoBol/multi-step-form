"use client";
import { useEffect, useState } from "react";
import Statebar from "./components/Statebar";
import Personal from "./components/Personal";
import {
  FormDataSection1,
  FormDataSection2,
  FormDataSection3,
} from "./components/Type";
import Plan from "./components/Plan";
import Addon from "./components/Addon";
import Finishing from "./components/Finishing";
import Thankyou from "./components/Thankyou";
import StatebarM from "./components/StatebarM";

// Initial state object

export default function Home() {
  const [formstate, setformstate] = useState<number>(1);
  const [formdata1, setdata1] = useState<FormDataSection1>({
    name: "",
    email: "",
    phone: "",
  });
  const [formdata2, setdata2] = useState<FormDataSection2>({
    plan: "Arcade",
    year: "m",
  });
  const [formdata3, setdata3] = useState<FormDataSection3>({
    p1: false,
    p2: false,
    p3: false,
  });

  const next = () => {
    setformstate(formstate + 1);
  };
  const back = () => {
    setformstate(formstate - 1);
  };

  useEffect(() => {
    console.log(formstate);
    console.log(formdata2);
  }, [formstate]);
  return (
    <main className="h-screen w-screen xl:flex justify-center items-center bg-Magnolia">
      <section className="xl:basis-8/12 bg-white xl:h-min[600px] rounded-2xl">
        <div className="flex xl:flex-row flex-col xl:p-5 w-full xl:h-[640px] ">
          <div className="xl:basis-[25%]  bg-Purplishblue xl:rounded-xl max-xl:bg-mobile max-xl:h-[200px] xl:bg-desktop xl:bg-top bg-cover">
            <Statebar name="Your info" state={1} use={formstate}></Statebar>
            <Statebar name="Select plan" state={2} use={formstate}></Statebar>
            <Statebar name="Add-ons" state={3} use={formstate}></Statebar>
            <Statebar name="Summary" state={4} use={formstate}></Statebar>
            <div className="flex flex-row justify-center xl:hidden items-center h-[130px] ">
              <StatebarM state={1} use={formstate}></StatebarM>
              <StatebarM state={2} use={formstate}></StatebarM>
              <StatebarM state={3} use={formstate}></StatebarM>
              <StatebarM state={4} use={formstate}></StatebarM>
            </div>
          </div>
          <div className="basis-[75%] h-full bg-White">
            {formstate == 1 ? (
              <Personal setdata={setdata1} next={next} />
            ) : formstate == 2 ? (
              <Plan
                formdata2={formdata2}
                setdata={setdata2}
                next={next}
                back={back}
              />
            ) : formstate == 3 ? (
              <Addon
                formdata3={formdata3}
                setdata={setdata3}
                next={next}
                back={back}
                year={formdata2.year}
              />
            ) : formstate == 4 ? (
              <Finishing
                formdata2={formdata2}
                formdata3={formdata3}
                next={next}
                back={back}
                setformstate={setformstate}
              />
            ) : (
              <Thankyou />
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
