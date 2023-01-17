import { Route, Routes } from "react-router-dom";
import { useState } from "react";
import Nav from "./components/Nav";
import Shop from "./components/Shop/Shop";
import Home from "./components/Home";
import Cart from "./components/Cart";
import ItemDetail from "./components/ItemDetail";

function App() {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [total, setTotal] = useState(0);

  const computeTotal = () => {
    setTotal(0);
    cartItems.forEach((item) => {
      const priceTotal = item.price * item.quantity;
      setTotal(total + priceTotal);
    });

    return total;
  };

  const handleNavClick = () => {
    if (showCart) {
      setShowCart(false);
    } else {
      setShowCart(true);
    }
  };

  const handleItemClick = (phone) => {
    handleNavClick();
    const item = cartItems.find((i) => i.id === phone.id);
    if (item) {
      item.quantity += 1;
      setCartItems([...cartItems]);
    } else {
      let cartItem = {
        id: phone.id,
        brand: phone.brand,
        name: phone.name,
        image: phone.image,
        price: phone.price,
        quantity: 1,
      };
      setCartItems((cartItems) => [...cartItems, cartItem]);
    }
  };

  const handleMinusItemClick = (phone) => {
    let copy = [...cartItems];
    copy = copy.filter((cartItem) => cartItem.id !== phone.id);
    setCartItems(copy);
  };

  return (
    <div className="font-syne">
      <Cart
        items={cartItems}
        setItems={setCartItems}
        onMinusClick={handleMinusItemClick}
        showCart={showCart}
        openCart={handleNavClick}
        subtotal={total}
        computeTotal={computeTotal}
      />
      <Nav openCart={handleNavClick} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop onPhoneClick={handleItemClick} />} />
        <Route
          path="/shop/:id"
          element={<ItemDetail onAdd={handleItemClick} />}
        />
      </Routes>
    </div>
  );
}

export default App;
