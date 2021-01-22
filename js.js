const block = document.getElementById('scrolling-block');
const blocks = document.getElementsByClassName("img-wrapper");
const scrollingBlock = () => {
    block.style.transform = `rotateX(45deg) rotateZ(45deg) translate3d(270px, ${2200-pageYOffset}px, 0px)`;
}
window.addEventListener('scroll', scrollingBlock);


const mainBlock = document.getElementById("main");
let sizeW, sizeH = 0;
const resizeBlock = () => {
    setInterval(() => {
        const currentSizeW = document.documentElement.clientWidth;
        const currentSizeH = document.documentElement.clientHeight;
        if ((currentSizeW !== sizeW) || (currentSizeH !== sizeH)) {
            sizeW = currentSizeW;
            sizeH = currentSizeH;
            let widthBlock = document.getElementById("scrolling-wrapper").offsetWidth;
            console.log(widthBlock)
            let counterColumns = 0;
            console.log("Fuck");
            console.log(blocks.length);
            while (widthBlock > 250) {
                widthBlock -= 250;
                ++counterColumns;
                if (counterColumns < 1) {
                    counterColumns = 1;
                }
                if (counterColumns > 6) {
                    counterColumns = 6;
                }
            }
            let tempHeight = (blocks.length / counterColumns) * 280;
            if (counterColumns > 4) {
                tempHeight = tempHeight + tempHeight * 0.13;
            } else
            if (counterColumns < 2) {
                tempHeight = tempHeight - tempHeight * 0.09;
            }
            console.log(counterColumns);
            mainBlock.style.height = tempHeight + `px`;
        };
    }, 500);
};

setInterval(resizeBlock(), 500);