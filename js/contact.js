//mailto:ceva@gmail.com?subject=subiect&body=mesaj

const name = document.getElementById("name")
const subject = document.getElementById("subject")
const mesage = document.getElementById("mesage")

const form = document.getElementsByTagName("form")[0]

form.addEventListener("submit", sendMsg);
 
const emailLink = 'mailto:hanitatripon@gmail.com';

function sendMsg(event) {
    event.preventDefault();//previne functionalitatea default
    const url = emailLink + '?subject=' + subject.value + '&body=' + "New message from " + name.value + ' ' + mesage.value

    // console.log(url)
    window.location.href = url;

    subject.value = '';
    name.value = '';
    mesage.value = '';
}
