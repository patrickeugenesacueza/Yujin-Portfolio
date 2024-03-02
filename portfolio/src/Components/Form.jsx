import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); // Set loading to true when the form is being submitted

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
        setName("");
        setEmail("");
        setMessage("");
        setLoading(false); // Set loading back to false once the email is sent
        console.log("Email sent successfully:", response);
        // Optionally, you can show a success message to the user or reset the form here
      })
      .catch((error) => {
        setLoading(false); // Set loading back to false in case of an error
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
            <label className="font-[300] text-[1.2em]">
              Name
              <span className="text-red-500">*</span>
            </label>

            <input
              className="w-full h-[5vh] mb-5 border-[1.5px] border-black"
              placeholder=" eg, Patrick Eugene Sacueza"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
            <label className="font-[300] text-[1.2em]">
              Email
              <span className="text-red-500">*</span>
            </label>
            <input
              className="w-full h-[5vh] mb-5 border-[1.5px] border-black"
              placeholder=" sample@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <textarea
              className="w-full h-[30vh] mb-5 border-[1.5px] border-black"
              placeholder=" Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            />
            <button
              className="py-2 px-4 bg-slate-900 text-[1em] md:text-[2em] lg:text-[2em] xl:text-[2em] 2xl:text-[2em] mt-5"
              type="submit"
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center">
                  <div className="w-6 h-6 border-b-2 border-t-[3px] border-gray-200 rounded-full border-solid animate-spin mr-2"></div>
                  <span className="text-white">Sending...</span>
                </div>
              ) : (
                <div className="flex items-center">
                  <span className="text-white">Submit</span>
                  <FontAwesomeIcon
                    icon={faChevronRight}
                    className="ml-2 text-white"
                  />
                </div>
              )}
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
