﻿$(document).ready(function () {
    $('#select-cadastro-pacote-ponto-turistico-pacote').select2({
        ajax: {
            url: '/Pacote/ObterTodosPorJSONToSelect2',
            dataType: 'json'
        }
    }).on('change', function () {
        $('#form-modal-cadastro-pacote-ponto-turistico').valid();
            $('select-cadastro-pacote-ponto-turistico-ponto-turistico').select2('open');
        });

    $('#select-cadastro-pacote-ponto-turistico-ponto-turistico').select2({
        ajax: {
            url: '/PontoTuristico/ObterTodosPorJSONSelect2',
            dataType: 'json'
        }
    }).on('change', function () {
        $('#form-modal-cadastro-pacote-ponto-turistico').valid();
    });
});
$(document).ready(function () {
    $('#select-editar-pacote-ponto-turistico-pacote').select2({
        ajax: {
            url: '/Pacote/ObterTodosPorJSONToSelect2',
            dataType: 'json'
        }
    }).on('change', function () {
        $('#form-modal-editar-pacote-ponto-turistico').valid();
        $('#select-editar-pacote-ponto-turisto-ponto-turistico').select2('open');
    });

    $('#select-editar-pacote-ponto-turisto-ponto-turistico').select2({
        ajax: {
            url: '/PontoTuristico/ObterTodosPorJSONSelect2',
            dataType: 'json'
        }
    }).on('change', function () {
        $('#form-modal-editar-pacote-ponto-turistico').valid();
    });
});

