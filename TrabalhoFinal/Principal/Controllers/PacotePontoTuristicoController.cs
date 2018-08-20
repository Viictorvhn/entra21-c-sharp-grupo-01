﻿using Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Principal.Controllers
{
    public class PacotePontoTuristicoController : Controller
    {
        // GET: PacotePontoTuristico
        public ActionResult Index()
        {
            return View();
        }
        [HttpGet]
        public ActionResult Cadastro()
        {
            ViewBag.TituloPagina = " Cadastro Pacote Pontos Turisticos";
            ViewBag.PacotePontoTuristico = new PacotePontoTuristico();
            return View();
        }

        [HttpGet]
        public ActionResult Editar(int id)
        {
            //ViewBag.PacotePontoTuristico = pacotePontoTuristico;
            ViewBag.TituloPagina = "Editar Pacote Pontos Turisticos";
            //PacotePontoTuristico pacotePontoTuristico = new PontosTuristosRepository().ObterPeloId(id);
            return View();
        }


        [HttpGet]
        public ActionResult Excluir(int id)
        {
            
            return null;
        }

        [HttpPost]
        public ActionResult Store(PacotePontoTuristico pacotePontosTuristicos)
        {
            return null;
        }
    }
}