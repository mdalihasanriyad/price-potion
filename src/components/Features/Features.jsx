import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';

const Features = ({Feature}) => {
    return (
        <div className='flex items-center'>
            <p><AiFillCheckCircle></AiFillCheckCircle>{Feature}</p>
        </div>
    );
};

Features.propTypes = {
    Feature: PropTypes.string,
}


export default Features;