import { useParams } from "react-router-dom";
import ShimmerRes from "./ShimmerRes";
import useRestaurantMenu from "../utils/useRestaurantMenu";

const RestaurantMenu = () => {
    const param = useParams();
    const [resInfo, resMenu] = useRestaurantMenu(param);

    if (resInfo === null || resMenu === null) return <ShimmerRes />;

    let itemList = undefined;
    let len = 0;

    if (resMenu !== undefined) {
        itemList = resMenu.map((item, index) => (
            <div
                className="flex flex-col md:flex-row border-b border-gray-200 p-4 mb-4 bg-gray-100 shadow-md rounded-lg hover:bg-gray-200"
                key={index}
            >
                <div className="flex-shrink-0 w-full md:w-1/3 mb-4 md:mb-0">
                    <img
                        className="w-full h-48 object-cover rounded-lg"
                        src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
                            item.card.info.imageId
                        }
                        alt={item.card.info.name}
                    />
                </div>
                <div className="flex-1 pl-4">
                    <h3 className="text-xl font-semibold mb-2">
                        {item.card.info.name} - Rs. {item.card.info.price / 100}
                    </h3>
                    <p className="text-gray-600 mb-2">{item.card.info.description}</p>
                    <p className="text-gray-800 mb-2">
                        ⭐ {item.card.info.ratings.aggregatedRating.rating} (
                        {item.card.info.ratings.aggregatedRating.ratingCount}) . Rs.{" "}
                        {item.card.info.price / 100}
                    </p>
                    <p
                        className={`text-sm ${
                            item.card.info.inStock ? "text-green-600" : "text-red-600"
                        }`}
                    >
                        {item.card.info.inStock ? "In Stock" : "Out of Stock"}
                    </p>
                </div>
            </div>
        ));
        len = itemList.length;
    }

    const { name, totalRatingsString, sla, costForTwoMessage, avgRating, cuisines, cloudinaryImageId } =
        resInfo;

    return (
        <div className="pt-40 max-w-6xl mx-auto px-4 py-8">
            {/* Restaurant Image */}

            <div className="flex flex-col md:flex-row items-center mb-10 bg-gray-50 p-6  shadow-xl transform hover:scale-105 transition duration-300 ease-in-out">
                <div className="w-full md:w-1/3 mb-6 md:mb-0">
                    <img
                        className="w-full h-56 object-cover shadow-md border-4 border-gray-200"
                        src={
                            "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,h_600/" +
                            cloudinaryImageId
                        }
                        alt={name}
                    />
                </div>
                <div className="md:ml-8 text-center md:text-left mt-4 md:mt-0">
                    <h1 className="text-4xl font-extrabold text-gray-900 italic tracking-tight hover:text-yellow-500 transition duration-200">{name}</h1>
                    <div className="mt-2">
                        <h3 className="text-lg text-gray-700 font-semibold flex items-center justify-center md:justify-start">
                            ⭐ <span className="text-2xl text-green-600 ml-2">{avgRating}</span> 
                            <span className="text-gray-500 ml-2">({totalRatingsString})</span>
                        </h3>
                        <p className="text-gray-600 mt-1">{costForTwoMessage}</p>
                        <p className="text-gray-600 mt-1">{cuisines.join(", ")}</p>
                        <p className="text-gray-500 mt-1">{sla.slaString}</p>
                    </div>
                </div>
            </div>




            <div className="mb-4">
                <h2 className="text-2xl font-semibold">Recommended ({len})</h2>
            </div>

            <div className="space-y-4">{itemList}</div>
        </div>
    );
};

export default RestaurantMenu;
