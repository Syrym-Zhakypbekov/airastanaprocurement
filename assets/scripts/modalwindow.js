document.addEventListener('DOMContentLoaded', (event) => {
    const modalwindow = document.getElementById("modalwindow");
    const modalclose = document.getElementById("modalclose");
    const openMonalButton = document.getElementById("openMonalButton");
    const tableRows = document.querySelectorAll('.procurements-table-row');

    openMonalButton.onclick = () => {
        modalwindow.style.display = "flex";
        document.body.style.background = 'rgba(16, 18, 25, 0.60)'
    }

    tableRows.forEach(row => {
        row.onclick = () => {
            modalwindow.style.display = "flex";
            document.body.style.background = 'rgba(16, 18, 25, 0.60)'
        }
    });

    modalclose.onclick = () => {
        modalwindow.style.display = "none";
        document.body.style.background = 'var(--shades-white, #FFF)'
    }
});
