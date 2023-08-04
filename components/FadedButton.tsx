import { JSX } from "preact";
import { IS_BROWSER } from "$fresh/runtime.ts";
import init from "https://deno.land/x/denoflate@1.2.1/pkg/denoflate.js";

const bg        = ""
const text      = "text-white"
const p         = "px-4 py-2"
const rounded   = "rounded-lg"
const ring      = ""
const focus     = "focus:outline-none"
const shadow    = "shadow-lg"
const active    = "active:opacity-90 active:ring ring-blue-300 active:scale-90"
const hover     = "hover:ring hover:ring"

const styles = [
    bg,
    text,
    p,
    ring,
    focus,
    shadow,
    active,
    rounded,
    hover
]

let style = "";

for (let i = 0; i < styles.length; i++) {
  style += styles[i] + " ";
}

interface Props{
    toDirection: "right" | "left";
    initialColor: string;
    finalColor: string;
    disabled?: boolean
}

export function FadedButton(props: JSX.HTMLAttributes<HTMLButtonElement> & Props) {
  return (
    <button
      {...props}
      disabled={!IS_BROWSER || props.disabled}
      class={style}
      style={{backgroundImage: `linear-gradient(${props.toDirection == "right"?"to right":"to left"}, ${props.initialColor}, ${props.finalColor})`}}
    />
  );
}
