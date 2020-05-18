export const isBrowser = () => typeof window !== "undefined"

export const getDarkMode = () => isBrowser() && window.localStorage.getItem("darkMode") ? window.localStorage.getItem("darkMode") : ""

// export const toggleDarkMode = () => isBrowser() && getDarkMode() !== "" ? window.localStorage.setItem("darkMode", !getDarkMode()) : isBrowser() ? window.localStorage.setItem("darkMode", true) : ""

export const toggleDarkMode = () => isBrowser() ? window.localStorage.setItem("darkMode", true) : ""

export const toggleLightMode = () => isBrowser() ? window.localStorage.removeItem("darkMode") : ""