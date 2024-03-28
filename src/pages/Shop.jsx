import { Col, Container, Row } from "react-bootstrap";
import FilterSelect from "../components/FilterSelect";
import { Fragment, useEffect, useState } from "react";
import { products } from "../utils/products";
import ShopList from "../components/ShopList";
import Banner from "../components/Banner/Banner";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { getcategoriesAPI, getcategoriesbyidAPI } from "../services/allAPI";

const Shop = () => {
  const [filterList, setFilterList] = useState(2);
  const [product,setproduct]=useState('')
  console.log(filterList)
  useWindowScrollToTop();
 const getfilter=async()=>{
  const result=await getcategoriesbyidAPI(filterList)
  console.log(result)
  setproduct(result.data)

 }
 useEffect(()=>{
  getfilter()
 },[filterList])

  return (
    <Fragment>
      <Banner title="product" />
      <section className="filter-bar">
        <Container className="filter-bar-contianer">
          <Row className="justify-content-center">
            <Col md={4}>
              <FilterSelect setFilterList={setFilterList} />
            </Col>
            <Col md={8}>
            </Col>
          </Row>
        </Container>
        <Container>
          <ShopList productItems={product} />
        </Container>
      </section>
    </Fragment>
  );
};

export default Shop;
