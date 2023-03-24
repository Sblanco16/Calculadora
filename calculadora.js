let n = document.getElementById("numero1");
let n2 =document.getElementById("numero2");

const suma =() => {
 
 if(n.value=="" || n2.value ==""){
    swal.fire({
        title: "Error!",
        text: "Por favor inserte los numeros",
        icon:"error",
        allowDutsideClick: true,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true

    });

 } else{
    let total = parseFloat(n.value) + parseFloat(n2.value);
    swal.fire({
        title: "La Suma es:",
        text: `${n.value} + ${n2.value} = ${total}`,
        icon:"success",
        allowDutsideClick: true,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true

    });
    n.value ='';
    n2.value="";    
 }
    
} 

const resta=() =>{
 
 if(n.value=="" || n2.value ==""){
    swal.fire({
        title: "Error!",
        text: "Por favor inserte los numeros",
        icon:"error",
        allowDutsideClick: true,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true

    });

 } else{
    let total = parseFloat(n.value) - parseFloat(n2.value);
    swal.fire({
        title: "La Resta es:",
        text: `${n.value} - ${n2.value} = ${total}`,
        icon:"success",
        allowDutsideClick: true,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true

    });
    n.value ='';
    n2.value=" ";    
 }
    
}

const multiplicacion=() =>{

    
 if(n.value=="" || n2.value ==""){
    swal.fire({
        title: "Error!",
        text: "Por favor inserte los numeros",
        icon:"error",
        allowDutsideClick: true,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true

    });

 } else{
    let total = parseFloat(n.value) * parseFloat(n2.value);
    swal.fire({
        title: "La Multiplicación es:",
        text: `${n.value} * ${n2.value} = ${total}`,
        icon:"success",
        allowDutsideClick: true,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true

    });
    n.value ='';
    n2.value=" ";    
 }
    
}

const division=() => {
   
 if(n.value=="" || n2.value ==""){
    swal.fire({
        title: "Error!",
        text: "Por favor inserte los numeros",
        icon:"error",
        allowDutsideClick: true,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true

    });

 } else{
    let total = parseFloat(n.value) / parseFloat(n2.value);
    swal.fire({
        title: "La División es:",
        text: `${n.value} / ${n2.value} = ${total}`,
        icon:"success",
        allowDutsideClick: true,
        allowEscapeKey: false,
        allowEnterKey: false,
        stopKeydownPropagation: true

    });
    n.value ='';
    n2.value=" ";    
 }
    
}
