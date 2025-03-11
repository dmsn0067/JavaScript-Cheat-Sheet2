// Magnification on/off
const magnify_toggle_button = document.getElementById('magnify');
const table_row = document.querySelectorAll('tr');

table_row.forEach(table_row => {
    table_row.classList.add('magnifyTr');
});

magnify_toggle_button.addEventListener('change', ()=> {
    if (magnify_toggle_button.checked) {
        table_row.forEach(table_row => {
            table_row.classList.add('magnifyTr');
        });
    }
    else
    {
        table_row.forEach(table_row => {
            table_row.classList.remove('magnifyTr');
        });    
    }
});


