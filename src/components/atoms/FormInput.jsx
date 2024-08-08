const FormInput = ({ ...otherProps }) => {
  return (
    <>
      <input
        {...otherProps}
        className="md:w-[37.4375rem] w-full md:h-[4.5rem] p-[0.625rem] bg-transparent border text-[1.25rem] text-[#FFF] font-[500] leading-normal"
      />
    </>
  );
};

export default FormInput;
