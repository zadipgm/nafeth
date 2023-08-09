export const isTheme = () => {
    let isDark = window?.localStorage.getItem('theme')
    let dark = { color: "#ffffffb3", bcolor: "#111727", cardcolor: "#202938;", inputColor: "#ffffffb3" }
    let light = { color: "#222222ad", bcolor: "#fff", cardcolor: "#f5f7fb", inputColor: "#1281C4" }
    let pageTheme = isDark === "dark" ? dark : light
    return pageTheme;
}