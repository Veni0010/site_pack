document.addEventListener("DOMContentLoaded", function () {
    const modal = document.querySelector(".card_modal");
    const modalTitle = document.getElementById("modal_title");
    const modalText = document.getElementById("modal_text");
    const buttons = document.querySelectorAll(".card_btn");
    const closeBtn = document.querySelector(".close");
    const wrapp = document.querySelector(".modal_wrapper");

    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const title = button.getAttribute("data-title");
            const text = button.getAttribute("data-text");

            modalTitle.textContent = title;
            modalText.textContent = text;
            modal.classList.add("open");
            wrapp.classList.add("open");
        });
    });

    closeBtn.addEventListener("click", () => {
        modal.classList.remove("open");
        wrapp.classList.remove("open");
    });

    window.addEventListener("click", (e) => {
        if (e.target === modal) {
            modal.classList.remove("open");
            wrapp.classList.remove("open");
        }
    });
});
// document.addEventListener("DOMContentLoaded", function () {
//     document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//         anchor.addEventListener("click", function (e) {
//             e.preventDefault();

//             const targetId = this.getAttribute("href").substring(1);
//             const targetElement = document.getElementById(targetId);

//             if (targetElement) {
//                 window.scrollTo({
//                     top: targetElement.offsetTop - 50, // отступ сверху (можно изменить)
//                     behavior: "smooth"
//                 });
//             }
//         });
//     });
// });