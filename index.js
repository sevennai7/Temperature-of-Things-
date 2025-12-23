let index = 0; // Index

fetch("data.json")
  .then(res => res.json())
  .then(data => {

    function showItem(i) {
      const item = data[i];
      document.getElementById("thing-name").textContent = item.n;
      document.getElementById("thing-temp").textContent =
        `${item.f}°F (${item.c}°C)`; // Get HTML and json thingy and etc 
    }

    showItem(index);
    document.addEventListener("click", () => {
      index = (index + 1) % data.length;
      showItem(index);
    });
  });
