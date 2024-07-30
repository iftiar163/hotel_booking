import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<>
			<header>
				{/* Desktop Version */}
				<div className="desktop-header lg:w-[1280px] md:w-[768px] sm:w-[425px] mx-auto grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-2 py-5 lg:px-0 md:px-4 sm:px-4 items-center">
					<div className="logo">
						<Link to={"/"}>
							<img
								src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1720631089/Hotel_trividia/xwrnehvsmyebqujxjtlt.png"
								alt=""
							/>
						</Link>
					</div>
					<div className="main-menu text-center text-white lg:block md:hidden sm:hidden">
						<ul className=" flex gap-8 justify-center align-middle">
							<li>
								<Link to={"/"}>Home</Link>
							</li>
							<li>
								<Link to={"/"}>About Us</Link>
							</li>
							<li>
								<Link to={"/"}>Rooms</Link>
							</li>
							<li>
								<Link to={"/"}>Services</Link>
							</li>
							<li>
								<Link to={"/"}>Contact</Link>
							</li>
						</ul>
					</div>
					<div className="login-button">
						<div className="signup-button flex justify-end">
							<button className="text-white lg:block md:hidden sm:hidden">
								Sign Up
							</button>
						</div>
						<div className="nav-button flex justify-end">
							<Link className="lg:hidden md:block sm:block">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									width="60"
									height="60"
									viewBox="0 0 60 60"
									fill="none"
								>
									<rect width="60" height="60" rx="14" fill="#FE6927" />
									<path
										d="M19 21.7856H41"
										stroke="white"
										stroke-width="1.96429"
										stroke-linecap="round"
									/>
									<path
										d="M19 30.4285H41"
										stroke="white"
										stroke-width="1.96429"
										stroke-linecap="round"
									/>
									<path
										d="M19 39.0713H41"
										stroke="white"
										stroke-width="1.96429"
										stroke-linecap="round"
									/>
								</svg>
							</Link>
						</div>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
