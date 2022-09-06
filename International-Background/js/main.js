document.getElementById('italy').onclick = visitItaly
document.getElementById('france').onclick = visitFrance
document.getElementById('uk').onclick = visitUK
document.getElementById('greece').onclick = visitGreece
document.getElementById('china').onclick = visitChina
document.getElementById('peru').onclick = visitPeru


function visitItaly() {
  document.querySelector('body').style.backgroundImage = "url('img/rome.gif')"
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = "cover"
  document.querySelector('body').style.color = 'blue'
}

function visitFrance() {
  document.querySelector('body').style.backgroundImage = "url('img/Paris.gif')"
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = "cover"
  document.querySelector('body').style.color = 'blue'
}

function visitUK() {
  document.querySelector('body').style.backgroundImage = "url('img/uk.gif')"
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = "cover"
  document.querySelector('body').style.color = 'red'
}

function visitGreece() {
  document.querySelector('body').style.backgroundImage = "url('img/greek.gif')"
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = "cover"
  document.querySelector('body').style.color = 'white'
}

function visitChina() {
  document.querySelector('body').style.backgroundImage = "url('img/china.gif')"
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = "cover"
  document.querySelector('body').style.color = 'red'
}

function visitPeru() {
  document.querySelector('body').style.backgroundImage = "url('img/peru.gif')"
  document.body.style.backgroundRepeat = "no-repeat"
  document.body.style.backgroundSize = "cover"
  document.querySelector('body').style.color = 'blue'
}