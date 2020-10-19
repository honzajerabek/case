import React, { useMemo } from 'react';
import Slider, { Settings } from 'react-slick';
import { Product } from 'src/pages/products/types';
import styles from 'src/components/Carousel/Carousel.module.scss';
import 'src/components/Carousel/Carousel.scss';
import Chevron from 'src/components/Carousel/Chevron';
import CarouselItem from 'src/components/CarouselItem/CarouselItem';

type Props = {
  products: Product[];
};

const settings: Settings = {
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 5,
  responsive: [
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 1000,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
      },
    },
    {
      breakpoint: 1366,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4,
      },
    },
  ],
  prevArrow: <Chevron prev />,
  nextArrow: <Chevron next />,
};

const Carousel = ({ products }: Props) => {
  const productItems = useMemo(() => {
    return products.map((product) => {
      return <CarouselItem key={product.id} product={product} />;
    });
  }, [products]);

  return (
    <div className={styles.carousel}>
      <h2>Nejprodavanejsi</h2>
      <Slider {...settings}>{productItems}</Slider>
    </div>
  );
};

export default Carousel;
