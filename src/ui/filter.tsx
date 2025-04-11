import { Switch } from "@/components/ui/switch";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Slider } from "@/components/ui/slider";
import { useFilterScore } from "@/store";

function Filter() {
	const score = useFilterScore((state) => state.filterScore);
	const setScore = useFilterScore((state) => state.setFilterScore);
	return (
		<div className="pl-3 pr-3 w-full bg-gohan-50">
			<div className="flex justify-center items-center w-full gap-4 text-xs p-2 border-b-1 border-gohan-100">
				<div className="flex w-2/8">最寄り駅</div>
				<div className="flex w-6/8">
					<Input
						type="text"
						placeholder="駅名を入力"
						className="w-full text-xs rounded-full h-6"
					/>
				</div>
			</div>

			<div className="flex justify-center items-center w-full gap-4 text-xs p-2 border-b-1 border-gohan-100">
				<div className="flex w-2/8">駅から徒歩</div>
				<div className="flex w-6/8">
					<RadioGroup className="flex w-full">
						<div className="flex w-1/3 items-center space-x-2">
							<RadioGroupItem value="5" id="5" />
							<Label htmlFor="5" className="text-xs">
								5分以内
							</Label>
						</div>
						<div className="flex w-1/3 items-center space-x-2">
							<RadioGroupItem value="10" id="10" />
							<Label htmlFor="10" className="text-xs">
								10分以内
							</Label>
						</div>
						<div className="flex w-1/3 items-center space-x-2">
							<RadioGroupItem value="15" id="15" />
							<Label htmlFor="15" className="text-xs">
								15分以内
							</Label>
						</div>
					</RadioGroup>
				</div>
			</div>
			<div className="flex justify-center items-center w-full gap-4 text-xs p-2 border-b-1 border-gohan-100">
				<div className="flex w-2/8">ジャンル</div>
				<div className="flex w-6/8">
					<Badge className="rounded-full h-5 text-xxs bg-gohan-500">
						<span>カフェ</span>
					</Badge>
				</div>
			</div>
			<div className="flex justify-center items-center w-full gap-4 text-xs p-2 border-b-1 border-gohan-100">
				<div className="flex w-2/8">スコア</div>
				<div className="flex w-6/8 text-xs">
					<div className="flex flex-grow">
						<Slider
							defaultValue={[50]}
							min={0}
							max={90}
							step={10}
							onValueChange={(value) => setScore(value[0])}
							className=""
						/>
					</div>
					<div className="flex w-2/8 pl-4 justify-end">
						<span>{score} 以上</span>
					</div>
				</div>
			</div>
			<div className="flex justify-center items-center w-full gap-4 text-xs p-2 border-b-1 border-gohan-100">
				<div className="flex w-2/8">アワード受賞</div>
				<div className="flex w-6/8 text-xs">
					<Switch className="ml-2 mr-2 data-[state=checked]:bg-gohan-500" />
				</div>
			</div>
			<div className="flex justify-center items-center w-full gap-4 text-xs p-2 border-b-1 border-gohan-100">
				<div className="flex w-2/8">現在営業中</div>
				<div className="flex w-6/8">
					<Switch className="ml-2 mr-2 data-[state=checked]:bg-gohan-500" />
				</div>
			</div>
			<div className="flex justify-center items-center w-full gap-4 text-xs p-2 border-b-1 border-gohan-100">
				<div className="flex w-2/8">喫煙可</div>
				<div className="flex w-6/8">
					<Switch className="ml-2 mr-2 data-[state=checked]:bg-gohan-500" />
				</div>
			</div>
			<div className="flex justify-center items-center w-full gap-4 text-xs p-2 border-b-1 border-gohan-100">
				<div className="flex w-2/8">個室あり</div>
				<div className="flex w-6/8">
					<Switch className="ml-2 mr-2 data-[state=checked]:bg-gohan-500" />
				</div>
			</div>
			<div className="flex justify-center items-center w-full gap-4 text-xs p-2 border-b-1 border-gohan-100">
				<div className="flex w-2/8">予約可</div>
				<div className="flex w-6/8">
					<Switch className="ml-2 mr-2 data-[state=checked]:bg-gohan-500" />
				</div>
			</div>
			<div className="flex justify-center items-center w-full gap-4 text-xs p-2 border-b-1 border-gohan-100">
				<div className="flex w-2/8">駐車場あり</div>
				<div className="flex w-6/8">
					<Switch className="ml-2 mr-2 data-[state=checked]:bg-gohan-500" />
				</div>
			</div>
		</div>
	);
}

export default Filter;
