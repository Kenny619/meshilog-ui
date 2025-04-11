import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

function SearchBar() {
	return (
		<div className="flex justify-center items-center p-6">
			<div className="relative w-full ml-12 mr-12  ">
				<SearchIcon className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
				<Input
					type="search"
					placeholder="Search..."
					className="pl-9 pr-12 h-9 rounded-full text-xs"
				/>
			</div>
		</div>
	);
}

export default SearchBar;
