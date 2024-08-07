import React from "react";

export default function Statebar(props: {
  state: number;
  name: string;
  use: number;
}) {
  return (
    <div className="flex flex-row flex-nowrap max-xl:hidden">
      <button
        className={ 
          props.state == props.use || (props.use == 5 && props.state==4)
            ? "basis-8 h-8 m-6 rounded-2xl bg-Lightblue text-Marineblue font-bold"
            : "basis-8 h-8 m-6 rounded-2xl border-[1px] border-white text-white font-bold"
        }
      >
        {props.state}
      </button>
      <div className="basis-8/12 flex-col content-center">
        <div className=" text-Lightgray text-sm uppercase">Step {props.state}</div>
        <div className=" text-white font-bold uppercase">{props.name}</div>
      </div>
    </div>
  );
}
