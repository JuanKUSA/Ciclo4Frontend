
  async function procesaFormulario (event){
    try {
      const email = document.querySelector("#email");
      const contraseña = document.querySelector("#pass");
      event.preventDefault();
      const emailValue = email.value.trim().toLowerCase();
      const passValue = contraseña.value.trim();
      const emailExpression = /\S+@\S+\.\S+/;
      const isEmailFormated = emailExpression.test(emailValue);
      console.log('email: ',emailValue);
      console.log('contraseña: ',passValue);

      if (emailValue != "" && passValue != "") {
        if (isEmailFormated) {
          console.log("Email valido!");
          await sendDataAsync (emailValue, passValue);
        }else{
          console.log("Email NO valido!");
          alert("Formato de email no valido")
        }
      } else {
        console.log("datos incompletos");
        alert("Complete los datos por favor");
      }
    } catch (error) {
      console.log(`error`, error);
    }
  }

//version larga peticion get
/**
 * 
 
  function sendData(email, password){
    try {
      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))
    } catch (error) {
      console.log("Error", error);
    }
  }* 
 * 
 */

  async function sendDataAsync(email, password) {
    try {
        const response = await fetch('http://158.101.23.91:8080/api/user/'+ email +'/'+ password);
        const responseInJsonFormat = await response.json();
        console.log(`responseInJsonFormat`, responseInJsonFormat);
        if (responseInJsonFormat.id == null) {
          alert("Usuario o contraseña invalida");
        }else{
          alert("Bienvenid@ "+ responseInJsonFormat.name)
          window.open("http://127.0.0.1:5500/Front-Suplementos/index.html?","_self")
        }
    } catch (error) {
      console.log(`error`, error);
    }
  }
//customEvents();