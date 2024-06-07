const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  console.log(event.key);
  console.log(event.keyCode);
  console.log(event.code);
  console.log(event.which);

  insert.innerHTML = `
    <div class="key">
       ${event.keyCode} 
      <small>event.keycode</small>
    </div>
    <div class="key">
       ${event.key === " " ? "space" : event.key} 
      <small>event.key</small>
    </div>
    <div class="key">
       ${event.code} 
      <small>event.code</small>
    </div>
     <div class="key">
       ${event.which} 
      <small>event.which</small>
    </div>
     <div class="key">
       ${event.location} 
      <small>event.location</small>
    </div>

    `;
});
