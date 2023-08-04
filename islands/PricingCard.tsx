import FadedTitle from "@/components/FadedTitle.tsx"
import CardTitle from "@/components/CardTitle.tsx"
import { FadedButton } from "@/components/FadedButton.tsx"
import IconCheck from "https://deno.land/x/tabler_icons_tsx@0.0.3/tsx/check.tsx"

interface Fade{
    fromColor: string;
    toColor: string;
}

interface PricingCardProps {
    color: Fade,
    title: string,
    price: number,
    paymentMethod: string,
    benefits: string[],
    notInclude: string[] | null,
    buttonText: string,
}



export default function PricingCard(props: PricingCardProps) {

        return (

            // ring border
            <div
                style={{
                    backgroundColor: "rgba(50,50,50,.5)",
                    boxShadow: "rgba(0,0,0,.2) 4px 4px 8px 0px",
                }}
                class="p-1 rounded-2xl w-60"
            >
                {/* main */}
                <div 
                    style={{boxShadow: "rgba(0,0,0,.6) 0px 0px 4px 0px"}}
                    class="bg-gray-900 rounded-2xl p-4 gap-2 flex flex-col"
                >
                    {/* header */}
                    <div>
                        <CardTitle
                            stylee="text-2xl text-white"
                        >{props.title}</CardTitle>
                    </div>
                    <div>
                        <FadedTitle
                            stylee="text-3xl text-white"
                            toColor={props.color.toColor}
                            fromColor={props.color.fromColor}
                        >{"R$" + props.price.toFixed(2)}</FadedTitle>
                    </div>
                    <div>
                        <ul>
                            {props.benefits.map((item, index) => (
                            <li key={index} class="text-white flex flex-row gap-1">
                                <IconCheck class="w-6 h-6" />{item}
                            </li>
                            ))}
                        </ul>
                    </div>
                    <div class="flex flex-row pt-2">
                        <FadedButton toDirection="right" initialColor={props.color.fromColor} finalColor={props.color.toColor}>Buy</FadedButton>              
                    </div>
                </div>
            </div>

        )

}