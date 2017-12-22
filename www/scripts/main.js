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
        "dom": "<'row'<'col-lg-4'l><'col-lg-4 text-center'B><'col-lg-4'f>>t<'row'<'col-lg-6'i><'col-lg-6'p>>",
        "lengthMenu": [[50, -1], [50, "All"]],
        "iDisplayLength": 50,
        "order": [[0, "desc"]],
        buttons: [
            { text: '24h', className: 'btn-sm btnDay', action: function () {
                $('.week, .month, .allTime').css('display', 'none');
                $('.day').css('display', 'block');
            }},
            { text: 'Week', className: 'btn-sm btnWeek', action: function () {
                $('.day, .month, .allTime').css('display', 'none');
                $('.week').css('display', 'block');
            }},
            { text: 'Month', className: 'btn-sm btnMonth', action: function () {
                $('.day, .week, .allTime').css('display', 'none');
                $('.month').css('display', 'block');
            }},
            { text: 'All', className: 'btn-sm btnAllTime', action: function () {
                $('.day, .month, .week').css('display', 'none');
                $('.allTime').css('display', 'block');

            }}
        ]
    });

});