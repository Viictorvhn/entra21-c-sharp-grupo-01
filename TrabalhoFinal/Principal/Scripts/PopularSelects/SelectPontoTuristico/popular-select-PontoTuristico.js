﻿$(function () {

    $(document).ready(function () {
        $('#select-modal-cadastro-endereco').select2({
            ajax: {
                url: '/Endereco/ObterTodosPorJSONToSelect2',
                dataType: 'json',
                
            }
        });
    });

    $(document).ready(function () {
        $('#select-modal-editar-pontoTuristico').select2({
            ajax: {
                url: '/Endereco/ObterTodosPorJSONToSelect2',
                dataType: 'json'
            }
        });
    });
});

