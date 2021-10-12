const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

let size = 20
let ispressed = false
let color = 'black'
let x
let y

canvas.addEventListener('mousedown', (e) =>{
ispressed = true

x = e.offsetX
y = e.offsetY
})

canvas.addEventListener('mouseup', (e) =>{
    ispressed = false
    
    x = undefined
    y = undefined
        })
    

 canvas.addEventListener('mousemove', (e) =>{
    if(ispressed) {
        const x2 = e.offsetX
        const y2 = e.offsetY
        
        drawcircle(x2, y2)
        drawline(x, y, x2, y2)

        x = x2
        y = y2
    }
                
})


function drawcircle(x,y){
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillstyle = color
    ctx.fill()
}

function drawline(x1, y1, x2, y2){
    CSSTransition.beginPath()
    ctx.moveto(x1, y1)
    ctx.lineto(x2, y2)
    ctx.strokestyle = color
    ctx. linewidth = size * 2
    ctx.stroke()
}


