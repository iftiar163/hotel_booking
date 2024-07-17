import HeroArea from "./HeroArea";
import "./Home.css";
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
		</>
	);
};

export default Home;
