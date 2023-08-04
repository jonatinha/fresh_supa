import { JSX } from "preact";

export default function Title(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      disabled={true}
      class="text-gray-100 text-3xl font-bold"
    />
  );
}