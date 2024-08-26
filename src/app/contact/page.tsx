"use client";
import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

function ContactForm() {
  const [state, handleSubmit] = useForm("xanwbzdo");
  if (state.succeeded) {
    return <p className="text-2xl">Thanks for reaching out. I &apos;ll get back to you!</p>;
  }
  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0">
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-6 w-[420px] align-center justify-center"
      >
        {/* <label htmlFor="email" >Email Address</label> */}
        <input
          type="text"
          placeholder="Name"
          name="name"
          className="bg-[#27272c] text-white h-14 text-center"
        />
        <input
          type="text"
          name="phone no"
          placeholder="Phone Number"
          className="bg-[#27272c] text-white h-14 text-center"
        />
        <input
          id="email"
          type="email"
          name="email"
          className="flex items-center justify-center bg-[#27272c] text-white h-14 text-center"
          placeholder="Email"
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          id="message"
          name="message"
          className="bg-[#27272c] text-white h-[150px] text-center"
          placeholder="Message"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <motion.button
          type="submit"
          disabled={state.submitting}
          className="text-white font-bold border border-accent-hover bg-accent-hover h-14"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Submit
        </motion.button>
      </form>
    </div>
  );
}

export default ContactForm;
