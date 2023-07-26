export const isTheme = () => {
    let isDark = window?.localStorage.getItem('theme')
    let dark = { color: "#ffffffb3", bcolor: "#111727", cardcolor: "#202938;" }
    let light = { color: "#222222ad", bcolor: "#fff", cardcolor: "#f5f7fb" }
    let pageTheme = isDark === "dark" ? dark : light
    return pageTheme;
}