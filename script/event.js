const color = () => `rgb(${random()},${random()},${random()})`;
let localBox = JSON.parse(localStorage.getItem('allBox'));

const number = (num, obj, WorH) => {
    if (num < 0) return 0
    if (WorH === 'W') {
        const windowWidth = window.innerWidth
        const maxW = windowWidth - obj.width
        const maxProcW = maxW * 100 / windowWidth
        if (maxProcW < num) return maxProcW;
    } else {
        const windowHeight = window.innerHeight
        const maxH = windowHeight - obj.height
        const maxProcH = maxH * 100 / windowHeight
        if (maxProcH < num) return maxProcH;
    }
    return num
}


const changeBackground = (e) => {
    if (e.target.classList[0] !== 'first') return
    e.target.style.background = color();
}

const changePlace = (teg) => {
    teg = teg.target.parentElement;
    const find = localBox.find(elem => elem._id === teg.id)
    const top = number(random(85), find, 'H')
    const left = number(random(85), find, 'W')

    find.top = top
    find.left = left

    teg.style.top = top + '%'
    teg.style.left = left + '%'

}
const C = 5;
const limitSizeMin = 100;
const limitSizeMax = 200;

const changeSize = (e, obj, name) => {
    const first = e.target.closest('.first');

    switch (e.target.title) {
        case 'ArrowTop':
            if (obj.height <= limitSizeMin) return
            first.style.height = obj.height - C + 'px';
            return obj.height -= C;
        case 'ArrowRight':
            if (obj.width >= limitSizeMax) return
            first.style.width = obj.width + C + 'px';
            return obj.width += C;
        case 'ArrowLeft':
            if (obj.width <= limitSizeMin) return
            first.style.width = obj.width - C + 'px';
            return obj.width -= C;
        case 'ArrowBottom':
            if (obj.height >= limitSizeMax) return
            first.style.height = obj.height + C + 'px';
            return obj.height += C;
    }
}

const addActive = (e, obj) => {

    const cR = document.querySelector('.currentFirst');
    cR?.classList.remove('currentFirst');

    e.target.classList.add('currentFirst');

}
const allEvent = (e, obj) => {
    switch (e.target.classList[0]) {
        case 'first': return addActive(e, obj);
        case 'second': return changePlace(e)
        default: return changeSize(e, obj, e.target.title)
    }
}

const changeSizeBox = (teg, box, sign, key) => {
    if (sign === '-') {
        if (box[key] <= limitSizeMin) return
        box[key] -= 10;
        teg.style[key] = box[key] + 'px';
    } else {
        if (box[key] >= limitSizeMax) return
        box[key] += 10;
        teg.style[key] = box[key] + 'px';
    }

}

window.addEventListener('keydown', (e) => {
    const currentFirst = document.querySelector('.currentFirst');
    if (!currentFirst) return
    let currentFind = localBox.find(elem => elem._id === currentFirst.id);
    let result;

    setTimeout(localSet, 500)

    const defaultFun = (num, WorH) => number(num, currentFind, WorH)//?2
    switch (e.key) {
        case 'ArrowUp':
            if (e.altKey) return changeSizeBox(currentFirst, currentFind, '-', 'height')
            result = defaultFun(currentFind.top - C, 'H')
            currentFirst.style.top = result + '%';
            return currentFind.top = result;
        case 'ArrowRight':
            if (e.altKey) {
                return changeSizeBox(currentFirst, currentFind, '+', 'width');
            }
            result = defaultFun(currentFind.left + C, 'W')
            currentFirst.style.left = result + '%';
            return currentFind.left = result;
        case 'ArrowLeft':
            if (e.altKey) {
                return changeSizeBox(currentFirst, currentFind, '-', 'width');
            }
            result = defaultFun(currentFind.left - C, 'W')
            currentFirst.style.left = result + '%';
            return currentFind.left = result;
        case 'ArrowDown':
            if (e.altKey) return changeSizeBox(currentFirst, currentFind, '+', 'height');

            result = defaultFun(currentFind.top + C, 'H')
            currentFirst.style.top = result + '%';
            localBox.top = result + '%';
            return currentFind.top = result;
        case 'Enter':
            const enterTop = defaultFun(random(100), 'H');
            const enterLeft = defaultFun(random(100), 'W');
            currentFirst.style.top = enterTop + '%';
            currentFirst.style.left = enterLeft + '%';
            currentFind.top = enterTop;
            currentFind.left = enterLeft;
    }
})


const WH = {
    width: 100,
    height: 100
}


const checkIsActive = () => {
    localBox?.forEach(element => element.isActive = false);
}

const addBoxBrowser = (obj) => {
    wrapper.appendChild(paint_box(obj));
}

const removeBox = (e) => {
    let boxFilter = localBox.filter(elem => elem._id !== e.target.id);
    localBox = boxFilter;
    e.target.style.top = '-99px';
    e.target.style.left = '-99px';

    // setTimeout(() => e.target.remove(), 1000)
    localSet()
}


const btnChange = document.querySelector('.create_btn');
btnChange.addEventListener('click', () => {

    document.querySelector('.currentFirst')?.classList.remove('currentFirst');
    checkIsActive()

    const newObj = {
        color: color(),
        height: WH.height,
        width: WH.width,
        top: number(random(91), WH, 'H'),
        left: number(random(91), WH, 'W'),
        isActive: true,
        _id: 'id_' + id(),
    }

    localBox?.push(newObj);
    addBoxBrowser(newObj);
    localSet();
})


// const changeBtnColor = (e) => {
//     setTimeout(function () {
//         e.target.style.backgroundColor = color();
//     }, 400);
// }
// btnChange.onmouseover = changeBtnColor;