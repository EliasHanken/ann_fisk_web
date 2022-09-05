function displayImages(){
    for(var i = 1; i < 5; i++){
        document.querySelector(".gallery").innerHTML += `
            <div class=painting>
                <img src=jpg/${i}.jpg alt=img${i} width=300px>
            </div>
        `;
        console.log("test");
    }
}

window.onload = displayImages();