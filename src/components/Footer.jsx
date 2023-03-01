import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import links from "../data/footerLinks";

const Footer = () => {
  const socialMediaIcons = [
    faFacebookSquare,
    faTwitter,
    faPinterest,
    faInstagram,
  ];

  return (
    <div className="bg-black py-10">
      <div className="content w-11/12 md:w-9/12 mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between md:items-start">
        <div className="logo mb-5">
          <a
            className="text-white font-bold text-2xl hover:text-lightGreen"
            href=""
          >
            Shortly
          </a>
        </div>

        {/* Map the links */}
        {links.map((link) => (
          <div
            key={link.id}
            className="features flex flex-col items-center my-5 md:my-0 md:items-start"
          >
            <h3 className="text-white text-lg font-bold mb-5">
              {link.headline}
            </h3>
            {link.footerLinks.map((footerLink, index) => (
              <a
                key={index}
                href=""
                className="text-gray-500 hover:text-lightGreen"
              >
                {footerLink}
              </a>
            ))}
          </div>
        ))}

        {/* Map the Social Media Icons */}
        <div className="socials my-5 md:my-0">
          {socialMediaIcons.map((icon, index) => (
            <a
              key={index}
              className="text-white text-3xl hover:text-lightGreen mx-3 md:mx-3"
              href=""
            >
              <FontAwesomeIcon icon={icon} />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
