var curUrl = window.location.toString()
var regExp = /http.*(Qm\w{44})/
var matches = regExp.exec(curUrl)

var regExcl = /http:\/\/localhost.*/

if (matches != null) {
    if (matches.length > 1 && !regExcl.test(curUrl)) {
        var newUrl = "http://localhost:8080/ipfs/"+matches[1]
        window.location = newUrl
    }
} 
