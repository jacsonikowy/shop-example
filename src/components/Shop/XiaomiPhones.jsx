import { useEffect, useState } from "react";
import Phone from "../Phone";
import xiaomiPhones from "../../data/xiaomiPhones.json";
import { v4 as uuidv4 } from "uuid";

const XiaomiPhones = ({ onPhoneClick }) => {
  const [phones, setPhones] = useState([]);

  useEffect(() => {
    const saveXiaomiPhones = () => {
      for (let i = 0; i < xiaomiPhones.length; i++) {
        setPhones((phones) => [...phones, xiaomiPhones[i]]);
      }
    };

    saveXiaomiPhones();
  }, []);

  const xiaomiPhones1 = phones.map((phone) => {
    return <Phone key={uuidv4()} phone={phone} onClick={onPhoneClick} />;
  });

  return (
    <div className="w-screen h-max text-xl flex flex-wrap p-2">
      {xiaomiPhones1}
    </div>
  );
};

export default XiaomiPhones;
