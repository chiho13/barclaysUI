function init() {
  var selectInput = document.getElementById('filter');
  selectInput.addEventListener('change', filterAlphabet, false);
}

function filterAlphabet() {
  var whichFilter = this.value;
  getAlphabets(whichFilter);
}

function alphabetical(a, b) {
  var A = a.toLowerCase();
  var B = b.toLowerCase();
  if (A < B) {
    return -1;
  } else if (A > B) {
    return 1;
  } else {
    return 0;
  }
}

function getAlphabets(whichFilter) {
  var htmlElements = '';
  var threeItemContainer = document.querySelector('.threeItemContainer');
  var getArr = document.querySelectorAll('.threeItem_item');
  var alphabetArr = Array.from(getArr).map(function(el) {
    return el.getAttribute('data-alphabet');
  });

  var ascending = alphabetArr.sort(alphabetical);

  if (whichFilter === 'des') {
    ascending.reverse();
  }

  ascending.forEach(function(el) {
    var items = document.querySelector(`[data-alphabet="${el}"`).outerHTML;
    htmlElements += items;
  });

  threeItemContainer.innerHTML = htmlElements;
}

init();
