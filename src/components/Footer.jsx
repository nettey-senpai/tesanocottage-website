import { Link } from "react-router-dom";
import { footerLogo } from "../assets/images";
import { footerLinks, socialMedia } from "../constants";
import styles from "../style";

const Footer = () => (
  <section
    className={`${styles.flexCenter} md:px-[108px] sm:px-[100px] px-6 flex-col bg-[#1a1a1a]`}
  >
    <div className={`${styles.flexStart} md:flex-row flex-col mb-8 w-full`}>
      {/* logo */}
      <div className="flex-1 flex flex-col justify-start mr-10">
        <img
          src={footerLogo}
          alt="tesano cottage"
          className="object-contain"
          width={300}
        />
        <p className={`${styles.paragraph} max-w-[410px]`}>
          Tesano Cottage is a haven for those who appreciate comfort and
          privacy. Experience service that is professional, friendly, and
          attentive.
        </p>
      </div>

      {/* links */}
      <div className="flex-[1.5] w-full flex flex-row flex-wrap md:mt-10 mt-10">
        {footerLinks.map((footerLink) => (
          <div
            key={footerLink.key}
            className="flex flex-col ss:my-0 my-4 min-w-[150px]"
          >
            <h4 className="font-palanquin font-semibold text-[20px] leading-[27px] text-white">
              {footerLink.title}
            </h4>
            <ul className="list-none mt-4 max-w-[400px]">
              {footerLink.links.map((link) => (
                <li
                  key={link}
                  className="font-montserrat font-normal text-[14px] leading-[24px] text-white hover:text-pomo-red cursor-pointer mb-4 last:mb-0"
                >
                  <a className="flex flex-wrap">
                    <img
                      src={link.icon}
                      className={`w-6 h-6 mr-2 ${
                        link.icon ? "block" : "hidden"
                      } cursor-text`}
                    />
                    <Link to={link.path} className="max-w-[330px]">
                      <span>{link.name}</span>
                    </Link>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>

    {/* Copyright text */}
    <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3F3E45]">
      <p className="font-montserrat font-normal text-center text-[14px] leading-[27px] text-white mt-4 mb-6">
        Copyright © Tesano Cottage
      </p>

      {/* Social Media Icons */}
      <div className="flex flex-row md:mt-0 mt-6">
        {socialMedia.map((social) => (
          <img
            key={social.id}
            src={social.icon}
            alt={social.id}
            className="w-[21px] h-[21px] object-contain cursor-pointer hover:text-pomo-red mr-6 last:mr-0 md:mb-0 mb-6"
          />
        ))}
      </div>
    </div>
  </section>
);

export default Footer;
