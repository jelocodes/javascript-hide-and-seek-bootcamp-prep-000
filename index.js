function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('#nested .target')
}

function increaseRankBy(n) {
  var rankedLists = document.querySelectorAll('.ranked-list li')
  for (var i = 0; i < rankedLists.length; i++) {
    rankedLists[i].innerHTML = parseInt(rankedLists[i].innerHTML, 10) + n;
  }
}

function deepestChild() {
  var divs = document.querySelector('#grand-node').querySelectorAll('div');
  for (var i = 0; i < divs.length; i++) {
    if (divs[i] == divs[divs.length-1]) {
      return divs[i];
    }
  }
}
