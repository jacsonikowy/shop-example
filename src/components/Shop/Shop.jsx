import XiaomiPhones from "./XiaomiPhones";

const Shop = ({ onPhoneClick }) => {
  return (
    <>
      <nav>
        <ul className="flex "></ul>
      </nav>
      <XiaomiPhones onPhoneClick={onPhoneClick} />
    </>
  );
};

export default Shop;
