import React from "react";
import { assets } from "../assets/assets";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useClerk, useUser, UserButton } from "@clerk/clerk-react";

const Navbar = () => {
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Buy', path: '/' },
        { name: 'Experiance', path: '/' },
        { name: 'Contact', path: '/' },
        { name: 'About', path: '/' },
    ];

    const [isScrolled, setIsScrolled] = React.useState(false);
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    // Clerk
    const { openSignIn } = useClerk();
    const { user } = useUser();

    // React router
    const navigate = useNavigate();
    const location = useLocation();

    React.useEffect(() => {

        // Change the navbar for other pages
        if (location.pathname !== '/') {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
        setIsScrolled(prev => location.pathname !== '/' ? true : prev);

        // Change the navbar when the home page is scrolled (Scroll effect)
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [location.pathname]);

    return (
        <nav className={`fixed top-0 left-0 w-full flex items-center justify-between px-4 md:px-16 lg:px-24 xl:px-32 transition-all duration-500 z-50 ${isScrolled ? "bg-white/80 shadow-md text-gray-700 backdrop-blur-lg py-3 md:py-4" : "py-4 md:py-6"}`}>

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
                <img src={assets.logoPink} alt="logo" className={`h-12 ${isScrolled && "opacity-80"}`} />
            </Link>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-4 lg:gap-8">
                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} className={`group flex flex-col gap-0.5 text-lg ${isScrolled ? "text-gray-700" : "text-gray-900"}`}>
                        {link.name}
                        <div className={`${isScrolled ? "bg-gray-700" : "bg-white"} h-0.5 w-0 group-hover:w-full transition-all duration-300`} />
                    </a>
                ))}

                {
                    // Show 'Dashboard' button if the user is logen in
                    user &&
                    <button
                        onClick={() => navigate('/owner')}
                        className={`border border-[#FF0091] px-4 py-1 text-lg font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-gray-900'} transition-all`}>
                        Dashboard
                    </button>
                }
            </div>

            {/* Desktop Right */}
            <div className="hidden md:flex items-center gap-4">
                {/* <img src={assets.searchIcon} alt="Search Icon" className={`${isScrolled && invert} h-9 transition-all duration-500`} /> */}

                {
                    // If the user is logged in show their profile, otherwise show the 'Login' button
                    user ?
                        (
                            <UserButton>
                                <UserButton.MenuItems>
                                    <UserButton.Action label="My Bookings" labelIcon={assets.closeIcon} onClick={() => navigate('/my-bookings')} />
                                </UserButton.MenuItems>
                            </UserButton>
                        )
                        :
                        (
                            <button
                                onClick={openSignIn}
                                className="border border-[#FF0091] not-visited:bg-white text-black hover:bg-[#FF0091] hover:text-white
                                px-8 py-2.5 rounded-full ml-4 transition-all duration-500">
                                Login
                            </button>
                        )
                }
            </div>

            {/* Mobile Menu Button */}
            <div className="flex items-center gap-3 md:hidden">
                {
                    // If the user is logged in show their profile in small screen
                    user && 
                    <UserButton>
                        <UserButton.MenuItems>
                            <UserButton.Action label="My Bookings" labelIcon={assets.closeIcon} onClick={() => navigate('/my-bookings')} />
                        </UserButton.MenuItems>
                    </UserButton>
                }

                <img
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    src={assets.menuIcon} alt="Menu Icon" className={`${isScrolled && 'invert'} h-5`} />
            </div>

            {/* Mobile Menu */}
            <div className={`fixed top-0 left-0 w-full h-screen bg-white text-base flex flex-col md:hidden items-center justify-center gap-6 font-medium text-gray-800 transition-all duration-500 ${isMenuOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <button className="absolute top-4 right-4" onClick={() => setIsMenuOpen(false)}>
                    <img src={assets.closeIcon} alt="Close Icon" className="h-6.5" />
                </button>

                {navLinks.map((link, i) => (
                    <a key={i} href={link.path} onClick={() => setIsMenuOpen(false)}>
                        {link.name}
                    </a>
                ))}

                {
                    // Show 'Dashboard' button if the user is logen in
                    user &&
                    <button
                        onClick={() => navigate('/owner')}
                        className={`border border-[#FF0091] px-4 py-1 text-lg font-light rounded-full cursor-pointer ${isScrolled ? 'text-black' : 'text-gray-900'} transition-all`}>
                        Dashboard
                    </button>
                }

                {
                    // Hide the 'Login' button if the user is signed in
                    !user &&
                    <button
                        onClick={openSignIn}
                        className="bg-black text-white px-8 py-2.5 rounded-full transition-all duration-500">
                        Login
                    </button>
                }
            </div>
        </nav>
    );
}

export default Navbar;