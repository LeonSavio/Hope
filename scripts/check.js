document.addEventListener("DOMContentLoaded", () => {

    const images = document.querySelectorAll(".vessel");

    images.forEach(img => {
        img.addEventListener("click", () => {

            const Page = window.location.search;  // ex: "?elliesshard"

            if (Page === "?elliesshard") {
                window.location.href = "a";   // coloque destino real
                return;
            }

            if (Page === "?outerakamado") {
                alert("a");
                return;
            }

            console.log("Query atual:", Page);
        });
    });

});