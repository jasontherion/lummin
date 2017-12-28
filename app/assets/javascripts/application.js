// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require twitter/bootstrap
//= require turbolinks
//= require_tree .


$(document).on('ready page:load', function() {

$(document).ready(function(){

  graficarLibros();

 });


  function graficarLibros() {
      var divContenedor = document.getElementById("libros_grafica");

      if (divContenedor != null) {
        var datos = ['NO APROBÓ', 27, '#008cc9',27]
        console.log('grafica-nacional' + datos);
        graficarEstadisticas(datos, divContenedor, 9000;

        var texto = "Del total de libros podemos ver la viriacion que hay por categoria y formato";

        texto = texto.replace('@porcentaje', datos[2][3]);

        if (document.getElementById('interpretacionNAL') != null) {
          document.getElementById('interpretacionNAL').innerHTML = texto;
        }


      }

  }


    function graficarEstadisticas(myJsArray, divContenedor, maxEjeY) { 
        
        //google.charts.load("current", {packages:['corechart']});
        
        myJsArray[0][0] = 'Aprobados';
        myJsArray[0][1] = 'Porcentaje de docentes'; //Icfes:Se cambia de numero a porcentaje porque la unidad de medida es pocentual.
        myJsArray[0][2] = { role: 'style' };
        myJsArray[0][3] = { role: 'annotation' };
        
        function drawChart() {
         console.log(myJsArray);
/*
        myJsArray =[
         ['Aprobados', 'Número de docentes', { role: 'style' },{ role: 'annotation' }],
         ['SI APROBÓ', 73, '#f2c10b',73],            // RGB value
         ['NO APROBÓ', 27, '#008cc9',27],            // English color name
        
         ]
  */
         console.log('todos'+myJsArray);
          var data = google.visualization.arrayToDataTable(myJsArray);

          var view = new google.visualization.DataView(data);
          view.setColumns([0, 1,
                           { calc: "stringify",
                             sourceColumn: 3,
                             type: "string",
                             role: "annotation" },
                           2]);

          var options = {
            title: "",
            isStacked: true,
            titleTextStyle: {color: '#008cc9', fontName: 'Helvetica', fontSize: '16', fontWidth: 'normal', 'padding': '25px'},
            width: 600,
            height: 400,
            min: 0, 
            max: 100,
            bar: {groupWidth: "95%"},
            legend: { position: "none" },
            annotations: {
              alwaysOutside: true,
              highContrast: true,
              textStyle: {
                fontName: 'Helvetica',
                fontSize: 40,
                bold: true,
                italic: false,
                // The color of the text.
                color: '#FFFFFF',
                // The color of the text outline.
                auraColor: '#FFFFFF',
                // The transparency of the text.
                opacity: 1                
              }
            }

          };
          
          var chart = new google.visualization.ColumnChart(divContenedor);
           
           

          google.visualization.events.addListener(chart, 'ready', function () {

           });  
          chart.draw(view, options);


          
      }
      google.charts.setOnLoadCallback(drawChart);

    }

   });