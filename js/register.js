  async function FormRegister (event){
    try {
      const nombre = document.querySelector("#name");
      //const nombre = document.getElementById("name");
      const email = document.querySelector("#emailRegister");
      const contraseña = document.querySelector("#passRegister");
      const confContraseña = document.querySelector("#passConfirm");
      event.preventDefault();
      const nameValue = nombre.value.trim();
      const emailValue = email.value.trim().toLowerCase();
      const emailExpression = /\S+@\S+\.\S+/;

      const passValue = contraseña.value.trim();
      const confPassValue = confContraseña.value.trim();
      const isEmailFormated = emailExpression.test(emailValue);
      console.log('nombre: ',nameValue);
      console.log('email: ',emailValue);
      console.log('contraseña: ',passValue);
      console.log('contraseña 2: ',confPassValue);

      if (nameValue != "" && emailValue != "" && confPassValue != "" && passValue != "") {
        if(isEmailFormated){
          console.log("Email valido");
          if (passValue != confPassValue) {
            console.log("contraseñas no coinciden");
            alert ("la contraseña no coincide");
            //$("confPassValue").focus();
          }else{
            console.log("datos enviados !!!");
            await sendDataAsyncRegis (nameValue, emailValue, passValue);
          }
        }else{
          console.log("Email valido!");
          alert("Formato de email no correspodne")
        }  
      }else{
        console.log("Falta algun dato!");
        alert("Complete los datos por favor !");
      }
    } catch (error) {
      console.log(`error`, error);
    }
  }


  
  async function sendDataAsyncRegis(name, email, password) {
    try {
        // const url = `${todosRoute}/1?user=${email}&pass=${password}`;
        //const response = await fetch('http://158.101.23.91:8080/api/user/new')
        // const responseInJsonFormat = await response.json();
        // console.log(`responseInJsonFormat`, responseInJsonFormat);
        // if (responseInJsonFormat.token) {
        // console.log(`el usuario se autenticó`);
        // }
        //--------------------------------------------------------------------------------------
        const response = await fetch('http://158.101.23.91:8080/api/user/new',{
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({
              name,
              email,
              password})
        });
        let result = await response.json();
        console.log('resultado', result);
        alert("Registro exitoso", result.message);
        //debugger
        window.open("http://127.0.0.1:5500/index.html","_self")

    } catch (error) {
      console.log(`error`, error);
    }
  }

