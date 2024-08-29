import { useState } from "react";
import { useEffect } from "react";

const useRestaurantMenu = (param) => {
    const [resInfo , setresInfo] = useState(null);
    const [resMenu , setresMenu] = useState(null);

    useEffect(()=>{
        fetchresData();
    },[])

    const fetchresData = async() =>{
        const resData = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=26.49690&lng=80.32460&restaurantId=" + param.resID )
        const jsonData = await resData.json();
        const resInfo = jsonData?.data?.cards[2]?.card?.card?.info;
        const resMenu = jsonData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
        setresInfo(resInfo);
        setresMenu(resMenu);
        // console.log(resMenu)
    }
    return [resInfo , resMenu];
}

export default useRestaurantMenu;