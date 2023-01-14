//1zd
const email = document.querySelector('#email')
const btn = document.querySelector('.btn')
const result = document.querySelector('.result')

const reg = /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/
btn.addEventListener("click", ()=>{
    if(reg.test(email.value)){
        result.innerText = '✅'
    } else {
        result.innerText = '❌'
    }
})

// 2zd
let position = 0
document.querySelector('.little_box').addEventListener('click',()=>{
  position++
  document.querySelector('.little_box').style.left = position + 'px'
})
