import PropTypes from "prop-types";

const ImageCard = ({ img, caption, width, height }) => {
  
  return (
    <div className="">
      <div className=" md:h-[38.0625rem]" style={{ width, height }}>
        <img className="w-full h-full object-fit" src={img} alt="image" />
      </div>
      <div className="text-center md:pt-[2.25rem] pt-[0.56rem]">
        <p className="text-[#444] md:text-[2.25rem] text-[0.875rem] font-[euclid] leading-normal font-[700]">
          {caption}
        </p>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
  
    img: PropTypes.string,
    caption: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};
export default ImageCard;
