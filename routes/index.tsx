import { RouteContext } from "$fresh/server.ts";
import  NavBar  from "@/islands/NavBar.tsx";
import Card from '@/islands/Card.tsx'
import PricingCard from "@/islands/PricingCard.tsx"
//import getTodos from "@/data/todos.tsx"


export default async function MyPage(req: Request, ctx: RouteContext) {

  //const value = await getTodos();

  const free = [
    "Muito top", 
    "bonito", 
    "barato"
  ]

  const top = [
    "Muito top, e com negócio extra", 
    "Bonito demais", 
    "Tem que investir",
    "Mais top ainda"
  ]

  const premium = [
    "Muito top, e com trem extra", 
    "Bonito demais", 
    "Tem que investir",
    "Mais top ainda",
    "Mais top ainda",
    "Mais top ainda",
    "Mais top ainda"
  ]
       
  return (
    <div class="bg-gray-800 h-screen"> 
        <NavBar title={"Hello"}/>

        <div class="px-2 pt-4">
            {/* <Card title={"Card"} p={"Todo is " + value.text + " and done value is " + (value.is_done != null? value.is_done.toString() : "null")}/> */}
        </div>
        <div class="flex flex-row items-center justify-center gap-8 flex-wrap">
          <PricingCard title="Free" price={0.00} benefits={free} color={{toColor:"#F00", fromColor: "#F77"}}/>
          <PricingCard title="Top" price={100.00} benefits={top} color={{toColor:"#0F0", fromColor: "#7FF"}}/>
          <PricingCard title="Premium" price={330.00} benefits={premium} color={{toColor:"#F0F", fromColor: "#A0A"}}/>
          
        </div>
        
      
           
    </div>
  )
}
