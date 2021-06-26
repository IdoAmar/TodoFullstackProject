using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using TodoApi.Utilities.DataAnnotations;

namespace TodoApi.Models.Requests
{
    public class ListRequest
    {
        [Required]
        
        public string Caption { get; set; }

        [Required]
        [MaxWords(10)]
        [MinLength(30)]
        public string Description { get; set; }

        [Required]
        public string Icon { get; set; }

        [Required]
        public string Color { get; set; }
    }
}
