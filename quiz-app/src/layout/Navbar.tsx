import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="bg-slate-950 sticky top-0 left-0 w-full h-12 flex justify-center items-center border-b border-slate-900">
            <div className="flex gap-4 text-xl font-semibold">
                <NavLink
                    to="/"
                    className={({isActive}) => isActive ? 'text-indigo-400' : 'text-black'}
                >
                    Quiz App
                </NavLink>
            </div>
        </div>
    );
};

export default Navbar;
