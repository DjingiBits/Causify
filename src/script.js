$(document).ready(function(){

    $('input[type=checkbox]').on("change", function(){
        var newclass = $(this).val(); //get the new css color
        $('#page-container').removeClass(); //removes all classes
      