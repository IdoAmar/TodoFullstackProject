using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;
using TodoApi.Utilities.DataAnnotations;

namespace TodoApi.Models.Requests
{
    public class ListItemRequest
    {
        [Required]
        [MinLength(10)]
        [MaxWords(3)]
        public string Caption { get; set; }
    }
}
