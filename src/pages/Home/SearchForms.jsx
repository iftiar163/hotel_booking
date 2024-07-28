import { MdOutlineMyLocation } from "react-icons/md";
import { IoChevronForward } from "react-icons/io5";
import { TbWorldSearch } from "react-icons/tb";
import { FaCalendarAlt } from "react-icons/fa";
import { PiBuildingOfficeBold } from "react-icons/pi";

const SearchForms = () => {
	return (
		<>
			{/* Search Form Elements */}

			<section className="search-form-section mx-4">
				<div className="search-form-wrapper lg:w-[1280px] md:w-[768px] sm:w-[425px] mx-auto">
					<div className="search-heading-wrapper flex lg:flex-row md:flex-row sm:flex-col gap-5 justify-between items-center">
						<div className="search-head flex justify-between items-center gap-5">
							<MdOutlineMyLocation />
							<h3>Hotels and Resorts in Bali</h3>
						</div>
						<div className="latest-searching flex justify-between items-center gap-5">
							<p>Latest Searching</p>
							<IoChevronForward />
						</div>
					</div>
					{/* Form Devider */}
					<div className="search-divider my-6">
						<img
							src="https://res.cloudinary.com/dwrvexxbo/image/upload/v1721151350/Hotel_trividia/gc8te2ukydf7wfo5gvlv.png"
							alt=""
						/>
					</div>
					{/* Search Form */}
					<div className="search-form-body flex lg:flex-row md:flex-col sm:flex-col content-center items-center gap-2">
						<div className="form-box flex flex-col gap-2">
							<label htmlFor="">Destination</label>
							<div className="icons flex">
								<TbWorldSearch />
								<input type="text" placeholder="Bali, Indonesia" />
							</div>
						</div>
						<div className="form-box flex flex-col gap-2">
							<label htmlFor="">Check-In</label>
							<div className="icons flex">
								<FaCalendarAlt />
								<input type="date" placeholder="Tue, 25 June 2022" />
							</div>
						</div>
						<div className="form-box flex flex-col gap-2">
							<label htmlFor="">Check-Out</label>
							<div className="icons flex">
								<FaCalendarAlt />
								<input type="date" placeholder="Sat, 29 June 2022" />
							</div>
						</div>
						<div className="form-box flex flex-col gap-2">
							<label htmlFor="">Room & Guest</label>
							<div className="icons flex">
								<PiBuildingOfficeBold />
								<input type="text" placeholder="1 Room, 2 Guests" />
							</div>
						</div>
						<div className="form-box flex items-center content-baseline">
							<button>Search</button>
						</div>
					</div>
				</div>
			</section>
		</>
	);
};

export default SearchForms;
