async function procesaFormulario (event){
    try {
      const id = document.querySelector("#id");
      const name = document.querySelector("#name");
      const adress = document.querySelector("#adress");
      const phone = document.querySelector("#phone");
      const email = document.querySelector("#email");
      const password = document.querySelector("#password");
      const zone = document.querySelector("#zone");
      const type = document.querySelector("#type");

      event.preventDefault();
      const idValue = id.value.trim();
      const idExpression =  /^\d{8,10}$/  // 8 a 14 numeros.
      const nameValue = name.value.trim(); // name.
      const adressValue = adress.value.trim();
      const phoneValue = /^\d{7,14}$/ // 7 a 14 numeros.
      const emailValue = email.value.trim().toLowerCase(); // email.
      const emailExpression = /\S+@\S+\.\S+/;
      const passValue = contraseña.value.trim();
      const isEmailFormated = emailExpression.test(emailValue);
      const zoneValue = zone.value.trim();
      const typeValue = type.value.trim();
      console.log('id: ',idValue);
      console.log('name: ',nameValue);
      console.log('adress: ',adressValue);
      console.log('phone: ',phoneValue);
      console.log('email: ',emailValue);
      console.log('password: ',passValue);
      console.log('zone: ',zoneValue);
      console.log('type: ', type.value);

      if(idValue!=" " && nameValue!=" " && adressValue!=" " && phoneValue!=" " && emailValue!=" " && passValue!=" " && zoneValue!="" && typeValue!=" "){
          if (idValue.length < 8 || idValue.length > 10) {
            console.log("id Incorrecto!");
            alert("!Id No Valido");
          } else {
            if (phoneValue.length < 7 || phoneValue.length > 14) {
                console.log("phone Incorrecto!");
                alert("!Telefono No Valido");
            } else {
                console.log("Campos Correctos!");
            }
          }
      }else{
        console.log("Campos Incorrectos!");
        alert("Complete todos los campos");
        }
    }catch (error) {
        console.log(`error`, error);
      }
}

async function sendDataAsync(name, adress, phone, email, password, zone, type) {
    try {
        const response = await fetch('http://158.101.23.91:8080/api/user/new',{
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({name, adress, phone, email, password, zone, type})
        });
        let result = await response.json();
        console.log('resultado', result);
        alert(result.message);

    } catch (error) {
      console.log(`error`, error);
    }
  }
//PUT
/*
var formData = new FormData();
var fileField = document.querySelector("input[type='file']");

formData.append('username', 'abc123');
formData.append('avatar', fileField.files[0]);

fetch('https://example.com/profile/avatar', {
  method: 'PUT',
  body: formData
})
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response));

// DELETE

fetch('https://example.com/delete-item/' + id, {
  method: 'DELETE',
})
.then(res => res.text()) // or res.json()
.then(res => console.log(res))
*/