import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const TripLocation = () => {
	return (
		<>
			<section className="hero-slider-section">
				<div className="slider-box lg:w-[1280px] md:w-[768px] sm:w-[425px] mx-auto">
					<Swiper
						modules={[Autoplay, Navigation]}
						autoplay={{ delay: 5000 }}
						spaceBetween={50}
						slidesPerView={4}
						navigation={true}
						breakpoints={{
							400: {
								slidesPerView: 1,
							},
							639: {
								slidesPerView: 1,
							},
							768: {
								slidesPerView: 2,
							},
							1024: {
								slidesPerView: 2,
							},
							1500: {
								slidesPerView: 4,
							},
							1700: {
								slidesPerView: 4,
							},
						}}
						// onSlideChange={() => console.log("slide change")}
						// onSwiper={(swiper) => console.log(swiper)}
					>
						{/* Slider One */}
						<SwiperSlide>
							<div className="slider-card w-[273px] flex flex-col gap-5">
								<div className="slider-content flex flex-col gap-2">
									<h3 className="text-white">Grand Aston Hotel</h3>
									<p>Start from $1,098/night</p>
								</div>
								<div className="slider-image">
									<img
										src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721063066/Hotel_trividia/e8ahrkzr5rcvh4ldvodz.jpg"
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
						{/* Slider Two */}
						<SwiperSlide>
							<div className="slider-card w-[273px] flex flex-col gap-5">
								<div className="slider-content flex flex-col gap-2">
									<h3 className="text-white">Java Heritage Hotel</h3>
									<p>Start from $1,098/night</p>
								</div>
								<div className="slider-image">
									<img
										src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721063062/Hotel_trividia/n2qcdvwrxs6iizqhklrx.jpg"
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
						{/* Slider Three */}
						<SwiperSlide>
							<div className="slider-card w-[273px] flex flex-col gap-5">
								<div className="slider-content flex flex-col gap-2">
									<h3 className="text-white">Nihi Sumba Resort</h3>
									<p>Start from $1,098/night</p>
								</div>
								<div className="slider-image">
									<img
										src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721063062/Hotel_trividia/shefaywrjtsfbxhn1vhy.jpg"
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
						{/* Slider Four */}
						<SwiperSlide>
							<div className="slider-card w-[273px] flex flex-col gap-5">
								<div className="slider-content flex flex-col gap-2">
									<h3 className="text-white">Bobocabin Kintamani</h3>
									<p>Start from $1,098/night</p>
								</div>
								<div className="slider-image">
									<img
										src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721063061/Hotel_trividia/wwanrje5krmb6comcvyk.jpg"
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
						{/* Slider Five */}
						<SwiperSlide>
							<div className="slider-card w-[273px] flex flex-col gap-5">
								<div className="slider-content flex flex-col gap-2">
									<h3 className="text-white">Java Heritage Hotel</h3>
									<p>Start from $1,098/night</p>
								</div>
								<div className="slider-image">
									<img
										src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721063061/Hotel_trividia/m1j9cumbbljnxasrnyus.jpg"
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
						{/* Slider Six */}
						<SwiperSlide>
							<div className="slider-card w-[273px] flex flex-col gap-5">
								<div className="slider-content flex flex-col gap-2">
									<h3 className="text-white">Outdoor Resort</h3>
									<p>Start from $1,098/night</p>
								</div>
								<div className="slider-image">
									<img
										src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721063059/Hotel_trividia/rkjib02edcl5uesxbkty.jpg"
										alt=""
									/>
								</div>
							</div>
						</SwiperSlide>
					</Swiper>
				</div>
			</section>
		</>
	);
};

export default TripLocation;
