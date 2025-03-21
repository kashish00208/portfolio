"use client";
import Intro from "../components/Intro";
import emailjs from "@emailjs/browser";

import React, { useState, ChangeEvent, FormEvent } from "react";
interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [loading,setLoading] = useState(false);
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
    setLoading(true);
    const templateParams = {
      to_name: "Kashish",
      name: formData.name,
      reply_to: formData.email,
      message: formData.message,
    };
    console.log("Sending email with:", templateParams);
    emailjs
      .send(
        "service_5j1ksxd",
        "template_bjmjd5a",
        templateParams,
        "Lvp-xlQeDpx0Sn1_u"
      )
      .then(() => {
        setLoading(false);
        setFormData({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch(() => {
        console.log("Failed in sending msg, try again later"); 
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
                  type="submit" disabled={loading}
                  className="w-full bg-orange-600 bg-opacity-50 my-5 p-2 rounded-xl"
                >
                 {loading ?"sending":"Submit"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
