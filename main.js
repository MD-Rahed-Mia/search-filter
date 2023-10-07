
const search = document.querySelector("#search");


function filter() {
  let text = search.value.toLowerCase();

  let listItem = document.querySelectorAll(".item_container ul li");

  listItem.forEach(element => {
    let elementText = element.textContent.toLowerCase();

    if (elementText.includes(text)) {
      element.style.display = '';

      console.log('match');
    }
    else {
      element.style.display = 'none';
    }
  })


  console.log(text);
}

search.addEventListener("input", () => {
  filter();
})