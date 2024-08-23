import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-responsive-carousel';

const Shipping = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('https://dummyjson.com/products')
          .then(response => response.json())
          .then(data => setProducts(data.products));
      }, []);
  return (
    <>
        <div className="flex justify-center items-center gap-6 my-[50px]">
    <Carousel
          showArrows={false}
          showStatus={false}
          showThumbs={false}
          infiniteLoop={true}
          autoPlay={true}
          interval={1000}
          centerMode={true}
          centerSlidePercentage={20}
          dynamicHeight={false}
          swipeable={true}
          showIndicators={false}
        >
        {products.map(product => (
        <div key={product.id} className="p-4 m-2 max-w-xs border rounded">
        <img src={product.thumbnail} alt={product.title} className="w-full h-48 object-cover hover:opacity-75" />
        <h2 className="text-xl font-semibold mt-2">{product.title}</h2>
        <div className="text-red-500">
          {product.discountPercentage > 0 && (
            <span className="pr-2">20% off: WHOLEHOME20</span>
          )}
          
        </div>
       
        <div className="text-gray-700">
          <span className="text-lg font-bold">${product.price}</span>
          <span className="line-through ml-2">${product.price + (product.discountPercentage / 100) * product.price}</span>
          <span className="ml-2">{Math.floor(product.discountPercentage)}% OFF</span>
        </div>
      </div>
    ))}
      </Carousel>
 </div>

    </>

  )
}

export default Shipping