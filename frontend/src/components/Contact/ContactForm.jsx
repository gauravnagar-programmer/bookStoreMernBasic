import { useState } from "react";

const ContactForm = () => {
  const [contactDetails, setContactDetails] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInput = (e) => {
    const { name, value } = e.target;

    setContactDetails((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };

  console.log(contactDetails)

  return (
    <div className="flex items-center justify-center px-9 mb-10 md:px-0">
      <fieldset className="fieldset border-gray-500 space-y-6 rounded-box  dark:border shadow   p-4 bg-base-200 mt-30 w-md">
        <h1 className="text-2xl text-center font-bold">Contact Form</h1>

        <label className="label">Name</label>
        <input
          onChange={handleInput}
          value={contactDetails.name}
          name="name"
          type="text"
          className="input w-full"
          placeholder="Enter your name"
        />

        <label className="label">Email</label>
        <input
          onChange={handleInput}
          value={contactDetails.email}
          name="email"
          type="email"
          className="input w-full"
          placeholder="Email"
        />

        <label className="label">Message</label>
        <textarea
          onChange={handleInput}
          value={contactDetails.message}
          name="message"
          className="textarea w-full"
          placeholder="Message"
        ></textarea>

        <button className="btn btn-neutral border-none bg-blue-500 text-white mt-4">
          Submit
        </button>
      </fieldset>
    </div>
  );
};

export default ContactForm;
