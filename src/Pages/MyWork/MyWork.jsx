
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Header from "../../Components/Shared/Header/Header";
import { projectItem } from "../../Utils/projectItem";
import MyWorkCard from "../../Components/Project/MyWorkCard";
import "swiper/css";

const MyWork = () => {
  return (
    <div className="mb-8">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
      >
        <Header text1={"My"} text2={"Projects"} />
      </motion.div>
      <section className="shadow-in py-4 md:px-5 rounded-xl">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          loop={true}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
            speed: 4500,
          }}
          speed={4500}
          freeMode={true}
          breakpoints={{
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
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