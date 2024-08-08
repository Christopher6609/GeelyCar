import FormInput from "../atoms/FormInput";
import { useState } from "react";

const Contact = () => {
  const defaultFieldfields = {
    fullname: "",
    email: "",
    message: "",
  };

  const [formFields, setFormFields] = useState(defaultFieldfields);
  const { fullname, email, message } = formFields;

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormFields({ ...formFields, [name]: value });
  };
  const submitHandler = (event) => {
    event.preventDefault();
    alert("Thank you for message, Our team will reach out via email provided");

    setFormFields(defaultFieldfields);
  };

  return (
    <div className="bg-contact-section md:bg-fixed md:h-[50.125rem] md:pt-[5.88rem] pt-[2.75rem] bg-cover bg-center md:px-[3.68rem] px-[1rem] py-[1.94rem]  ">
      <div className="flex md:flex-row flex-col items-center h-full justify-between">
        <div className="text-[#FFF] md:w-[38.0625rem] md:text-start ">
          <h1 className="md:text-[3rem] text-[1.25rem] text-center md:text-start font-[700] ">
            Want To Know More About Geely Emgrand ec7?
          </h1>
        </div>
        <div className="md:w-[37.4375rem] mt-[1.94rem] md:mt-0 ">
          <form className="space-y-[1.25rem]">
            <FormInput
              type="text"
              placeholder="Full Name"
              name="fullname"
              value={fullname}
              onChange={handleChange}
              required
            />
            <FormInput
              type="email"
              placeholder="Email Address"
              name="email"
              value={email}
              onChange={handleChange}
              required
            />
            <textarea
              className="md:w-[37.4375rem] w-full bg-transparent border p-[0.625rem] text-[1.25rem] text-[#898989] font-[500] leading-normal"
              rows="6"
              name="message"
              placeholder="Message"
              value={message}
              onChange={handleChange}
              required
            ></textarea>
            <div>
              <button
                onClick={submitHandler}
                className="bg-[#FFF] w-full md:h-[3.6875rem] h-[2.937rem] p-[0.625rem]"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Contact;
