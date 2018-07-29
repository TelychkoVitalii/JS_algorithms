function displayImages(images = [], imagesList) {
    imagesList.innerHTML = images.map((image, i) => {
        return `
            <li>
                <figure>
                   <img src=${image.url} alt="Image ${i + 1}">
                   <figcaption>
                        <p>${image.name}</p>
                        <p>${(image.size / 1000).toFixed(1)} kB</p>
                   </figcaption>
                   <button id="removeButton" data-index=${i}>Remove</button>
                </figure>
            </li>
        `
    }).join('');
}