using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApi.Models
{
    public class TodoListItem
    {
        public Guid Id;
        public string Caption;
        public bool IsDone;

        public Guid ListId;
        public TodoList List;
    }
}
