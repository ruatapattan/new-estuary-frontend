import { createContext, useState } from "react";

const ProductFilterContext = createContext();

function ProductFilterContextProvider(props) {
	const [currentCategory, setCurrentCategory] = useState({ id: 4, name: "all" });
	const [currentPrice, setCurrentPrice] = useState({
		from: "0",
		to: ">1000",
	});

	return (
		<ProductFilterContext.Provider value={{ currentPrice, setCurrentPrice, currentCategory, setCurrentCategory }}>
			{props.children}
		</ProductFilterContext.Provider>
	);
}
export { ProductFilterContext, ProductFilterContextProvider };
