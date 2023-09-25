import { useLoaderData } from "react-router-dom";
// import Category from "../../components/Category/Category";
import Phone from "../../components/Phone/Phone";

const Home = () => {

    const phones = useLoaderData();

    return (
        <div>
            <section className="h-96 bg-rose-500 w-full">
                        this banner
            </section>
            {/* Cartegory section  with card*/}
            {/* <Category phones={phones}></Category> */}
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
        </div>
    );
};

export default Home;