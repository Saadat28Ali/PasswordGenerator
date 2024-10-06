// Other module imports
import { NavLink, Outlet } from "react-router-dom";

export default function Layout(
    { navLinks }:
    { navLinks: {[keys: string]: string}}
) {
    return (
        <div
        className="
        Layout 
        w-screen 
        min-h-screen
        flex 
        flex-col 
        items-center
        bg-neutral-800
        text-white
        ">
            <nav 
            className="
            flex
            items-center
            w-full
            md:w-4/12
            px-5
            py-3
            border-b-2
            mb-6
            sticky
            top-0
            bg-neutral-800
            ">
                <ul 
                className="
                flex 
                flex-row 
                justify-evenly 
                w-screen
                ">
                    {
                        Object.keys(navLinks).map((key: any, index: number) => {
                            return (
                                <NavLink key={index} to={"/" + navLinks[key]}
                                style={({isActive, isPending, isTransitioning}) => {
                                    return {
                                        color: isActive ? "#38bdf8" : "white", 
                                    };
                                }}
                                > 
                                    <li
                                    className="
                                    rounded-md
                                    p-6
                                    hover:text-sky-400
                                    ">
                                        {key}
                                    </li>
                                </NavLink>
                            );
                        })
                    }
                </ul>
            </nav>
            <Outlet />
        </div>
    );
}