import { RouteContext } from "$fresh/server.ts";
import  NavBar  from "@/islands/NavBar.tsx";
import getTodos from "@/data/todos.tsx"

export default async function MyPage(req: Request, ctx: RouteContext) {

  const value = await getTodos();
      
  return (
    <>
        <NavBar title={"Hello"}/>
        Todo is
        {" " + value.text + " "}
        and done value is
        {" " + (value.is_done != null? value.is_done.toString() : "null")}    
    </>
  )
}
