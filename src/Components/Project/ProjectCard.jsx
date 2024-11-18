import Button from "../Shared/Button/Button";
import { VscLiveShare } from "react-icons/vsc";
import { IoGitBranch } from "react-icons/io5";
import PropTypes from 'prop-types';

const ProjectCard = ({ item }) => {
  return (
    <div className="flex flex-col lg:flex-row justify-between items-center gap-6 p-5 w-full shadow-up rounded-xl">
      <div className="flex flex-col gap-5">
        <h3 className="capitalize text-xl font-bold text-white">{item?.name}</h3>
        <h4>{item?.description}</h4>
        <h4>{item?.liveLink}</h4>
        <div>
          <h3 className="text-lg font-bold text-white underline">Features :</h3>
          {item?.features?.map((listItem, index) => (
            <li key={index}>{listItem}</li>
          ))}
        </div>
        <div className="flex gap-6 justify-start items-center mt-5">
            <Button text="Git Hub" link={`${item?.github_link}`} icon={<IoGitBranch />} />
            <Button text="Live Link" link={`${item?.liveLink}`}  icon={<VscLiveShare />} />
        </div>
      </div>
      <div className="overflow-hidden w-full lg:w-1/3 h-[400px] rounded-xl shadow-up">
        <img
          src={item?.image}
          alt="Project image"
          className=" h-[400px]  w-full"
        />
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  item: PropTypes.object.isRequired,
};


export default ProjectCard;
