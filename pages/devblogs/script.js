document.addEventListener("DOMContentLoaded", () => {
    fetch("devblogs.json")
        .then(response => response.json())
        .then(data => renderBlogs(data))
        .catch(error => console.error("Ошибка при загрузке девблогов:", error));
});

function renderBlogs(blogList) {
    const container = document.getElementById("devblog-entries");

    blogList.forEach(blog => {
        const section = document.createElement("section");
        section.classList.add("blog-entry");

        section.innerHTML = `
            <h1>${blog.title}</h1>
            <div class="container">
                <p>${blog.content}</p>
                ${blog.image ? `<img src="${blog.image}" alt="Картинка блога" style="margin-top:20px;max-width:100%;border-radius:10px;">` : ''}
            </div>
        `;

        container.appendChild(section);
    });
}

const burger = document.getElementById('burger');
const sideMenu = document.getElementById('sideMenu');

burger.addEventListener('click', () => {
    sideMenu.classList.toggle('open');
    burger.classList.toggle('open'); 
});
