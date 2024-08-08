import { Fragment, useState } from "react";
import { interior } from "../../../page_data";
import { exterior } from "../../../page_data";
import Body from "../molecules/Body";
import Heading from "../molecules/Heading";

const Landing = () => {
  const [body, setBody] = useState(interior);
  const [active, setActive] = useState('interior');

  const handleChange = () => {
    const exteriorDetails = exterior.map((data) => data);
    setBody(exteriorDetails) ? setActive('underline') : null;
    setActive('exterior');
  };
  const defaultChange = () => {
    const interiorDetails = interior.map((data) => data);
    setBody(interiorDetails);
    setActive('interior');
  };

  return (
    <main className="max-w-[1440px] mx-auto ">
      {body.map((data) => {
        return (
          <Fragment key={data.id}>
            <div>
              <Heading data={data} />
              <div className="text-center pt-[2.25rem]">
                <h1 className="font-[euclid] md:text-[4rem] text-[1.5rem] font-[700] leading-normal">
                  {data.heading}
                </h1>
              </div>
              <div className="text-center md:space-x-[3.87rem] md:py-[6.19rem] space-x-[1.63rem] py-[2.31rem]">
                <button
                  onClick={defaultChange}
                  className={`uppercase md:text-[2.25rem] text-[1.125rem] font-[700] font-[euclid] text-[#8A8A8A] ${active == 'interior' ? 'underline text-[#000] ' : null}`}
                >
                  interior
                </button>
                <button
                  onClick={handleChange}
                  className={`uppercase md:text-[2.25rem] text-[1.125rem] font-[700] font-[euclid] text-[#8A8A8A]  ${active == 'exterior' ? 'underline text-[#000]' : null}`}
                >
                  exterior
                </button>
              </div>
              <Body data={data}/>
            </div>
          </Fragment>
        );
      })}
      
    </main>
  );
};

export default Landing;
