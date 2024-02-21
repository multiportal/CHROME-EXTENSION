import { routes } from "./pages.js";

export function load() {
  let mode = 1;

  if (mode == 1) {
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
  } else {
    // Initial setup
    document.addEventListener("DOMContentLoaded", () => {
      //Load route
      route('/');
      // Listen for changes in the URL
      window.addEventListener("popstate", handleRouteChange);
      // Set up navigation
      const links = document.querySelectorAll("a");
      links.forEach((link) => {
        link.addEventListener("click", (event) => {
          event.preventDefault();
          const targetRoute = link.getAttribute("href");
          history.pushState(null, null, targetRoute);
          route(targetRoute);
        });
      });
    });
  }
}

export function route(page) {
  routes[page]();
}
