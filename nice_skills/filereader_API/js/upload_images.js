const uploader = document.getElementById('uploader'),
      imagesList = document.querySelector('.images'),
      progressLoader = document.getElementById('progress'),
      images = JSON.parse(localStorage.getItem('images')) || [];

// request.upload.addEventListener('progress', function(e) {
//     var percent_complete = (e.loaded / e.total)*100;
//     console.log(percent_complete);
// });

function uploadImage() {
    let files = this.files, image, i, fileLength = files.length;
    if (FileReader) {
        for(i = 0; i < fileLength; i += 1) {
            let fileReader = new FileReader(), file = files[i];
            fileReader.addEventListener('load', function (event) {
                image = {};
                image['name'] = file.name;
                image['size'] = file.size;
                image['url'] = event.target.result;
                images.push(image);
                displayImages(images, imagesList);
                localStorage.setItem('images', JSON.stringify(images));
            });
            fileReader.readAsDataURL(file);
            fileReader.addEventListener('progress', function(data) {
                if (data.lengthComputable) {
                    var progress = parseInt( ((data.loaded / data.total) * 100), 10 );
                    progressLoader.innerHTML = progress + ' % Loaded';
                }
            });
        }
    }
}

displayImages(images, imagesList);
uploader.addEventListener('change', uploadImage, false);
// imagesList.addEventListener('click', removeImage, false);