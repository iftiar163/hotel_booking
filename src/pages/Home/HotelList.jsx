const HotelList = () => {
	return (
		<>
			<section className="hotel-list-section">
				<div className="hotel-wrapper">
					{/* Hotel List Heading */}
					<div className="hotel-list-heading lg:w-[1280px] md:w-full sm:w-full mx-auto flex flex-col justify-center items-center gap-3">
						<h2>The Best Hotels For You</h2>
						<p>
							These are some of the hotels that we highly recommend for you. we
							guarantee the quality of the service, the food, the hotel area and
							various other aspects.
						</p>
					</div>
					{/* Hotel List Grid Items */}
					<div className="hotel-list-items lg:my-20 md:my-10 sm:my-10 lg:w-[1280px] md:w-full sm:w-full mx-auto grid lg:grid-cols-3  md:grid-cols-2 sm:grid-cols-1 lg:gap-8 md:gap-4 sm:gap-4">
						<div className="hotel-card">
							{/* Feature Image */}
							<div className="hotel-feature-image">
								<img
									src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721236506/Hotel_trividia/qnm7ni4go4joa7jmufib.jpg"
									alt=""
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="60"
									height="60"
									viewBox="0 0 60 60"
									fill="none"
								>
									<rect
										width="60"
										height="60"
										rx="30"
										fill="white"
										fill-opacity="0.4"
									/>
									<path
										d="M34.44 21.1C32.63 21.1 31.01 21.98 30 23.33C28.99 21.98 27.37 21.1 25.56 21.1C22.49 21.1 20 23.6 20 26.69C20 27.88 20.19 28.98 20.52 30C22.1 35 26.97 37.99 29.38 38.81C29.72 38.93 30.28 38.93 30.62 38.81C33.03 37.99 37.9 35 39.48 30C39.81 28.98 40 27.88 40 26.69C40 23.6 37.51 21.1 34.44 21.1Z"
										fill="white"
									/>
								</svg>
							</div>
							{/* Hotel Name */}
							<div className="hotel-title my-5">
								<h4>Java Heritage Hotel</h4>
								<p>start from $79/night</p>
							</div>
							{/* Booking Button */}
							<div className="hotel-booking flex flex-row justify-between">
								<button>Book Now</button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="60"
									height="60"
									viewBox="0 0 60 60"
									fill="none"
								>
									<rect
										width="60"
										height="60"
										rx="30"
										fill="#FE6927"
										fill-opacity="0.3"
									/>
									<path
										d="M26.36 21.3667C25.4267 17.33 19.3483 17.3183 18.415 21.3667C17.8667 23.735 19.3717 25.7417 20.6783 26.99C21.635 27.8883 23.14 27.8883 24.0967 26.99C25.4033 25.7417 26.8967 23.735 26.36 21.3667ZM22.4283 23.2333C21.7867 23.2333 21.2617 22.7083 21.2617 22.0667C21.2617 21.425 21.775 20.9 22.4167 20.9H22.4283C23.0817 20.9 23.595 21.425 23.595 22.0667C23.595 22.7083 23.0817 23.2333 22.4283 23.2333Z"
										fill="#FE6927"
									/>
									<path
										d="M41.5617 35.3667C40.6283 31.33 34.5267 31.3183 33.5817 35.3667C33.0333 37.735 34.5383 39.7417 35.8567 40.99C36.8133 41.8883 38.33 41.8883 39.2867 40.99C40.605 39.7417 42.11 37.735 41.5617 35.3667ZM37.6183 37.2333C36.9767 37.2333 36.4517 36.7083 36.4517 36.0667C36.4517 35.425 36.965 34.9 37.6067 34.9H37.6183C38.26 34.9 38.785 35.425 38.785 36.0667C38.785 36.7083 38.26 37.2333 37.6183 37.2333Z"
										fill="#FE6927"
									/>
									<path
										d="M29.9999 39.0416H26.8733C25.5199 39.0416 24.3416 38.225 23.8749 36.965C23.3966 35.705 23.7466 34.3166 24.7616 33.4183L34.0833 25.2633C34.6433 24.7733 34.6549 24.1083 34.4916 23.6533C34.3166 23.1983 33.8733 22.7083 33.1266 22.7083H29.9999C29.5216 22.7083 29.1249 22.3116 29.1249 21.8333C29.1249 21.355 29.5216 20.9583 29.9999 20.9583H33.1266C34.4799 20.9583 35.6583 21.775 36.1249 23.035C36.6033 24.295 36.2533 25.6833 35.2383 26.5816L25.9166 34.7366C25.3566 35.2266 25.3449 35.8916 25.5083 36.3466C25.6833 36.8017 26.1266 37.2916 26.8733 37.2916H29.9999C30.4783 37.2916 30.8749 37.6883 30.8749 38.1666C30.8749 38.645 30.4783 39.0416 29.9999 39.0416Z"
										fill="#FE6927"
									/>
								</svg>
							</div>
						</div>
						<div className="hotel-card">
							{/* Feature Image */}
							<div className="hotel-feature-image">
								<img
									src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721236506/Hotel_trividia/qnm7ni4go4joa7jmufib.jpg"
									alt=""
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="60"
									height="60"
									viewBox="0 0 60 60"
									fill="none"
								>
									<rect
										width="60"
										height="60"
										rx="30"
										fill="white"
										fill-opacity="0.4"
									/>
									<path
										d="M34.44 21.1C32.63 21.1 31.01 21.98 30 23.33C28.99 21.98 27.37 21.1 25.56 21.1C22.49 21.1 20 23.6 20 26.69C20 27.88 20.19 28.98 20.52 30C22.1 35 26.97 37.99 29.38 38.81C29.72 38.93 30.28 38.93 30.62 38.81C33.03 37.99 37.9 35 39.48 30C39.81 28.98 40 27.88 40 26.69C40 23.6 37.51 21.1 34.44 21.1Z"
										fill="white"
									/>
								</svg>
							</div>
							{/* Hotel Name */}
							<div className="hotel-title my-5">
								<h4>Grand Aston Hotel</h4>
								<p>start from $79/night</p>
							</div>
							{/* Booking Button */}
							<div className="hotel-booking flex flex-row justify-between">
								<button>Book Now</button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="60"
									height="60"
									viewBox="0 0 60 60"
									fill="none"
								>
									<rect
										width="60"
										height="60"
										rx="30"
										fill="#FE6927"
										fill-opacity="0.3"
									/>
									<path
										d="M26.36 21.3667C25.4267 17.33 19.3483 17.3183 18.415 21.3667C17.8667 23.735 19.3717 25.7417 20.6783 26.99C21.635 27.8883 23.14 27.8883 24.0967 26.99C25.4033 25.7417 26.8967 23.735 26.36 21.3667ZM22.4283 23.2333C21.7867 23.2333 21.2617 22.7083 21.2617 22.0667C21.2617 21.425 21.775 20.9 22.4167 20.9H22.4283C23.0817 20.9 23.595 21.425 23.595 22.0667C23.595 22.7083 23.0817 23.2333 22.4283 23.2333Z"
										fill="#FE6927"
									/>
									<path
										d="M41.5617 35.3667C40.6283 31.33 34.5267 31.3183 33.5817 35.3667C33.0333 37.735 34.5383 39.7417 35.8567 40.99C36.8133 41.8883 38.33 41.8883 39.2867 40.99C40.605 39.7417 42.11 37.735 41.5617 35.3667ZM37.6183 37.2333C36.9767 37.2333 36.4517 36.7083 36.4517 36.0667C36.4517 35.425 36.965 34.9 37.6067 34.9H37.6183C38.26 34.9 38.785 35.425 38.785 36.0667C38.785 36.7083 38.26 37.2333 37.6183 37.2333Z"
										fill="#FE6927"
									/>
									<path
										d="M29.9999 39.0416H26.8733C25.5199 39.0416 24.3416 38.225 23.8749 36.965C23.3966 35.705 23.7466 34.3166 24.7616 33.4183L34.0833 25.2633C34.6433 24.7733 34.6549 24.1083 34.4916 23.6533C34.3166 23.1983 33.8733 22.7083 33.1266 22.7083H29.9999C29.5216 22.7083 29.1249 22.3116 29.1249 21.8333C29.1249 21.355 29.5216 20.9583 29.9999 20.9583H33.1266C34.4799 20.9583 35.6583 21.775 36.1249 23.035C36.6033 24.295 36.2533 25.6833 35.2383 26.5816L25.9166 34.7366C25.3566 35.2266 25.3449 35.8916 25.5083 36.3466C25.6833 36.8017 26.1266 37.2916 26.8733 37.2916H29.9999C30.4783 37.2916 30.8749 37.6883 30.8749 38.1666C30.8749 38.645 30.4783 39.0416 29.9999 39.0416Z"
										fill="#FE6927"
									/>
								</svg>
							</div>
						</div>
						<div className="hotel-card">
							{/* Feature Image */}
							<div className="hotel-feature-image">
								<img
									src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721236506/Hotel_trividia/qnm7ni4go4joa7jmufib.jpg"
									alt=""
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="60"
									height="60"
									viewBox="0 0 60 60"
									fill="none"
								>
									<rect
										width="60"
										height="60"
										rx="30"
										fill="white"
										fill-opacity="0.4"
									/>
									<path
										d="M34.44 21.1C32.63 21.1 31.01 21.98 30 23.33C28.99 21.98 27.37 21.1 25.56 21.1C22.49 21.1 20 23.6 20 26.69C20 27.88 20.19 28.98 20.52 30C22.1 35 26.97 37.99 29.38 38.81C29.72 38.93 30.28 38.93 30.62 38.81C33.03 37.99 37.9 35 39.48 30C39.81 28.98 40 27.88 40 26.69C40 23.6 37.51 21.1 34.44 21.1Z"
										fill="white"
									/>
								</svg>
							</div>
							{/* Hotel Name */}
							<div className="hotel-title my-5">
								<h4>Nihi Sumba Resort</h4>
								<p>start from $79/night</p>
							</div>
							{/* Booking Button */}
							<div className="hotel-booking flex flex-row justify-between">
								<button>Book Now</button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="60"
									height="60"
									viewBox="0 0 60 60"
									fill="none"
								>
									<rect
										width="60"
										height="60"
										rx="30"
										fill="#FE6927"
										fill-opacity="0.3"
									/>
									<path
										d="M26.36 21.3667C25.4267 17.33 19.3483 17.3183 18.415 21.3667C17.8667 23.735 19.3717 25.7417 20.6783 26.99C21.635 27.8883 23.14 27.8883 24.0967 26.99C25.4033 25.7417 26.8967 23.735 26.36 21.3667ZM22.4283 23.2333C21.7867 23.2333 21.2617 22.7083 21.2617 22.0667C21.2617 21.425 21.775 20.9 22.4167 20.9H22.4283C23.0817 20.9 23.595 21.425 23.595 22.0667C23.595 22.7083 23.0817 23.2333 22.4283 23.2333Z"
										fill="#FE6927"
									/>
									<path
										d="M41.5617 35.3667C40.6283 31.33 34.5267 31.3183 33.5817 35.3667C33.0333 37.735 34.5383 39.7417 35.8567 40.99C36.8133 41.8883 38.33 41.8883 39.2867 40.99C40.605 39.7417 42.11 37.735 41.5617 35.3667ZM37.6183 37.2333C36.9767 37.2333 36.4517 36.7083 36.4517 36.0667C36.4517 35.425 36.965 34.9 37.6067 34.9H37.6183C38.26 34.9 38.785 35.425 38.785 36.0667C38.785 36.7083 38.26 37.2333 37.6183 37.2333Z"
										fill="#FE6927"
									/>
									<path
										d="M29.9999 39.0416H26.8733C25.5199 39.0416 24.3416 38.225 23.8749 36.965C23.3966 35.705 23.7466 34.3166 24.7616 33.4183L34.0833 25.2633C34.6433 24.7733 34.6549 24.1083 34.4916 23.6533C34.3166 23.1983 33.8733 22.7083 33.1266 22.7083H29.9999C29.5216 22.7083 29.1249 22.3116 29.1249 21.8333C29.1249 21.355 29.5216 20.9583 29.9999 20.9583H33.1266C34.4799 20.9583 35.6583 21.775 36.1249 23.035C36.6033 24.295 36.2533 25.6833 35.2383 26.5816L25.9166 34.7366C25.3566 35.2266 25.3449 35.8916 25.5083 36.3466C25.6833 36.8017 26.1266 37.2916 26.8733 37.2916H29.9999C30.4783 37.2916 30.8749 37.6883 30.8749 38.1666C30.8749 38.645 30.4783 39.0416 29.9999 39.0416Z"
										fill="#FE6927"
									/>
								</svg>
							</div>
						</div>
						<div className="hotel-card">
							{/* Feature Image */}
							<div className="hotel-feature-image">
								<img
									src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721236506/Hotel_trividia/qnm7ni4go4joa7jmufib.jpg"
									alt=""
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="60"
									height="60"
									viewBox="0 0 60 60"
									fill="none"
								>
									<rect
										width="60"
										height="60"
										rx="30"
										fill="white"
										fill-opacity="0.4"
									/>
									<path
										d="M34.44 21.1C32.63 21.1 31.01 21.98 30 23.33C28.99 21.98 27.37 21.1 25.56 21.1C22.49 21.1 20 23.6 20 26.69C20 27.88 20.19 28.98 20.52 30C22.1 35 26.97 37.99 29.38 38.81C29.72 38.93 30.28 38.93 30.62 38.81C33.03 37.99 37.9 35 39.48 30C39.81 28.98 40 27.88 40 26.69C40 23.6 37.51 21.1 34.44 21.1Z"
										fill="white"
									/>
								</svg>
							</div>
							{/* Hotel Name */}
							<div className="hotel-title my-5">
								<h4>Yellowstar Hotel Jimbaran</h4>
								<p>start from $79/night</p>
							</div>
							{/* Booking Button */}
							<div className="hotel-booking flex flex-row justify-between">
								<button>Book Now</button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="60"
									height="60"
									viewBox="0 0 60 60"
									fill="none"
								>
									<rect
										width="60"
										height="60"
										rx="30"
										fill="#FE6927"
										fill-opacity="0.3"
									/>
									<path
										d="M26.36 21.3667C25.4267 17.33 19.3483 17.3183 18.415 21.3667C17.8667 23.735 19.3717 25.7417 20.6783 26.99C21.635 27.8883 23.14 27.8883 24.0967 26.99C25.4033 25.7417 26.8967 23.735 26.36 21.3667ZM22.4283 23.2333C21.7867 23.2333 21.2617 22.7083 21.2617 22.0667C21.2617 21.425 21.775 20.9 22.4167 20.9H22.4283C23.0817 20.9 23.595 21.425 23.595 22.0667C23.595 22.7083 23.0817 23.2333 22.4283 23.2333Z"
										fill="#FE6927"
									/>
									<path
										d="M41.5617 35.3667C40.6283 31.33 34.5267 31.3183 33.5817 35.3667C33.0333 37.735 34.5383 39.7417 35.8567 40.99C36.8133 41.8883 38.33 41.8883 39.2867 40.99C40.605 39.7417 42.11 37.735 41.5617 35.3667ZM37.6183 37.2333C36.9767 37.2333 36.4517 36.7083 36.4517 36.0667C36.4517 35.425 36.965 34.9 37.6067 34.9H37.6183C38.26 34.9 38.785 35.425 38.785 36.0667C38.785 36.7083 38.26 37.2333 37.6183 37.2333Z"
										fill="#FE6927"
									/>
									<path
										d="M29.9999 39.0416H26.8733C25.5199 39.0416 24.3416 38.225 23.8749 36.965C23.3966 35.705 23.7466 34.3166 24.7616 33.4183L34.0833 25.2633C34.6433 24.7733 34.6549 24.1083 34.4916 23.6533C34.3166 23.1983 33.8733 22.7083 33.1266 22.7083H29.9999C29.5216 22.7083 29.1249 22.3116 29.1249 21.8333C29.1249 21.355 29.5216 20.9583 29.9999 20.9583H33.1266C34.4799 20.9583 35.6583 21.775 36.1249 23.035C36.6033 24.295 36.2533 25.6833 35.2383 26.5816L25.9166 34.7366C25.3566 35.2266 25.3449 35.8916 25.5083 36.3466C25.6833 36.8017 26.1266 37.2916 26.8733 37.2916H29.9999C30.4783 37.2916 30.8749 37.6883 30.8749 38.1666C30.8749 38.645 30.4783 39.0416 29.9999 39.0416Z"
										fill="#FE6927"
									/>
								</svg>
							</div>
						</div>
						<div className="hotel-card">
							{/* Feature Image */}
							<div className="hotel-feature-image">
								<img
									src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721236506/Hotel_trividia/qnm7ni4go4joa7jmufib.jpg"
									alt=""
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="60"
									height="60"
									viewBox="0 0 60 60"
									fill="none"
								>
									<rect
										width="60"
										height="60"
										rx="30"
										fill="white"
										fill-opacity="0.4"
									/>
									<path
										d="M34.44 21.1C32.63 21.1 31.01 21.98 30 23.33C28.99 21.98 27.37 21.1 25.56 21.1C22.49 21.1 20 23.6 20 26.69C20 27.88 20.19 28.98 20.52 30C22.1 35 26.97 37.99 29.38 38.81C29.72 38.93 30.28 38.93 30.62 38.81C33.03 37.99 37.9 35 39.48 30C39.81 28.98 40 27.88 40 26.69C40 23.6 37.51 21.1 34.44 21.1Z"
										fill="white"
									/>
								</svg>
							</div>
							{/* Hotel Name */}
							<div className="hotel-title my-5">
								<h4>The Alana Hotel</h4>
								<p>start from $79/night</p>
							</div>
							{/* Booking Button */}
							<div className="hotel-booking flex flex-row justify-between">
								<button>Book Now</button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="60"
									height="60"
									viewBox="0 0 60 60"
									fill="none"
								>
									<rect
										width="60"
										height="60"
										rx="30"
										fill="#FE6927"
										fill-opacity="0.3"
									/>
									<path
										d="M26.36 21.3667C25.4267 17.33 19.3483 17.3183 18.415 21.3667C17.8667 23.735 19.3717 25.7417 20.6783 26.99C21.635 27.8883 23.14 27.8883 24.0967 26.99C25.4033 25.7417 26.8967 23.735 26.36 21.3667ZM22.4283 23.2333C21.7867 23.2333 21.2617 22.7083 21.2617 22.0667C21.2617 21.425 21.775 20.9 22.4167 20.9H22.4283C23.0817 20.9 23.595 21.425 23.595 22.0667C23.595 22.7083 23.0817 23.2333 22.4283 23.2333Z"
										fill="#FE6927"
									/>
									<path
										d="M41.5617 35.3667C40.6283 31.33 34.5267 31.3183 33.5817 35.3667C33.0333 37.735 34.5383 39.7417 35.8567 40.99C36.8133 41.8883 38.33 41.8883 39.2867 40.99C40.605 39.7417 42.11 37.735 41.5617 35.3667ZM37.6183 37.2333C36.9767 37.2333 36.4517 36.7083 36.4517 36.0667C36.4517 35.425 36.965 34.9 37.6067 34.9H37.6183C38.26 34.9 38.785 35.425 38.785 36.0667C38.785 36.7083 38.26 37.2333 37.6183 37.2333Z"
										fill="#FE6927"
									/>
									<path
										d="M29.9999 39.0416H26.8733C25.5199 39.0416 24.3416 38.225 23.8749 36.965C23.3966 35.705 23.7466 34.3166 24.7616 33.4183L34.0833 25.2633C34.6433 24.7733 34.6549 24.1083 34.4916 23.6533C34.3166 23.1983 33.8733 22.7083 33.1266 22.7083H29.9999C29.5216 22.7083 29.1249 22.3116 29.1249 21.8333C29.1249 21.355 29.5216 20.9583 29.9999 20.9583H33.1266C34.4799 20.9583 35.6583 21.775 36.1249 23.035C36.6033 24.295 36.2533 25.6833 35.2383 26.5816L25.9166 34.7366C25.3566 35.2266 25.3449 35.8916 25.5083 36.3466C25.6833 36.8017 26.1266 37.2916 26.8733 37.2916H29.9999C30.4783 37.2916 30.8749 37.6883 30.8749 38.1666C30.8749 38.645 30.4783 39.0416 29.9999 39.0416Z"
										fill="#FE6927"
									/>
								</svg>
							</div>
						</div>
						<div className="hotel-card">
							{/* Feature Image */}
							<div className="hotel-feature-image">
								<img
									src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721236506/Hotel_trividia/qnm7ni4go4joa7jmufib.jpg"
									alt=""
								/>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="60"
									height="60"
									viewBox="0 0 60 60"
									fill="none"
								>
									<rect
										width="60"
										height="60"
										rx="30"
										fill="white"
										fill-opacity="0.4"
									/>
									<path
										d="M34.44 21.1C32.63 21.1 31.01 21.98 30 23.33C28.99 21.98 27.37 21.1 25.56 21.1C22.49 21.1 20 23.6 20 26.69C20 27.88 20.19 28.98 20.52 30C22.1 35 26.97 37.99 29.38 38.81C29.72 38.93 30.28 38.93 30.62 38.81C33.03 37.99 37.9 35 39.48 30C39.81 28.98 40 27.88 40 26.69C40 23.6 37.51 21.1 34.44 21.1Z"
										fill="white"
									/>
								</svg>
							</div>
							{/* Hotel Name */}
							<div className="hotel-title my-5">
								<h4>COR Hotel</h4>
								<p>start from $79/night</p>
							</div>
							{/* Booking Button */}
							<div className="hotel-booking flex flex-row justify-between">
								<button>Book Now</button>
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="60"
									height="60"
									viewBox="0 0 60 60"
									fill="none"
								>
									<rect
										width="60"
										height="60"
										rx="30"
										fill="#FE6927"
										fill-opacity="0.3"
									/>
									<path
										d="M26.36 21.3667C25.4267 17.33 19.3483 17.3183 18.415 21.3667C17.8667 23.735 19.3717 25.7417 20.6783 26.99C21.635 27.8883 23.14 27.8883 24.0967 26.99C25.4033 25.7417 26.8967 23.735 26.36 21.3667ZM22.4283 23.2333C21.7867 23.2333 21.2617 22.7083 21.2617 22.0667C21.2617 21.425 21.775 20.9 22.4167 20.9H22.4283C23.0817 20.9 23.595 21.425 23.595 22.0667C23.595 22.7083 23.0817 23.2333 22.4283 23.2333Z"
										fill="#FE6927"
									/>
									<path
										d="M41.5617 35.3667C40.6283 31.33 34.5267 31.3183 33.5817 35.3667C33.0333 37.735 34.5383 39.7417 35.8567 40.99C36.8133 41.8883 38.33 41.8883 39.2867 40.99C40.605 39.7417 42.11 37.735 41.5617 35.3667ZM37.6183 37.2333C36.9767 37.2333 36.4517 36.7083 36.4517 36.0667C36.4517 35.425 36.965 34.9 37.6067 34.9H37.6183C38.26 34.9 38.785 35.425 38.785 36.0667C38.785 36.7083 38.26 37.2333 37.6183 37.2333Z"
										fill="#FE6927"
									/>
									<path
										d="M29.9999 39.0416H26.8733C25.5199 39.0416 24.3416 38.225 23.8749 36.965C23.3966 35.705 23.7466 34.3166 24.7616 33.4183L34.0833 25.2633C34.6433 24.7733 34.6549 24.1083 34.4916 23.6533C34.3166 23.1983 33.8733 22.7083 33.1266 22.7083H29.9999C29.5216 22.7083 29.1249 22.3116 29.1249 21.8333C29.1249 21.355 29.5216 20.9583 29.9999 20.9583H33.1266C34.4799 20.9583 35.6583 21.775 36.1249 23.035C36.6033 24.295 36.2533 25.6833 35.2383 26.5816L25.9166 34.7366C25.3566 35.2266 25.3449 35.8916 25.5083 36.3466C25.6833 36.8017 26.1266 37.2916 26.8733 37.2916H29.9999C30.4783 37.2916 30.8749 37.6883 30.8749 38.1666C30.8749 38.645 30.4783 39.0416 29.9999 39.0416Z"
										fill="#FE6927"
									/>
								</svg>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default HotelList;
