const FullView = () => {
  return (
    <>
      <div className="md:w-full md:h-[43.875rem] ">
        <img
          className="w-fit  h-full object-contain"
          src={`/img/Component 1.png`}
          alt="Full View"
        />
      </div>
      <div className="flex justify-center items-center">
        <div className="md:w-[62.375rem] w-full flex justify-between ">
          <div className="text-start">
            <p className="md:text-[1.25rem] text-[0.378rem] leading-normal text-[#363636]">
              0 - 60 mph
            </p>
            <p className="md:text-[1.875rem] text-[0.568rem] font-[700]">3.6 sec</p>
          </div>
          <div className="text-start">
            <p className="md:text-[1.25rem] text-[0.378rem] leading-normal text-[#363636]">
              Power up to
            </p>
            <p className="md:text-[1.875rem] text-[0.568rem] font-[700]">600 bph</p>
          </div>
          <div className="text-start">
            <p className="md:text-[1.25rem] text-[0.378rem] leading-normal text-[#363636]">
              Length
            </p>
            <p className="md:text-[1.875rem] text-[0.568rem] font-[700]">4638 mm</p>
          </div>
          <div className="text-start">
            <p className="md:text-[1.25rem] text-[0.378rem] leading-normal text-[#363636]">
              Engine Dispacement
            </p>
            <p className="md:text-[1.875rem] text-[0.568rem] font-[700]">1498 cc</p>
          </div>
          <div className="text-start">
            <p className="md:text-[1.25rem] text-[0.378rem] leading-normal text-[#363636]">
              Fuel Type
            </p>
            <p className="md:text-[1.875rem] text-[0.568rem] font-[700]">Gasoline</p>
          </div>
        </div>
      </div>
    </>
  );
};
export default FullView;
