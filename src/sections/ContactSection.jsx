import { contactSec } from "../assets/images";
import { Heros } from "../constants";
import styles, { layout } from "../style";
import { Button } from "../components";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

const ContactSection = () => {
  const form = useRef();

  // function for sending email
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_8ldk3mf", "template_92m6id1", form.current, {
        publicKey: "HJvrbYvM84bFJ2CIh",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };
  return (
    <section className="flex flex-col justify-center w-full group px-4 md:px-0 z-auto">
      {/* Hero */}
      <div
        style={{ backgroundImage: `url(${Heros[1].img})` }}
        className="w-full md:h-[300px] h-full bg-center bg-cover duration-700 ease-in-out md:rounded-none rounded "
      >
        {/* Background Overlay */}
        <div className="mr-4 inset-0 w-full md:h-[300px] h-screen bg-center bg-cover bg-gray-900 bg-opacity-50 md:rounded-none rounded"></div>

        {/* Section Text */}
        <div className="absolute md:top-[15%] top-[55%] py-8 px-4 mx-auto w-full text-center lg:py-16 lg:px-12 z-10">
          <h1 className="font-palanquin font-bold text-center ss:text-[72px] text-[52px] text-white ss:leading-[100px] leading-[75px]">
            Contact Us.
          </h1>
        </div>
      </div>

      <div className={`${layout.section} ${styles.paddingX}`}>
        {/* Left side */}
        <div className={`${layout.sectionImg} `}>
          <img
            src={contactSec}
            alt="card"
            className="w-[550px] h-full cursor-pointer object-cover"
          />
        </div>

        {/* Right side */}
        <div className="flex-1">
          <h2 className="font-palanquin font-semibold text-center xs:text-[48px] text-[30px] xs:leading-[56.8px] leading-[66.8px] md:pt-0 pt-10 w-full">
            Get in touch
          </h2>
          <p className="font-montserrat font-light text-center text-slate-gray xs:text-[38px] text-[30px] xs:leading-[46.8px] leading-[66.8px] w-full max-w-[670px] mt-5">
            We’ll love to hear your feedback.
            <br /> Kindly send us a mail.
          </p>

          {/* Message form */}
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex max-w-md flex-col gap-4 mx-10 mt-10"
          >
            <div className="mb-5">
              <label
                htmlFor="name"
                className="mb-3 block text-base font-medium text-[#07074D] font-montserrat"
              >
                Full Name
              </label>
              <input
                type="text"
                name="user_name"
                id="name"
                placeholder="John Smith"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-montserrat font-medium outline-none focus:border-pomo-red focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="email"
                className="mb-3 block text-base font-medium text-[#07074D] font-montserrat"
              >
                Email Address
              </label>
              <input
                type="email"
                name="user_email"
                id="email"
                placeholder="example@domain.com"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6  text-base font-montserrat font-medium outline-none focus:border-pomo-red focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="subject"
                className="mb-3 block text-base font-medium text-[#07074D] font-montserrat"
              >
                Subject
              </label>
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Enter your subject"
                className="w-full rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-montserrat font-medium outline-none focus:border-pomo-red focus:shadow-md"
              />
            </div>
            <div className="mb-5">
              <label
                htmlFor="message"
                className="mb-3 block text-base font-medium text-[#07074D] font-montserrat"
              >
                Message
              </label>
              <textarea
                rows="4"
                name="message"
                id="message"
                placeholder="Type your message"
                className="w-full resize-none rounded-md border border-[#e0e0e0] bg-white py-3 px-6 text-base font-montserrat font-medium outline-none focus:border-pomo-red focus:shadow-md"
              ></textarea>
            </div>

            <div className="flex mb-10">
              <Button
                styles="relative rounded-[10px] h-[60px] w-40 overflow-hidden border border-pomo-red bg-white text-pomo-red shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-full before:w-0 before:duration-500 after:absolute after:right-0 after:top-0 after:h-full after:w-0 after:duration-500 hover:text-white hover:shadow-pomo-red hover:before:w-2/4 hover:before:bg-pomo-red hover:after:w-2/4 hover:after:bg-pomo-red"
                label="Submit"
                SpanStyles="relative z-10"
                type="submit"
              />
            </div>
          </form>
        </div>
      </div>

      {/* Location */}
      <div className={`${layout.section} ${styles.paddingX}`}>
        {/* Google Map */}
        <div className="md:w-[45%] md:h-[60%]">
          <iframe
            width="100%"
            height="600"
            src="https://www.google.com/maps/embed/v1/place?q=Tesano+Cottage,+Tesano+Drive,+Accra,+Ghana&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8"
          ></iframe>
        </div>

        {/* Right Side */}
        <div className="flex-1 md:ml-20 pt-20">
          <h2 className="font-palanquin font-semibold xs:text-[48px] text-[30px] xs:leading-[56.8px] leading-[66.8px] md:pt-0 py-10 w-full">
            Location
          </h2>

          <p className={`${styles.paragraph}`}>
            10 West Tesano Drive (Off Cliff Street)Accra, Ghana
          </p>
          <p className={`${styles.paragraph} pb-6`}>
            Digitai Address: GA-255-5896
          </p>

          <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[3px] border-t-[#3F3E45]"></div>
          <h2 className="font-palanquin font-semibold text-center xs:text-[28px] text-[30px] xs:leading-[56.8px] leading-[66.8px] md:pt-0 pt-8 w-full">
            For reservations please call or email
          </h2>
          <p className={`${styles.paragraph} text-center`}>
            Call us: +233 30 273 0335 / +233 55 783 8577
          </p>
          <p className={`${styles.paragraph} text-center`}>
            info@tesanocottage.com
          </p>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
