import About from "./components/about/About.js";
import Intro from "./components/intro/Intro.js";
import ProductList from "./components/product_list/ProductList.js";

const App = () => {
	return (
		<div>
			<Intro />
			<About />
			<ProductList />
		</div>
	);
};

export default App;
