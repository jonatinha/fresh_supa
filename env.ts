export default function env(){
    Deno.env.set("SUPABASE_URL", "");
    Deno.env.set("SUPABASE_KEY", "");
    
    const env = {
        url: Deno.env.get("SUPABASE_URL"),
        key: Deno.env.get("SUPABASE_KEY")
    }
    return env
}