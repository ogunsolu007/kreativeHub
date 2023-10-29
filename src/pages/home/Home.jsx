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
        <div className="image-home">
          <img src="https://images.unsplash.com/photo-1517502884422-41eaead166d4?auto=format&fit=crop&q=80&w=2525&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="deskspace" />
        </div>
      </section>
      <div className=" bookspace-center">
      <Link to="spaces">
         <button className="bookspace">Book a Space</button>
      </Link>
      </div>
     
    </div>
  );
};
export default Home;
