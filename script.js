// var fname = document.getElementsByName('array[]').values;
var username = document.forms['myform']['username']
var username1 = document.forms['myform']['username1']
var username2 = document.forms['myform']['username2']
var letter = /^[a-zA-Z]*$/;

function validation() {
    if (!username.value.match(letter)) {
        alert("check details");
        return false;
    }else
    if (!username1.value.match(letter)) {
        alert("check details");
        return false;
    }else
    if (!username2.value.match(letter)) {
        alert("check details");
        return false;
    }
    return true;
}