export const isBrowser = () => typeof window !== "undefined"

export const redirectTo = url => {
    isBrowser() && window.location.replace(url)
}
  
export const redirectWithHistory = url => {
    isBrowser() && (window.location.href = url)
}

export const getLightMode = () => isBrowser() && window.localStorage.getItem("lightMode") ? window.localStorage.getItem("lightMode") : ""

export const toggleLightMode = () => isBrowser() ? window.localStorage.setItem("lightMode", true) : ""

export const toggleDarkMode = () => isBrowser() ? window.localStorage.removeItem("lightMode") : ""