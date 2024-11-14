let url = "https://restcountries.com/v3.1/name/"
let btn = document.querySelector(".btn-dark")
let list = document.querySelector(".list")

async function getFacts(country) {
    try {
        let response = await fetch(url+country)
        let data = await response.json()
        return data[0]
    }
    catch(error){
        return {error : "country not found"};
    }
}

btn.addEventListener("click", async() => {
    let country = document.querySelector("input").value
    console.log(country)
    let info = await getFacts(country)
    console.log(info)
    if(!info || info.error){
        list.innerHTML="<h1>Please enter valid country name</h1>"
    }
    else{
        add(info)
    }
})


    function add(info) {
    let flags = document.createElement("img")
    let link = info.flags.png
    flags.setAttribute("src", link)
    list.appendChild(flags)

    let name = document.createElement("h3")
    name.innerText = 'Name : '+info.name.common
    list.appendChild(name)

    let capital = document.createElement("h3")
    capital.innerText = 'Capital : '+info.capital
    list.appendChild(capital)

    let currency = document.createElement("h3")
    let currencies = info.currencies 
    currency.innerText = 'Currency : '
    for (let i of Object.values(currencies)) {
           currency.innerText += `${i.name}, `
    }
    list.appendChild(currency) 

    let language = document.createElement("h3")
    let languages = info.languages
    language.innerText = 'Languages : '
    for (let lang of Object.values(languages)) {
        language.innerText += `${lang}, `
    }
      list.appendChild(language)  
}

