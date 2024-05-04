function updateDateTime() {
    var currentDate = new Date();
    console.log(currentDate);
    var greeting = "";
    var hours = currentDate.getHours();

    if (hours < 12) {
      greeting = "Halo, Selamat Pagi Delvin";
    } else if (hours < 18) {
      greeting = "Halo, Selamat Siang Delvin";
    } else {
      greeting = "Halo, Selamat Malam Delvin";
    }
    var salutationElement = document.getElementById("salutation");
salutationElement.innerText = greeting;

var dateTimeElement = document.getElementById("date-time");
var currentTimeElement = document.getElementById("current-time");
var currentDate = new Date();

// Format tanggal
var optionsDate = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
var formattedDate = currentDate.toLocaleDateString('en-US', optionsDate);

// Format waktu
var optionsTime = { hour: 'numeric', minute: 'numeric', second: 'numeric' };
var formattedTime = currentDate.toLocaleTimeString('en-US', optionsTime);

// Menetapkan teks tanggal dan waktu ke masing-masing elemen
dateTimeElement.innerText = formattedDate;
currentTimeElement.innerText = formattedTime;
  }

  setInterval(updateDateTime, 1000);