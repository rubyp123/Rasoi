import React, { useState } from 'react';
import Cards from './Cards'; // Adjust the import path if necessary

const PaginatedCards = ({ cardData }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const cardsPerPage = 10; // Number of cards to display per page

    // Check if cardData is an array
    if (!Array.isArray(cardData)) {
        console.error('Expected cardData to be an array, but received:', cardData);
        return <div>Error: Invalid data format.</div>;
    }

    // Calculate the index of the first and last card on the current page
    const indexOfLastCard = currentPage * cardsPerPage;
    const indexOfFirstCard = indexOfLastCard - cardsPerPage;
    const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

    // Handle page change
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    // Calculate total number of pages
    const totalPages = Math.ceil(cardData.length / cardsPerPage);

    return (
        <div>
            {/* Display cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {currentCards.map(cardinfo => (
                    <Cards key={cardinfo.info.id} cardinfo={cardinfo} />
                ))}
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center mt-4 space-x-2">
                {/* Previous Button */}
                <button 
                    className={`px-4 py-2 border rounded ${currentPage === 1 ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                    onClick={() => paginate(currentPage - 1)}
                    disabled={currentPage === 1}
                >
                    Previous
                </button>

                {/* Page Numbers */}
                {Array.from({ length: totalPages }, (_, index) => (
                    <button 
                        key={index + 1} 
                        className={`px-4 py-2 border rounded ${index + 1 === currentPage ? 'bg-blue-500 text-white' : 'bg-gray-300 text-gray-800'}`}
                        onClick={() => paginate(index + 1)}
                    >
                        {index + 1}
                    </button>
                ))}

                {/* Next Button */}
                <button 
                    className={`px-4 py-2 border rounded ${currentPage === totalPages ? 'bg-gray-300 text-gray-600 cursor-not-allowed' : 'bg-blue-500 text-white'}`}
                    onClick={() => paginate(currentPage + 1)}
                    disabled={currentPage === totalPages}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default PaginatedCards;
