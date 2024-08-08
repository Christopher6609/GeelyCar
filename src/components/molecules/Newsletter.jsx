

const Newsletter = () => {
  return (
    <div className="flex md:flex-row flex-col items-center justify-center mt-[4.63rem]">
      <div className="md:w-[43.25rem] md:h-[23.4375rem] w-[21.4375rem] h-[11.0625rem]">
        <img
          src="/img/Silver-5 1.png"
          className="w-full h-full object-fit"
          alt="newsletterImage"
        />
      </div>
      <div className="text-start flex flex-col md:h-[16.5rem] justify-between space-y-[1rem] px-[1rem]">
        <h2 className="uppercase md:text-[3rem] text-[1.25rem] text-[#121214] font-[700] leading-normal">
          Find out first.
        </h2>
        <p className="text-[#555] md:text-[1.5rem] text-[1rem] font-[600] md:leading-[2.093rem] leading-[1.375rem]">
          Stay up to date with current offers and the latest news from the world
          of GEELY
        </p>
        <form>
          <div className="md:w-[33.1875rem] flex">
            <input
              className="md:h-[3.625rem] h-[2.6875rem] md:w-[23rem] w-[15.8125rem] p-[0.9375rem]"
              type="email"
              placeholder="Email Address"
              
              required
            />
            <button onSubmit={(event)=> {event.preventDefault(); alert('Subscription Successful!') }} className="md:h-[3.625rem] h-[2.6875rem] md:w-[10.375rem] w-[5.8125rem] bg-[#0F0A09] text-[#FFF] ">
              Enter
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
