//Iniciando a Logica  


const btnDisparo = document.querySelector('#btnAplicar'); 
const IniciarCADASTRO = document.getElementById('abaCadastro');
const BotaoEnviar = document.querySelector('#enviar'); 
const input = document.querySelector('#postar');
const btnExit = document.querySelector('#exit'); 





let Validador = {

    previnir(event) {
        let send = true; 
        
       
        
        event.preventDefault(); 
        let inputschild = input.querySelectorAll("input"); 
        Validador.ResetDefault(input); 

        for(let i = 0 ; i < inputschild.length; i++ ){

            let inputs = inputschild[i]; 
           
            let check = Validador.verificando(inputs); 
               
            if(check !== true){
                send = false; 
                Validador.showErro(inputs, check);     

            }

        }
    
        
      if(send){

         Validador.submit(); 


      }  
    },



    verificando(input){

        let verificador =  input.getAttribute('data-rules'); 

           
       

            if(verificador != null) {

               verificador = verificador.split('|'); 

                    
                for(l in verificador){

                    let rDetails = verificador[l].split('='); 

                    

                    switch(rDetails[0]) {

                        case 'required' : 

                            if(input.value == '') {

                                return 'Esse campo não é valido'

                            }

                        break 


                        case 'min' : 

                            if(input.value.length < rDetails[1]){

                                return 'Digite valor de forma correta' 


                            }

                        break 


                    }


                }

            }
            
            
            

           

           

             

         
        

        return true; 
    }, 

    

    showErro(input, erro) {

        input.style.border = `1px solid red`; 

        let el = document.createElement('div'); 

        el.className = 'Erro'; 

        el.innerHTML = erro; 

        input.parentElement.insertBefore(el, input.ElementSibling); 

    }, 

    ResetDefault(input) {

        let reset = input.querySelectorAll('.Erro'); 

        let checkOut = input.querySelectorAll('input'); 

       for(let k = 0; k < checkOut.length; k++){

            checkOut[k].style = ''; 

 
        } 

        for(let i = 0 ; i < reset.length; i++) {

            
            
            
            reset[i].remove() ;
           
           

        }

    }


}




function cadastrar() {

    IniciarCADASTRO.classList.remove('disabled'); 
    IniciarCADASTRO.classList.add('criarConta'); 

}
btnDisparo.addEventListener('click', cadastrar);
input.addEventListener('submit', Validador.previnir); 
btnExit.addEventListener('click', ()=> {

    IniciarCADASTRO.classList.remove('criarConta'); 
    IniciarCADASTRO.classList.add('disabled');         

})

