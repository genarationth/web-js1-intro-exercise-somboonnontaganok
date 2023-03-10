function ChangeName() {
    let person = prompt("What is your name?");
    if (person != null) {
      document.getElementById("inputName").innerHTML =
       "Hello " + person
    }
  }