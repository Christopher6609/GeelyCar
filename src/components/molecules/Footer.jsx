import {
  faFacebook,
  faLinkedin,
  faMedium,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <div className="bg-[#0F0A09] text-[#FFF]">
      <div className="flex md:flex-row flex-col md:justify-between   md:py-[4.06rem] py-[1.69rem] md:px-[6.13rem] items-center md:items-start mt-[3.56rem]">
        <div className="md:w-[7.75rem]  w-[4.8125rem] md:h-[4.375rem] h-[2.8675rem]">
          <img
            className="w-full h-full object-fit"
            src="img/Geely-Logo-removebg-preview 2.png"
          />
        </div>

        <div className=" space-y-[1.94rem] mt-[2.81rem] md:mt-0">
          <h1 className="uppercase md:text-[1.25rem] text-[1rem] font-[700] leading-normal">
            Quick Links
          </h1>
          <ul className="md:text-[1rem] text-[0.8125rem] leading-normal font-[400] md:text-start  space-y-[1.94rem]">
            <li>
              <a href="#">About Geely</a>
            </li>
            <li>
              <a href="#">Service</a>
            </li>
            <li>
              <a href="#">Gallery</a>
            </li>
            <li>
              <a href="#">Products</a>
            </li>
          </ul>
        </div>
        <div className=" space-y-[1.94rem] mt-[2.81rem] md:mt-0">
          <h1 className="uppercase md:text-[1.25rem] text-[1rem] font-[700] leading-normal">
            Support
          </h1>
          <ul className="md:text-[1rem] text-[0.8125rem] leading-normal font-[400] md:text-start  space-y-[1.94rem]">
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Terms of Service</a>
            </li>
            <li>
              <a href="#">Privacy Policy</a>
            </li>
            <li>
              <a href="#">Cookies</a>
            </li>
          </ul>
        </div>
        <div className=" space-y-[1.94rem] mt-[2.81rem] md:mt-0">
          <h1 className="uppercase md:text-[1.25rem] text-[1rem] font-[700] leading-normal">
            Social media
          </h1>
          <ul className="text-[1rem] flex leading-normal font-[400] justify-between space-x-[0.5rem] ">
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="md:w-[2.1875rem] w-[0.92856rem] md:h-[2.1875rem] h-[0.92856rem]"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faFacebook}
                  className="md:w-[2.1875rem] w-[0.92856rem] md:h-[2.1875rem] h-[0.92856rem]"
                />
              </a>
            </li>
            <li>
              <a href="#">
                <FontAwesomeIcon
                  icon={faMedium}
                  className="md:w-[2.1875rem] w-[0.92856rem] md:h-[2.1875rem] h-[0.92856rem]"
                />
              </a>
            </li>
          </ul>
        </div>

        
      </div>
      <hr />
      <div className="py-[1.5rem] text-center">
          
          <p className="md:text-[0.875rem] text-[0.75rem] md:font-[700] font-[500] leading-normal">&copy; 2024 copyight reserved</p>
        </div>
    </div>
  );
};

export default Footer;
