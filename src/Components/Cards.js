import React from 'react';

const Cards = ({ cardinfo }) => {
    return (
        <div className="p-4">
            <div className="bg-white shadow-lg  overflow-hidden bg-gray-100 border">
                <img 
                    className="w-full h-56 object-cover "
                    src={"https://media-assets.swiggy.com/swiggy/image/upload/" + cardinfo.info.cloudinaryImageId} 
                    alt={cardinfo.info.name}
                />
                <div className="p-4">
                    <h3 className="text-xl font-semibold mb-2">{cardinfo.info.name}</h3>
                    <p className="text-gray-600 mb-2">{cardinfo.info.cuisines.join(", ")}</p>
                    <h4 className="text-lg font-medium text-gray-700">
                        ⭐ {cardinfo.info.avgRating}<br />
                        {cardinfo.info.sla.deliveryTime} mins<br />
                        <span className="text-orange-500">{cardinfo.info.costForTwo}</span>
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Cards;
