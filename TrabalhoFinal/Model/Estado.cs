﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Model
{
    public class Estado
    {
        public int Id { get; set; }

        public Pais Pais { get; set; }

        public int IdPais { get; set; }

        public string Nome { get; set; }
    }
}