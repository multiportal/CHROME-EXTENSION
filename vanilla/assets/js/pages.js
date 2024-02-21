let app =  document.querySelector('#app');

export const routes = {
    'home': home,
    'pagina': pagina,
    '/': home,
    '/pagina': pagina
};

//*HOME*****************************************************/
function home(){
  app.innerHTML = `
  <div>
    <h1>HOME</h1>
  </div>
  `  
}

//*PAGINA*****************************************************/
function pagina() {
app.innerHTML= `
  <div>
    <h1>PAGINA</h1>
  </div>
`
}