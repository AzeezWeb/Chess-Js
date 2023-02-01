let elArr = [];

for (let i = 8; i >= 1; i--) {
  for (let j = 1; j <= 8; j++) {
    let obj = {
      y: i,
      x: j,
    }
    elArr.push(obj)
  }
}

let elList = document.querySelector(".chess__list");

elArr.forEach((items) => {
  let li = document.createElement("li");
  li.classList.add("chess__item");
  if ((items.x + items.y) % 2 != 0) {
    li.classList.add("black");
  } else {
    li.classList.add("white");
  }

  li.innerHTML = `
      <span class="span2 d-none">${items.y}</span>
      <span class="span1 d-none">${items.x}</span>
  `;

  elList.appendChild(li);
});
let items = document.querySelectorAll('.chess__item');
let span1 = document.querySelectorAll('.span1');
let span2 = document.querySelectorAll('.span2');
let yNum = document.querySelector('.y-num');
let xNum = document.querySelector('.x-num');
let x, y;
let count = 1;

let chessBtn1 = document.querySelector('#chess__btn1');
let chessBtn2 = document.querySelector('#chess__btn2');
let chessBtn3 = document.querySelector('#chess__btn3');
let chessBtn4 = document.querySelector('#chess__btn4');
let chessBtn5 = document.querySelector('#chess__btn5');
let chessBtn6 = document.querySelector('#chess__btn6');




function turan() {
  chessBtn1.addEventListener('click', () => {
    chessBtn1.classList.add('btn-active');
    chessBtn2.classList.remove('btn-active');
    chessBtn3.classList.remove('btn-active');
    chessBtn4.classList.remove('btn-active');
    chessBtn5.classList.remove('btn-active');
    chessBtn6.classList.remove('btn-active');

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('form1')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('form1')
          ee.classList.remove('form2')
          ee.classList.remove('form3')
          ee.classList.remove('form4')
          ee.classList.remove('form5')
          ee.classList.remove('form6')
          e.classList.remove('chess__item-active')
        })
        e.classList.add('chess__item-active')
        e.classList.add('form1')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn1.addEventListener('click', forms1(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('chess__item-active')
    })
  })
} turan()



function hourse() {
  chessBtn2.addEventListener('click', () => {
    chessBtn1.classList.remove('btn-active')
    chessBtn2.classList.add('btn-active')
    chessBtn3.classList.remove('btn-active')
    chessBtn4.classList.remove('btn-active')
    chessBtn5.classList.remove('btn-active')
    chessBtn6.classList.remove('btn-active')

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('form1')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('form1')
          ee.classList.remove('form2')
          ee.classList.remove('form3')
          ee.classList.remove('form4')
          ee.classList.remove('form5')
          ee.classList.remove('form6')
          e.classList.remove('chess__item-active')
        })
        e.classList.add('chess__item-active')
        e.classList.add('form2')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn2.addEventListener('click', forms2(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('chess__item-active')
    })
  })
} hourse()

function bishop() {
  chessBtn3.addEventListener('click', () => {
    chessBtn1.classList.remove('btn-active');
    chessBtn2.classList.remove('btn-active');
    chessBtn3.classList.add('btn-active');
    chessBtn4.classList.remove('btn-active');
    chessBtn5.classList.remove('btn-active');
    chessBtn6.classList.remove('btn-active');

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('form3')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('form1')
          ee.classList.remove('form2')
          ee.classList.remove('form3')
          ee.classList.remove('form4')
          ee.classList.remove('form5')
          ee.classList.remove('form6')
          e.classList.remove('chess__item-active')
        })
        e.classList.add('chess__item-active')
        e.classList.add('form3')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn3.addEventListener('click', forms3(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('chess__item-active')
    })
  })
} bishop()


function quenn() {
  chessBtn4.addEventListener('click', () => {
    chessBtn1.classList.remove('btn-active');
    chessBtn2.classList.remove('btn-active');
    chessBtn3.classList.remove('btn-active');
    chessBtn4.classList.add('btn-active');
    chessBtn5.classList.remove('btn-active');
    chessBtn6.classList.remove('btn-active');

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('form4')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('form1')
          ee.classList.remove('form2')
          ee.classList.remove('form3')
          ee.classList.remove('form4')
          ee.classList.remove('form5')
          ee.classList.remove('form6')
          e.classList.remove('chess__item-active')
        })
        e.classList.add('chess__item-active')
        e.classList.add('form4')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn4.addEventListener('click', forms4(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('chess__item-active')
    })
  })
} quenn()


function king() {
  chessBtn5.addEventListener('click', () => {
    chessBtn1.classList.remove('btn-active');
    chessBtn2.classList.remove('btn-active');
    chessBtn3.classList.remove('btn-active');
    chessBtn4.classList.remove('btn-active');
    chessBtn5.classList.add('btn-active');
    chessBtn6.classList.remove('btn-active');

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('form5')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('form1')
          ee.classList.remove('form2')
          ee.classList.remove('form3')
          ee.classList.remove('form4')
          ee.classList.remove('form5')
          ee.classList.remove('form6')
          e.classList.remove('chess__item-active')
        })
        e.classList.add('chess__item-active')
        e.classList.add('form5')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn5.addEventListener('click', forms5(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('chess__item-active')
    })
  })
} king()

function paw() {
  chessBtn6.addEventListener('click', () => {
    chessBtn1.classList.remove('btn-active');
    chessBtn2.classList.remove('btn-active');
    chessBtn3.classList.remove('btn-active');
    chessBtn4.classList.remove('btn-active');
    chessBtn5.classList.remove('btn-active');
    chessBtn6.classList.add('btn-active');

    items.forEach((e) => {
      e.addEventListener('mouseout', () => {
        e.classList.remove('form6')
      })
      e.addEventListener('mouseover', () => {
        items.forEach((ee) => {
          ee.classList.remove('form1')
          ee.classList.remove('form2')
          ee.classList.remove('form3')
          ee.classList.remove('form4')
          ee.classList.remove('form5')
          ee.classList.remove('form6')
          e.classList.remove('chess__item-active')
        })
        e.classList.add('chess__item-active')
        e.classList.add('form6')
        x = e.childNodes[1].textContent;
        y = e.childNodes[3].textContent;

        chessBtn6.addEventListener('click', forms6(x, y))
        if (count == 1) {
          count++
        } else {
          count = 1
        }
      })
      e.classList.remove('form6')
    })
  })
} paw()

function itemsFun() {
  items.forEach((e) => {
    e.addEventListener('mouseout', () => {
      e.classList.remove('chess__item-active2')
      e.classList.remove('chess__item-active')
    })
    e.addEventListener('mouseover', () => {
      items.forEach((ee) => {
        ee.classList.remove('chess__item-active2')
        ee.classList.remove('chess__item-active')
      })
      e.classList.remove('chess__item-active')
      e.classList.add('chess__item-active2')
      xNum.innerHTML = e.childNodes[1].textContent;
      yNum.innerHTML = e.childNodes[3].textContent;
    })
    e.classList.remove('chess__item-active2')
    e.classList.remove('chess__item-active')
  })
} itemsFun()


function forms1(x, y) {
  items.forEach((item) => {
    if (item.childNodes[1].textContent == x || item.childNodes[3].textContent == y) {
      item.classList.add('chess__item-active')
    }
    else {
      item.classList.remove('chess__item-active')
    }
  })
}

function forms2(x, y) {
  items.forEach((item) => {
    if (item.childNodes[1].textContent == eval(x) - 1 && item.childNodes[3].textContent == eval(y) - 2 ||
      item.childNodes[1].textContent == eval(x) - 2 && item.childNodes[3].textContent == eval(y) - 1 ||
      item.childNodes[1].textContent == eval(x) - 2 && item.childNodes[3].textContent == eval(y) + 1 ||
      item.childNodes[1].textContent == eval(x) - 1 && item.childNodes[3].textContent == eval(y) + 2 ||
      item.childNodes[1].textContent == eval(x) + 1 && item.childNodes[3].textContent == eval(y) - 2 ||
      item.childNodes[1].textContent == eval(x) + 1 && item.childNodes[3].textContent == eval(y) + 2 ||
      item.childNodes[1].textContent == eval(x) + 2 && item.childNodes[3].textContent == eval(y) - 1 ||
      item.childNodes[1].textContent == eval(x) + 2 && item.childNodes[3].textContent == eval(y) + 1) {
      item.classList.add('chess__item-active')
    }
    else {
      item.classList.remove('chess__item-active')
    }
  })
}

function forms3(x, y) {
  items.forEach((item) => {
    if (
      item.childNodes[1].textContent == x - 1 && item.childNodes[3].textContent == y - 1 ||
      item.childNodes[1].textContent == x - 2 && item.childNodes[3].textContent == y - 2 ||
      item.childNodes[1].textContent == x - 3 && item.childNodes[3].textContent == y - 3 ||
      item.childNodes[1].textContent == x - 4 && item.childNodes[3].textContent == y - 4 ||
      item.childNodes[1].textContent == x - 5 && item.childNodes[3].textContent == y - 5 ||
      item.childNodes[1].textContent == x - 6 && item.childNodes[3].textContent == y - 6 ||
      item.childNodes[1].textContent == x - 7 && item.childNodes[3].textContent == y - 7 ||
      item.childNodes[1].textContent == x - 8 && item.childNodes[3].textContent == y - 8) {
      item.classList.add('chess__item-active')
    }
    else if (item.childNodes[1].textContent == eval(x) + 1 && item.childNodes[3].textContent == eval(y) + 1 ||
      item.childNodes[1].textContent == eval(x) + 2 && item.childNodes[3].textContent == eval(y) + 2 ||
      item.childNodes[1].textContent == eval(x) + 3 && item.childNodes[3].textContent == eval(y) + 3 ||
      item.childNodes[1].textContent == eval(x) + 4 && item.childNodes[3].textContent == eval(y) + 4 ||
      item.childNodes[1].textContent == eval(x) + 5 && item.childNodes[3].textContent == eval(y) + 5 ||
      item.childNodes[1].textContent == eval(x) + 6 && item.childNodes[3].textContent == eval(y) + 6 ||
      item.childNodes[1].textContent == eval(x) + 7 && item.childNodes[3].textContent == eval(y) + 7 ||
      item.childNodes[1].textContent == eval(x) + 8 && item.childNodes[3].textContent == eval(y) + 8) {
      item.classList.add('chess__item-active')
    }
    else if (item.childNodes[1].textContent == eval(x) + 1 && item.childNodes[3].textContent == eval(y) - 1 ||
      item.childNodes[1].textContent == eval(x) + 2 && item.childNodes[3].textContent == eval(y) - 2 ||
      item.childNodes[1].textContent == eval(x) + 3 && item.childNodes[3].textContent == eval(y) - 3 ||
      item.childNodes[1].textContent == eval(x) + 4 && item.childNodes[3].textContent == eval(y) - 4 ||
      item.childNodes[1].textContent == eval(x) + 5 && item.childNodes[3].textContent == eval(y) - 5 ||
      item.childNodes[1].textContent == eval(x) + 6 && item.childNodes[3].textContent == eval(y) - 6 ||
      item.childNodes[1].textContent == eval(x) + 7 && item.childNodes[3].textContent == eval(y) - 7 ||
      item.childNodes[1].textContent == eval(x) + 8 && item.childNodes[3].textContent == eval(y) - 8) {
      item.classList.add('chess__item-active')
    }
    else if (item.childNodes[1].textContent == eval(x) - 1 && item.childNodes[3].textContent == eval(y) + 1 ||
      item.childNodes[1].textContent == eval(x) - 2 && item.childNodes[3].textContent == eval(y) + 2 ||
      item.childNodes[1].textContent == eval(x) - 3 && item.childNodes[3].textContent == eval(y) + 3 ||
      item.childNodes[1].textContent == eval(x) - 4 && item.childNodes[3].textContent == eval(y) + 4 ||
      item.childNodes[1].textContent == eval(x) - 5 && item.childNodes[3].textContent == eval(y) + 5 ||
      item.childNodes[1].textContent == eval(x) - 6 && item.childNodes[3].textContent == eval(y) + 6 ||
      item.childNodes[1].textContent == eval(x) - 7 && item.childNodes[3].textContent == eval(y) + 7 ||
      item.childNodes[1].textContent == eval(x) - 8 && item.childNodes[3].textContent == eval(y) + 8) {
      item.classList.add('chess__item-active')
    }
    else {
      item.classList.remove('chess__item-active')
    }
  })
}

function forms4(x, y) {
  items.forEach((item) => {
    if (item.childNodes[1].textContent == x || item.childNodes[3].textContent == y) {
      item.classList.add('chess__item-active')
    }
    else if (
      item.childNodes[1].textContent == x - 1 && item.childNodes[3].textContent == y - 1 ||
      item.childNodes[1].textContent == x - 2 && item.childNodes[3].textContent == y - 2 ||
      item.childNodes[1].textContent == x - 3 && item.childNodes[3].textContent == y - 3 ||
      item.childNodes[1].textContent == x - 4 && item.childNodes[3].textContent == y - 4 ||
      item.childNodes[1].textContent == x - 5 && item.childNodes[3].textContent == y - 5 ||
      item.childNodes[1].textContent == x - 6 && item.childNodes[3].textContent == y - 6 ||
      item.childNodes[1].textContent == x - 7 && item.childNodes[3].textContent == y - 7 ||
      item.childNodes[1].textContent == x - 8 && item.childNodes[3].textContent == y - 8) {
      item.classList.add('chess__item-active')
    }
    else if (item.childNodes[1].textContent == eval(x) + 1 && item.childNodes[3].textContent == eval(y) + 1 ||
      item.childNodes[1].textContent == eval(x) + 2 && item.childNodes[3].textContent == eval(y) + 2 ||
      item.childNodes[1].textContent == eval(x) + 3 && item.childNodes[3].textContent == eval(y) + 3 ||
      item.childNodes[1].textContent == eval(x) + 4 && item.childNodes[3].textContent == eval(y) + 4 ||
      item.childNodes[1].textContent == eval(x) + 5 && item.childNodes[3].textContent == eval(y) + 5 ||
      item.childNodes[1].textContent == eval(x) + 6 && item.childNodes[3].textContent == eval(y) + 6 ||
      item.childNodes[1].textContent == eval(x) + 7 && item.childNodes[3].textContent == eval(y) + 7 ||
      item.childNodes[1].textContent == eval(x) + 8 && item.childNodes[3].textContent == eval(y) + 8) {
      item.classList.add('chess__item-active')
    }
    else if (item.childNodes[1].textContent == eval(x) + 1 && item.childNodes[3].textContent == eval(y) - 1 ||
      item.childNodes[1].textContent == eval(x) + 2 && item.childNodes[3].textContent == eval(y) - 2 ||
      item.childNodes[1].textContent == eval(x) + 3 && item.childNodes[3].textContent == eval(y) - 3 ||
      item.childNodes[1].textContent == eval(x) + 4 && item.childNodes[3].textContent == eval(y) - 4 ||
      item.childNodes[1].textContent == eval(x) + 5 && item.childNodes[3].textContent == eval(y) - 5 ||
      item.childNodes[1].textContent == eval(x) + 6 && item.childNodes[3].textContent == eval(y) - 6 ||
      item.childNodes[1].textContent == eval(x) + 7 && item.childNodes[3].textContent == eval(y) - 7 ||
      item.childNodes[1].textContent == eval(x) + 8 && item.childNodes[3].textContent == eval(y) - 8) {
      item.classList.add('chess__item-active')
    }
    else if (item.childNodes[1].textContent == eval(x) - 1 && item.childNodes[3].textContent == eval(y) + 1 ||
      item.childNodes[1].textContent == eval(x) - 2 && item.childNodes[3].textContent == eval(y) + 2 ||
      item.childNodes[1].textContent == eval(x) - 3 && item.childNodes[3].textContent == eval(y) + 3 ||
      item.childNodes[1].textContent == eval(x) - 4 && item.childNodes[3].textContent == eval(y) + 4 ||
      item.childNodes[1].textContent == eval(x) - 5 && item.childNodes[3].textContent == eval(y) + 5 ||
      item.childNodes[1].textContent == eval(x) - 6 && item.childNodes[3].textContent == eval(y) + 6 ||
      item.childNodes[1].textContent == eval(x) - 7 && item.childNodes[3].textContent == eval(y) + 7 ||
      item.childNodes[1].textContent == eval(x) - 8 && item.childNodes[3].textContent == eval(y) + 8) {
      item.classList.add('chess__item-active')
    }
    else {
      item.classList.remove('chess__item-active')
    }
  })
}

function forms5(x, y) {
  items.forEach((item) => {
    if (item.childNodes[1].textContent == x - 1 && item.childNodes[3].textContent == y - 1 ||
      item.childNodes[1].textContent == eval(x) - 1 && item.childNodes[3].textContent == eval(y) + 1 ||
      item.childNodes[1].textContent == eval(x) && item.childNodes[3].textContent == eval(y) + 1 ||
      item.childNodes[1].textContent == eval(x) + 1 && item.childNodes[3].textContent == eval(y) + 1 ||
      item.childNodes[1].textContent == eval(x) + 1 && item.childNodes[3].textContent == eval(y) ||
      item.childNodes[1].textContent == eval(x) - 1 && item.childNodes[3].textContent == eval(y) ||
      item.childNodes[1].textContent == eval(x) && item.childNodes[3].textContent == eval(y) - 1 ||
      item.childNodes[1].textContent == eval(x) + 1 && item.childNodes[3].textContent == eval(y) - 1
    ) {
      item.classList.add('chess__item-active')
    }
    else {
      item.classList.remove('chess__item-active')
    }
  })
}

function forms6(x, y) {
  items.forEach((item) => {
    if (item.childNodes[1].textContent == eval(x) + 1 && item.childNodes[3].textContent == eval(y) && item.childNodes[1].textContent != x && x != 1 ||
      x == 2 && item.childNodes[1].textContent == eval(x) + 2 && item.childNodes[3].textContent == eval(y)) {
      item.classList.add('chess__item-active')
    }
    else {
      item.classList.remove('chess__item-active')
    }
  })
}

list.addEventListener('mouseout', () => {
  items.forEach((im) => {
    im.classList.remove('chess__item-active')
    im.classList.remove('form1')
    im.classList.remove('form2')
    im.classList.remove('form3')
    im.classList.remove('form4')
    im.classList.remove('form5')
    im.classList.remove('form6')
    xNum.innerHTML = "";
    yNum.innerHTML = "";
  })
})

let chess3D = document.querySelector('.btn__3d');
let cou = 1
chess3D.addEventListener('click', () => {
  list.classList.toggle('chess3d')
  if (cou == 1) {
    chess3D.textContent = '2D'
    cou++
  }
  else {
    chess3D.textContent = '3D'
    cou = 1
  }
})