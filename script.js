// Daftar siswa
const students = [
    "Dinda",
    "Naufal",
    "Fadli",
    "Algy",
    "Najwan",
    "Revan",
    "patih",
    "Azzam",
    "Daffi",
    "Indra"
    "Risa",
];

// Menampilkan daftar siswa
const studentList = document.getElementById("student-list");
students.forEach(student => {
    const li = document.createElement("li");
    li.textContent = student;
    studentList.appendChild(li);
});

// Form kontak
const form = document.getElementById("contact-form");
const response = document.getElementById("form-response");

form.addEventListener("submit", function(e){
    e.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Simulasi pengiriman
    response.textContent = `Terima kasih, ${name}! Pesan Anda telah diterima.`;
    response.style.color = "green";

    // Reset form
    form.reset();
});
