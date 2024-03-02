import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    const serviceId = "service_3fqy6p6"; // Replace with your actual service ID
    const templateId = "template_6erfg3y"; // Replace with your actual template ID
    const userId = "41PNfGld-WKVPgp3j"; // Replace with your actual user ID

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: "Patrick Eugene Sacueza",
      message: message,
    };

    // Send email using EmailJS
    emailjs
      .send(serviceId, templateId, templateParams, userId)
      .then((response) => {
        console.log("Email sent successfully:", response);
        // Optionally, you can show a success message to the user or reset the form here
      })
      .catch((error) => {
        console.error("Error sending email:", error);
        // Optionally, you can show an error message to the user here
      });
  };

  return (
    <>
      <div className="bg-[#F3F3F3] h-auto w-full py-[2em] px-[1em] mt-10">
        <form className="text-justify" onSubmit={handleSubmit}>
          <div className="border-b-2 border-[#bdbbbb] w-auto inline-block">
            <h1 className="font-medium text-lg text-center">About You</h1>
          </div>
          <div className="mt-5">
            <label className="font-[300] text-[1.2em]">Name*</label>
            <input
              className="w-full h-[5vh] mb-5 border-[1.5px] border-black"
              placeholder=" eg, Patrick Eugene Sacueza"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <label className="font-[300] text-[1.2em]">Email*</label>
            <input
              className="w-full h-[5vh] mb-5 border-[1.5px] border-black"
              placeholder=" sample@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <textarea
              className="w-full h-[30vh] mb-5 border-[1.5px] border-black"
              placeholder=" Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button
              className="py-2 px-4 bg-slate-900 text-[1em] md:text-[2em] lg:text-[2em] xl:text-[2em] 2xl:text-[2em] mt-5"
              type="submit"
            >
              {" "}
              <div className="flex items-center">
                <h1 className="text-[1em] md:text-[1em] lg:text-[1em] xl:text-[1em] 2xl:text-[1em] text-white">
                  Send
                </h1>
                <FontAwesomeIcon
                  icon={faChevronRight}
                  className="ml-2 text-white"
                />
              </div>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
