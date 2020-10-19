import { useSelector } from 'react-redux';
import { selectCarouselProducts } from 'src/pages/products/selectors';
import React from 'react';
import Page from 'src/components/Page/Page';
import Carousel from 'src/components/Carousel/Carousel';
import ProductSubMenu from 'src/components/ProductSubMenu/ProductSubMenu';
import TabBar from 'src/components/TabBar/TabBar';

const PAGE_HEADER = 'Notebooky';

export const Products = () => {
  const carouselProducts = useSelector(selectCarouselProducts);

  return (
    <Page header={PAGE_HEADER}>
      <ProductSubMenu />
      <Carousel products={carouselProducts} />
      <TabBar />
    </Page>
  );
};
