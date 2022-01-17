using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace Mission3Assignment.Models
{
    public class GradeCalcModel
    {
        // The following creates a model template based off the form in my GradeCalc.cshtml
        //My validation is based on decimal input, so instead of a range between 0 and 100, my code implements a range between 0 and 1
        [Range(0.0, 1.0)]
        public float Assignment { get; set; }
        [Range(0.0, 1.0)]
        public float Group { get; set; }
        [Range(0.0, 1.0)]
        public float Quizzes { get; set; }
        [Range(0.0, 1.0)]
        public float Exam { get; set; }
        [Range(0.0, 1.0)]
        public float Intex { get; set; }

    }
}
