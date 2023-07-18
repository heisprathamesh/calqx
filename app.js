var myinputfield = document.querySelector("#n1");


//for C 
var myC = document.querySelector("#btn1").addEventListener("click", ()=>{
    myinputfield.value="";
})

//for1
    var My1 = document.querySelector("#btn5");
    My1.addEventListener("click", ()=>{
        myinputfield.value += 1;
    })

//for2
    var My2= document.querySelector("#btn6");
    My2.addEventListener("click", ()=>{
        myinputfield.value += 2;
    })
    
//for3
    var My3= document.querySelector("#btn7");
    My3.addEventListener("click", ()=>{
       myinputfield.value +=3;
    })

//for4
    var My4= document.querySelector("#btn9");
    My4.addEventListener("click", ()=>{
        myinputfield.value += 4;
    })

    //for5
    var My5= document.querySelector("#btn10");
    My5.addEventListener("click", ()=>{
       myinputfield.value +=5;
    })

    //for6
    var My6= document.querySelector("#btn11");
    My6.addEventListener("click", ()=>{
        myinputfield.value+=6;
    })

    //for7
    var My7= document.querySelector("#btn13");
    My7.addEventListener("click", ()=>{
       myinputfield.value +=  7;
    })

    //for8
    var My8= document.querySelector("#btn14");
    My8.addEventListener("click", ()=>{
        myinputfield.value  +=8;
    })

    //for9
    var My9= document.querySelector("#btn15");
    My9.addEventListener("click", ()=>{
       myinputfield.value +=  9;
    })

    //for0
    var My0= document.querySelector("#btn17");
    My0.addEventListener("click", ()=>{
       myinputfield.value += 0;
    })

    // for 19
    var my19= document.querySelector("#btn19");
    my19.addEventListener("click", ()=>{
       myinputfield.value+=".";
    })

    //for the operators 

    //for/
    var Mydivision= document.querySelector("#btn4");
    Mydivision.addEventListener("click", ()=>{
       myinputfield.value +="/";
    })

      //forX
      var Mymulti= document.querySelector("#btn8");
      Mymulti.addEventListener("click", ()=>{
         myinputfield.value += "*";
      })
        //for+
    var MyADD= document.querySelector("#btn12");
    MyADD.addEventListener("click", ()=>{
        myinputfield.value += "+";
    })

      //for-
      var MyMINUS= document.querySelector("#btn16");
      MyMINUS.addEventListener("click", ()=>{
         myinputfield.value +="-";
      })


      //for =

      var Myequal= document.querySelector("#btn18");
      Myequal.addEventListener("click", ()=>{
       myinputfield.value = eval(myinputfield.value);
      })

         //for X

         var Myclear= document.querySelector("#btn3");
         Myclear.addEventListener("click", ()=>{
            myinputfield.value = myinputfield.value.substring(0,myinputfield.value.length -1);
         })

            //for%

      var Myclear= document.querySelector("#btn2");
      Myclear.addEventListener("click", ()=>{
        myinputfield.value +="%";      
      })



      var more1 = document.getElementById("morelink1");
      more1.addEventListener("click",()=>{
        document.getElementById("form1").style.display="flex";
      })




      //header scripting
      var gamb = document.getElementById("hmb").addEventListener("click", function doit(){

        let nav = document.getElementById("navt");
        if(nav.style.display==="none"){
            nav.style.display="flex";
        }
        else{
            nav.style.display="none";
        }
    })

    //script for bmi

    document.querySelector("#btnbmi").addEventListener("click", ()=>{
        var weight = document.form1.t1.value;
        var Height =document.form1.t2.value;
        Height= Height/100;
        var res = weight/(Height*Height);
        document.getElementById("result").style.display="block";
        document.getElementById("bm").innerHTML=(`Your BMI Is : ${res.toFixed(2)} 📈`);
    }
     );

     document.body.onscroll=()=>{
        document.getElementById("header").style.backgroundColor="transparent";
     }