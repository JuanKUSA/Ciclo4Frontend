function customEvents() {
    try {
      const loginForm = document.querySelector("#formulario");
      //console.log('formulario ',loginForm);
    } catch (error) {
      console.log(`error`, error);
    }
  }

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
      if (emailValue != "" && isEmailFormated) {
        console.log("Email valido!");
        //sendData (emailValue, passValue);
        await sendDataAsync (emailValue, passValue);
      }else{
        console.log("Email NO valido!");
        alert("Email NO valido !");
      }
      if(passValue != ""){
        console.log("Contraseña valida");
      }else{
        console.log("Contraseña NO valida!");
        alert("Contraseña NO valida!");
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
        //const url = `${todosRoute}/1?user=${email}&pass=${password}`;
        const response = await fetch('http://152.70.156.66:8080/api/user/all');
        const responseInJsonFormat = await response.json();
        console.log(`responseInJsonFormat`, responseInJsonFormat);
        //if (responseInJsonFormat.token) {
          //console.log(`el usuario se autenticó`);
        //}
    } catch (error) {
      console.log(`error`, error);
    }
  }
//customEvents();