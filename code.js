        var x,y;
        function Currency(){
            y = document.getElementById("Converter").value;
            return y;
        }
        
        function Calculation(){
        y = Currency();
        
        x = document.getElementById("number1").value;
        
        if(x ==""){
            document.getElementById("number2").value ="";
        }
        else{
            switch(y){
                case "Dollar":
                    document.getElementById("number2").value = x * 68.86;
                break;
        
                case "Pound":
                    document.getElementById("number2").value = x * 85.26;
                break;
        
                case "Euro":
                    document.getElementById("number2").value = x * 76.76;
                break;
        
                case "Yen":
                    document.getElementById("number2").value = x * 0.63;
                break;

                case "SGD":
                    document.getElementById("number2").value = x * 50.28;
                break;

                case "INR":
                    document.getElementById("number2").value = x * x;
                break;
            }
        }
        }
        function INRtoSGD(){
            var a=document.getElementById("number3");
            var b=document.getElementById("number4");
            b.value=(a.value*0.020);
            return b;
        }
    