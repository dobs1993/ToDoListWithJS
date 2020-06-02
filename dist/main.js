// To do list

var mitchToDoList = {
  // List Items
  listItems: [],
  // Display the list
  displayItems: function () {
    if (this.listItems.length === 0) {
      console.log("you have nothing in your to do list, add something");
    } else {
      console.log("Your To Do list below:");
      for (var i = 0; i < this.listItems.length; i++) {
        if (this.listItems[i].completed === true) {
          console.log("(x)", this.listItems[i].newItem);
        } else if (this.listItems[i].completed === false) {
          console.log("( )", this.listItems[i].newItem);
        }
      }
    }
  },
  // Add a item
  addItem: function (newValue) {
    this.listItems.push({
      newItem: newValue,
      completed: false,
    });
    this.displayItems();
  },
  // Change an item
  changeItem: function(position, newValue) {
    this.listItems[position] = newValue;
    this.displayItems();
  },
  // Delete a item
  deleteItem: function (position) {
    this.listItems.splice(position, 1);
    this.displayItems();
  },
  // Toggle a item
  toggleItem: function (position) {
    var togglePosition = this.listItems[position];
    togglePosition.completed = !togglePosition.completed;
    this.displayItems();
  },
  // Toggle All
  toggleAll: function () {
    var lengthList = this.listItems.length;
    var counter = 0;

    // Get the counter to the correct number

    for (var i = 0; i < lengthList; i++) {
      if (this.listItems[i].completed === true) {
        counter++;
      }
    }

    // If all true make all false all other cases make all true

    if (lengthList === counter) {
      for (var i = 0; i < lengthList; i++) {
        this.listItems[i].completed = false;
      }
    } else {
      for (var i = 0; i < lengthList; i++) {
        this.listItems[i].completed = true;
      }
    }
    this.displayItems();
  },
};

// Attaching to the dom

var handlers = {
  // Attach to display btn
  display: function () {
    mitchToDoList.displayItems();
  },
  // Attach to toggle btn
  toggle: function () {
    mitchToDoList.toggleAll();
  },
  // Add a item and clr str
  addItem: function () {
    var addItem = document.getElementById("text");

    mitchToDoList.addItem(addItem.value);

    addItem.value = "";
  },
  // Change an item
  changeItem: function () {
    var changePosition = document.getElementById("changePosition");
    var changeValue = document.getElementById("newValue");

    mitchToDoList.changeItem(changePosition.valueAsNumber, changeValue.value);

    changePosition.value = "";
    changeValue.value = "";
  },

  deleteToDo: function () {
    var deleteAToDo = document.getElementById("deleteToDo");

    mitchToDoList.deleteItem(deleteAToDo.valueAsNumber);
  },
};
