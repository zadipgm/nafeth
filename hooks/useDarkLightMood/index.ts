import { useEffect, useState } from 'react';
export const useDarkMode = () => {
    const [theme, setTheme] = useState('light');
    const [isLoading, setLoadion] = useState(false);
    useEffect(() => {
        const localTheme = window.localStorage.getItem('theme');
        localTheme && setTheme(localTheme)
    }, []);
    const setMode = (mode: string) => {
        window.localStorage.setItem('theme', mode)
        setTheme(mode)
    };

    const themeToggler = () => {

        return theme === 'light' ? setMode('dark') : setMode('light')
    };


    return [theme, themeToggler]
};
