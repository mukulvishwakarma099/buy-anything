import React from "react";
import { Button, Card, Row, Container } from "react-bootstrap";
import InfiniteScroll from "react-infinite-scroll-component";
import { Link } from "react-router-dom";

function CardComponent({ data, setCart, page, fetchData }) {
  // console.log(data);
  function handleClick(item) {
    setCart((prev) => [...prev, item]);
  }

  return (
    <>
      <InfiniteScroll
        dataLength={data.length} //This is important field to render the next data
        next={fetchData}
        hasMore={true}
        loader={<></>}
      >
        <Container className="my-2">
          <Row
            xs={1}
            md={2}
            className="g-4 d-flex align-items-center justify-content-center"
          >
            {data.map((curElem, id) => {
              return (
                <Card
                  key={id}
                  style={{ width: "18rem", margin: "2rem" }}
                  className="mx-3"
                >
                  <Link to={`/details/${curElem.id}`}>
                    <Card.Img
                      variant="top"
                      src={curElem.bannerImage.url}
                      style={{
                        aspectRatio: 16 / 9,
                        marginTop: ".5rem",
                        height: "15rem",
                      }}
                    />
                  </Link>
                  <Card.Body>
                    <Card.Title>{curElem.name.substr(0, 20)}</Card.Title>
                    <Card.Text>{curElem.description.substr(0, 100)}</Card.Text>
                    <Button
                      variant="primary"
                      onClick={() => {
                        handleClick(curElem);
                      }}
                    >
                      Add
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </Container>
      </InfiniteScroll>
    </>
  );
}

export default CardComponent;
