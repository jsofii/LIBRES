using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using LIBRES.Models;
namespace _1.Libres.Controllers
{
    [Route("api/[controller]")]
    public class BlogController : Controller
    {
        FBSLibresContext context = new FBSLibresContext();
       [HttpGet]
        [Route("ListaTema")] public List<Tema> Lista(){
            return this.context.Tema.ToList();
        }
    }
}
