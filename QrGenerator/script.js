const qrImage = document.getElementById("qrImage");
const inputBox = document.querySelector("input");
const btn = document.querySelector("button");
const imgBox = document.querySelector(".imgBox")

const URL = "https://api.qrserver.com/v1/create-qr-code/?size=150x150&data="

btn.addEventListener("click", () => {
    if(inputBox.value.length > 0){
        let qrText = inputBox.value;
        let link = URL + qrText;
        qrImage.src = link
        imgBox.classList.add("show-img")
    }
    else{
        inputBox.classList.add("error")
        setTimeout(() => {
            inputBox.classList.remove("error")
        }, 1000)
    }
})