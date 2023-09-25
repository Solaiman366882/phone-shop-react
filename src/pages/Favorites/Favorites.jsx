import { useEffect, useState } from "react";
import Favorite from "../../components/Favorite/Favorite";

const Favorites = () => {

    const [favorites,setFavorite] = useState([]);

    const [noFound,setNoFound] = useState(false);

    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favPhones'));

        if(favoriteItems){
            setFavorite(favoriteItems);
        }
        else{
            setNoFound(true)
        }
    },[]);
    const handleRemoveAll = () => {
        localStorage.clear();
        setNoFound(true);
        setFavorite([]);

    }



    return (
        <div className=" min-h-[80vh] w-full flex justify-center items-center py-8">
            {
                noFound ? 
                <p className="text-2xl text-red-700 font-bold">No Data Found</p>
                :
                <div className="w-full">
                    <div className="pb-8 text-center">
                            <button onClick={handleRemoveAll} className="p-2 bg-green-600 text-white rounded-lg">Remove All</button>
                    </div>
                    <did className="w-full grid grid-cols-2 max-w-screen-xl mx-auto gap-5">
                        
                        {
                            favorites.map(phone => <Favorite key={phone.id} phone={phone}></Favorite>)
                        }
                        
                    </did>
                </div>
            }
        </div>
    );
};

export default Favorites;