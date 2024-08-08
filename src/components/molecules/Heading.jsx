import PropTypes from 'prop-types';

const Heading = ({data}) => {
  return (
    <div className="w-full">
      <img
        className="object-contain w-full h-full hidden md:block"
        src={data.desktopHeadImg}
        alt="home-image"
      />
      <img
        className="object-contain w-full h-full md:hidden "
        src={data.mobileHeadImg}
        alt="home-image"
      />
    </div>
    
  );
};

Heading.propTypes = {
    data:PropTypes.shape({
        desktopHeadImg:PropTypes.string,
        mobileHeadImg:PropTypes.string
    })
}
export default Heading;
