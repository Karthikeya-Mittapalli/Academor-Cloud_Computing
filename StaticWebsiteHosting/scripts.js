document.addEventListener('DOMContentLoaded', () => {
    const table = employeeTable.querySelector('tbody');
    const rows = table.querySelectorAll('tr');
    const rowsPerPage = 10;
    let currentPage = 1;

    function paginate() {
        rows.forEach((row, index) => {
            row.style.display = 'none';
            if (index >= (currentPage - 1) * rowsPerPage && index < currentPage * rowsPerPage) {
                row.style.display = '';
                row.querySelector('td').innerText = index + 1;
            }
        });
    }

    function createPaginationControls() {
        const container = document.createElement('div');
        container.className = 'pagination-controls';
        const prevButton = document.createElement('button');
        prevButton.innerText = 'Previous';
        prevButton.addEventListener('click', () => {
            if (currentPage > 1) {
                currentPage--;
                paginate();
                updatePaginationControls();
            }
        });

        const nextButton = document.createElement('button');
        nextButton.innerText = 'Next';
        nextButton.addEventListener('click', () => {
            if (currentPage < Math.ceil(rows.length / rowsPerPage)) {
                currentPage++;
                paginate();
                updatePaginationControls();
            }
        });

        function updatePaginationControls(){
            container.innerHTML='';
            if(currentPage>1)container.appendChild(prevButton);
            if(currentPage<Math.ceil(rows.length/rowsPerPage))container.appendChild(nextButton);
        }
        updatePaginationControls();
        document.body.appendChild(container);
    }

    paginate();
    createPaginationControls();
});
