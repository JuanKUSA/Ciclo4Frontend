  async function procesaFormulario (event){
    try {
      const nombre = document.querySelector("#name");
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

      if (emailValue != "" && isEmailFormated) {
        if(passValue != "" && passValue == confPassValue){
            console.log("Contraseña valida");
            console.log("Email valido!");
            //sendData (emailValue, passValue);
            await sendDataAsync (nameValue, emailValue, passValue);
          }else{
            console.log("Contraseña NO valida!");
            alert("Contraseña NO valida!");
          }
      }else{
        console.log("Email NO valido!");
        alert("Email NO valido !");
      }
    } catch (error) {
      console.log(`error`, error);
    }
  }


  
  async function sendDataAsync(name, email, password) {
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
            body: JSON.stringify({name,email,password})
        });
        let result = await response.json();
        console.log('resultado', result);
        alert(result.message);

    } catch (error) {
      console.log(`error`, error);
    }
  }