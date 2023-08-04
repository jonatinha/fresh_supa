import CardTitle from "@/components/CardTitle.tsx";
import Divider from "../components/Divider.tsx";
import { FadedButton } from "@/components/FadedButton.tsx";

interface Props {
    title: string;
    p: string
}

export default function Card(props: Props) {

    return (
        <div class="flex flex-col w-full max-w-sm shadow-md bg-gray-200 rounded-lg p-4 gap-2">
            <div>
                <CardTitle>{props.title}</CardTitle>
            </div>
            <p>
                {props.p}
            </p>
            <Divider />
            <div class="flex flex-row w-full justify-end">
                <FadedButton toDirection="right" initialColor='#62c' finalColor='#77e'>Hello</FadedButton>
            </div>
        </div>
    )
}