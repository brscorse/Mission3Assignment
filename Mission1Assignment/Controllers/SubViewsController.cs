using Microsoft.AspNetCore.Mvc;
using Mission3Assignment.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3Assignment.Controllers
{
    public class SubViewsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet]
        public IActionResult GradeCalc ()
        {
            return View();
        }

        [HttpPost]
        public IActionResult GradeCalc (GradeCalcModel model)
        {
            return View();
        }
    }
}
