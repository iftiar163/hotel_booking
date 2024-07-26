import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { FaQuoteLeft } from "react-icons/fa6";
import { AiFillLike } from "react-icons/ai";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";

const CustomerReview = () => {
	return (
		<>
			<section className="customer-review-section">
				<div className="customer-review-wrapper">
					<div className="customer-review-heading lg:w-[1280px] md:w-[768px] sm:w-[425px] mx-auto grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
						<div className="slider-heading-left">
							<h2>What Our Customers Say About Nginep?</h2>
						</div>
						<div className="slider-heading-right">
							<p className="my-4">
								If you don't trust us enough, take a look at the reviews from
								some of our users below. We hope it can help you in making your
								decision
							</p>
						</div>
					</div>
					{/* Review Slider */}
					<div className="review-slider-wrapper lg:w-[1280px] md:w-[768px] sm:w-[425px] mx-auto my-16">
						<Swiper
							modules={[Autoplay, Navigation]}
							autoplay={{ delay: 5000 }}
							spaceBetween={50}
							navigation={true}
							slidesPerView={3}
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
									slidesPerView: 3,
								},
								1700: {
									slidesPerView: 3,
								},
							}}
						>
							<SwiperSlide>
								<div className="review-card">
									<div className="review-content flex flex-col gap-4">
										<FaQuoteLeft />
										<p>
											Nginep is very easy to use, the customer service is
											friendly and very responsive when there are questions and
											complaints from customers. I am very satisfied using
											Nginep to book my dream hotel
										</p>
									</div>
									<div className="review-border my-5">
										<img
											src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1722008332/Hotel_trividia/fvbicect1omjlstwlt2f.png"
											alt=""
										/>
									</div>
									<div className="review-author-box flex flex-row">
										<div className="author-box flex justify-start items-center gap-3">
											<img
												src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721237081/Hotel_trividia/hwgnctu66uzxwo3xrzpz.png"
												alt=""
											/>
											<h5>Jesselyn Wu</h5>
										</div>
										<div className="like-box flex justify-start items-center gap-3">
											<AiFillLike />
											<h5>Helpful</h5>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="review-card">
									<div className="review-content flex flex-col gap-4">
										<FaQuoteLeft />
										<p>
											Nginep is very easy to use, the customer service is
											friendly and very responsive when there are questions and
											complaints from customers. I am very satisfied using
											Nginep to book my dream hotel
										</p>
									</div>
									<div className="review-border my-5">
										<img
											src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1722008332/Hotel_trividia/fvbicect1omjlstwlt2f.png"
											alt=""
										/>
									</div>
									<div className="review-author-box flex flex-row">
										<div className="author-box flex justify-start items-center gap-3">
											<img
												src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721237081/Hotel_trividia/hwgnctu66uzxwo3xrzpz.png"
												alt=""
											/>
											<h5>Jesselyn Wu</h5>
										</div>
										<div className="like-box flex justify-start items-center gap-3">
											<AiFillLike />
											<h5>Helpful</h5>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="review-card">
									<div className="review-content flex flex-col gap-4">
										<FaQuoteLeft />
										<p>
											Nginep is very easy to use, the customer service is
											friendly and very responsive when there are questions and
											complaints from customers. I am very satisfied using
											Nginep to book my dream hotel
										</p>
									</div>
									<div className="review-border my-5">
										<img
											src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1722008332/Hotel_trividia/fvbicect1omjlstwlt2f.png"
											alt=""
										/>
									</div>
									<div className="review-author-box flex flex-row">
										<div className="author-box flex justify-start items-center gap-3">
											<img
												src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721237081/Hotel_trividia/hwgnctu66uzxwo3xrzpz.png"
												alt=""
											/>
											<h5>Jesselyn Wu</h5>
										</div>
										<div className="like-box flex justify-start items-center gap-3">
											<AiFillLike />
											<h5>Helpful</h5>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="review-card">
									<div className="review-content flex flex-col gap-4">
										<FaQuoteLeft />
										<p>
											Nginep is very easy to use, the customer service is
											friendly and very responsive when there are questions and
											complaints from customers. I am very satisfied using
											Nginep to book my dream hotel
										</p>
									</div>
									<div className="review-border my-5">
										<img
											src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1722008332/Hotel_trividia/fvbicect1omjlstwlt2f.png"
											alt=""
										/>
									</div>
									<div className="review-author-box flex flex-row">
										<div className="author-box flex justify-start items-center gap-3">
											<img
												src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721237081/Hotel_trividia/hwgnctu66uzxwo3xrzpz.png"
												alt=""
											/>
											<h5>Jesselyn Wu</h5>
										</div>
										<div className="like-box flex justify-start items-center gap-3">
											<AiFillLike />
											<h5>Helpful</h5>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="review-card">
									<div className="review-content flex flex-col gap-4">
										<FaQuoteLeft />
										<p>
											Nginep is very easy to use, the customer service is
											friendly and very responsive when there are questions and
											complaints from customers. I am very satisfied using
											Nginep to book my dream hotel
										</p>
									</div>
									<div className="review-border my-5">
										<img
											src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1722008332/Hotel_trividia/fvbicect1omjlstwlt2f.png"
											alt=""
										/>
									</div>
									<div className="review-author-box flex flex-row">
										<div className="author-box flex justify-start items-center gap-3">
											<img
												src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721237081/Hotel_trividia/hwgnctu66uzxwo3xrzpz.png"
												alt=""
											/>
											<h5>Jesselyn Wu</h5>
										</div>
										<div className="like-box flex justify-start items-center gap-3">
											<AiFillLike />
											<h5>Helpful</h5>
										</div>
									</div>
								</div>
							</SwiperSlide>
							<SwiperSlide>
								<div className="review-card">
									<div className="review-content flex flex-col gap-4">
										<FaQuoteLeft />
										<p>
											Nginep is very easy to use, the customer service is
											friendly and very responsive when there are questions and
											complaints from customers. I am very satisfied using
											Nginep to book my dream hotel
										</p>
									</div>
									<div className="review-border my-5">
										<img
											src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1722008332/Hotel_trividia/fvbicect1omjlstwlt2f.png"
											alt=""
										/>
									</div>
									<div className="review-author-box flex flex-row">
										<div className="author-box flex justify-start items-center gap-3">
											<img
												src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721237081/Hotel_trividia/hwgnctu66uzxwo3xrzpz.png"
												alt=""
											/>
											<h5>Jesselyn Wu</h5>
										</div>
										<div className="like-box flex justify-start items-center gap-3">
											<AiFillLike />
											<h5>Helpful</h5>
										</div>
									</div>
								</div>
							</SwiperSlide>
						</Swiper>
					</div>
				</div>
			</section>
		</>
	);
};

export default CustomerReview;
