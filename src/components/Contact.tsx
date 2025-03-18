"use client";
import Intro from "../components/Intro";
import emailjs from "@emailjs/browser";
import { error } from "console";

import React, { useState, ChangeEvent, FormEvent } from "react";
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const key = process.env.MSG_KEY;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [msg, SetMsg] = useState("");
  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const templateParams = {
      to_name: "Kashish",
      name: formData.name, 
      reply_to: formData.email, 
      message: formData.message,
    };
    console.log("Sending email with:", templateParams);
    emailjs
      .send("service_5j1ksxd", "template_bjmjd5a", templateParams, "Lvp-xlQeDpx0Sn1_u")
      .then(() => {
        SetMsg("Email sent");
        setFormData({
          name: "",
          email: "",
          message: "",
        });
        SetMsg("")
        console.log("Succes in sending email")
        ,()=>{
          SetMsg("Failed in sending msg try again later");
        }
      });
  };

  return (
    <>
      <div className="hidden md:block">
        <Intro />
      </div>
      <div className="m-7 text-center flex flex-col lg:flex-row mt-20">
        <div className="flex-1 md:ml-96 md:mt-20 md:text-start">
          <div className="md:ml-10 lg:ml-10">
            <p className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold">
              Lets work
            </p>

            <p className="text-white text-4xl sm:text-4xl md:text-5xl lg:text-7xl text-opacity-50">
              TOGETHER
            </p>

            <div className="flex flex-col mt-5 text-start">
              <form onSubmit={handleSubmit} className="">
                <label className="">
                  Name:
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-white bg-opacity-50 my-2 p-2 rounded-xl"
                  />
                </label>
                <br />

                <label>
                  Email:
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-white bg-opacity-50 my-2 p-2 rounded-xl"
                  />
                </label>
                <br />

                <label className="">
                  Message :
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={2}
                    cols={1}
                    required
                    className="w-full bg-white bg-opacity-50 my-2 p-2 rounded-xl"
                  />
                </label>
                <br />

                <button
                  type="submit"
                  className="w-full bg-orange-600 bg-opacity-50 my-5 p-2 rounded-xl"
                >
                  Submit
                </button>
              </form>
              {msg && (
              <p className={`mt-4 text-center text-sm font-semibold ${msg.startsWith("✅") ? "text-red-400" : "text-green-400"}`}>
                {msg}
              </p>
            )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
