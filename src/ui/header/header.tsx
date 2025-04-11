import { Link } from "react-router-dom";
import logo from "../../assets/logo/gohan-letter-white.svg";

function Header() {
	return (
		<>
			<header className="bg-gohan-500 text-black w-full h-12 p-2 flex items-center justify-center">
				<h1>
					<Link to="/">
						<img src={logo} alt="logo" className="object-contain h-full w-12" />
					</Link>
				</h1>
			</header>
		</>
	);
}

export default Header;
