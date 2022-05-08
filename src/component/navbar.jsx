import { Link } from "react-router-dom";

export const Nvabar=()=>{
    const nav=[
        {title:"Women Page",to:"/women"},
        {title:"Cart", to:"/cart"},
        {title:"men page", to:"/men"},
        {title:"kid page", to:"/kid"},
        {title:"shoes page", to:"/shoes"},
        {title:"activeware page", to:"/activeware"},
        {title:"bags page", to:"/bags"},
        {title:"beauty page", to:"/beauty"},
        {title:"gift page", to:"/gift"},
    ];
    return(
        <div>
            {
                nav.map((e,i)=>(
                    <Link key={i} to={e.to} style={{margin:"5px"}}>{e.title}</Link>
                ))
            }
        </div>
    )
}