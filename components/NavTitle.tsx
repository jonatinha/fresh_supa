import { JSX } from "preact";

export default function Title(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      disabled={true}
      class="text-amber-500 text-3xl font-bold"
    />
  );
}