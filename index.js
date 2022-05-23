//1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
//evento click que ejecute un console log con la información del evento del click

const myButton = document.querySelector("#btnToClick");

myButton.addEventListener('click', myButtonClick);

function myButtonClick(event){
    console.log("Programar mola");
}


//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const myFocus = document.querySelector("input");
myFocus.addEventListener ("focus", function (event){
    console.log(myFocus.value)
});


//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.
const myInput = document.querySelectorAll("input");
myInput.addEventListener ("input", function (event){
    console.log(myInput.value)
})