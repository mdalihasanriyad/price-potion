import { useState } from "react";
import Link from "../Link/Link";
import { AiOutlineMenu,AiOutlineClose  } from "react-icons/ai";


const NavBar = () => {

    const [open, setOpen] = useState(false)

    const routes = [
        { id: 1, path: '/', name: 'Home' },
        { id: 2, path: '/about', name: 'About' },
        { id: 3, path: '/services', name: 'Services' },
        { id: 4, path: '/contact', name: 'Contact' },
        { id: 5, path: '*', name: 'NotFound' }
    ];
    return (
        <nav className="text-white bg-purple-700 p-6">
            <div className="text-3xl lg:hidden" onClick={()=> setOpen(!open)}>
                {
                    open === true ? 
                    <AiOutlineClose ></AiOutlineClose>:
                    <AiOutlineMenu className=""></AiOutlineMenu>
                }
                
            </div>
            <ul className={`md:flex absolute md:static duration-1000 ${open? 'top-16':'-top-60'} bg-purple-700 p-6 `}>
                {
                    routes.map(route => <Link key={route.id} route={route}></Link>)
                }
            </ul>
        </nav>
    );
};

export default NavBar;