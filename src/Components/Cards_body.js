import Cards from "./Cards";
// import cardlist from "../utils/mockdata";
import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import OfflinePage from "./OfflinePage";



const Cards_body = () => {

    const [Updated_cardlist , setUpdated_cardlist ]= useState([]);
    const [Updated_cardlist_filter , setUpdated_cardlist_filter ]= useState([]);

    const [searchText , setsearchText] = useState("");

    useEffect(() => { 
        fetchData();
    } , []);
   
   const fetchData = async() => {
     const data = await fetch(
        "https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.49690&lng=80.32460&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
     );
     const json = await data.json();
     data_list = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
     setUpdated_cardlist(data_list)
     setUpdated_cardlist_filter(data_list)
   }
// condition rendering : rendering according to condition
//    if(Updated_cardlist.length===0){
//         return <Shimmer/>;
//     }

const onlineStatus = useOnlineStatus();

if(onlineStatus===false){
  return <OfflinePage/>
}


return Updated_cardlist.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-4  m-10  ">
      {/* Filter and Search Section */}
      <div className="flex flex-col lg:flex-row justify-between items-center mb-6 m-10">
        <div className="flex space-x-4 mb-4 lg:mb-0">
          {/* Top Rated Button */}
          <button
            className="bg-gray-700 text-white px-4 py-2  shadow-lg hover:bg-yellow-600 transition-all"
            onClick={() => {
              const filtered_cardlist = Updated_cardlist.filter(
                (res) => res.info.avgRating > 4
              );
              setUpdated_cardlist_filter(filtered_cardlist);
            }}
          >
            Top Rated Restaurants
          </button>
  
          {/* Reset Button */}
          <button
            className="bg-gray-300 text-gray-700 px-4 py-2 shadow-lg hover:bg-gray-400 transition-all"
            onClick={() => {
              setUpdated_cardlist_filter(Updated_cardlist);
            }}
          >
            Reset
          </button>
        </div>
  
        {/* Search Bar */}
        <div className=" flex items-center space-x-2 w-full lg:w-auto">
          <input
            className=" w-full lg:w-64 px-4 py-2 border border-gray-300  focus:outline-none focus:border-yellow-500 transition-all"
            placeholder="Search Restaurants..."
            value={searchText}
            onChange={(e) => {
              setsearchText(e.target.value);
            }}
          />
          <button
            className=" bg-yellow-500 text-white px-4 py-2 shadow-lg hover:bg-yellow-600 transition-all"
            onClick={() => {
              searched_cardlist = Updated_cardlist.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setUpdated_cardlist_filter(searched_cardlist);
            }}
          >
            Search
          </button>
        </div>
      </div>
  
      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 ">
        {Updated_cardlist_filter.map((info) => (
          <Link
            className=" block transform hover:scale-105 transition-transform duration-300 p-5"
            key={info.info.id}
            to={"/restaurants/" + info.info.id}
          >
            <Cards cardinfo={info} />
          </Link>
        ))}
      </div>
    </div>
  );
  
}



export default Cards_body;