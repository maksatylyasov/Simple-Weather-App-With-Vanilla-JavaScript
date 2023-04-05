const form = document.querySelector(".top-banner form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const apiKey = "3edcb4874c95ad42418bf57bc0cb3e01";
  //   const inputVal = e.input.value;
  const inputVal = e.target.city.value;
  //   console.log(inputVal);
  //   const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal}&appid=${apiKey}&units=metric`;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputVal},uk&APPID=${apiKey}`;

  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      //   console.log(data);

      // do stuff with the data
      const { main, name, sys, weather } = data;
      console.log(name);
      const icon = `https://openweathermap.org/img/wn/${weather[0]["icon"]}@2x.png`;
      const li = document.createElement("li");
      li.classList.add("city");

      const markup = `
        <h2 class="city-name" data-name="${name},${sys.country}"> 
        <span>${name}</span> 
        <sup>${sys.country}</sup> 
        </h2> 
        <div class="city-temp">${Math.round(main.temp)}<sup>°C</sup> 
        </div> 
        <figure> 
        <img class="city-icon" src=${icon} alt=${weather[0]["main"]}> 
        <figcaption>${weather[0]["description"]}</figcaption> 
        </figure> 
        `;

      li.innerHTML = markup;
      console.log("BREAKPOINT");
      document.getElementById("city-card").appendChild(li);
      // list.appendChild(li);

      //   msg.textContent = "";
      console.log("BREAKPOINT 2");
      form.reset();
      input.focus();
    })
    .catch(() => {
      console.log("ERROR");
      //   msg.textContent = "Please search for a valid city 😩";
    });
});
