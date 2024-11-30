import PropTypes from 'prop-types';

const ExperienceCard = ({ item }) => {
  const { company, title, location, startDate, endDate, link, description } = item;
  return (
    <div className="px-3 py-5 shadow-in flex flex-col justify-start items-start h-full rounded-md">
      <div className="flex text-center">
        <h2 className="shadow-up rounded-full py-2 px-3 font-bold font-Cormorant uppercase">
          {startDate} - {endDate}
        </h2>
      </div>
      <div className="py-5">
        <h3 className="text-xl font-semibold font-Cormorant text-white uppercase">
          {title} - <a href={link} className="text-blue-light capitalize">{company}</a>
        </h3>
        <h4 className="text-base  font-Cormorant text-gray-400">
          {location}
        </h4>
        <p className="text-wrap pt-2">{description}</p>
      </div>
    </div>
  );
};

ExperienceCard.propTypes = {
    item: PropTypes.shape({
      company: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      location: PropTypes.string.isRequired,
      startDate: PropTypes.string.isRequired,
      endDate: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    }).isRequired,
}


export default ExperienceCard;
