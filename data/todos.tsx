import { createClient } from 'supabase'
import { Database } from "@/types/supabase.ts";
import { load } from "load";
import { ModuleCache } from "mcache";

const env = load()

const supabase = createClient<Database>(
    Deno.env.get("SUPABASE_URL")!,
    Deno.env.get("SUPABASE_KEY")!
)

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

export default async () =>{

    const cache = new ModuleCache("todos")

    cache.set("text", null)
    cache.set("is_done", null)

    const value = await getTodo();

    let text = cache.get("text")
    let is_done = cache.get("is_done")

    if(text == null || is_done == null && text != value.text){
        cache.set("text", value.text)
        cache.set("is_done", value.is_done)

        text = value.text
        is_done = value.is_done
    }

    let todos = {"text": text, "is_done": is_done}

    return todos
}