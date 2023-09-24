import Phone from "../Phone/Phone";
import PropTypes from "prop-types"

const Category = ({phones}) => {

    return (
        <section className=" bg-white">
            <div className=" max-w-screen-xl mx-auto py-8">
                <h2 className="text-2xl text-center mb-5">All Category Display Here</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5" >
                    {
                        phones?.map(phone => <Phone phone={phone} key={phone.id}></Phone>)
                    }
                </div>
            </div>

        </section>
    );
};
Category.propTypes = {
    phones:PropTypes.array,
}

export default Category;