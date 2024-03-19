import PropTypes from 'prop-types';
import Features from "../Features/Features";

const PriceOption = ({ option }) => {

    const { name, price, features } = option;
    return (
        <div className='bg-purple-600 flex flex-col rounded-xl p-6 m-4 text-center text-white'>
            <h2>
                <span className='text-5xl font-extrabold'>Price:{price}</span>
                <span className='text-2xl'>/month</span>
            </h2>
            <h1 className='text-4xl my-8'>Name:{name}</h1>
            <div className=" flex-grow">
                {
                    features.map((feature,index) => <Features key={index} feature={feature}></Features>)
                }
            </div>
            <button className='mt-12 bg-green-600 w-full py-2 hover:bg-green-900 rounded-xl'>Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object,
}

export default PriceOption;