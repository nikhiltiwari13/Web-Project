const accessKey = "NK5wcOKa0BuAjd4OTrTQKCyWoPNW-Ym11BD9whkKXaY";

const searchBox = document.getElementById("search-box");
const searchBtn = document.getElementById("search-btn");
const imgOutput = document.getElementById("img-output");
const showBtn = document.getElementById("show-more-btn");

let page = 1

async function getImage(){
    try{
        let keyword = searchBox.value
        let URL = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;
    
        let response = await fetch(URL);
        let data = await response.json();
        let results = data.results

        if(results.length > 0){
            if(page === 1){
                imgOutput.innerHTML = ""
            }
        
            results.map((result) => {
                
                let image = document.createElement("img")
                image.src = result.urls.small
                let imageLink = document.createElement("a")
                imageLink.href = result.links.html
                imageLink.target = "_blank"
                imageLink.appendChild(image)
                imgOutput.appendChild(imageLink)
            })
            showBtn.style.display = "block"            
        }
        else{
            imgOutput.innerHTML = ""
            showBtn.style.display = "none"
            alert("No image present")
        }
    }
    catch(err){
        alert("Please enter valid text")
    }
}

searchBtn.addEventListener("click", (e) => {
    e.preventDefault()
    page=1
    getImage()
})

showBtn.addEventListener("click", () => {
    page++;
    getImage()
})