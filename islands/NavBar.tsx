import NavTitle from '@/components/NavTitle.tsx'
import { Signal } from "@preact/signals";
import { FadedButton } from "@/components/FadedButton.tsx";

interface Props {
    title: string;
}

export default function NavBar(props: Props) {

    return (
        <div class="flex flex-row justify-between items-center h-16 px-2 shadow-md">
            <NavTitle>{props.title}</NavTitle>
            <div>
                {/* <DropMenu></DropMenu> */}
                <FadedButton toDirection="right" initialColor='#62c' finalColor='#77e'>Hello</FadedButton>
            </div>
        </div>
    )
}