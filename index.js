fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("list");
    const template = document.getElementById("template");

    data.forEach(item => {
      const clone = template.cloneNode(true);
      clone.removeAttribute("id");
      clone.hidden = false;

      clone.querySelector(".thing-name").textContent = item.n;
      clone.querySelector(".thing-temp").textContent =
        `${item.f}°F (${item.c}°C)`;

      list.appendChild(clone);
    });
  });
