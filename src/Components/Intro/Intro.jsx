import IntroContent from "./IntroContent";

const Intro = () => {
  return (
    <section className="flex flex-col-reverse lg:flex-row gap-5 lg:gap-10 justify-between items-center py-5 px-5">
      <div className="w-full lg:w-[50%]">
        <IntroContent/>
      </div>
      <div className="">
        <div className="relative overflow-hidden w-full shadow-up animate-profileAnimate">
          <img
            src="/Najatul_Banner.png"
            alt="Najatul Profile Picture"
            className="w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Intro;
