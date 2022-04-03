

const BrWrapper = (color) => wrapper.style.backgroundColor = color

const changeBGwrapper = () => {
    if (localStorage.color === 'black') {
        localStorage.setItem('color', 'gray');
        BrWrapper('gray');
    } else {
        localStorage.setItem('color', 'black');
        BrWrapper('black');
    }
    return false
} 

const localColor = () => {
    BrWrapper(localStorage.color);
}
localColor()


// LOCAL BackGround
document.body.addEventListener('keydown', (e)=> {
    if(e.key === ' ') return changeBGwrapper();   
})

const checkLocal = () => {
    if(localStorage.getItem('allBox')) return boxes(JSON.parse(
        localStorage.getItem('allBox')
    ));

    localBox = []
}
checkLocal()
