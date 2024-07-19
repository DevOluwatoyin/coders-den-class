const fileInput = document.getElementById("upload");
const imgContainer = document.getElementById("images");

function readfile(uploadedFilesObject) {
  for (eachFile of uploadedFilesObject) {
    const fileReader = new FileReader();
    const figure = document.createElement("figure");
    const figCaption = document.createElement("figcaption");

    figCaption.innerText = eachFile.name;
    figure.appendChild(figCaption);

    fileReader.onload = () => {
      let img = document.createElement("img");
      img.setAttribute("src", fileReader.result);
      figure.insertBefore(img, figCaption);
    };

    imgContainer.appendChild(figure);
    fileReader.readAsDataURL(eachFile);
  }
}

function ShowImage() {
  const file = fileInput.files;
  readfile(file);
}
