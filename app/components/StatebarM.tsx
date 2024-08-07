import React from "react";

export default function StatebarM(props: {
  state: number;
  use: number;
}) {
  return (
      <button
        className={ 
          props.state == props.use || (props.use == 5 && props.state==4)
            ? "basis-8 h-8 mx-3 rounded-2xl bg-Lightblue text-Marineblue font-bold"
            : "basis-8 h-8 mx-3 rounded-2xl border-[1px] border-white text-white font-bold"
        }
      >
        {props.state}
      </button>
  );
}
