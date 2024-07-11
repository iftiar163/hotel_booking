import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
	return (
		<>
			<header>
				{/* Desktop Version */}
				<div className="container mx-auto grid grid-cols-3 py-5 items-center">
					<div className="logo">
						<Link to={"/"}>
							<img
								src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1720631089/Hotel_trividia/xwrnehvsmyebqujxjtlt.png"
								alt=""
							/>
						</Link>
					</div>
					<div className="main-menu text-center text-white">
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
					<div className="login-button text-right">
						<button className="text-white">Sign Up</button>
					</div>
				</div>
			</header>
		</>
	);
};

export default Header;
