using System;
using System.Collections.Generic;

namespace LIBRES.Models
{
    public partial class Respuesta
    {
        public int Respuestaid { get; set; }
        public string Contenido { get; set; }
        public int? Preguntaid { get; set; }

        public Pregunta Pregunta { get; set; }
    }
}
