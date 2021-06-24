using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApi.Models.Requests
{
    public class ListRequest
    {
        [Required]
        public string Caption { get; set; }

        [Required]
        public string Description { get; set; }

        [Required]
        public string Icon { get; set; }

        [Required]
        public string Color { get; set; }
    }
}
