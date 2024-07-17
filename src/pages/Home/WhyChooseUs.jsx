const WhyChooseUs = () => {
	return (
		<>
			<section className="why-choose-us">
				{/* Why Choose Heading */}
				<div className="why-choose-heading w-[1280px] mx-auto flex flex-col justify-center items-center gap-3">
					<h2>Why You Should Choose Us</h2>
					<p>
						You should choose us because we provide the best accommodation and
						we have sorted all the hotels here based on their quality.
					</p>
				</div>
				{/* Why Choose Content */}
				<div className="why-choose-content my-5 w-[1280px] mx-auto flex flex-row">
					{/* Left Container */}
					<div className="left-container w-1/2 flex flex-col gap-7">
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
					<div className="right-container w-1/2">
						<div className="right-content-wrapper ">
							<div className="main-image flex justify-end items-end">
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
							<div className="review-box-one w-[240px] bg-white p-3 flex justify-start items-center gap-4">
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
							<div className="review-box-two w-[240px] bg-white p-3 flex justify-start items-center gap-4">
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
							<div className="review-box-three w-[240px] bg-white p-3 flex justify-start items-center gap-4">
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
