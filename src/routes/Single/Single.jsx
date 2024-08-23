import React from 'react';
import { useParams } from 'react-router-dom';
import { useFitch } from '../../hooks/useFitch';
import { Link } from 'react-router-dom';

const Single = () => {
    const { id } = useParams();
    const data = useFitch(`https://dummyjson.com/products/${id}`);

    if (!data) {
        return <p className="text-center text-gray-600">Not found.</p>;
    }

    return (
        <div className="flex justify-center items-center min-h-screen p-6 bg-gray-100">
            <div className="w-full max-w-4xl shadow-lg p-6 bg-white rounded-lg">
                <div className="flex flex-col md:flex-row items-start gap-6">
                    <div className="flex-shrink-0 w-full md:w-auto">
                        <img
                            src={data.thumbnail}
                            alt={data.title}
                            className="w-[400px] h-[450px] object-cover border border-gray-300"
                        />
                    </div>
                    <div className="flex-grow">
                        <h1 className="text-2xl font-bold mb-2">{data.title}</h1>
                        <div className="h-[2px] w-[100%] bg-gray-300 mb-4"></div>
                        <p className="text-lg font-semibold mb-2">Category: {data.category}</p>
                        <p className="text-lg font-semibold mb-2">Brand: {data.brand}</p>
                        <p className="text-xl font-bold text-green-600 mb-4">Price: ${data.price}</p>
                        <p className="mb-4">{data.description}</p>
                        <div className="h-[2px] w-[100%] bg-gray-300 mb-4"></div>
                        <div className="mt-4 space-y-3">
                            <Link to='/Login'>
                                <button className="w-full h-10 bg-[#0053A0] text-white rounded-lg hover:bg-blue-600">
                                    Buy It Now
                                </button>
                            </Link>
                            <button className="w-full h-10 bg-[#3498CA] text-white rounded-lg hover:bg-blue-600">
                                Add to Cart
                            </button>
                            <button className="w-full h-10 bg-white text-[#0053A0] border border-[#0053A0] rounded-lg hover:bg-[#0053A0] hover:text-white">
                                Add to Wishlist
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Single;
