import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faTwitter,
  faPinterest,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <div className="bg-neutral-900 py-10">
      <div className="content w-11/12 md:w-9/12 mx-auto flex flex-col md:flex-row items-center justify-center md:justify-between md:items-start">
        <div className="logo mb-5">
          <a className="text-white font-bold text-2xl" href="">
            Shortly
          </a>
        </div>
        <div className="features flex flex-col items-center my-5 md:my-0 md:items-start">
          <h3 className="text-white text-lg font-bold mb-5">Features</h3>
          <a href="" className="text-gray-500 hover:text-white">
            Link Shortening
          </a>
          <a href="" className="text-gray-500 hover:text-white">
            Branded Links
          </a>
          <a href="" className="text-gray-500 hover:text-white">
            Analytics
          </a>
        </div>
        <div className="resources flex flex-col items-center md:items-start my-5 md:my-0">
          <h3 className="text-white text-lg font-bold mb-5">Resources</h3>
          <a href="" className="text-gray-500 hover:text-white">
            Blog
          </a>
          <a href="" className="text-gray-500 hover:text-white">
            Developers
          </a>
          <a href="" className="text-gray-500 hover:text-white">
            Support
          </a>
        </div>
        <div className="company flex flex-col items-center my-5 md:my-0 md:items-start">
          <h3 className="text-white text-lg font-bold mb-5 ">Company</h3>
          <a href="" className="text-gray-500 hover:text-white">
            About
          </a>
          <a href="" className="text-gray-500 hover:text-white">
            Our Team
          </a>
          <a href="" className="text-gray-500 hover:text-white">
            Careers
          </a>
          <a href="" className="text-gray-500 hover:text-white">
            Contact
          </a>
        </div>
        <div className="socials my-5 md:my-0">
          <a
            className="text-white text-3xl hover:text-teal-400 mr-5 md:mr-3"
            href=""
          >
            <FontAwesomeIcon icon={faFacebookSquare} />
          </a>
          <a
            className="text-white text-3xl hover:text-teal-400 mr-5 md:mr-3"
            href=""
          >
            <FontAwesomeIcon icon={faTwitter} />
          </a>
          <a
            className="text-white text-3xl hover:text-teal-400 mr-5 md:mr-3"
            href=""
          >
            <FontAwesomeIcon icon={faPinterest} />
          </a>
          <a className="text-white text-3xl hover:text-teal-400" href="">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
