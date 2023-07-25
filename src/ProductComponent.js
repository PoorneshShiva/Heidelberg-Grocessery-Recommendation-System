/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { GrMapLocation } from "react-icons/gr";
const ProductComponent = (props) => {
	const productNames = Object.values(props.products.product_name);
	const productImages = Object.values(props.products.product_image);
	const productPrices = Object.values(props.products.price);
	const storeAddress = Object.values(props.products.store_address);
	const productLinks = Object.values(props.products.product_link);
	const offerDuration = Object.values(props.products.offer_duration);
	const productQuanity = Object.values(props.products.product_quantity);
	const paybackPoints = Object.values(props.products.payback_points);

	// const openInNewTab = (url) => {
	// 	const newTab = window.open(url, "_blank");
	// 	newTab.focus();
	// };
	return (
		<div>
			{productNames.map((productName, index) => (
				<div
					key={index}
					className="my-[20px]">
					<a
						href={productLinks[index]}
						target="_blank">
						<div className="">
							<div className="flex">
								<img
									src={productImages[index]}
									alt=""
									width={300}
								/>

								<div className="mt-[25px] w-full ml-[30px]">
									<h1 className="font-bold text-[26px] inline">
										{productName}
									</h1>
									<p className="mt-[5px] text-[18px]">
										{" "}
										€ {productPrices[index]}
									</p>
									<p className="mt-[5px] text-[18px]">
										{productQuanity[index]}
									</p>
									<div className="flex items-center">
										<p className="my-[10px]">
											<span className="font-bold">Store Address: </span>
											{storeAddress[index]}
										</p>

										<a
											href={
												"https://www.google.com/maps/search/" +
												storeAddress[index].replace(" ", "+")
											}
											className="text-[30px]">
											<GrMapLocation />{" "}
										</a>
									</div>
									<p>
										<span className="font-bold">Offer Duration: </span>
										{offerDuration[index]}
									</p>
									<p>
										<span className="font-bold">Payback Points: </span>
										{paybackPoints[index]}
									</p>
								</div>
							</div>
						</div>
					</a>
				</div>
			))}
		</div>
	);
};

export default ProductComponent;
