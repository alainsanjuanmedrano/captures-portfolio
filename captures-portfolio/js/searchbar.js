// The universal selector denoted by * that matches all elements of any type: item.querySelectorAll("*")//

function instantSearch() {
    document.querySelectorAll('.item').forEach(item => item.querySelectorAll("*")[0].innerText.toLowerCase().indexOf(document.querySelector('#input').value.toLowerCase()) > -1 ? item.style.display = 'block' : item.style.display = 'none');
  }