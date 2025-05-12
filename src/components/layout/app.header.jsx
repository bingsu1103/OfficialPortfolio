import { useTranslation } from "react-i18next";
import { useCurrentApp } from "../context/app.context";
import viFlag from '../../assets/svg/language/vi.svg';
import enFlag from '../../assets/svg/language/en.svg';
import { Link } from "react-router-dom";
import { FaRegMoon } from "react-icons/fa";
import { MdOutlineLightMode } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import { useEffect, useRef, useState } from "react";

const AppHeader = () => {
    const { theme, setTheme } = useCurrentApp();
    const { t, i18n } = useTranslation();
    const [language, setLanguage] = useState(i18n.resolvedLanguage);
    const [isOpenMenu, setIsOpenMenu] = useState(false);
    const menuRef = useRef(null);
    const hamburgerRef = useRef(null);

    const handleMode = (mode) => {
        localStorage.setItem("theme", mode);
        document.documentElement.setAttribute('data-bs-theme', mode);
        setTheme(mode);
    };

    const toggleLanguage = () => {
        const newLanguage = language === "en" ? "vi" : "en";
        i18n.changeLanguage(newLanguage).then(() => {
            setLanguage(newLanguage);
        });
    };

    const OpenMenu = () => {
        return (
            <div ref={menuRef} className="dropdown relative">
                <ul className="absolute top-3 right-[-80%] bg-[#1F1F1F] flex flex-col gap-2 rounded-lg">
                    <li onClick={() => setIsOpenMenu(!isOpenMenu)} className="text-[#fff] py-3 px-2 text-center w-24 rounded-lg"><Link to='/'>{t('appHeader.home')}</Link></li>
                    <li onClick={() => setIsOpenMenu(!isOpenMenu)} className="text-[#fff] py-3 px-2 text-center"><Link to='/about'>{t('appHeader.about')}</Link></li>
                    <li onClick={() => setIsOpenMenu(!isOpenMenu)} className="text-[#fff] py-3 px-2 text-center"><Link to='/project'>{t('appHeader.project')}</Link></li>
                </ul>
            </div>
        )
    }
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                menuRef.current &&
                !menuRef.current.contains(event.target) &&
                hamburgerRef.current &&
                !hamburgerRef.current.contains(event.target)
            ) {
                setIsOpenMenu(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);


    return (
        <nav className="bg-[#000] text-[#fff] grid grid-cols-2 p-3 sticky top-0 z-1000">
            <div className="flex max-[821px]:gap-4">
                <h1 title="Portfolio" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="text-2xl font-bold p-2 w-[30%] cursor-pointer">Portfolio.</h1>
                <div className="flex gap-2">
                    <Link title="Home" className="p-2 mt-1 max-sm:hidden" to="/">{t('appHeader.home')}</Link>
                    <Link title="About" className="p-2 mt-1 max-sm:hidden" to="/about">{t('appHeader.about')}</Link>
                    <Link title="Project" className="p-2 mt-1 max-sm:hidden" to="/project">{t('appHeader.project')}</Link>
                </div>
            </div>
            <div className="flex max-sm:gap-3 gap-2 ml-auto max-sm:pr-5">
                <div
                    title={theme === "dark" ? "Light mode" : "Dark mode"}
                    onClick={() => handleMode(theme === 'light' ? 'dark' : 'light')}
                    className="p-1 cursor-pointer text-2xl hover:opacity-70"
                >
                    {theme === 'light' ? <FaRegMoon className="mt-2" /> : <MdOutlineLightMode className="mt-2" />}
                </div>
                <div
                    onClick={toggleLanguage}
                    className={`px-3 max-sm:px-2 h-3/4 cursor-pointer flex items-center self-center gap-2 hover:opacity-70 ${theme === 'dark' && 'bg-[#333]'} max-sm:bg-transparent rounded-4xl`}
                    title={language === "en" ? "Switch to Vietnamese" : "Chuyển sang tiếng Anh"}
                >
                    <img
                        src={language === "en" ? enFlag : viFlag}
                        alt={language}
                        className="h-6 w-6"
                    />
                    <span className="max-sm:hidden">{language === "en" ? "English" : "Tiếng Việt"}</span>
                </div>
                <div className="sm:hidden">
                    <GiHamburgerMenu ref={hamburgerRef} onClick={(e) => {
                        e.stopPropagation();
                        setIsOpenMenu(!isOpenMenu);
                    }} className="text-3xl mt-2 cursor-pointer" />
                    {isOpenMenu && <OpenMenu />}
                </div>
            </div>
        </nav>
    );
};

export default AppHeader;