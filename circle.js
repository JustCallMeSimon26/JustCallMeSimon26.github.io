function main() {
    const Segments = parseInt(prompt("Enter Amount of Segments:"))
    if (Segments < 4 || Segments > 15) {
        window.alert("[ERROR] Amount of Segments too low or too high!")
        window.location.reload()
    } else if (isNaN(Segments)) { 
        window.alert("[ERROR] Input is not a number!")
        window.location.reload()
    } else {
    const list = document.getElementsByClassName('list')    
    for (let index = 0; index < Segments; index++) {
        var newDiv = document.createElement('div')
        newDiv.className = "list-item"
        list[0].appendChild(newDiv)
    }
    }   
    }   

main()