let pos = [];

filterSelection('all');
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName('column');

  if (pos.length >= 0) {
    for (let i = 0; i < pos.length; i++) {
      w3RemoveClass(x[pos[i]], 'm-236');
    }
    pos = [];
  }

  if (c == 'all') c = '';
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], 'show');
    if (x[i].className.indexOf(c) > -1) {
      w3AddClass(x[i], 'show');
      pos.push(i);
    }
  }

  if (
    (pos.length <= 2 && screen.width > 640 && screen.width <= 1200) ||
    (pos.length <= 3 && screen.width > 1200)
  ) {
    for (let i = 0; i < pos.length; i++) {
      w3AddClass(x[pos[i]], 'm-236');
    }
  } else {
    pos = [];
  }
}

function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += ' ' + arr2[i];
    }
  }
}

function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(' ');
  arr2 = name.split(' ');
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(' ');
}

var btnContainer = document.getElementById('myBtnContainer');
var btns = btnContainer.getElementsByClassName('btn-filter');
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener('click', function () {
    var current = document.getElementsByClassName('active');
    current[0].className = current[0].className.replace(' active', '');
    this.className += ' active';
  });
}
