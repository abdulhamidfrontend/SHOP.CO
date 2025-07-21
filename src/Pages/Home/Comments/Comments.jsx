import { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { GoStarFill } from "react-icons/go";
import CheckedImg from "../../../assets/checked.png";
import "swiper/css";
import "swiper/css/navigation";
import "../../../styles.css";
import { Navigation } from "swiper/modules";
import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeft } from "react-icons/fa6";
import { Autoplay } from "swiper/modules";

export default function Comments() {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/comments")
      .then((res) => res.json())
      .then((data) => {
        setComments(data.comments);
      })
      .catch((err) => {
        console.error("Xatolik:", err);
      });
  }, []);

  return (
    <div className="relative py-20">
      <div className="flex items-end justify-between mb-4 px-4">
        <h1 className="title font-bold text-[48px] max-[400px]:text-2xl max-[930px]:text-4xl max-[650px]:text-3xl">
          OUR HAPPY CUSTOMERS
        </h1>
        <div className="flex gap-4">
          <button className="swiper-button-prev-custom text-xl  flex items-center justify-center">
            <FaArrowLeft />
          </button>
          <button className="swiper-button-next-custom text-xl  flex items-center justify-center">
            <FaArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        navigation={{
          nextEl: ".swiper-button-next-custom",
          prevEl: ".swiper-button-prev-custom",
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        breakpoints={{
          1100: { slidesPerView: 3 },
          768: { slidesPerView: 2 },
          0: { slidesPerView: 1 },
        }}
      >
        {comments.map((comment) => (
          <SwiperSlide key={comment.id}>
            <div className="border  comment flex flex-col gap-3 py-7 px-8 border-[#e6e6e6] rounded-[20px] h-full">
              <div className="flex items-center gap-1.5 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <GoStarFill key={i} />
                ))}
              </div>
              <div className="flex items-center gap-1">
                <p className="title text-black">{comment.user.fullName}</p>
                <img className="w-6" src={CheckedImg} alt="checked" />
              </div>
              <p className="description text-black!">{comment.body}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
