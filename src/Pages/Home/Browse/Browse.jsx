import CasualBg from "../../../assets/casual.png";
import FormalBg from "../../../assets/formal.png";
import partybg from "../../../assets/party.png";
import GymBg from "../../../assets/gym.png";

const Browse = () => {
  return (
    <div className="bg-[#f0f0f0] py-[70px] max-[500px]:px-[30px] max-[550px]:py-10 px-[64px] rounded-[40px]">
      <div>
        <h1 className="title text-black text-center font-bold text-[48px] max-[765px]:text-4xl  max-[550px]:text-3xl max-[450px]:text-2xl">
          BROWSE BY DRESS STYLE
        </h1>
      </div>
      <div className="flex flex-wrap max-[1377px]:flex-col  gap-5 mt-10 justify-center">
        <div
          className="py-6 px-9 w-[407px] max-[1377px]:w-full max-[550px]:h-[190px] h-[289px] bg-cover bg-center rounded-[20px] flex items-start "
          style={{
            backgroundImage: `url(${CasualBg})`,
          }}
        >
          <h1 className="title text-black text-2xl font-semibold">Casual</h1>
        </div>

        <div
          className="py-6 px-9 w-[684px] max-[1377px]:w-full max-[550px]:h-[190px] h-[289px] bg-cover bg-center rounded-[20px] flex items-start "
          style={{
            backgroundImage: `url(${FormalBg})`,
          }}
        >
          <h1 className="title text-black text-2xl font-semibold">Formal</h1>
        </div>

        <div
          className="py-6 px-9 w-[684px] max-[1377px]:w-full max-[550px]:h-[190px] h-[289px] bg-cover bg-center rounded-[20px] flex items-start "
          style={{
            backgroundImage: `url(${partybg})`,
          }}
        >
          <h1 className="title text-black text-2xl font-semibold">Party</h1>
        </div>

        <div
          className="py-6 px-9 w-[407px] max-[1377px]:w-full max-[550px]:h-[190px] h-[289px] bg-cover bg-center rounded-[20px] flex items-start "
          style={{
            backgroundImage: `url(${GymBg})`,
          }}
        >
          <h1 className="title text-black text-2xl font-semibold">Gym</h1>
        </div>
      </div>
    </div>
  );
};

export default Browse;
