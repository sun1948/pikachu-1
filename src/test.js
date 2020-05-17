import string from './css.js'

const Player = {
  n : 1,
  step : 100,
  clock : undefined,
  ui : {
    code : document.querySelector('#code'),
    css : document.querySelector('#css')
  },
  events : {
    '#btnPause' : 'pause',
    '#btnPlay' : 'play',
    '#btnFast' : 'fast',
    '#btnNormal' : 'normal',
    '#btnSlow' : 'slow'
  },
  init : ()=>{
    Player.play()
    Player.bindEvents()
  },
  bindEvents : ()=>{
    for(let key in Player.events){
      if(Player.events.hasOwnProperty(key) === true){
        const value = Player.events[key]
        document.querySelector(key).onclick = Player[value]
      }
    }
  },
  run : ()=>{
    if (Player.n > string.length) {
      Player.pause()
      return
    }
    Player.ui.code.innerText = string.substr(0, Player.n)
    Player.ui.css.innerText = string.substr(0,Player.n)
    Player.ui.code.scrollTop = Player.ui.code.scrollHeight
    Player.n += 1
  },
  play : ()=>{
    Player.pause()
    Player.clock = setInterval(Player.run,Player.step)
  },
  pause : ()=>{
    clearInterval(Player.clock)
  },
  fast : ()=>{
    Player.pause()
    Player.step = 10
    Player.play()
  },
  normal : ()=>{
    Player.pause()
    Player.step = 100
    Player.play()
  },
  slow : ()=>{
    Player.pause()
    Player.step = 300
    Player.play()
  }
}
Player.init()




