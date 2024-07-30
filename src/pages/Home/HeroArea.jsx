import { FaPlayCircle } from "react-icons/fa";

const HeroArea = () => {
	return (
		<>
			{/* Hero Section */}
			<section className="hero-section">
				{/* Hero Section Heading */}
				<div className="hero-heading lg:w-[1280px] md:w-full sm:w-full mx-auto grid lg:grid-cols-2 md:grid-cols-2">
					<div className="heading-col w-full text-white">
						<h2>Discover The Best Hotels & Resorts to Stay</h2>
					</div>
					<div className="para-col w-full">
						<div className="sub-text">
							<p>
								We provide a variety of the best lodging accommodations for
								those of you who need it. Don't worry about the quality of the
								service.
							</p>
						</div>
						<div className="hero-button my-8 flex gap-10">
							<button className="explore-more">Explore More</button>
							<div className="hero-video flex flex-row items-center gap-2">
								<FaPlayCircle />
								<button>Play Demo</button>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HeroArea;
