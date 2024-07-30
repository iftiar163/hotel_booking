import { Link } from "react-router-dom";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
	return (
		<>
			<footer>
				<div className="lg:w-[1280px] md:w-full sm:w-full mx-auto grid lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2">
					{/* Footer Logo */}
					<div className="lg:w-[200px] md:w-full sm:w-full footer-logo flex flex-col gap-4">
						<Link>
							<img
								src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1720631089/Hotel_trividia/xwrnehvsmyebqujxjtlt.png"
								alt=""
							/>
						</Link>
						<p>The best hotel booking platform in the world</p>
						<div className="social-icons">
							<ul className="flex flex-row justify-start items-center gap-1">
								<li>
									<Link to={"#"}>
										<FaFacebook />
									</Link>
								</li>
								<li>
									<Link to={"#"}>
										<BsTwitterX />
									</Link>
								</li>
								<li>
									<Link to={"#"}>
										<FaLinkedinIn />
									</Link>
								</li>
								<li>
									<Link to={"#"}>
										<FaYoutube />
									</Link>
								</li>
							</ul>
						</div>
					</div>
					{/* Rooms Coloumn */}
					<div className="lg:w-[200px] md:w-full sm:w-full footer-rooms">
						<div className="links-heading">
							<h5>Rooms</h5>
						</div>
						<div className="usefullinks-list my-6">
							<ul className="flex flex-col justify-start align-middle gap-3">
								<li>
									<Link>
										<p>Standard</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Delux</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Family</p>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					<div className="lg:w-[200px] md:w-full sm:w-full resource">
						<div className="links-heading">
							<h5>Resources</h5>
						</div>
						<div className="usefullinks-list my-6">
							<ul className="flex flex-col justify-start align-middle gap-3">
								<li>
									<Link>
										<p>Help Center</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Guides</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Partner Network</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Developers</p>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					{/* Company Links */}
					<div className="lg:w-[200px] md:w-full sm:w-full cpmpany">
						<div className="links-heading">
							<h5>Company</h5>
						</div>
						<div className="usefullinks-list my-6">
							<ul className="flex flex-col justify-start align-middle gap-3">
								<li>
									<Link>
										<p>About Us</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Testimonials</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Terms & Conditions</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Privacy Policy</p>
									</Link>
								</li>
								<li>
									<Link>
										<p>Cookie Policy</p>
									</Link>
								</li>
							</ul>
						</div>
					</div>
					{/* Newsletter Box */}
					<div className="lg:w-[250px] md:w-full sm:w-full newsletter">
						<div className="links-heading">
							<h5>Newsletter</h5>
						</div>
						<div className="usefullinks-list my-6">
							<p>Subscribe and get the latest updates</p>
						</div>
						<div className="newsletter-form">
							<form action="">
								<div className="form-action-fields flex flex-row justify-start align-middle">
									<div className="input-email-fields">
										<input type="text" placeholder="Enter your email" />
									</div>
									<div className="submit-button">
										<button>Submit</button>
									</div>
								</div>
							</form>
						</div>
					</div>
				</div>
				{/* Copyright Block */}
				<div className="lg:w-[1280px] md:w-full sm:w-full mx-auto copyrigh-claims flex flex-row items-center justify-center">
					<p>&copy; 2024 Design & Develop By Iftiar Hossain</p>
				</div>
			</footer>
		</>
	);
};

export default Footer;
