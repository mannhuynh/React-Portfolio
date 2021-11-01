import React from "react";
import Product from "../product/Product";
import "./product_list.css";
import { products } from "../../data";

export default function ProductList() {
	return (
		<div className="pl">
			<div className="pl-texts">
				<h1 className="pl-title">It's Tim. I am better a Dad.</h1>
				<p className="pl-desc">
					Tim, the best dad ever in the world. Proved by his daughter. You can
					ask his daughter at any time. She will tell you more a bout Tim if you
					wanted too. Enjoy Tim's products as a developer, a cooker, or a dad.
				</p>
			</div>
			<div className="pl-list">
				{products.map((product) => (
					<Product key={product.id} {...product} />
				))}
			</div>
		</div>
	);
}
