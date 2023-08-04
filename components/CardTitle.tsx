import { JSX } from "preact";

interface Props{
  stylee: string | null;
}

export default function Title(props: JSX.HTMLAttributes<HTMLDivElement> & Props) {
  return (
    <div
      {...props}
      disabled={true}
      class={`text-amber-500 ${(props.stylee == null?"":props.stylee)} font-bold }`}
    />
  );
}