// Adding event Listener to whole calculator
document.querySelector('.card-form').addEventListener('click',calculateMath)



function calculateMath(e){
    // Selecting only element with the class btn
    if(e.target.classList.contains('btn')){

        //  setting the input area to a variable
        const inputValue = document.querySelector('#input-value')
        
        // Selecting and setting only element with the class, value which are to appear in the input area 
       if(e.target.classList.contains('value')){   
       
          const value = e.target.textContent
          inputValue.value += value 
   
       }
       //  Selecting and setting only element with the class, equal which will evaluate our mathematical expression
       else if(e.target.classList.contains('equal')){ 

        // Input Validation
           if(inputValue.value === ''){
             alert('Please input an expression')  
           }
        
        // Solve math expression    
           else{

            // using the eval function to solve expression and assigning to variable
            const evaluatedValue = eval(inputValue.value)

            // the solved expression has to be returned as a string..... will help when backspacing
            inputValue.value = String(evaluatedValue)
           }       
       }else{
            // clear values    
              const string = inputValue.value;
              inputValue.value = string.slice(0,string.length-1)        
       }
    }
    e.preventDefault();
}



