import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Request = () => {
    return(
        <>
            <div className="flex flex-col justify-center items-center md:mt-[14.56rem] mt-[6.39rem]">
            <div className="md:w-[54.125rem]">
                <h1 className="md:text-[3rem] text-center text-[1.25rem] text-[#121214] font-[700]">
                This is Perfect Time to Own a Geely Emgrand ec7
                </h1>
            </div>
            <div className="bg-request-section md:bg-fixed md:h-[38.5625rem] h-[15.75rem] w-full mt-[2.62rem] text-[#FFF] flex items-center justify-center bg-cover bg-center" >
                <div className="space-y-[3rem] flex flex-col items-center">
                    <h1 className="md:text-[3rem] text-[1.125rem] font-[700] leading-normal">Request A Test Drive</h1>
                    <button className="md:w-[16.0625rem] w-[7.75rem] md:h-[3.6875rem] h-[2.065rem] md:text-[1.25rem] text-[0.875rem] border ">Request <FontAwesomeIcon  className="px-[0.62rem]" icon={faArrowRight}/></button>
                </div>
            </div>
            </div>
        </>
    )
}
export default Request;