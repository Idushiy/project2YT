/*button delete*/
/*Header*/
$(function () {
    $("#header").load("header.html");
});


$(document).ready(function () {
    /*Table*/
    $('.tableExample1').DataTable({
        "dom": 't',
        "iDisplayLength": 100,
        "order": [[ 0, "desc" ]]
    });

    $('.tableExample2').DataTable({
        "dom": "<'row'<'col-lg-6'l><'col-lg-6'f>>t<'row'<'col-lg-6'i><'col-lg-6'p>>",
        "lengthMenu": [[6, 25, 50, -1], [6, 25, 50, "All"]],
        "iDisplayLength": 6,
        "order": [[ 0, "desc" ]]

    });

    $('.tableExample3').DataTable({
        dom: "<'row'<'col-sm-4'l><'col-sm-4 text-center'B><'col-sm-4'f>>tp",
        "lengthMenu": [[10, 25, 50, -1], [10, 25, 50, "All"]],
        buttons: [
            {extend: 'copy', className: 'btn-sm'},
            {extend: 'csv', title: 'ExampleFile', className: 'btn-sm'},
            {extend: 'pdf', title: 'ExampleFile', className: 'btn-sm'},
            {extend: 'print', className: 'btn-sm'}
        ]
    });
});