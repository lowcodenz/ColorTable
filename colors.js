// all the variables here

const shadeValue = ['900', '700', '500', '300', '100', '90', '70', '50', '30', '10'];
const color = ['primary', 'secondary','accent','success','warning','danger','clickable','active','info','inverse','default','text', 'header'];
const colorSingle = ['white', 'body', 'elements', 'elements-secondary', 'dark']
var tableStr = '<div class="pantone-wrap">';

//




color.forEach(generateColors);
function generateColors(color){
  tableStr = tableStr + '<div class="row">';
  //tableStr = tableStr + '<td>' + color + '</td>';

  // for each color add a table item
  shadeValue.forEach(generateShades);
  function generateShades(shade){
    if(shade == ''){
      var cssVariable = 'cl-' + color
    } else{
      var cssVariable = 'cl-' + color + '-'+ shade;
    }

    var computedStyle = getComputedStyle(document.documentElement).getPropertyValue('--' + cssVariable);
    // console.log(cssVariable);
  
    tableStr = tableStr + '<div class="pantone-item"><div class="pantone-color" style="background-color: var(--' + cssVariable + ')"> </div>' + '<span class="pantone-value">' + computedStyle + '</span>' + '<span class="pantone-text">' + cssVariable +'</span>' + '</div>';

  }

  tableStr = tableStr + '</div>';
}

// adding single colors
tableStr = tableStr + '<div class="row">';

// for each color add a table item
colorSingle.forEach(generateSingles);
function generateSingles(color){
  var cssVariable = 'cl-' + color;
  var computedStyle = getComputedStyle(document.documentElement).getPropertyValue('--' + cssVariable);
  tableStr = tableStr + '<div class="pantone-item"><div class="pantone-color" style="background-color: var(--' + cssVariable + ')"> </div>' + '<span class="pantone-value">' + computedStyle + '</span>' + '<span class="pantone-text">' + cssVariable +'</span>' + '</div>';

}




tableStr = tableStr + '</div>'; // closes pantone wrap

// var nav = document.getElementById("table");
// table.innerHTML = tableStr;

var targetElements = document.getElementsByClassName('js-pantones');
if (targetElements.length > 0) {
  var targetElement = targetElements[0];
  targetElement.innerHTML = tableStr;
}

