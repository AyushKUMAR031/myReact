import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context/context";

export default function NavBar() {
    const { searchParameter, setSearchParameter, handleSubmit } = useContext(GlobalContext);

    return (
        <nav className="flex justify-around items-center py-8 m-0 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0 xl:gap-0">
            <h2 className="text-5xl font-semibold">
                <NavLink to={"/"} className='text-black hover:text-gray-700 duration-300'>FoodRecipe</NavLink>
            </h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="search"
                    placeholder="Enter Items..."
                    value={searchParameter}
                    onChange={(event) => setSearchParameter(event.target.value)}
                    className="bg-white/75 p-3  px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-red-300 focus:shadow-red-400"
                />
            </form>
            <ul className="flex gap-5">
                <li>
                    <NavLink to={'/'} className='text-black text-2xl hover:text-gray-700 duration-300'>Home</NavLink>
                </li>
                <li>
                    <NavLink to={'/favourite'} className='text-black text-2xl hover:text-gray-700 duration-300'>Favourites</NavLink>
                </li>
            </ul>
        </nav>
    );
}
