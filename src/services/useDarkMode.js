export const isBrowser = () => typeof window !== "undefined"

export const redirectTo = url => {
    isBrowser() && window.location.replace(url)
}
  
export const redirectWithHistory = url => {
    isBrowser() && (window.location.href = url)
}

export const getDarkMode = () => isBrowser() && window.localStorage.getItem("darkMode") ? window.localStorage.getItem("darkMode") : ""

export const toggleDarkMode = () => isBrowser() ? window.localStorage.setItem("darkMode", true) : ""

export const toggleLightMode = () => isBrowser() ? window.localStorage.removeItem("darkMode") : ""