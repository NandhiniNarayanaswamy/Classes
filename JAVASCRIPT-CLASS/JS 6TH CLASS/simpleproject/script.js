document.getElementById("fetchImages").addEventListener("click", fetchImages);

function fetchImages() {
    const imageContainer = document.getElementById("imageContainer");
    imageContainer.innerHTML = ''; //it refresh exisying  and load again 10 image, if you don't use this it loads image without deleting the previous image
    fetch("https://api.unsplash.com/photos/random?count=10&client_id=ck1QzEwzjlBTQx91_pexPriWEM6bgWzUQLE1PejXamg")
        .then(response => response.json())
        .then(data => {
            data.forEach(photo => {
                const imgElement = document.createElement("img");
                imgElement.src = photo.urls.small;
                imageContainer.appendChild(imgElement)
            });
        })
}