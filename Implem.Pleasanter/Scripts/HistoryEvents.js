﻿$(document).on('click', '.grid-row.history', function () {
    var $control = $(this);
    var data = $p.getData($control);
    data.Ver = $control.attr('data-ver');
    data.Latest = $control.attr('data-latest');
    data.SwitchTargets = $('#SwitchTargets').val();
    $p.syncSend($control);
    $p.setCurrentIndex();
});