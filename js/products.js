async function procesaFormulario (event){
    try {
      const id = document.querySelector("#id");
      const brand = document.querySelector("#brand");
      const category = document.querySelector("#category");
      const objectives = document.querySelector("#objectives");
      const description = document.querySelector("#description");
      const price = document.querySelector("#price");
      const availability = document.querySelector("#availability");
      const quantity = document.querySelector("#quantity");
      const photography = document.querySelector("#photography");  
      event.preventDefault();
      const idValue = id.value.trim();
      const brandValue = brand.value.trim();
      const categoryValue = category.value.trim();
      const objectivesValue = objectives.value.trim();
      const descriptionValue = description.value.trim();
      const priceValue = price.value.trim();
      const availabilityValue = availability.value.trim();
      const quantityValue = quantity.value.trim();
      const photographyValue = photography.value;
      //console.log(photography.value);
      // console.log('id: ',idValue);
      // console.log('brand: ',brandValue);
      // console.log('category: ',categoryValue);
      // console.log('objectives: ',objectivesValue);
      // console.log('description: ',descriptionValue);
      // console.log('price: ',priceValue);
      // console.log('availability: ',availabilityValue);
      // console.log('quantity: ',quantityValue);
      // console.log('photography: ',photographyValue);

      if(idValue!="" && brandValue!="" && categoryValue!="" && objectivesValue!="" && descriptionValue!="" &&  priceValue!="" && availabilityValue!="" && quantityValue!=""){
        console.log("Campos Correctos!");
        await sendDataAsyncProduct (idValue, brandValue, categoryValue, objectivesValue, descriptionValue, priceValue, availabilityValue, quantityValue, photographyValue);
      }else{
        console.log("Campos Incorrectos!");
        alert("Complete todos los campos");
        }
    }catch (error) {
        console.log(`error`, error);
      }
}



async function sendDataAsyncProduct(reference, brand, category, objetivo, description, price, availability, quantity, photography) {
    try {
        const response = await fetch('http://158.101.23.91:8080/api/supplements/new',{
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({reference, brand, category, objetivo, description, price, availability, quantity, photography})
        });
        let result = await response.json();
        console.log('resultado', result);
        alert("Producto creado correctamente ",result.message);
        //debugger
        window.open("http://127.0.0.1:5500/Front-Suplementos/products.html?","_self")
    } catch (error) {
      console.log(`error`, error);
    }
  }

  
  async function getProducts() {
    try {
        const response = await fetch('http://158.101.23.91:8080/api/supplements/all');
        const data = await response.json();
        //console.log(`JsonTabla`, data);
        paintTable(data);
    } catch (error) {
      console.log(`error`, error);
    }
  }

  

  function paintTable(data){
    let tProd = document.querySelector('#tProd')
        tProd.innerHTML = '';
        console.log(data);
        for (let item of data) {
          //console.log("producto ",item);
          tProd.innerHTML += `
          <tr>
            <th>${item.reference}</th>
            <td>${item.brand}</td>
            <td>${item.category}</td>
            <td>${item.objetivo}</td>
            <td>${item.description}</td>
            <td>${item.availability ? "SI" : "NO"}</td>
            <td>${item.price}</td>
            <td>${item.quantity}</td>
            <td>${item.photography}</td>
            <td>
            <button type="button" class="btn btn-outline-warning btn-sm " id="btn_editar">Editar</button>
            <button type="button" class="btn btn-outline-danger btn-sm" id="btn_Borrar">Borrar</button>
            </tr>
          `
        }
  }

  getProducts();