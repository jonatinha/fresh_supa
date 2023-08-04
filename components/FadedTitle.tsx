import { JSX } from "preact";

//import './faded_title.css'

interface Props{
  stylee: string | null;
  toColor: string| null;
  fromColor: string| null;
}

export default function FadedTitle(props: JSX.HTMLAttributes<HTMLDivElement> & Props) {

    const toColor = props.toColor ?? "#000";
    const fromColor = props.fromColor ?? "#000";

    return (
        <div
            {...props}
            disabled={true}
            style={{
            backgroundImage: `linear-gradient(to top, ${fromColor}, ${toColor})`,
            backgroundClip: 'text',
            WebkitBackgroundClip: 'text',
            color: 'transparent',
            WebkitTextFillColor: 'transparent',
            width: 'fit-content',
            }}
            class={`${(props.stylee == null?"":props.stylee)} font-bold`}
        />
    );
}