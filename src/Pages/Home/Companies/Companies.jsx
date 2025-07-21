import Zara from "../../../assets/zara.png";
import gucci from "../../../assets/gucci.png";
import calvinklein from "../../../assets/calvinklein.png";
import versace from "../../../assets/versace.png";
import prada from "../../../assets/prada.png";

const Companies = () => {
  return (
    <div className="grid grid-cols-5 w-full m-auto py-10 ">
      <img className="h-9" src={versace} alt="Versace Img" />
      <img className="h-9 " src={Zara} alt="Zara img" />
      <img className="h-9" src={gucci} alt="gucci img" />
      <img className="h-9" src={prada} alt="Prada Img" />
      <img className="h-9" src={calvinklein} alt="Calvin Klein Img" />
    </div>
  );
};

export default Companies;
