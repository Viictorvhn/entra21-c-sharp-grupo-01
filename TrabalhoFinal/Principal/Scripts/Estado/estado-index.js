﻿$(function () {
    //Preenche DataTable
    $('#table-estados').DataTable({
        ajax: '/Estado/ObterTodosPorJSON',
        order: [[1, "asc"]],
        columns: [
            {
                data: 'Id',
                bSortable: false,
                width: "10%"
            },
            {
                data: 'Nome',
                bSortable: true,
                width: "70%"
            },
            {
                data: null,
                bSortable: false,
                width: "20%",
                render: function (data, type, row) {
                    return "<a style='font-size: 24px;' class='btn fa fa-edit botao-editar-estado' data-id='" + row.Id + "'></a>" +
                        "<a style='font-size: 24px;' class='btn fa fa-trash ml-1 botao-excluir-estado' data-id='" + row.Id + "' data-nome='" + row.Nome + "'></a>";
                }
            }
        ]
    });

    //Abre modal de cadastro
    $('#botao-modal-cadastrar-estado').on('click', function () {
        limparCampos();
        $('#estado-modal-cadastro').modal('show');
    });

    //Validacao modal cadastro
    $('#formulario-estado').validate({


        errorClass: "form-control-danger",
        validClass: "form-control-success",
        rules: {
            'estado-Nome': {
                required: true,
                rangelength: [2, 30]
            }

        },
        messages: {
            'estado-Nome': {
                required: STRINGS.estadoPreenchido,
                rangelength: STRINGS.estadoConter
            }
        }
    });

    //Salvar modal cadastro
    $('#botao-salvar-modal-cadastrar-estado').on('click', function () {
        if ($('#formulario-estado').valid()) {
            var nomeVar = $("#campo-cadastro-estado-nome").val();
            $.ajax({
                url: '/Estado/Store',
                method: 'post',
                data: {
                    nome: $('#campo-cadastro-estado-nome').val()
                },
                success: function (data) {
                    var resultado = JSON.parse(data);
                    limparCampos();
                    $('#estado-modal-cadastro').modal('hide');
                    $('#table-estados').DataTable().ajax.reload();
                    $(function () {
                        new PNotify({
                            title: STRINGS.sucesso,
                            text: nomeVar + " " + STRINGS.cadastrado,
                            type: 'success'
                        });
                    });
                }
            });
        }
    });

    //Botao editar
    $('table').on('click', '.botao-editar-estado', function () {
        var id = $(this).data('id');
        $.ajax({
            url: 'Estado/Editar?id=' + id,
            success: function (resultado) {
                var data = JSON.parse(resultado);
                $('#campo-editar-estado-id').val(data.Id);
                $('#campo-editar-estado-nome').val(data.Nome);

                $('#estado-modal-editar').modal('show');
            }
        });
    });

    //Vaçidação Editar
    $('#form-modal-editar-estado').validate({


        errorClass: "form-control-danger",
        validClass: "form-control-success",
        rules: {
            'estado.Nome': {
                required: true,
                rangelength: [2, 30]
            }

        },
        messages: {
            'estado-Nome': {
                required: STRINGS.estadoPreenchido,
                rangelength: STRINGS.estadoConter
            }
        }
    });


    //Update modal editar
    $('#botao-salvar-modal-editar-estado').on('click', function () {
        if ($('#form-modal-editar-estado').valid()) {
            $.ajax({
                url: 'Estado/Update',
                method: 'post',
                dataType: 'json',
                data: {
                    id: $('#campo-editar-estado-id').val(),
                    nome: $('#campo-editar-estado-nome').val()
                },
                success: function (data) {
                    var resultado = JSON.parse(data);
                    if (resultado == 1) {
                        $('#table-estados').DataTable().ajax.reload();
                        $(function () {
                            new PNotify({
                                title: STRINGS.sucesso,
                                text: STRINGS.alterado,
                                type: 'info'
                            });
                        });
                        $('#estado-modal-editar').modal('hide');
                    } else {
                        new PNotify({
                            title: 'Erro!',
                            text: 'Erro ao alterar',
                            type: 'error'
                        });
                    }
                    limparCampos();
                }
            });
        }
    });

    //Desativar
    $('table').on('click', '.botao-excluir-estado', function () {
        var id = $(this).data('id');
        var nome = $(this).data('nome');
        swal({
            title: STRINGS.voceTemCerteza,
            text: STRINGS.voceIraDesativarEstado + " " + nome + "!",
            type: "warning",
            showCancelButton: true,
            confirmButtonClass: "btn-danger",
            confirmButtonText: STRINGS.simDesativar,
            cancelButtonText: STRINGS.naoCancelar,
            closeOnConfirm: false,
            closeOnCancel: false
        },
            function (isConfirm) {
                if (isConfirm) {
                    swal(STRINGS.desativado, STRINGS.voceDesativouEstado + " " + nome + ".", "success");
                    $.ajax({
                        url: 'Estado/Excluir?id=' + id,
                        method: 'get',
                        success: function (data) {
                            var resultado = JSON.parse(data);
                            if (resultado == 1) {
                                new PNotify({
                                    title: STRINGS.desativado,
                                    text: nome + " " + STRINGS.desativadoSucesso,
                                    type: 'success'
                                });

                                $('#table-estados').DataTable().ajax.reload();

                            } else {
                                new PNotify({
                                    title: 'Erro!',
                                    text: 'Erro ao desativar ' + nome,
                                    type: 'error'
                                });
                            }
                        }
                    });
                } else {
                    swal(STRINGS.cancelado, STRINGS.seuArquivoEstaSalvo, "error");
                }
            });
    });

    

    function limparCampos() {
        $('#campo-cadastro-estado-nome').val('');       
    }
});