$( document ).ready(function() {
  var publicSpreadsheetUrl = 'https://docs.google.com/spreadsheets/d/1vt_iXEGIg4zyI9h1hPHbUa92OOeK5vJ3BIQi093dXhI/pubhtml';

  function init() {
    Tabletop.init( { key: publicSpreadsheetUrl,
                     callback: showInfo,
                     simpleSheet: true } )
  }

  function showInfo(data, tabletop) {
    for(i = 0; i < data.length; i++){
    	$('#leaderboard > tbody:last-child').append(
    		'<tr style="color:'+ getColor(i) +'">'
             +'<td>'+data[i].Rank+'</td>'
             +'<td>'+data[i].Score+'</td>'
             +'<td>'+data[i].Name+'</td>'
             +'</tr>')
    }
  }

  window.addEventListener('DOMContentLoaded', init)
});

function getColor(step) {
  var r, g, b;
    var h = step / 5;
    var i = ~~(h * 6);
    var f = h * 6 - i;
    var q = 1 - f;
    switch(i % 6){
        case 0: r = 1; g = f; b = 0; break;
        case 1: r = q; g = 1; b = 0; break;
        case 2: r = 0; g = 1; b = f; break;
        case 3: r = 0; g = q; b = 1; break;
        case 4: r = f; g = 0; b = 1; break;
        case 5: r = 1; g = 0; b = q; break;
    }
    var c = "#" + ("00" + (~ ~(r * 255)).toString(16)).slice(-2) + ("00" + (~ ~(g * 255)).toString(16)).slice(-2) + ("00" + (~ ~(b * 255)).toString(16)).slice(-2);
    return (c);
};