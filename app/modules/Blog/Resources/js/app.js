import $ from 'jquery';
import select2 from 'select2';
import 'select2/dist/css/select2.min.css';
$(document).ready(function () {
    $('[data-widget="treeview"]').each(function () {
        $(this).Treeview('init');
    });
});
select2();

$(document).ready(function() {
    console.log('jQuery et Select2 sont chargés');

    $('#tags').select2({
        placeholder: "Choisissez des options",
        allowClear: true
    });
});
