import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  addToCart,
  decreaseQty,
  deleteProduct,
} from "../app/features/cart/cartSlice";
import { getusersAPI } from "../services/allAPI";

const USER = () => {
  const [userdata, setuserdata] = useState([]);
  const { cartList } = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    getuser();
  }, []);

  const getuser = async () => {
    try {
      const result = await getusersAPI();
      const productItem = result.data;
      const firstTenuser = productItem.slice(0, 10);
      setuserdata(firstTenuser);
    } catch (error) {
      console.error("Error fetching user data:", error);
    }
  };

 

  return (
    <section className="cart-items">
      <Container>
        <Row className="justify-content-center">
          <Col md={8}>
            {userdata.length === 0 ? (
              <h1 className="no-items product">No users</h1>
            ) : (
              userdata.map((item) => (
                <div className="cart-list" key={item.id}>
                  <Row>
                    <Col className="image-holder" sm={4} md={3}>
                      <img src={item.avatar} alt={item.name} />
                    </Col>
                    <Col sm={8} md={9}>
                      <Row className="cart-content justify-content-center">
                        <Col xs={12} sm={9} className="cart-details">
                          <h3>{item.name}</h3>
                          <h4>
                           {item.email}
                          </h4>
                        </Col>
                       
                      </Row>
                    </Col>
                    
                  </Row>
                </div>
              ))
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default USER;
