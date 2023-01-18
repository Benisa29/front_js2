//1zd
const mini_box = document.querySelector(".mini_box");

let positionY = 0
let positionX = 0

const move = () => {
  if (positionY <= 395 ) {
      positionY += 18
      mini_box.style.left = `${positionY}px`
    setTimeout(move, 200)
  } else if (positionY >= 395 && positionX <= 395) {
        positionX += 18
        mini_box.style.top = `${positionX}px`
    setTimeout(move, 200)
  } else if (positionX >= 395 && positionY != 0) {
         positionY -= 18
        mini_box.style.left = `${positionY}px`
        setTimeout(move, 200)
  } else if (positionY == 0 && positionX != 0) {
         positionX -= 18
         mini_box.style.top = `${positionX}px`
    setTimeout(move, 200)
  }
}
move()

//2zd
const interval= setInterval( ()=>{
    if (interval<=60) {
        setTimeout(() => {
  clearInterval(interval)
}, 6000)
        console.log(interval)
    }
},100)