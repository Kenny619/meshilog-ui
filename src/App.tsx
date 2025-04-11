import "./index.css";
import { useStore } from "./store";
import Header from "./ui/header/header";
import SearchBar from "./ui/searchBar";
import Tab from "./ui/tab";

function App() {
	const count = useStore((state) => state.count);
	const increment = useStore((state) => state.increment);
	return (
		<>
			<Header />
			<SearchBar />
			<Tab />
		</>
	);
}

export default App;
