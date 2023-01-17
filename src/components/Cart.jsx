import CartItem from "./CartItem";
import { CloseIcon } from "@chakra-ui/icons";

const Cart = ({ items, setItems, onMinusClick, showCart, openCart }) => {
  const handlePlusClick = (item) => {
    item.quantity += 1;
    setItems([...items]);
  };

  const handleMinusClick = (item) => {
    item.quantity -= 1;
    setItems([...items]);

    if (item.quantity <= 0) {
      onMinusClick(item);
    }
  };

  const boughtPhones = items.map((item) => {
    return (
      <CartItem
        key={item.id}
        phone={item}
        onDelete={onMinusClick}
        onMinus={handleMinusClick}
        onAdd={handlePlusClick}
      />
    );
  });

  const total = items.reduce(
    (accumulator, current) => accumulator + current.price * current.quantity,
    0
  );

  return (
    <>
      <div
        className={`${showCart
            ? "opacity-70 pointer-events-auto"
            : "opacity-0 pointer-events-none"
          } w-full h-full z-10 bg-black fixed ease-in-out duration-500 transition`}
        onClick={() => {
          openCart();
        }}
      ></div>
      {/* this  ^^^^ div should be in anotehr component */}
      {/* and this below i think also */}
      <div
        className={`${showCart ? "translate-x-0" : "-translate-x-full"
          } w-96 h-screen fixed shadow-2xl bg-white z-20 ease-in-out duration-500 transition`}
      >
        <button className="absolute right-0 m-3">
          <CloseIcon w={6} h={6} onClick={() => openCart()} />
        </button>
        <h2 className="text-4xl text-center p-2 mt-5">Shopping Cart</h2>
        {boughtPhones}
        <p className="ml-4 font-bold">Total: ${total}</p>
        <div className="flex place-content-center">
          <button className="text-2xl rounded-2xl bg-green-400 w-4/12 hover:bg-green-500 transition ease-in-out duration-400">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
