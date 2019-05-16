class TabLink {
  constructor(link) {
    // Assign this.element to the passed in DOM element
    this.link = link;
    
    // Get the custom data attribute on the Link
    this.data = link.dataset;

    // Using the custom data attribute get the associated Item element
    // this.tab_data = this.data.tab;
    this.tab_data = document.querySelector(`.tabs-item[data-tab='${link.dataset.tab}']`);
    
    // Using the Item element, create a new instance of the TabItem class
    this.tab_item = new TabItem(this.tab_data);
    
    // Add a click event listener on this instance, calling the select method on click
    link.addEventListener('click', () => this.select());

  }

  select() {
    // Get all of the elements with the tabs-link class
    const links = document.querySelectorAll('.tabs-link');;

    // Using a loop or the forEach method remove the 'tabs-link-selected' class from all of the links
    // Array.from(links).forEach();
    links.forEach(link => {
      link.removeAttribute('class', 'tabs-link-selected');
      link.classList.toggle('tabs-link');
    })

    // Add a class named "tabs-link-selected" to this link
    this.link.classList.toggle('tabs-link-selected');
    
    // Call the select method on the item associated with this link
    this.tab_item.select();

  }
}

class TabItem {
  constructor(tab_item) {
    // Assign this.element to the passed in element
    this.tab_item = tab_item;
  }

  select() {
    // Select all ".tabs-item" elements from the DOM
    const items = document.querySelectorAll('.tabs-item');

    // Remove the class "tabs-item-selected" from each element
    items.forEach(item => {
      item.removeAttribute('class', 'tabs-item-selected');
      item.classList.toggle('tabs-item');
    })
    
    // Add a class named "tabs-item-selected" to this element
    this.tab_item.classList.toggle('tabs-item-selected');
  }
}

/* START HERE: 

- Select all classes named ".tabs-link" and assign that value to the links variable

- With your selection in place, now chain a .forEach() method onto the links variable to iterate over the DOM NodeList

- In your .forEach() method's callback function, return a new instance of TabLink and pass in each link as a parameter

*/

links = document.querySelectorAll('.tabs-link');
links.forEach(link => new TabLink(link));




