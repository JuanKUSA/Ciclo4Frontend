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
      const photographyValue = photography.value.trim();
     
   
      console.log('id: ',idValue);
      console.log('brand: ',brandValue);
      console.log('category: ',categoryValue);
      console.log('objectives: ',objectivesValue);
      console.log('description: ',descriptionValue);
      console.log('price: ',priceValue);
      console.log('availability: ',availabilityValue);
      console.log('quantity: ',quantityValue);
      console.log('photography: ',photographyValue);

      if(idValue!=" " && brandValue!=" " && categoryValue!=" " && objectivesValue!=" " && descriptionValue!=" " &&  priceValue!=" " && availabilityValue!="" && quantityValue!=" " && photographyValue!=" "){
        console.log("Campos Correctos!");
      }else{
        console.log("Campos Incorrectos!");
        alert("Complete todos los campos");
        }
    }catch (error) {
        console.log(`error`, error);
      }
}
async function sendDataAsync(id, brand, category, objectives, description, price, availability, quantity,       photography) {
    try {
        const response = await fetch('http://158.101.23.91:8080/api/supplements/new',{
            method: 'POST',
            headers: {'Content-Type': 'application/json;charset=utf-8'},
            body: JSON.stringify({id, brand, category, objectives, description, price, availability, quantity, photography})
        });
        let result = await response.json();
        console.log('resultado', result);
        alert(result.message);

    } catch (error) {
      console.log(`error`, error);
    }
  }