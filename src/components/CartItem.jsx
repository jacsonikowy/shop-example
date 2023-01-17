import { MinusIcon, AddIcon } from "@chakra-ui/icons";

const CartItem = ({ phone, onDelete, onAdd, onMinus }) => {
  return (
    <div className="p-6 flex">
      <img className="w-20 p-2" src={phone.image} alt={phone.name}></img>
      <div className="m-2">
        <div className="flex">
          <h1>{phone.name}</h1>
          <MinusIcon
            className="p-1 m-1 cursor-pointer"
            onClick={() => onDelete(phone)}
          />
        </div>
        <div className="flex p-2">
          <div className="bg-red-600 rounded-xl w-8 h-8 text-center">
            <MinusIcon
              color="white"
              className="cursor-pointer"
              onClick={() => onMinus(phone)}
            />
          </div>
          <input
            type="text"
            placeholder={phone.quantity}
            className="w-8 h-8 text-center shadow-slate-400"
          ></input>
          <div className="bg-green-600 rounded-xl w-8 h-8 text-center">
            <AddIcon
              className="cursor-pointer"
              color="white"
              onClick={() => onAdd(phone)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
