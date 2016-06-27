 $(document).ready(function(){
         //rozwijanie i ukrywanie wszystkich szczegółów listy
             $('.flip').click(function(){
                $('.panel').slideDown("fast");
                $('.list-row').slideUp("fast");
                $('.thead').slideUp("fast");
                $('.site-name').html("Lista szczegółowa");
                
                if($('.flip').attr('value')=='Ukryj szczegóły') {
                	$('.flip').attr('value', 'Pokaż wszystkie szczegóły');
              		$('.panel').slideUp("fast");
                $('.list-row').slideDown("fast");
                $('.thead').slideDown("fast");
                $('.site-name').html("Lista");
                }else{
                	$('.flip').attr('value', 'Ukryj szczegóły');
                };
                		
             });
             //rozwijanie pojedynczego wiersza
             //wers-1
             $("#flip-one").click(function(){
                $("#flip-one").next().slideDown("fast");
                $("#flip-one").slideUp("fast");
               });  
             $("#flip-one").next().click(function(){ 
            	 $("#flip-one").slideDown("fast");
            	 $("#flip-one").next().slideUp("fast");
               });  
               //wers-2
                $("#flip-two").click(function(){
                $("#flip-two").next().slideDown("fast");
                $("#flip-two").slideUp("fast");
               });  
             $("#flip-two").next().click(function(){ 
            	 $("#flip-two").slideDown("fast");
            	 $("#flip-two").next().slideUp("fast");
               });
                //wers-3
                $("#flip-three").click(function(){
                $("#flip-three").next().slideDown("fast");
                $("#flip-three").slideUp("fast");
               });  
             $("#flip-three").next().click(function(){ 
            	 $("#flip-three").slideDown("fast");
            	 $("#flip-three").next().slideUp("fast");
               });
               
              //hover na elemencie listy
               $('tbody>tr').hover(function() {
         	$(this).toggleClass('hover');
         });
         });