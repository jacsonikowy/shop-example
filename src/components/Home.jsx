import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-3xl text-center p-12">
      <h1>Welcome to my shop!</h1>
      <Link to="/shop">
        <button className="rounded-full bg-green-400 p-6 mt-20">
          Shop now
        </button>
      </Link>
    </div>
  );
};

export default Home;
