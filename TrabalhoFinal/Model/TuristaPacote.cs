﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class TuristaPacote
    {

        public int Id { get; set; }

        public Turista Turista { get; set; }

        public int IdTurista { get; set; }

        public Pacote Pacote { get; set; }

        public int IdPacote { get; set; }

        public string StatusPedido { get; set; }

    }
}
