import Header from "../../Components/Shared/Header/Header";
import { projectItem } from "../../Utils/projectItem";
import MyWorkCard from "../../Components/Project/MyWorkCard";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const MyWork = () => {
  return (
    <div className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Header text1={"My"} text2={"Projects"} />
      </motion.div>
      <section className="shadow-in py-4 md:px-5 rounded-xl relative">
        {/* Swiper Navigation Buttons */}
        <button className="absolute top-1/2 left-4 z-10 bg-gray-800 text-white p-2 rounded-full transform -translate-y-1/2 hover:bg-gray-600 hover:text-blue-light transition" id="prevSlide">
          <FaArrowLeft size={20}/>
        </button>
        <button className="absolute top-1/2 right-4 z-10 bg-gray-800 text-white p-2 rounded-full transform -translate-y-1/2 hover:bg-gray-600 hover:text-blue-light transition" id="nextSlide">
          <FaArrowRight size={20}/>
        </button>

        <Swiper
          modules={[Autoplay, Navigation, Pagination]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          navigation={{
            nextEl: "#nextSlide",
            prevEl: "#prevSlide",
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          speed={1500}
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="mySwiper"
        >
          {projectItem?.map((item) => (
            <SwiperSlide key={item?.id} className="flex justify-center">
              <MyWorkCard item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default MyWork;
