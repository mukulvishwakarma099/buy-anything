/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import CardComponent from "./Card";

function Content({ setCart }) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const fetchData = async () => {
    let url = await fetch(
      `http://api.products.luezoid.com/products?page=${page}`,
      {
        method: "Get",
        headers: {
          Authorization: "Bearer ULxG9gG98KDGPql/BFI/woCN9T8=",
        },
      }
    );
    let res = await url.json();
    setData((prev) => [...prev, ...res.items]);
    setPage(page + 1);
    // console.log(data);
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line
  }, []);

  return (
    <>
      <CardComponent
        setCart={setCart}
        page={page}
        fetchData={fetchData}
        key={data.id}
        data={data}
      />
      ;
    </>
  );
}

export default Content;
