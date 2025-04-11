import { List, MapPin, ToggleLeft } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Filter from "./filter";

function Tab() {
	return (
		<div className="flex justify-center items-center pl-3 pr-3 w-full">
			<Tabs defaultValue="account" className="w-full">
				<TabsList className="w-full rounded-sm">
					<TabsTrigger value="filter" className="w-full text-xs">
						<ToggleLeft strokeWidth={1.25} />
						Filter
					</TabsTrigger>

					<TabsTrigger value="list" className="w-1/3 text-xs ">
						<List strokeWidth={1.25} />
						List
					</TabsTrigger>
					<TabsTrigger value="map" className="w-1/3 text-xs">
						<MapPin strokeWidth={1.25} />
						Map
					</TabsTrigger>
				</TabsList>
				<TabsContent value="filter">
					<Filter />
				</TabsContent>
				<TabsContent value="list">Change your password here.</TabsContent>
				<TabsContent value="map">Change your password here.</TabsContent>
			</Tabs>
		</div>
	);
}

export default Tab;
