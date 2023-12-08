// Get the collection of elements with the specified class name
const actualItems = document.getElementsByClassName("footer__item--header");

// Loop through each element and add the event listener
for (let i = 0; i < actualItems.length; i++) {
  actualItems[i].addEventListener(
    "click",
    function (e) {
      // Using classList.toggle to toggle the "testtest" class
      const actualItemsMenu =
        document.getElementsByClassName("footer__item--menu");
      actualItemsMenu[i].classList.toggle("show__bar");

      // Log the updated classList
      console.log(this.className);
    },
    false
  );
}
