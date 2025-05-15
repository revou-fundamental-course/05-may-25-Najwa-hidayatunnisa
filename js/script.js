// supaya gambar berganti setiap 3 detik

let slideIndex = 0;
showSlide();

function showSlide() {
    const slides = document.getElementsByClassName("slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = "block";
    setTimeout(showSlide, 3000)
}


// alert detail harga, ketika di klik deskripsi akan muncul

function showDetail(Nama, harga, deskripsi) {
    const alertText = document.getElementById("alertText");
    alertText.innerHTML = `<strong>${Nama}</strong><br></br>
    harga: ${harga} <br></br>
    deskripsi: ${deskripsi}`;

    document.getElementById("customAlert").style.display = "flex";
}



// form untuk membuat pesanan

function returnbuatPesananForm(event) {
    event.preventDefault(); // supaya tidak reload

    const Nama = document.getElementById("Nama").value.trim();

    const pilihan = document.getElementById("pilihan").value;

// validasi input bahwa user harus mengisi nama dan pilihan roti

        if (Nama === "" || pilihan === "") {
        alert("nama dan pilihan roti harus diisi");
        return false;
        }

const alertText = document.getElementById("alertText");
alertText.innerHTML = `pesanan atas nama : <strong>${Nama}</strong><br>
Roti : ${pilihan}, telah diproses,<br> Terima kasih!`;

document.getElementById("customAlert").style.display = "flex";



// mengosongkan input setelah submit

    document.getElementById("Nama").value = "";
    document.getElementById("pilihan").value = "";

    return true;

}

function tutupModal() {
    document.getElementById("customAlert").style.display = "none";
}