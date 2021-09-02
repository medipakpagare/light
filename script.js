const magicApp=()=>{

   

    const body=document.querySelector('body')
const btn=document.querySelector('.magicBtn')
const lampBtn=document.getElementById('lampBtnId')
const clickAudio=document.getElementById('clicksound')
const img=document.querySelector('img')
const randomGenerator=(min=0,max=15)=>{
    let num=Math.random()*(max-min)+min
    return Math.floor(num)
}

const colorArray=[
    '#DF1C44',
    'orange',
   ' #FFB300',
    '#388E3C',
    '#D81B60',
    '#9CCC65',
    'violet',
    'black',
    'purple',
    '#6D4C41',
    'maroon',
    'darkslategray',
    'orangered',
    '#78909C',
    '#1976D2'
]

setTimeout(() => {
    const loadingScreen=document.getElementById('loadingId')
   loadingScreen.style.display='none'
   lampBtn.style.display='flex'
   btn.style.display='flex'
   document.getElementById('logoId').style.display='flex'
}, 2000);
const colorHeading=document.getElementById('colorHeadingId')

btn.addEventListener('click',()=>{
   clickAudio.play()

   const colorSection= body.style.backgroundColor=colorArray[randomGenerator(0,14)]
   
  colorHeading.innerText=colorSection

})


const lampArray=[
    'lamp.png',
    'modern_lamp.png',
    'lamp2.png',
    'lamp3.png',
    'ancient_lamp.png'
]

img.setAttribute('src','images/lamp.png')

lampBtn.addEventListener('click',()=>{
    clickAudio.play()
    const lamps=()=>{
        randomGenerator()
        let img=document.querySelector('img')
        img.setAttribute('src',`images/${lampArray[randomGenerator(0,4)]}`)
       
    }
    lamps()
})
   

}
magicApp()