import { useEffect, useState } from "react";

const Favorites = () => {

    const [favorites,setFavorite] = useState();

    const [noFound,setNoFound] = useState('');

    useEffect(() => {
        const favoriteItems = JSON.parse(localStorage.getItem('favPhones'));

        if(favoriteItems){
            setFavorite(favoriteItems);
        }
        else{
            setNoFound('No data found')
        }
    },[])



    return (
        <div>
            
        </div>
    );
};

export default Favorites;