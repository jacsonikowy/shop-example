import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import xiaomiPhones from "../data/xiaomiPhones.json";

const ItemDetail = ({ onAdd }) => {
  const [actualPhone, setActualPhone] = useState(null);
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const phone = findPhone();
        const response = await fetch(phone.detail);
        const data = await response.json();
        setActualPhone(data.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchData();
  }, []);

  const findPhone = () => {
    let phone1 = undefined;

    xiaomiPhones.forEach((phone) => {
      if (phone.id === params.id) {
        phone1 = phone;
      }
    });

    return phone1;
  };

  if (!actualPhone) return <div>Loading...</div>;

  const phone = findPhone();

  return (
    <>
      <div className="relative z-0">
        <button
          className="absolute right-0 top-0 m-10 bg-green-300 rounded-2xl p-2"
          onClick={() => onAdd(phone)}
        >
          Add to Cart
        </button>
      </div>
      <div className="w-max h-max p-10 m-auto">
        <div className="text-center text-3xl mb-10">
          <h1>{actualPhone.phone_name}</h1>
          <h2>{actualPhone.brand}</h2>
        </div>
        <img
          src={actualPhone.thumbnail}
          alt="thumbnail"
          className="m-auto h-80"
        />
        <div className="mt-10 m-0">
          <p>Storage: {actualPhone.storage}</p>
          <p>Dimension: {actualPhone.dimension}</p>
          <p>Release date: {actualPhone.release_date}</p>
          <p>Weight: {actualPhone.specifications[2].specs[1].val}</p>
        </div>
      </div>
    </>
  );
};

export default ItemDetail;
