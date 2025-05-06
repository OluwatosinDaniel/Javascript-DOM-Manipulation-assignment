function changeText() {
    document.getElementById("description").textContent = "The text has been changed!";
  }
  
  function toggleStyle() {
    const title = document.getElementById("main-title");
    title.style.color = title.style.color === "blue" ? "black" : "blue";
    title.style.fontSize = title.style.fontSize === "2em" ? "1em" : "2em";
  }
  
  function addElement() {
    const newDiv = document.createElement("div");
    newDiv.textContent = "A new element has been added!";
    newDiv.className = "added-element";
    document.getElementById("container").appendChild(newDiv);
  }
  
  function removeElement() {
    const container = document.getElementById("container");
    if (container.lastChild) {
      container.removeChild(container.lastChild);
    }
  }
  