import { BsEnvelope } from "react-icons/bs";

const Offers = () => {
  return (
    <div className="bg-black flex items-center max-[850px]:flex-col max-[550px]:px-6 max-[850px]:gap-8 justify-between rounded-[20px] py-11 px-[63px]">
      <div className="left">
        <h1 className="title max-[1190px]:text-2xl  max-[1190px]:max-w-fit font-bold text-[40px] leading-[112%] max-w-[580px] text-white!">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h1>
      </div>
      <div className="right">
        <form action="" className="flex flex-col  gap-3.5">
          <div className="flex items-center gap-3 bg-white max-[480px]:w-full max-[400px]:py-2 w-[349px] rounded-[62px] py-3 px-4">
            <BsEnvelope size={24} color="gray" />
            <input
              type="email"
              className="focus:outline-none max-[400px]:text-xs text-black  w-full"
              placeholder="Enter your email address"
            />
          </div>
          <button
            type="submit"
            className="bg-white py-3 max-[1190px]:text-[14px] max-[480px]:w-full max-[480px]:px-15 max-[400px]:text-xs text-black! px-[88.5px] rounded-[62px]"
          >
            Subscribe to Newsletter
          </button>
        </form>
      </div>
    </div>
  );
};

export default Offers;
