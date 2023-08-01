import { HandlerContext, Handlers, RouteContext } from "$fresh/server.ts";
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { Database } from "../types/supabase.ts";
import env from "../env.ts";

const supabase = createClient<Database>(
  env().url!,
  env().key!
);

interface Project {
    text: string | null;
    is_done: boolean | null;
}

async function getTodo(){
    try {
        const { data, error } = await supabase
        .from('Todos')
        .select('text, is_done')
        .single();

        if (error) {
            return {text: "error", is_done: false};
        }

        if (data) {
            const todo: Project = data;
            console.log(todo);
            return todo;
        } else {
            return {text: "error", is_done: false};
        }
    } catch (error) {
        console.error("Error fetching project data:", error);
        return {text: "error", is_done: false};
    }

}


export default async function MyPage(req: Request, ctx: RouteContext<Project>) {

  const value= await getTodo();
      
  return <p>Todo is {value.text} and done value is {value.is_done}</p>;

}
