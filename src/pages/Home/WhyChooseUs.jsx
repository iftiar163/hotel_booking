const WhyChooseUs = () => {
	return (
		<>
			<section className="why-choose-us overflow-x-hidden">
				{/* Why Choose Heading */}
				<div className="why-choose-heading lg:w-[1280px] md:w-full sm:w-full mx-auto flex flex-col justify-center items-center gap-3">
					<h2>Why You Should Choose Us</h2>
					<p>
						You should choose us because we provide the best accommodation and
						we have sorted all the hotels here based on their quality.
					</p>
				</div>
				{/* Why Choose Content */}
				<div className="why-choose-content my-5 lg:w-[1280px] md:w-full sm:w-full mx-auto grid lg:grid-cols-2 md:grid-cols-1 sm:grid-cols-1">
					{/* Left Container */}
					<div className="left-container grid grid-cols-1 justify-start items-center my-14 gap-y-7">
						{/* Box One */}
						<div className="content-box flex flex-col justify-start items-start gap-3">
							<h5>01</h5>
							<h4>We provide the best choice of hotels for you to stay.</h4>
							<p>
								We always prioritize customer comfort and satisfaction. That's
								why we only accept the best hotels
							</p>
						</div>
						{/* Box Two */}
						<div className="content-box flex flex-col justify-start items-start gap-3">
							<h5>02</h5>
							<h4>Low price with best quality</h4>
							<p>
								Although the price tends to be cheaper but it will not affect
								the quality of service, so don't worry
							</p>
						</div>
						{/* Box Three */}
						<div className="content-box flex flex-col justify-start items-start gap-3">
							<h5>03</h5>
							<h4>Can refund up to 100%</h4>
							<p>
								Don't worry if suddenly you have a problem and want to do a
								refund, with Nginep you can get a full refund
							</p>
						</div>
					</div>
					{/* Right Container */}
					<div className="right-container">
						<div className="right-content-wrapper">
							<div className="main-image flex lg:justify-end md:justify-center sm:justify-end items-end">
								<img
									src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721063066/Hotel_trividia/e8ahrkzr5rcvh4ldvodz.jpg"
									alt=""
								/>
							</div>
							<div className="secondary-image">
								<img
									src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721236506/Hotel_trividia/qnm7ni4go4joa7jmufib.jpg"
									alt=""
								/>
							</div>
							<div className="review-box-one lg:w-[240px] md:w-[240px] sm:w-[180px] bg-white p-3 flex justify-start items-center gap-4">
								<div className="avater-image">
									<img
										src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721237081/Hotel_trividia/hwgnctu66uzxwo3xrzpz.png"
										alt=""
									/>
								</div>
								<div className="avater-content">
									<h6>Jasmine Nadiko</h6>
									<p>
										Give rating <span>4.7</span>
									</p>
								</div>
							</div>
							<div className="review-box-two lg:w-[240px] md:w-[240px] sm:w-[180px] bg-white p-3 flex justify-start items-center gap-4">
								<div className="avater-image">
									<img
										src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721237081/Hotel_trividia/hwgnctu66uzxwo3xrzpz.png"
										alt=""
									/>
								</div>
								<div className="avater-content">
									<h6>Jasmine Nadiko</h6>
									<p>
										Give rating <span>4.7</span>
									</p>
								</div>
							</div>
							<div className="review-box-three lg:w-[240px] md:w-[240px] sm:w-[180px] bg-white p-3 flex justify-start items-center gap-4">
								<div className="avater-image">
									<img
										src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721237081/Hotel_trividia/hwgnctu66uzxwo3xrzpz.png"
										alt=""
									/>
								</div>
								<div className="avater-content">
									<h6>Jasmine Nadiko</h6>
									<p>
										Give rating <span>4.7</span>
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default WhyChooseUs;
