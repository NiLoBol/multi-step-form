import React from "react";

export default function Headtext(props:{head:string,title:string}) {
  return (
    <div>
      {" "}
      <h1 className="2xl:text-5xl xl:text-4xl text-3xl mb-2  font-bold text-Marineblue">{props.head}</h1>
      <p className="text-Coolgray">
        {props.title}
      </p>
    </div>
  );
}
