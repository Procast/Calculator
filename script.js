var buttons=document.getElementsByClassName("wide");
var display=document.getElementById("inner-div");
var operand1=0;
var operand2=null;
var operator=null;
for (var i=0;i<buttons.length;i++){
    buttons[i].addEventListener("click",function(){
                // display.innerText="";
                var value=this.getAttribute("data-value");
                if (value== '+'){
                    operator='+';
                    operand1=parseFloat(display.textContent);
                    display.innerText="";
                }
                else if(value=='-'){
                    operator='-';
                    operand1=parseFloat(display.textContent);
                    display.innerText="";
                }
                else if(value=='*'){
                    operator='*';
                    operand1=parseFloat(display.textContent);
                    display.innerText="";
                }

                else if(value=='/'){
                    operator='/';
                    operand1=parseFloat(display.textContent);
                    display.innerText="";
                }
                else if(value=='+/-'){
                    // operator='/';
                    // operand1=parseFloat(display.textContent);
                    display.innerText=-parseFloat(display.textContent);
                    // display.innerText="";
                }

                else if(value=='%'){
                    operand2=parseFloat(display.textContent)/100;
                    // operand2=parseFloat(operand2)/100;
                    // console.log(operand2);
                    display.innerText=operand2;
                }

                
                else if(value=='ac'){
                    
                    display.innerText="";
                }

                else if(value=="="){
                    if (operator=='+'){
                        operand2=parseFloat(display.textContent);
                        display.innerText="";
                        display.innerText=eval(operand1+operand2);
                    }
                    else if(operator=='-'){
                        operand2=parseFloat(display.textContent);
                        display.innerText="";
                        display.innerText=eval(operand1-operand2);
                    }
                    else if(operator=='*'){
                        operand2=parseFloat(display.textContent);
                        display.innerText="";
                        display.innerText=eval(operand1*operand2);
                    }
                    else if(operator=='/'){
                        operand2=parseFloat(display.textContent);
                        display.innerText="";
                        display.innerText=eval(operand1/operand2);
                    }
                    
                    
                    
                }else{
                  display.innerText+=value;
                }


    });
}