function switchdn(){
  const html = document.documentElement
 // if(html.classList.contains('light')){
//  html.classList.remove('light')}
//  else{html.classList.add('light')}
  html.classList.toggle('light')

  const img = document.querySelector("#profile img")
  if(html.classList.contains("light")){
    img.setAttribute('src', './assets/avatar-light.png')
  } else {
    img.setAttribute('src', 'assets/Avatar.png')
  }
}

function opencont(){
  /*const cont = document.getElementById("divcont")
  cont.innerHTML= "<p>Email: caiokaway@gmail.com<br/>Telefone:(41)99654-6978</p>"
  cont.style.textAlign = "center"
  cont.style.marginTop = "15px"*/

  const contEl = document.documentElement
  contEl.classList.toggle("contOpen")
  const cont = document.getElementById("divcont")
  if(contEl.classList.contains("contOpen")){
    cont.innerHTML =
      "<p>Email: caiokaway@gmail.com<br/>Telefone:(41)99654-6978</p>"
  } else {
    cont.innerHTML = ""

  }
}

