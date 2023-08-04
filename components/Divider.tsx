import { JSX } from "preact";

export default function Divider(props: JSX.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      {...props}
      disabled={true}
      class="h-px bg-gray-600 w-full rounded-lg"
    />
  );
}