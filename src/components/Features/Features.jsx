import PropTypes from 'prop-types';
import { AiFillCheckCircle } from 'react-icons/ai';

const Features = ({feature}) => {
    return (
        <div className='flex items-center'>
            <p className='flex items-center gap-2'><AiFillCheckCircle></AiFillCheckCircle>{feature}</p>
        </div>
    );
};

Features.propTypes = {
    feature: PropTypes.string,
}


export default Features;