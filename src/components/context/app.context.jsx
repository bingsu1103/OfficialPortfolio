import { useRef } from "react";
import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext(null);

export const AppContextProvider = ({ children }) => {
    const [theme, setTheme] = useState(() => {
        const initialTheme = (localStorage?.getItem("theme") ?? "dark");
        return initialTheme
    });
    useEffect(() => {
        const mode = localStorage.getItem("theme");
        if (mode) {
            setTheme(mode);
            document.documentElement.setAttribute('data-bs-theme', mode);
        }
    }, []);
    return (
        <AppContext.Provider value={{ theme, setTheme }}>
            {children}
        </AppContext.Provider>
    );
}
export const useCurrentApp = () => {
    const currentAppContext = useContext(AppContext);
    if (!currentAppContext) {
        throw new Error(
            "useCurrentApp has to be used within <AppContext.Provider>"
        )
    }
    return currentAppContext;
}