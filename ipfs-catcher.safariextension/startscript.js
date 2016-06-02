var curUrl = window.location.toString()
var regExp = /.*(Qm\w{44})/
var regExcl = /http:\/\/localhost.*/

var matches = regExp.exec(curUrl)

if (matches != null) {
    if (matches.length > 1 && !regExcl.test(curUrl)) {
        var newUrl = "http://localhost:8080/ipfs/"+matches[1]
        window.location = newUrl
    }
} 
