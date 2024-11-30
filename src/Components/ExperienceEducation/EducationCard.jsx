import PropTypes from 'prop-types';

const EducationCard = ({ item }) => {
  const { degree, institution, startYear, endYear, description } = item;
  return (
    <div className="px-3 py-5 shadow-in flex flex-col justify-start items-start h-full rounded-md">
      <div className="flex text-center">
        <h2 className="shadow-up rounded-full py-2 px-3 font-bold font-Cormorant">
          {startYear} - {endYear}
        </h2>
      </div>
      <div className="py-5">
        <h3 className="text-xl font-semibold font-Cormorant text-white uppercase">
          {degree}
        </h3>
        <h4 className="text-base  font-Cormorant text-gray-400">
          {institution}
        </h4>
        <p className="text-wrap pt-2">{description}</p>
      </div>
    </div>
  );
};

EducationCard.propTypes = {
  item: PropTypes.shape({
    degree: PropTypes.string.isRequired,
    institution: PropTypes.string.isRequired,
    startYear: PropTypes.string.isRequired,
    endYear: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  }),
}

export default EducationCard;
