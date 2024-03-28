import { Container, Row } from "react-bootstrap";
import ProductCard from "./ProductCard/ProductCard";

const Section = ({ title, bgColor, productItem }) => {
  console.log("ggg====", productItem);
  const firstTenItems = productItem.slice(0, 5);

  return (
    <section style={{ background: bgColor }}>
      <Container>
        <div className="heading">
          <h1>{title}</h1>
        </div>
        <Row className="justify-content-center">
          {Array.isArray(firstTenItems) &&
            firstTenItems.map((productItem) => (
              <ProductCard title={title} productItem={productItem} />
            ))}
        </Row>
      </Container>
    </section>
  );
};

export default Section;
