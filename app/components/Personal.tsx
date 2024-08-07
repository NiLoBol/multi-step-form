import React, { Dispatch, SetStateAction, useRef, useState } from "react";
import { FormDataSection1 } from "./Type";
import Headtext from "./Headtext";

export default function Personal(props: {
  setdata: Dispatch<SetStateAction<FormDataSection1>>;
  next: () => void;
}) {
  const nameRef = useRef<HTMLInputElement>(null);
  const emailRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    phone?: string;
  }>({});

  const validateEmail = (email: string) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };
  const validatePhone = (phone: string) => {
    const phonePattern = /^\+\d{1,3} \d{3} \d{3} \d{3}$/;
    return phonePattern.test(phone);
  };
  const handleNext = () => {
    let validationErrors: { name?: string; email?: string; phone?: string } =
      {};

    if (!nameRef.current?.value) {
      validationErrors.name = "This field is required";
    }
    if (!emailRef.current?.value) {
      validationErrors.email = "This field is required";
    } else if (!validateEmail(emailRef.current?.value)) {
      validationErrors.email = "Invalid email address";
    }
    if (!phoneRef.current?.value) {
      validationErrors.phone = "This field is required";
    } else if (!validatePhone(phoneRef.current?.value)) {
      validationErrors.phone =
        "Invalid phone number format. Expected format: +xxx xxx xxx xxx";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      if (nameRef.current && emailRef.current && phoneRef.current) {
        props.setdata({
          name: nameRef.current?.value,
          email: emailRef.current?.value,
          phone: phoneRef.current?.value,
        });
        props.next();
      }
    }
  };

  return (
    <section className="flex xl:bg-white max-xl:bg-Magnolia h-full flex-row flex-wrap content-between 2xl:px-28 xl:px-20 xl:pt-10 xl:pb-5 text-lg">
      <div className="xl:basis-full max-xl:basis-10/12 max-xl:mx-auto 
      max-xl:relative max-xl:bg-White max-xl:-top-20 max-xl:p-5  
      max-xl: rounded-2xl max-xl:shadow-lg
      ">
        <Headtext
          head="Personal info"
          title="Please provide your name, email address, and phone number."
        />

        <div className="xl:my-10 my-2 flex flex-row flex-wrap justify-between">
          <label
            htmlFor="Name"
            className="block xl:mb-2 font-medium text-Marineblue "
          >
            Name
          </label>

          {errors.name && <p className="text-red-600 ">{errors.name}</p>}
          <input
            required
            id="Name"
            ref={nameRef}
            className={
              "basis-full xl:mb-5 mb-3 border-2 rounded-md px-5 py-3 font-bold focus-visible:outline-Purplishblue " +
              (errors.name ? "border-Strawberryred" : "")
            }
            type="text"
            placeholder="e.g. Stephen King"
          />

          <label
            htmlFor="Email"
            className="block xl:mb-2 font-medium text-Marineblue "
          >
            Email Address
          </label>
          {errors.email && <p className="text-red-600">{errors.email}</p>}
          <input
            required
            id="Email"
            ref={emailRef}
            className={
              "basis-full xl:mb-5 mb-3 border-2 rounded-md px-5 py-3 font-bold focus-visible:outline-Purplishblue " +
              (errors.email ? "border-Strawberryred" : "")
            }
            type="email"
            placeholder="e.g. stephenking@lorem.com"
          />

          <label
            htmlFor="Phone"
            className="block xl:mb-2 font-medium text-Marineblue "
          >
            Phone Number
          </label>
          {errors.phone && <p className="text-red-600">{errors.phone}</p>}
          <input
            required
            id="Phone"
            ref={phoneRef}
            maxLength={16}
            className={
              "basis-full xl:mb-5 mb-3 border-2 rounded-md px-5 py-3 font-bold focus-visible:outline-Purplishblue " +
              (errors.phone ? "border-Strawberryred" : "")
            }
            type="text"
            placeholder="e.g. +1 234 567 890"
          />
        </div>
      </div>
      <div className="max-xl:fixed bottom-0 w-full">
        <div className="basis-full flex flex-row-reverse bg-white p-5">
        <button className="next" type="button" onClick={handleNext}>
          Next Step
        </button>
      </div>
      </div>
      
    </section>
  );
}
