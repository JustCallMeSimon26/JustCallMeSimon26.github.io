function main() {
    const Segments = parseInt(prompt("Enter Amount of Segments:"))
    if (Segments < 1 && Segments <= 20) {
        window.alert("[ERROR] Amount of Segments too low or too high!")
        window.location.reload()
    } else if (isNaN(Segments)) { 
        window.alert("[ERROR] Input is not a number!")
        window.location.reload()
    } else {
    const container = document.getElementById( 'container' )    
    for (let index = 0; index < Segments; index++) {
        var Segment = returnSVG(Segments)
        container.appendChild(Segment)
    }
    }
}

main()










//  Ok Here. me. out.... i KNOW THIS IS BAD but its the only way im able to do this alr? now then. 
//  You are allowed to look at the following Code

function returnSVG(Segments) {
var svgNS = "http://www.w3.org/2000/svg";
switch (Segments) {
    case 1:
        var sgmnt = document.createElementNS(svgNS, 'circle');
        sgmnt.setAttributeNS(null, 'cx', 300);
        sgmnt.setAttributeNS(null, 'cy', 300);
        sgmnt.setAttributeNS(null, 'r', 250);
        sgmnt.classList.add("circle")
        // sgmnt.setAttributeNS(null, 'style', 'fill: none; stroke: blue; stroke-width: 1px;' );
        return sgmnt
    case 2:
        
        return sgmnt
    case 3:
        sgmnt = jscreateelemtn
        return sgmnt
    case 4:
        sgmnt = jscreateelemtn
        return sgmnt
    case 5:
        sgmnt = jscreateelemtn
        return sgmnt
    case 6:
        sgmnt = jscreateelemtn
        return sgmnt
    case 7:
        sgmnt = jscreateelemtn
        return sgmnt
    case 8:
        sgmnt = jscreateelemtn
        return sgmnt
    case 9:
        sgmnt = jscreateelemtn
        return sgmnt
    case 10:
        sgmnt = jscreateelemtn
        return sgmnt
    case 11:
        sgmnt = jscreateelemtn
        return sgmnt
    case 12:
        sgmnt = jscreateelemtn
        return sgmnt
    case 13:
        sgmnt = jscreateelemtn
        return sgmnt
    case 14:
        sgmnt = jscreateelemtn
        return sgmnt
    case 15:
        sgmnt = jscreateelemtn
        return sgmnt
    case 16:
        sgmnt = jscreateelemtn
        return sgmnt
    case 17:
        sgmnt = jscreateelemtn
        return sgmnt
    case 18:
        sgmnt = jscreateelemtn
        return sgmnt
    case 19:
        sgmnt = jscreateelemtn
        return sgmnt
    case 20:
        sgmnt = jscreateelemtn
        return sgmnt
    }
}