const menu = document.getElementById('menu')
const list = document.getElementById('list')
const body = document.querySelector('body')

menu.onclick = function () {
  menu.classList.toggle('openmenu')
  list.classList.toggle('active')
  body.classList.toggle('hidden')
}

window.addEventListener('scroll', () => {
  addBoxShadowHeader()
  viewButtonToTop()
})

function addBoxShadowHeader() {
  const header = document.getElementById('header')

  if (scrollY > 20) {
    header.classList.add('active')
  } else {
    header.classList.remove('active')
  }

}

$(document).ready(function () {
  var typed = new Typed('.typing', {
    strings: ['Artista Visual', 'Desenhista', 'Apaixonado', 'A Criatividade'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  })
})


function scrollToTop() {
  window.scroll({
    top: 0,
  })
}

function viewButtonToTop() {
  const buttonTop = document.getElementById('buttonTop')

  if (window.scrollY >= 75) {
    buttonTop.classList.add('show')
  } else {
    buttonTop.classList.remove('show')
  }
}


const links = document.querySelectorAll('.links')

for (const link of links) {
  link.addEventListener('click', function () {
    list.classList.remove('active')
    menu.classList.remove('openmenu')
    body.classList.remove('hidden')
  })
}








