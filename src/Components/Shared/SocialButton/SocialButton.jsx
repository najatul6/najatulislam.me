import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SocialButton = ({icon,link,text}) => {
  return (
    <Link to={link} target='_blank' className='flex flex-col justify-center items-center group relative'>
    <button className="shadow-up duration-300 ease-in-out rounded-full text-2xl font-bold p-3 hover:shadow-in hover:text-blue-light active:shadow-in active:text-blue-light">
        {icon}
    </button>
    <p className='justify-center items-center font-Cormorant text-blue-light font-bold capitalize absolute left-0 right-0 bottom-12 hidden group-hover:flex'>{text}</p>
    </Link>
  )
}

SocialButton.propTypes = {
  icon: PropTypes.node,
  link: PropTypes.string,
  text: PropTypes.string,
}

export default SocialButton