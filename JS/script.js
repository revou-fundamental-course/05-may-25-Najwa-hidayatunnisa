// alert detail harga, ketika di klik deskripsi akan muncul

function showDetail(Nama, harga, deskripsi) {
    const alertText = document.getElementById("alertText");
    alertText.innerHTML = `<strong>${Nama}</strong><br></br>
    harga: ${harga} <br></br>
    deskripsi: ${deskripsi}
    `;

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
Roti : ${pilihan}<br>
Terima kasih!`;

document.getElementById("customAlert").style.display = "flex";



// mengosongkan input setelah submit

    document.getElementById("Nama").value = "";
    document.getElementById("pilihan").value = "";

    return true;

}

function tutupModal() {
    document.getElementById("customAlert").style.display = "none";
}