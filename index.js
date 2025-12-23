fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const list = document.getElementById("list");

    data.forEach(item => {
      const block = document.createElement("div");
      block.innerHTML = `
        <h1>${item.n}</h1>
        <h2>${item.f}°F (${item.c}°C)</h2>
      `;
      list.appendChild(block);
    });
  });
