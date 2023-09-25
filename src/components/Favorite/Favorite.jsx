
import PropTypes from 'prop-types'

const Favorite = ({phone}) => {

    const {phone_name,image,brand_name,price,rating} = phone || {};
    return (
        <div className="relative flex w-full flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md border border-rose-300">
        <div className="relative mx-4 mt-4 h-52 rounded-xl bg-white bg-clip-border text-gray-700">
          <img
            src={image}
            className=" h-full w-full object-contain"
          />
        </div>
        <div className="p-6">
          <div className="mb-2 flex items-center justify-between">
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              {phone_name}
            </p>
            <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
              ${price}
            </p>
          </div>
          <div className="flex justify-between">
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                {brand_name}
            </p>
            <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                {rating}
            </p>
          </div>
        </div>
        <div className="p-6 pt-0">
            <button
              className="block w-full select-none rounded-lg bg-gray-400 text-white py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              type="button"
            >
              Remove
            </button>
        </div>
      </div>
    );
};
Favorite.propTypes = {
    phone:PropTypes.object,
}
export default Favorite;