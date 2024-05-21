
// Menangkap elemen tombol Clear
const clearButton = document.querySelector(".clear");

// Menambahkan event listener pada tombol Clear
clearButton.addEventListener("click", function(event) {
    // Mengosongkan input file
    inputElement.value = "";
    // Menghapus gambar yang ditampilkan
    imageElement.src = "";
    // Menghapus pesan pada div input-cover
    const inputCover = imageContainer.querySelector(".input-cover");
    inputCover.innerHTML = `
        <img src="image.png" width="50" alt="icon">
        <p style="font-weight: bold;">Drag and Drop Image or Click Here</p>
        <p style="font-weight:200;">Upload Image From Device</p>
    `;
});

// Mendapatkan elemen input file
const inputElement = document.getElementById("image");

// Mendapatkan elemen yang akan menampilkan gambar
const showImageElement = document.getElementById("show-image");

// Mendengarkan peristiwa ketika file dipilih
inputElement.addEventListener("change", function(event) {
    // Mendapatkan file yang dipilih
    const file = event.target.files[0];

    // Membuat objek URL untuk file yang dipilih
    const imageUrl = URL.createObjectURL(file);

    // Menampilkan gambar
    showImageElement.innerHTML = `
        <img src="${imageUrl}" max-width="100%" height="150" alt="Uploaded Image">
    `;
});

