import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const PhoneDetails = () => {
    const params = useParams();

    const phones = useLoaderData();
    const[phone,setPhone] = useState({});
    // const SelectedPhone = {};
    useEffect(() =>{
         const SelectedPhone =  phones.find(phone => phone.id===params.id);
         setPhone(SelectedPhone);
         console.log(params.id);

    },[params.id,phone]);

    const {id,phone_name,image,brand_name,price,rating} = phone || {};

    const handleAddToFavorite = () => {

        const totalFavoritePhone = [];

        const favoritePhones = JSON.parse(localStorage.getItem('favPhones'));
        console.log(favoritePhones);

        if(!favoritePhones){
            totalFavoritePhone.push(phone);
            localStorage.setItem('favPhones',JSON.stringify(totalFavoritePhone));
            Swal.fire(
                'Good job!',
                'Successfully added the product',
                'success'
              )
        }
        else{
            const isExist = favoritePhones?.find(item => item.id === id)
            if(isExist){
                console.log(phone.id);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'Already Exists!',
                    footer: '<a href="">Why do I have this issue?</a>'
                  })
            }
            else{
                totalFavoritePhone.push(...favoritePhones,phone);
                localStorage.setItem('favPhones',JSON.stringify(totalFavoritePhone));
                Swal.fire(
                    'Good job!',
                    'Successfully added the product',
                    'success'
                  )
            }
        }
    }

    return (
        <div className="h-[80vh] w-full flex justify-center items-center">
            <div className="relative flex w-full max-w-[48rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                    src={image}
                    alt="image"
                    className="h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                    {brand_name}
                    </h6>
                    <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                    {phone_name}
                    </h4>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                    Like so many organizations these days, Autodesk is a company in
                    transition. It was until recently a traditional boxed software company
                    selling licenses. Yet its own business model disruption is only part of
                    the story
                    </p>
                    <div className="flex justify-between">
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Price: ${price}
                        </p>
                        <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-700 antialiased">
                        Rating: {rating}/5
                        </p>
                    </div>
                    <a className="inline-block" href="#">
                    <button
                        className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                        onClick={handleAddToFavorite}
                    >
                        Add to Favorite
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="2"
                        stroke="currentColor"
                        aria-hidden="true"
                        className="h-4 w-4"
                        >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                        ></path>
                        </svg>
                    </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default PhoneDetails;