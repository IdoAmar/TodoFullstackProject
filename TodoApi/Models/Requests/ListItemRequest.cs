using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApi.Models.Requests
{
    public class ListItemRequest
    {
        [Required]
        public string Caption { get; set; }
    }
}
