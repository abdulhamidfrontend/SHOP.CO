import Zara from "../../../assets/zara.png";
import gucci from "../../../assets/gucci.png";
import calvinklein from "../../../assets/calvinklein.png";
import versace from "../../../assets/versace.png";
import prada from "../../../assets/prada.png";

const Companies = () => {
  return (
    <div id="brands" className="py-10  w-full">
      <div className="flex items-center gap-25 max-[850px]:gap-15 max-[550px]:gap-8.5 flex-wrap justify-center">
        <a
          href="https://www.versace.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-9 max-[850px]:h-6 max-[390px]:h-4"
            src={versace}
            alt="Versace Img"
          />
        </a>
        <a
          href="https://www.zara.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-9 max-[850px]:h-6 max-[390px]:h-4"
            src={Zara}
            alt="Zara img"
          />
        </a>
        <a
          href="https://www.gucci.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-9 max-[850px]:h-6 max-[390px]:h-4"
            src={gucci}
            alt="Gucci img"
          />
        </a>
        <a
          href="https://www.prada.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-9 max-[850px]:h-6 max-[390px]:h-4"
            src={prada}
            alt="Prada Img"
          />
        </a>
        <a
          href="https://www.calvinklein.us/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            className="h-9 max-[850px]:h-6 max-[390px]:h-4"
            src={calvinklein}
            alt="Calvin Klein Img"
          />
        </a>
      </div>
    </div>
  );
};

export default Companies;
