console.log('Scripts linked')
var S = "https://cors-anywhere.herokuapp.com/https://www.google.com/maps/embed?pb=!1m28!1m12!1m3!1d101573.79149216817!2d-77.4699643487345!3d37.2908442394295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m13!3e6!4m5!1s0x89b1a49a20af6a6f%3A0xc365091b0b506c76!2s"
var E = "!3m2!1d37.2279279!2d-77.40192669999999!4m5!1s0x89b1089026aab145%3A0x211c15d09fb6c7f4!2sBermuda%20Triangle%20Rd%2C%20Bermuda%2C%20VA%2023836!3m2!1d37.3550386!2d-77.3916488!5e0!3m2!1sen!2sus!4v1581289661262!5m2!1sen!2sus"
function updateDirections() {
    //console.log(document.getElementById('search').value)
    document.getElementById('startAddressSearch').href = 
        `https://maps.google.com/maps/dir/${document.getElementById("search").value}/Bermuda+Triangle+Rd,+Bermuda,+VA+23836`
}

    
function u2() {
// tried to get this iframe to reload... failed
    console.log(document.getElementById('search').value)
    document.getElementById('map2').attributes.src = S + document.getElementById("search").value + E;
    //document.getElementById('map2').location=(window)
    //document.getElementById('map2').contentDocument.location.reload(true);
    //document.getElementById('map2').this.window.location.reload()
    //console.log(document.getElementById('dirs').attributes.src)
    //document.getElementById('map2').attributes.src = S + document.getElementById("search").value + E;
    //console.log(document.getElementById('map2').attributes.src)
}


