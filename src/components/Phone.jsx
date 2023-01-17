import { AddIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Phone = ({ phone, onClick }) => {
  return (
    <div className="p-4">
      <Link to={`/shop/${phone.id}`}>
        <h1 className="text-center text-base">{phone.name}</h1>
        <img src={phone.image} alt="xiaomi"></img>
      </Link>
      <div className="relative">
        <AddIcon
          w={8}
          h={8}
          className="bottom-0 right-0 absolute bg-white rounded-xl p-2 cursor-pointer hover:bg-black hover:text-white"
          onClick={() => onClick(phone)}
        />
      </div>
      <h1 className="text-base">${phone.price}</h1>
    </div>
  );
};

export default Phone;
