const images = ["0_incomplete.png", "1_motown.jfif", "2_돈번순간.jfif"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");
bgImage.src = `img/${chosenImage}`;
bgImage.classList.add("bgImage");

export default bgImage;
