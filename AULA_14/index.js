import Router from "./modules/router.js"

const router = Router()
const root = document.querySelector("#root")

root.addEventListener("onstatechange", function(e) {
    const page = router.getPage(e.detail.url)
    history.pushState("", "", e.detail.url)
    root.appendChild(page)
})