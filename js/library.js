﻿$(function () {
    
/*horizontal menu*/
     $('.horizontal-menu').each(function(){
            
            var $this = $(this);
            var $chalkboard_items = $('<div class="chalkboard_items board"></div>');
            var $chalkboard_content = $('<div class="chalkboard_content elements"></div>');
            
            $this.find('>dl').each(function() {
                var $dl = $(this);
                
                var $dd= $('<div class="element rule_1 tab_content"></div>');
                $dd.append($dl.find('>dd').children());
                var $dt = $('<div class="chalkboard_item button">' + $dl.find('dt').html() + '</div>').on('click', function(){
                     
                    var $item_dt = $(this);

                    $chalkboard_content.find('.element').hide();
                    
                    $chalkboard_items.find('.current').removeClass('current');
                    $item_dt.addClass('current');
                    $dd.show();
                });
                
                $chalkboard_items.append($dt);
                
                $chalkboard_content.append($dd);
            });
            
            $chalkboard_content.find('.element').hide();
            $chalkboard_items.find(':first-child').addClass('current');
            $chalkboard_items.find(':last-child').addClass('last-item');
            $chalkboard_content.find('.element:first-child').show();
            $this.empty();
            
            $this.append($chalkboard_items);
            $this.append('<div class="clear"></div>');
            $this.append($chalkboard_content);
            $this.append('<div class="clear"></div>');
            
        });

});



document.write('<style>div.cp_oculta{display: none;</style>}');  
function MostrarOcultar(capa)  
{  
    if (document.getElementById)  
    {  
        var aux = document.getElementById(capa).style;  
        aux.display = aux.display? "":"block";  
    }  
} 

// jQuery
/*$(document).ready(function(){ 
   $('#alternar-informacion').on('click',function(){
      $('#texto').toggle();
   });
});*/

