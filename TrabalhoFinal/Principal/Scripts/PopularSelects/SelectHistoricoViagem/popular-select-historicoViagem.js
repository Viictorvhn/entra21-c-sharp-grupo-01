﻿"use strict";
$(document).ready(function () {
    $('#select-cadastro-historico-viagem-idPacote').select2({
        ajax: {
            url: '/Pacote/ObterTodosPorJSONToSelect2',
            dataType: 'json'
        }
    });
});