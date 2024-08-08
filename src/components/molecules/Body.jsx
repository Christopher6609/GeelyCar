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
  }),
};
export default Body;
