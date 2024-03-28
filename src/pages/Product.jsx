import { Fragment, useEffect, useState } from "react";
import Banner from "../components/Banner/Banner";
import { Container } from "react-bootstrap";
import ShopList from "../components/ShopList";
import { products } from "../utils/products";
import { useLocation, useParams } from "react-router-dom";
import ProductDetails from "../components/ProductDetails/ProductDetails";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";

const Product = () => {
  const location = useLocation();

  const productItem =location.state.productItem;
  console.log("proitem=====",productItem)
 
  

  return (
    <Fragment>
      {/* <Banner title={productItem.title} /> */}
      <ProductDetails selectedProduct={productItem} />
      <section className="related-products">
        <Container>
        </Container>
      </section>
    </Fragment>
  );
};

export default Product;
