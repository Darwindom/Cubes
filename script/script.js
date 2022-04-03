

const paint_box = obj => {

  const first = document.createElement('div');
  first.classList.add('first');
  first.classList.add('flex');
  if (obj.isActive) first.classList.add("currentFirst");

  first.id = obj._id

  first.onclick = (e) => allEvent(e, obj);
  first.onwheel = changeBackground;
  first.ondblclick = removeBox;

  first.style.cssText = `    
    background: ${obj.color};
    height: ${obj.height}px;
    width:${obj.width}px;
    top:${obj.top}%;
    left:${obj.left}%;
    "
    `

  first.innerHTML = `
    <div class="second flex">
      <div class="arrows">
        <div class="one border">
            <span class="arrow-one flex pad" title="ArrowTop">></span>
        </div>
        <div class="two border">
            <span class="arrow-two flex pad" title="ArrowRight">></span>
        </div>
        <div class="three border">
            <span class="arrow-three flex pad" title="ArrowLeft">></span>
        </div>
        <div class="four border">
            <span class="arrow-four flex pad" title="ArrowBottom">></span>
        </div>
      </div>
    </div> `

  return first;

}
const boxes = (allBox) => {
  allBox.forEach(element => wrapper.appendChild(paint_box(element)));
}




