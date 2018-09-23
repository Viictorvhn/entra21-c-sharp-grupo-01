﻿using Model;
using Repository;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace Principal.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login
        public ActionResult Index()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Index(string usuario, string senha)
        {

            Guia guia = new GuiaRepository().VerificarLogin(usuario, senha);

            if(guia == null)
            {
                return View();
            }
            else
            {
                Session.Add("usuarioLogado", guia);
                return RedirectToAction("Index", "Home");
            }
        }

        public ActionResult Logout()
        {
            Session.Remove("usuarioLogado");
            return RedirectToAction("Index");
        }

        public ActionResult LockScreen()
        {
            return View();
        }
    }
}