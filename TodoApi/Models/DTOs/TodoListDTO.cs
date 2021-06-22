using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApi.Models
{
    public record TodoListDTO(
        Guid Id,
        string Caption,
        string Description,
        string Icon,
        string Color
        );
}
