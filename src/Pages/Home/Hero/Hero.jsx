import HeroImg from "../../../assets/heroimg.png";
const Hero = () => {
  return (
    <div className="flex items-center max-[1100px]:flex-col justify-between">
      <div className="left flex flex-col gap-8">
        <h1 className="font-bold max-w-[577px] max-[770px]:text-[45px] max-[370px]:text-[32px] max-[700px]:max-w-[100%] max-[550px]:text-4xl text-[60px] leading-[100%] title">
          FIND CLOTHES THAT MATCHES YOUR STYLE
        </h1>
        <p className="description max-w-[577px] font-normal max-[600px]:max-w-[100%] max-[370px]:text-xs max-[550px]:text-[14px] text-[16px] leading-[137%]">
          Browse through our diverse range of meticulously crafted garments,
          designed to bring out your individuality and cater to your sense of
          style.
        </p>
        <button className="blackbtn w-fit py-[15px] max-[450px]:w-full rounded-[62px] px-[67px]">
          Shop Now
        </button>
        <div className="flex items-center max-[430px]:flex-col  max-[685px]:flex-wrap max-[685px]:w-full max-[685px]:m-auto  gap-8">
          <div className="flex flex-col max-[400px]:items-center items-start">
            <h1 className="font-bold max-[1315px]:text-3xl text-[40px] title">
              200+
            </h1>
            <p className="description font-normal text-[16px] leading-[137%]">
              International Brands
            </p>
          </div>
          <div className="flex flex-col px-10 max-[400px]:items-center items-start max-[475px]:border-none max-[475px]:px-0 border-l border-r">
            <h1 className="font-bold max-[1315px]:text-3xl text-[40px] title">
              2,000+
            </h1>
            <p className="description font-normal text-[16px] leading-[137%]">
              High-Quality Products
            </p>
          </div>
          <div className="flex flex-col max-[400px]:items-center items-start">
            <h1 className="font-bold max-[1315px]:text-3xl text-[40px] title">
              30,000+
            </h1>
            <p className="description font-normal text-[16px] leading-[137%]">
              Happy Customers
            </p>
          </div>
        </div>
      </div>
      <div className="right">
        <img src={HeroImg} className="w-[650px] " alt="hero img" />
      </div>
    </div>
  );
};

export default Hero;
