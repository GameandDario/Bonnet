const sq1 = document.getElementById("square1");
const sq2 = document.getElementById("square2");
const sq3 = document.getElementById("square3");


                
                // Premier événement click
            // sq1.addEventListener('click', function() {
            //     document.getElementById("square1").style.color = 'red';
            //     console.log('RR');
            //     document.getElementById("square2").style.color = 'red';
            //});
              
            // // Deuxième événement click
            sq1.addEventListener('click', function() {
                etat = document.getElementById("square2").style.display;
                etatSq3 = document.getElementById("square3").style.color;
                if(etat == 'inline-block')
                    
                    {document.getElementById("square2").style.display = 'none';
                    document.getElementById('t3').style.visibility = '';}

                    else if(etatSq3 =='white') {
                        document.getElementById('t3').style.visibility = 'visible'
                    }
                else
                    document.getElementById("square2").style.display = 'inline-block';
                    
                
                  
            });

            sq2.addEventListener('click', function tom() {
                
                document.getElementById("square1").style.color = 'tomato';
                document.getElementById("square3").style.color = 'blue';

                etatSq1 = document.getElementById("square1").style.color;
                
                 
                if(etatSq1== 'tomato' ) {
                    document.getElementById('t1').style.visibility = 'visible';
                    document.getElementById('t2').style.visibility = '';
                    document.getElementById('t3').style.visibility = ''
                }
                 
                

                
                                 
            });

            sq3.addEventListener('click', function () 
                {
			// Quel est l'état actuel ?
                etat = document.getElementById("square3").style.color;
                if(etat == 'blue')
                    {document.getElementById("square3").style.color = "white";
                    document.getElementById('t1').style.visibility = '';}
                else    
                    {document.getElementById("square3").style.color = "red";
                    document.getElementById("square2").style.color = "green";
                    document.getElementById("square1").style.color = "";
                    document.getElementById("t2").style.visibility = "visible";
                    document.getElementById('t1').style.visibility = '';
                    document.getElementById('t3').style.visibility = ''
                }
                // else if(etat== 'red')
               
                //     document.getElementById("square3").style.color = "red";
                //     document.getElementById("square2").style.color = "";
                //     document.getElementById("square1").style.color = "";
                //     document.getElementById("t2").style.visibility = "hidden";
                //     document.getElementById('t1').style.visibility = 'hidden';
                //     document.getElementById('t3').style.visibility = 'visible';

                
}
                 
            
            
            );

