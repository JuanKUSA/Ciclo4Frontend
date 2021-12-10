async function procesaFormulario (event){
    try {
      const ident = document.querySelector("#ident");
      const name = document.querySelector("#name");
      const adress = document.querySelector("#adress");
      const phone = document.querySelector("#phone");
      const email = document.querySelector("#email");
      const password = document.querySelector("#password");
      const zone = document.querySelector("#zone");
      const type = document.querySelector("#type");

      event.preventDefault();
      const idValue = ident.value.trim();
      //const idExpression =  /^\d{8,10}$/  // 8 a 14 numeros.
      const nameValue = name.value.trim(); // name.
      const adressValue = adress.value.trim();
      const phoneValue = phone.value.trim();
      //const phoneExpression = /^\d{7,14}$/ // 7 a 14 numeros.
      const emailValue = email.value.trim().toLowerCase(); // email.
      const emailExpression = /\S+@\S+\.\S+/;
      const passValue = password.value.trim();
      const isEmailFormated = emailExpression.test(emailValue);
      //const isPhoneFormated = phoneExpression.text(phoneValue)
      const zoneValue = zone.value.trim();
      const typeValue = type.value.trim();
      console.log('id: ',idValue);
      console.log('name: ',nameValue);
      console.log('adress: ',adressValue);
      console.log('phone: ',phoneValue);
      console.log('email: ',emailValue);
      console.log('password: ',passValue);
      console.log('zone: ',zoneValue);
      console.log('type: ', typeValue);

      if(idValue!="" && nameValue!="" && adressValue!="" && phoneValue!="" && isEmailFormated!="" && passValue!="" && zoneValue!="" && typeValue!=""){
          // if (idValue.length < 8 || idValue.length > 10) {
          //   console.log("id Incorrecto!");
          //   alert("!Id No Valido");
          // } else {
          //   if (phoneValue.length < 7 || phoneValue.length > 14) {
          //       console.log("phone Incorrecto!");
          //       alert("!Telefono No Valido");
          //   } else {
          //       console.log("Campos Correctos!");
          //   }
          // }
          await sendDataAsyncUsers(idValue, nameValue, adressValue, phoneValue, isEmailFormated, passValue, zoneValue, typeValue);
          console.log("datos enviados !!!");
      }else{
        console.log("Campos Incorrectos!");
        alert("Complete todos los campos");
        }
    }catch (error) {
        console.log(`error`, error);
      }
}

async function sendDataAsyncUsers(identification, name, address, cellPhone, email, password, zone, type) {
    try {
        const response = await fetch('http://158.101.23.91:8080/api/user/new',{
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({identification, name, address, cellPhone, email, password, zone, type})
        });
        let result = await response.json();
        console.log('resultado', result);
        alert("Usuario creado con exito ", result.message);
        debugger
    } catch (error) {
      console.log(`error`, error);
    }
  }



  async function getUsers() {
    try {
        const response = await fetch('http://158.101.23.91:8080/api/user/all');
        const data = await response.json();
        //console.log(`JsonTabla`, data);
        paintTable(data);
    } catch (error) {
      console.log(`error`, error);
    }
  }

  

  function paintTable(data){
    let tUsers = document.querySelector('#tUsers')
    tUsers.innerHTML = '';
        console.log(data);
        for (let item of data) {
          //console.log("producto ",item);
          tUsers.innerHTML += `
          <tr>
            <th>${item.id}</th>
            <td>${item.identification}</td>
            <td>${item.name}</td>
            <td>${item.address}</td>
            <td>${item.cellPhone}</td>
            <td>${item.email}</td>
            <td>${item.zone}</td>
            <td>${item.type}</td>
            <td>
            <button type="button" class="btn btn-outline-warning btn-sm " id="btn_editar">Editar</button>
            <button type="button" class="btn btn-outline-danger btn-sm" id="btn_Borrar">Borrar</button>
            </tr>
          `
        }
  }

  getUsers();










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