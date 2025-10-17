// DATA FILM (kamu bisa ubah sesuai keinginan)
const movies = [
  { title: "Aksi Panas", genre: "Action", img: "https://i.imgur.com/uQ8A2QP.jpeg" },
  { title: "Drama Cinta", genre: "Drama", img: "https://i.imgur.com/nYc3H5W.jpeg" },
  { title: "Komedi Lucu", genre: "Komedi", img: "https://i.imgur.com/edXzI9p.jpeg" },
  { title: "Film Horor", genre: "Horor", img: "https://i.imgur.com/1Mnjf1y.jpeg" },
  { title: "Aksi Hebat 2", genre: "Action", img: "https://i.imgur.com/r2nWW0Z.jpeg" },
  { title: "Drama Keluarga", genre: "Drama", img: "https://i.imgur.com/jQGLH09.jpeg" }
];

const container = document.getElementById("movies");
const searchInput = document.getElementById("search");
const genreButtons = document.querySelectorAll(".genre span");

// 🌓 Mode otomatis sesuai sistem
if (window.matchMedia && window.matchMedia('(prefers-color-scheme: light)').matches) {
  document.body.classList.add('light');
}

// 🔁 Ganti mode manual
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("light");
});

// 📽️ Tampilkan film
function renderMovies(list) {
  container.innerHTML = "";
  list.forEach(m => {
    const div = document.createElement("div");
    div.classList.add("movie");
    div.innerHTML = `
      <img src="${m.img}" alt="${m.title}">
      <p>${m.title}</p>
    `;
    container.appendChild(div);
  });
}

// 🧩 Filter genre
genreButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    document.querySelector(".genre .active")?.classList.remove("active");
    btn.classList.add("active");
    const genre = btn.dataset.genre;
    if (genre === "all") renderMovies(movies);
    else renderMovies(movies.filter(m => m.genre === genre));
  });
});

// 🔍 Pencarian film
searchInput.addEventListener("input", e => {
  const val = e.target.value.toLowerCase();
  const filtered = movies.filter(m => m.title.toLowerCase().includes(val));
  renderMovies(filtered);
});

// Awal tampil semua
renderMovies(movies);