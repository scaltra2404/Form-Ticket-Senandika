function sentToWhatsapp(){
    let number = "+6281254999940";
    let jenis = "Reguler";
    let bayar = "Tunai";

    let name = document.getElementById('name').value;
    let jumlah = document.getElementById('jumlah').value;

    var url = "https://wa.me/" + number + "?text="
    + "Saya%20ingin%20membeli%20tiket%20Senandika%20berikut:%0a"
    + "Nama : " +name+ "%0a"
    + "Jenis :" +jenis+ "%0a"
    + "Jumlah :" +jumlah+ "%0a"
    + "Pembayaran : " +bayar+ "%0a%0a";

    window.open(url, '_blank').focus();
}

function sentToTransfer(){
    let number = "+6289630497889";
    let jenis = "Reguler";
    let bayar = "Transfer";

    let name = document.getElementById('name').value;
    let jumlah = document.getElementById('jumlah').value;

    var url = "https://wa.me/" + number + "?text="
    + "Saya%20ingin%20membeli%20tiket%20Senandika%20berikut:%0a"
    + "Nama : " +name+ "%0a"
    + "Jenis :" +jenis+ "%0a"
    + "Jumlah :" +jumlah+ "%0a"
    + "Pembayaran : " +bayar+ "%0a%0a"
    + "berikut%20ini%20bukti%20Transfernya";

    window.open(url, '_blank').focus();
}

function sentToTransferVip(){
    let number = "+6289630497889";
    let jenis = "VIP";

    let name = document.getElementById('name').value;
    let jumlah = document.getElementById('jumlah').value;

    var url = "https://wa.me/" + number + "?text="
    + "Saya%20ingin%20membeli%20tiket%20Senandika%20berikut:%0a"
    + "Nama : " +name+ "%0a"
    + "Jenis :" +jenis+ "%0a"
    + "Jumlah :" +jumlah+ "%0a%0a"
    + "Saya%20ingin%20melihat%20Seat%20Tempat%20duduk%20Senandika%20terlebih%20dahulu";

    window.open(url, '_blank').focus();
}

function sentToVip(){
    let number = "+6281254999940";
    let jenis = "VIP";

    let name = document.getElementById('name').value;
    let seat = document.getElementById('seat').value;
    let reserved = document.getElementById('reguler-reserved').value;

    var url = "https://wa.me/" + number + "?text="
    + "Saya%20ingin%20membeli%20tiket%20Senandika%20berikut:%0a"
    + "Nama : " +name+ "%0a"
    + "Jenis :" +jenis+ "%0a"
    + "Jenis :" +seat+ "%0a"
    + "Jenis :" +reserved+ "%0a%0a";

    window.open(url, '_blank').focus();
}

function calculateTotal() {
    let jumlah = document.getElementById('jumlah').value;
    let total = document.getElementById('total').value;
    let harga = 20;

    total = document.getElementById('total').value = "Rp. "+jumlah*harga + ".000";

    console.log(total);
}

function copyTheText() {
    // Get the text field
    var copyText = document.getElementById("norek");
  
    // Select the text field
    copyText.select();
    copyText.setSelectionRange(0, 99999); // For mobile devices
  
     // Copy the text inside the text field
    navigator.clipboard.writeText(copyText.value);
  
    // Alert the copied text
    alert("Copied the text: " + copyText.value);
  }

function showUpNorek(){
    let norek = document.getElementById('norek-box');
    norek.classList.remove("undisplayed");
}