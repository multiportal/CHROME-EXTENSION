import { routes } from "./pages.js";

export function load() {
    let lista = document.querySelector("#lista");
    if (lista) {
      lista.addEventListener("click", (e) => {
        if (e.target && e.target.tagName === "A") {
          let sel = e.target.innerHTML;
          let page = sel.toLowerCase();
          console.log(page);
          route(page);
        }
      });
    }
    //Load route
    route('home');
}

export function route(page) {
  routes[page]();
}
