import "./list.css"
import SpaceCard from "../../components/spacecard/SpaceCard";

function List() {
  return (
    <div className="App">
      <header>
        <h1>Book Co-working Space Reservation</h1>
      </header>

      <SpaceCard
        imageSrc="/assets/desk6.jpeg"
        title="General Open Space"
        description="This space has more than 200 space you can seat and enjoy the Nottingham city center view"
        price="£25"
      />

      <SpaceCard
        imageSrc="/assets/desk5.jpeg"
        title="Two Person Office"
        description="This space can occupy two people working together to make communication and work easy for them."
        price="£45"
      />

      <SpaceCard
        imageSrc="/assets/desk29.jpeg"
        title="Meeting Room"
        description="This space can be used for executive meetings, it has 8 seats in total."
        price="£75"
      />
    </div>
  );
}

export default List;
