import PropTypes from "prop-types";
import ImageCard from "../atoms/ImageCard";
const Body = ({ data }) => {
  return (
    <>
      <div className="pt-[1rem]">
        <p className="text-[#555] text-center md:text-[1.5rem] text-[0.75rem] font-normal md:leading-[2.875rem] font-[nunito]">
          {data.description}
        </p>
        <div className="md:pt-[6.19rem] pt-[2.69rem]">
          <ImageCard img={data.dashBoardImg} caption={data.dashBoardCaption} />
        </div>
        <div className="flex gap-[1.5rem] md:pt-[5.12rem] pt-[3.62rem]">
          <ImageCard img={data.levelTwoImg1} caption={data.levelTwoCaption1} />
          <ImageCard img={data.levelTwoImg2} caption={data.levelTwoCaption2} />
        </div>
        <div className="md:pt-[5.12rem] pt-[3.62rem]">
          <ImageCard
            img={data.levelThreeImg}
            caption={data.levelThreeCaption}
          />
        </div>
        <div className="flex gap-[1.5rem] md:pt-[5.12rem] pt-[3.62rem]">
          <ImageCard
            img={data.levelFourImg1}
            caption={data.levelFourCaption1}
          />

          <ImageCard
            img={data.levelFourImg2}
            caption={data.levelFourCaption2}
          />
        </div>
        <div className="md:pt-[6.19rem] pt-[2.69rem]">
          <ImageCard img={data.levelFiveImg} caption={data.levelFiveCaption} />
        </div>
        <div className="flex md:flex-row flex-col  md:pt-[11.81rem] pt-[5.38rem]">
          <div className="md:w-[39.5rem] w-full md:h-[33.5rem] h-[17.75rem]">
            <img
              className="w-full h-full object-fit"
              src={data.levelSixImg}
              alt="image"
            />
          </div>
          <div className="px-[1.44rem] md:w-[38.437rem] w-full flex flex-col justify-between md:text-start text-center">
            <h2 className="text-[#000] font-[euclid] text-[3rem] font-[700] leading-normal hidden md:block">
              Geely Emgrand ec7
            </h2>
            <p className="md:text-[1.25rem] text-[0.75rem] font-[nunito] text-[#555] md:leading-[2.875rem] leading-[1.96rem] pt-[1.44rem]md:pt-0">
              This car is perfect for those looking for a reliable and stylish
              ride. It offers a sporty design, with a sleek exterior and
              luxurious interior. It has a powerful engine, top-of-the-line
              safety features, and advanced technology to keep you connected.
              The spacious cabin is perfect for long road trips and everyday
              commutes alike. With its comfortable seating, intuitive
              touchscreen controls, and plenty of cargo space, this car has it
              all. Take it out for a spin and experience the thrill of driving a
              truly remarkable vehicle.
            </p>
            <div className="flex justify-center md:justify-start mt-[1.44rem] md:mt-0">
              <button className="border-[1px] border-[#28100E] w-[13.4375rem] h-[3.6875rem] flex items-center justify-center text-[1.25rem] font-[euclid] leading-normal">
                Watch Video
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Body.propTypes = {
  data: PropTypes.shape({
    description: PropTypes.string,
    dashBoardImg: PropTypes.string,
    dashBoardCaption: PropTypes.string,
    levelTwoImg1: PropTypes.string,
    levelTwoCaption1: PropTypes.string,
    levelTwoImg2: PropTypes.string,
    levelTwoCaption2: PropTypes.string,
    levelThreeImg: PropTypes.string,
    levelThreeCaption: PropTypes.string,
    levelFourImg1: PropTypes.string,
    levelFourCaption1: PropTypes.string,
    levelFourImg2: PropTypes.string,
    levelFourCaption2: PropTypes.string,
    levelFiveImg: PropTypes.string,
    levelFiveCaption: PropTypes.string,
    levelSixImg: PropTypes.string,
    levelSixCaption: PropTypes.string,
  }),
};
export default Body;
