fetch("data.json")
  .then(res => res.json())
  .then(data => {
    const item = data[2]; // temperature

    document.getElementById("thing-name").textContent = item.n;
    document.getElementById("thing-temp").textContent =
      `${item.f}°F (${item.c}°C)`;
  });
