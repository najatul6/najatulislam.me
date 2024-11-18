import SocialButton from "../Shared/SocialButton/SocialButton";
import { FaGithub } from "react-icons/fa";
import { TiSocialLinkedinCircular } from "react-icons/ti";
import { AiFillTwitterCircle } from "react-icons/ai";
import { PiFacebookLogoBold } from "react-icons/pi";

const SocialIcons = () => {
  const icons = [
    { icon: <FaGithub />, name: "Github", url: "https://github.com/najatul6" },
    {
      icon: <TiSocialLinkedinCircular />,
      name: "Linkedin",
      url: "https://www.linkedin.com/in/najatul-islam-94193b1b3/",
    },
    {
      icon: <AiFillTwitterCircle />,
      name: "Twitter",
      url: "https://twitter.com/MNajatul",
    },
    {
      icon: <PiFacebookLogoBold />,
      name: "Facebook",
      url: "https://www.facebook.com/najatul6/",
    },
  ];
  return (
    <div className="flex gap-6 justify-center items-center">
      
      {icons.map(({ icon, name, url }) => (
        <SocialButton key={url} link={url} text={name} icon={icon} />
      ))}
    </div>
  );
};

export default SocialIcons;
