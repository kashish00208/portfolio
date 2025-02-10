"use client";
import Intro from "@/components/about/Intro";
import emailjs from "emailjs-com";

import React, { useState, ChangeEvent, FormEvent } from "react";
interface FormData {
  name: string;
  email: string;
  message: string;
}

const page = () => {
  const key = process.env.MSG_KEY;
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState<string>("");
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

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("All fields are required!");
      return;
    }

    setStatus("Sending message...");

    emailjs
      .sendForm(
        "contact_service",
        "contact_form",
        e.target as HTMLFormElement,
        key
      )
      .then(
        () => {
          setStatus("Message sent successfully!");
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        (error: Error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <>
      <div className="hidden md:block">
        <Intro />
      </div>
      <div className="m-7 text-center flex flex-col lg:flex-row mt-20">
        <div className="flex-1 md:ml-96 md:mt-20 md:text-start">
          <div className="md:ml-10 lg:ml-10">
            <p className="text-white text-5xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold ">
              LET'S WORK
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

                <button type="submit" className="w-full bg-orange-600 bg-opacity-50 my-5 p-2 rounded-xl">Submit</button>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>
  );
};

export default page;
