export const Navbar=()=>{
    const nav=[
        {title:"Home", to:"/index"},
        {title:'About', to:"/about"},
        {title:'Userlist', to:"/users"}
    ]
    return <div>
        {nav.map((e)=>
            <a href={e.to}>{e.title}</a>
        )}

    </div>
}