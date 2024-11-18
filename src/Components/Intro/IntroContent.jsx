import { HiOutlineArrowLongRight } from "react-icons/hi2";
import Button from "../Shared/Button/Button";
import SocialIcons from "../SocialIcons/SocialIcons";

const IntroContent = () => {
  return (
    <div className="flex flex-col gap-10">
      <div className="space-y-3">
        <h1 className="text-2xl font-bold lg:text-3xl leading-loose capitalize">
          Hi, I&apos;m Najatul Islam. <br /> Web Developer based <br /> in
          Bangladesh.
        </h1>
        <p className="text-justify">
          I am a passionate JavaScript developer with knowledge of frameworks in
          both frontend and backend technologies. Basically, I am MERN
          developer. I am currently pursuing a diploma in Computer Science at
          Rangpur Polytechnic Institute in Rangpur. I always focus on learning
          new technology.
        </p>
      </div>
      <div className="flex justify-start items-center gap-5">
        <Button text={'Get in touch'} icon={<HiOutlineArrowLongRight/>}/>
        <SocialIcons />
      </div>
    </div>
  );
};

export default IntroContent;
