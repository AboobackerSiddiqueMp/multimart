import { Fragment, useEffect, useState } from "react";
import Wrapper from "../components/wrapper/Wrapper";
import Section from "../components/Section";
import { products, discoutProducts } from "../utils/products";
import SliderHome from "../components/Slider";
import useWindowScrollToTop from "../hooks/useWindowScrollToTop";
import { getAllShoesAPI, getAllbooksAPI, getAllgadgetsAPI, getFurnitureAPI } from "../services/allAPI";

const Home = () => {
  const [product,setproduct]=useState('')
  const [gadgets,setgadgets]=useState('')
  const [Furniture,setFurniture]=useState('')




  useWindowScrollToTop();

  const getproducts=async()=>{
    const result=await getAllShoesAPI()
    console.log("data===",result)
    setproduct(result?.data)
    console.log("o========",product)


  }
  const getgadgets=async()=>{
    const result=await getAllgadgetsAPI()
    console.log("data===",result)
    setgadgets(result?.data)
    console.log("o========",product)


  }
  const getFurniture=async()=>{
    const result=await getFurnitureAPI()
    console.log("data===",result)
    setFurniture(result?.data)
    console.log("o========",product)


  }
  useEffect(()=>{
    getproducts()
    getgadgets()
    getFurniture()
  },[])
  return (
    <Fragment>
      <SliderHome />
     
      {/* <Section
        title="New Arrivals"
        bgColor="white"
        productItems={newArrivalData}
      /> */}
      <Section title="gadgets" bgColor="#f6f9fc"  productItem={gadgets} />
      <Section title="Shoes" bgColor="#f6f9fc"  productItem={product} />
      <Section title="Furniture" bgColor="#f6f9fc"  productItem={Furniture} />


    </Fragment>
  );
};

export default Home;
