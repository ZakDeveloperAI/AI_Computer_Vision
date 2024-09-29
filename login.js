let database;
let username;
let password;
let sign = document.querySelector("#sign-in");

fetch('./database.json')
  .then(response => response.json())
  .then(data => {
    database = data;
  })
  .catch(error => {
    console.error("Error loading the database:", error);
  });

sign.addEventListener("click", function(){
    username = document.querySelector("#username").value;
    password = document.querySelector("#password").value;
    
    // Check if the password matches the username in the database
    if (database && password == database[username]) {
        window.location.replace("index.html");
    } else {
        alert("Errore Username o Password sbagliati, controlla i valori inseriti");
    }
    
    
});
