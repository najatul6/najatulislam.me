import { GiSubmarineMissile } from "react-icons/gi";
import Header from "../../Components/Shared/Header/Header";
import { useState } from "react";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";
import { motion } from "framer-motion";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [isSending, setIsSending] = useState(false);
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const validate = () => {
    let errors = {};
    if (!formData.name) {
      errors.name = "Name is required";
    }
    if (!formData.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "email is invalid";
    }
    if (!formData.message) {
      errors.message = "Message is required";
    }
    return errors;
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationerrors = validate();
    if (Object.keys(validationerrors).length > 0) {
      setErrors(validationerrors);
    } else {
      setErrors({});
      setIsSending(true);
      emailjs
        .send(
          "service_7ilqri6",
          "template_8dhgnpd",
          formData,
          "lxcsJYmi40m_IS8C-"
        )
        .then((response) => {
          console.log(response?.statusCode);
          toast.success("Send Successfully");
          setFormData({ name: "", email: "", message: "" });
        })
        .catch((error) => {
          console.log("FAILED...", error);
          toast.error("Failed to send message. Please try again later.");
        })
        .finally(() => {
          setIsSending(false);
        });
    }
  };
  return (
    <div className="mt-5">
      <Toaster />
      <Header text1="Get in" text2="Touch" />
      <div className="px-5 py-10 lg:px-10 lg:py-16 rounded-xl shadow-up">
        <motion.form
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          onSubmit={handleSubmit}
          className="flex flex-col gap-6"
        >
          <div className="flex flex-col md:flex-row gap-6">
            <div className="w-full">
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                placeholder="Enter Your Name"
                onChange={handleChange}
                className="w-full bg-transparent p-4 rounded-xl shadow-up focus:outline-none focus:shadow-in focus:bg-transparent"
              />
              {errors.name && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-rose-600 py-2 px-5"
                >
                  {errors.name}
                </motion.p>
              )}
            </div>
            <div className="w-full">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                placeholder="Enter Your Email Address"
                onChange={handleChange}
                className="w-full bg-transparent appearance-none p-4 rounded-xl shadow-up focus:outline-none focus:bg-transparent focus:shadow-in "
              />
              {errors.email && (
                <motion.p
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-rose-600 py-2 px-5"
                >
                  {errors.email}
                </motion.p>
              )}
            </div>
          </div>
          <div className="w-full ">
            <textarea
              id="message"
              name="message"
              value={formData.message}
              rows={6}
              placeholder="Enter Your Message"
              onChange={handleChange}
              className="w-full p-4 rounded-xl h-32 bg-transparent shadow-up focus:outline-none focus:shadow-in"
            />
            {errors.message && (
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="text-rose-600 py-2 px-5"
              >
                {errors.message}
              </motion.p>
            )}
          </div>

          <button
            type="submit"
            className={`text-xs md:text-lg lg:text-2xl font-medium px-5 py-3 shadow-up rounded-xl hover:shadow-in hover:text-blue-light duration-500 ${
              isSending ? "cursor-not-allowed opacity-50" : ""
            }`}
            disabled={isSending}
          >
            <div className="flex items-center justify-center gap-6">
              {isSending ? "Sending..." : "Submit"} <GiSubmarineMissile />
            </div>
          </button>
        </motion.form>
      </div>
    </div>
  );
};

export default Contact;
