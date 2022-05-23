/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import { Container, Image } from "react-bootstrap";
import { useParams } from "react-router-dom";

const DetailsPage = () => {
  const [data, setData] = useState([]);
  const params = useParams();

  const fetchData = async () => {
    let url = await fetch(`http://api.products.luezoid.com/products`, {
      method: "Get",
      headers: {
        Authorization: "Bearer ULxG9gG98KDGPql/BFI/woCN9T8=",
      },
    });
    let res = await url.json();
    setData((prev) => [...prev, ...res.items]);
    console.log(params);
    // setPage(page + 1);
    // console.log(res);
  };

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <>
      {data
        .filter((item) => {
          return item.id === parseInt(params.id);
        })
        .map((filterItem) => {
          return (
            <>
              <div className="container">
                <h2 className="text-center">Items Details Page</h2>
              </div>
              <Container
                className="container mt-3"
                style={{
                  boxShadow: "-9px -6px 22px -11px rgba(0,0,0,0.75)",
                }}
              >
                <div
                  className="itemsDetails d-flex align-items-center justify-content-center flex-wrap p-2"
                  // style={{
                  //   display: "flex",
                  //   justifyContent: "center",
                  //   alignItems: "center",
                  //   flexWrap: "wrap",
                  //   marginTop: "5rem",
                  // }}
                >
                  <Image
                    className="fluid"
                    src={filterItem.bannerImage.url}
                    style={{
                      width: "20rem",
                      height: "20rem",
                      // aspectRatio: 16 / 9,
                      backgroundSize: "contain",
                      backgroundPosition: "center",
                    }}
                    id="detailsImg"
                    alt=""
                  />
                  <Container className="container p-5">
                    <h5 style={{ marginLeft: "1rem" }}>{filterItem.name}</h5>
                    <p>{filterItem.description}</p>
                  </Container>
                </div>
              </Container>
            </>
          );
        })}
    </>
  );
};

export default DetailsPage;
