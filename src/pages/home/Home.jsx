import Navbar from "../../components/navbar/Navbar";
import "./home.css";
import { Link } from "react-router-dom/dist";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <section className="landing">
        <div>
          <h2 className="landing-heading">
            Elevate Your Productivity in Nottingham's Primier Coworking Hub
          </h2>
          <p className="landing-summary">
            Step into nottingham priemier cowoorking hub and experience a
            workspace like no other. Our space is designed to elevate your
            productivity, whether youre a solo entrprenuer, a startup or a
            renmote tem.Join us in thriving ecosystem of innovation and success.
          </p>
        </div>
        <div className="image">
          <img src="/assets/desk29.jpeg" alt="deskspace" />
        </div>
      </section>
      <Link to="spaces">
         <button className="bookspace">Book a Space</button>
      </Link>
     
    </div>
  );
};
export default Home;
