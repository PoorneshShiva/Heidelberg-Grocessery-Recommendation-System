/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/anchor-is-valid */
import Select from "react-select";
import React, { useState, useRef } from "react";
import { GrMapLocation } from "react-icons/gr";
import axios from "axios";
import { MultiSelect } from "react-multi-select-component";
import ProductComponent from "./ProductComponent";
import {
	categoryOptions,
	storeOptions,
	offerOptions,
	pricingOptions,
} from "./selectionDetails";
function App() {
	const [products, setProducts] = useState({});
	const [loading, setLoading] = useState(false);

	const [productsAvailable, setProductsAvailable] = useState(false);
	const [query, setQuery] = useState("");
	const handleClick = async () => {
		setProductsAvailable(false);
		setLoading(true);
		const data = {
			product_name: query,
			top_n: sliderValue,
			category: selectedCategoryOption.map((each) => each.value),
			pricing: selectedPricing.value,
			offer: selectedOffer.value,
			store_address: selectedStoreOption.map((each) => each.value),
		};

		axios
			.post("http://106.51.36.139:8090", JSON.stringify(data), {
				headers: {
					"Content-Type": "application/json",
					Connection: "keep-alive",
					Accept: "*/*",
				},
			})
			.then((recommended_data) => {
				setProductsAvailable(true);
				setProducts(recommended_data.data);

				setLoading(false);
			})
			.catch((error) => setLoading(false));
		handleScroll();
	};
	const scrollRef = useRef(null);
	const handleScroll = () => {
		// Scroll to the element with the ref
		scrollRef.current.scrollIntoView({ behavior: "smooth" });
	};
	const [sliderValue, setSliderValue] = useState(0);

	const handleSliderChange = (event) => {
		const newValue = parseInt(event.target.value);
		setSliderValue(newValue);
	};

	const [selectedCategoryOption, setSelectedCategoryOption] = useState([]);
	const [selectedStoreOption, setSelectedStoreOption] = useState([]);
	const [selectedPricing, setSelectedPricingOption] = useState([]);
	const [selectedOffer, setSelectedOfferOption] = useState([]);
	return (
		<div className="w-[50%] mx-auto">
			<div>
				{loading ? (
					<div className="mt-[30%] ml-[30%]">
						<img
							src="https://i.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.webp"
							alt=""
						/>
					</div>
				) : (
					<div>
						<div>
							<p className="text-center font-bold text-[26px] my-[20px]">
								Heidelberg Grocessory Recommendation
							</p>
							<p className="text-center text-[18px] my-[5px] pt-[10px]">
								Search Query (de)
							</p>
							<input
								type="text"
								placeholder="  Search Query (de)"
								className="w-full h-[40px] border-grey border border-solid px-[10px]"
								value={query}
								onChange={(e) => setQuery(e.target.value)}
							/>
							<div className="">
								<p className="text-center text-[18px] my-[5px]">
									Category Options
								</p>
								<MultiSelect
									value={selectedCategoryOption}
									onChange={setSelectedCategoryOption}
									options={categoryOptions}
									labelledBy="Select Category"
								/>
								<p className="text-center  text-[18px] my-[5px]">
									Select Stores
								</p>
								<MultiSelect
									value={selectedStoreOption}
									onChange={setSelectedStoreOption}
									options={storeOptions}
									labelledBy="Select all stores"
								/>
								<p className="text-center  text-[18px] my-[5px]">
									Select Price
								</p>
								<Select
									value={selectedPricing}
									onChange={setSelectedPricingOption}
									options={pricingOptions}
									labelledBy="Select Price"
								/>
								<p className="text-center text-[18px] my-[5px]">Select Offer</p>
								<Select
									value={selectedOffer}
									onChange={setSelectedOfferOption}
									options={offerOptions}
									labelledBy="Select Offer"
								/>
								<p className="text-center  text-[18px] mt-[20px]">
									Number of Products {sliderValue}
								</p>

								<input
									type="range"
									min={0}
									max={30}
									value={sliderValue}
									onChange={handleSliderChange}
									className="w-full h-[40px]  mt-[10px] border-grey border border-solid"
								/>
								<div className="text-center text-[20px]">
									<button
										className="mx-auto border border-solid border-grey px-[15px] py-[5px] rounded mx-auto"
										onClick={() => {
											handleClick();
										}}>
										Submit
									</button>
								</div>
							</div>
						</div>
					</div>
				)}
			</div>

			<div ref={scrollRef}>
				{productsAvailable && <ProductComponent products={products} />}
			</div>
		</div>
	);
}

export default App;
