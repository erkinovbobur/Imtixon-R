import { AiOutlineArrowRight } from "react-icons/ai";
import React from 'react';
import { useFitch } from '../../hooks/useFitch';
import { useTranslation } from 'react-i18next';
import { Carousel } from 'react-responsive-carousel';
import { Link } from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const Products = () => {
  const data = useFitch("/products");

  const [t] = useTranslation();

  if (!data || data.length === 0) return <p>Loading...</p>;

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
          {data.map((product) => (
            <div key={product.id} className="flex flex-col items-center card-container">
              <div className="card-image w-40 h-40 rounded-full flex justify-center items-center bg-gray-100 overflow-hidden">
                <img src={product.thumbnail} alt={product.title} className="w-32 h-32 object-contain" />
              </div>
              <p className="text-center mt-2 text-sm font-medium">{product.title}</p>
            </div>
          ))}
        </Carousel>
      </div>
      
      <div className="product-container flex align-middle items-center">
        <div className="flex gap-x-[40px] text-2xl font-semibold mb-2 text-gray-600 font-sans ml-[30px]">
          <p>{t("pr1")}</p>
         <Link to={"./collection"}> <a className="flex gap-2 items-center" href="">{t("pr2")}<AiOutlineArrowRight /></a></Link>
        </div>
        <span className="flex my-[45px] ml-[-480px] text-blue-500 font-sans text-[20px]"></span>
      </div>
    </>
  );
};

export default Products;
