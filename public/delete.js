const link = document.querySelector("[data-doc]");

const id = link.getAttribute("data-doc");
console.log(id);

link.addEventListener("click", () => {
  fetch(`/blogs/${id}`, {
    method: "DELETE",
  })
    .then((res) => res.json())
    .then((response) => (window.location.href = response.redirect))
    .catch((err) => console.log(err));
});
