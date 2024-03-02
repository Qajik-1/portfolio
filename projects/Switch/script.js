let c11 = document.getElementById('c1')
let c22 = document.getElementById('c2')
let c33 = document.getElementById('c3')
let photo = document.querySelectorAll('.photo')
let design = document.querySelectorAll('.design')
let print = document.querySelectorAll('.print')
let fral = true;
function c1(params) {
    c11.style.backgroundColor = 'rgb(' + 42 + ',' + 152 + ',' + 42 + ')';
    c22.style.backgroundColor = 'rgb(' + 76 + ',' + 195 + ',' + 76 + ')';
    c33.style.backgroundColor = 'rgb(' + 76 + ',' + 195 + ',' + 76 + ')';
    if (fral) {
        for (const elem of design) {
            elem.style.display = 'none'
        }
    }
    if (fral) {
        for (const elem of photo) {
            elem.style.display = 'block'
        }
    }
    if (fral) {
        for (const elem of print) {
            elem.style.display = 'none'
        }
    }
}
function c2(params) {
    c22.style.backgroundColor = 'rgb(' + 42 + ',' + 152 + ',' + 42 + ')';
    c11.style.backgroundColor = 'rgb(' + 76 + ',' + 195 + ',' + 76 + ')';
    c33.style.backgroundColor = 'rgb(' + 76 + ',' + 195 + ',' + 76 + ')';
    if (fral) {
        for (const elem of design) {
            elem.style.display = 'block'
        }
    }
    if (fral) {
        for (const elem of photo) {
            elem.style.display = 'none'
        }
    }
    if (fral) {
        for (const elem of print) {
            elem.style.display = 'none'
        }
    }
}
function c3(params) {
    c33.style.backgroundColor = 'rgb(' + 42 + ',' + 152 + ',' + 42 + ')';
    c11.style.backgroundColor = 'rgb(' + 76 + ',' + 195 + ',' + 76 + ')';
    c22.style.backgroundColor = 'rgb(' + 76 + ',' + 195 + ',' + 76 + ')';
    if (fral) {
        for (const elem of design) {
            elem.style.display = 'none'
        }
    }
    if (fral) {
        for (const elem of photo) {
            elem.style.display = 'none'
        }
    }
    if (fral) {
        for (const elem of print) {
            elem.style.display = 'block'
        }
    }
}
let tre = true
bar.addEventListener("click", () => {
    if (tre == true) {
        menyu.style.marginTop = "50px";
        menyu.style.display = "block";
        tre = !tre
        document.querySelector("body").style.overflow = "hidden"
    } else {
        menyu.style.display = "none"
        tre = !tre
        document.querySelector("body").style.overflow = "scroll"
    }
})