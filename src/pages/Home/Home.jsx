import { useLoaderData } from "react-router-dom";
import Category from "../../components/Category/Category";

const Home = () => {

    const phones = useLoaderData();

    return (
        <div>
            <section className="h-96 bg-rose-500 w-full">
                        this banner
            </section>
            {/* Cartegory section  with card*/}
            <Category phones={phones}></Category>
        </div>
    );
};

export default Home;