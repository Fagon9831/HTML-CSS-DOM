
let sProducts = {
    Agua:{precio:200},
    Emocion:{precio:180},
    Alegria:{precio:160},
    Frescura:{precio:150}
}
let ArrayVendedores=['Juana','Pedro']
let ArrayProducts=['Agua','Emocion','Alegria','Frescura']

let objectVendedores={
    Juana:{Ventas:0,ValorVentas:0},
    Pedro:{Ventas:0,ValorVentas:0}
}
//objectVendedores[ArrayVendedores[0]].Ventas
function EnterSale(){
    var vendedor= document.getElementById("SelectVendedor")
    var textVendedor = vendedor.options[vendedor.selectedIndex].text;    
    var prodVendido= document.getElementById("SelectProductos")
    var textProdVen = prodVendido.options[prodVendido.selectedIndex].text;
    var cantVenta=document.getElementById("CantVent").value  
    objectVendedores[textVendedor].Ventas+=parseInt(cantVenta)
    objectVendedores[textVendedor].ValorVentas+=sProducts[textProdVen].precio*parseInt(cantVenta)
}
//Funcion para listar en el select los distintos vendedores
function listarVendedores(){
    var select=document.getElementById("SelectVendedor")
    for (let i=0;i<ArrayVendedores.length;i++){        
        var option=document.createElement("option")
        option.value=i
        option.text=ArrayVendedores[i]        
        select.add(option)        
    }
    
}
//Opcion 2 para listar en un select asociando un hijo al elemento principal
function listarProductos(){    
    var $Select= document.getElementById("SelectProductos")
        for (let i = 0; i < ArrayProducts.length; i++) {
            var option = document.createElement('option');        
            option.value=i
            option.text=ArrayProducts[i]                
            $Select.appendChild(option);            
        }        
}

function RealizarCierre(){
    //Ocultar etiqueta .style.visibility="hidden" -.style.display="none" 
    var sfielInput=document.getElementById("CantVent")
    var sfielSelectProd=document.getElementById("SelectProductos")
    var sfielSelectVend=document.getElementById("SelectVendedor")
    sfielSelectVend.disabled=true
    sfielInput.disabled=true
    sfielSelectProd.disabled=true
  /*  var bButtons=document.getElementById("btn_option1")
    var bButtons2=document.getElementById("btn_option2")
    bButtons.disabled=true
    bButtons2.disabled=true*/
    document.getElementById("btn_option1").style.visibility="visible"
    document.getElementById("btn_option2").style.visibility="visible"
/*    etiquetaST= document.createElement("input");
    etiquetaST.value = "$"+cuentas[iCount].saldo
    etiquetaST.disabled=true
    document.body.appendChild(etiquetaST);                    
    let caja = document.getElementById("caja_ingresos");
    caja.innerHTML += `<div class='text-light d-flex flex-column fs-5 justify-content-center align-items-center col-12 mt-4 bg-success h-25 rounded-2'><p>Nombre: ${nombre} </p><p>Monto: ${monto} COP </p><p>Fecha: ${fecha}</p></div>`;
  */              
}
function getHistoric(){
    //document.getElementById("gHistoric").innerHTML=""
    let div = document.createElement("div");
    div.classList.add("gHistoric");
    document.getElementById("Campos").innerHTML=""
    for(let i=0;i<ArrayVendedores.length;i++){
       // var SectionMain = document.getElementById("Caja_principal")            
        div.innerHTML+=`
        <div class='input-group'>
        <div class='input-group-prepend'>
            <span class='input-group-text' id=''>Nombre:</span>
        </div>
        <input class='form-control' type='text' value='${ArrayVendedores[i]}' disabled>
        <div class='input-group-prepend'>
            <span class='input-group-text' id="">Cantidad Ventas:</span>
        </div>
        <input class='form-control' type='text' value='${objectVendedores[ArrayVendedores[i]].Ventas}' disabled>
        <div class='input-group-prepend'>
            <span class='input-group-text' id=''>Valor ventas:</span>
        </div>
        <input class='form-control' type='text' value='${objectVendedores[ArrayVendedores[i]].ValorVentas}' disabled>
        </div>`;
    }
    document.querySelector("#Campos").appendChild(div);
}
function getEmployeeMonth(){
    //let iCont=0
    let indice
    let i=0
    var SectionMain
    let div = document.createElement("div");
    div.classList.add("gHistoric");
    document.getElementById("Campos").innerHTML=""
    indice=objectVendedores[ArrayVendedores[0]].ValorVentas
    for(x=1;x<ArrayVendedores.length;x++){
        if(objectVendedores[ArrayVendedores[x]].ValorVentas>indice){
            indice=objectVendedores[ArrayVendedores[x]].ValorVentas
            i=x
        }else if(objectVendedores[ArrayVendedores[x]].ValorVentas==indice){
            window.alert("La Cantidad de ventas fue la  misma: Felicitaciones!!!")            
        }
    }    
    //SectionMain = document.getElementById("Caja_principal")    
    document.getElementById("Campos").innerHTML=""
    div.innerHTML=`
    <div class='input-group'>
    <div class='input-group-prepend'>
        <span class='input-group-text' id=''>Nombre:</span>
    </div>
    <input class='form-control' type='text' value='${ArrayVendedores[i]}' disabled>
    <div class='input-group-prepend'>
        <span class='input-group-text' id="">Cantidad Ventas:</span>
    </div>
    <input class='form-control' type='text' value='${objectVendedores[ArrayVendedores[i]].Ventas}' disabled>
    <div class='input-group-prepend'>
        <span class='input-group-text' id=''>Valor ventas:</span>
    </div>
    <input class='form-control' type='text' value='${objectVendedores[ArrayVendedores[i]].ValorVentas}' disabled>
    </div>`;
    document.querySelector("#Campos").appendChild(div);   
}
