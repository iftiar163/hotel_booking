import CustomerReview from "./CustomerReview";
import HeroArea from "./HeroArea";
import "./Home.css";
import HotelList from "./HotelList";
import SearchForms from "./SearchForms";
import TripLocation from "./TripLocation";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
	return (
		<>
			<HeroArea />
			<TripLocation />
			<SearchForms />
			<WhyChooseUs />
			<HotelList />
			<CustomerReview />
		</>
	);
};

export default Home;
