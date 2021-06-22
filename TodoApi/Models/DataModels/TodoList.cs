using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApi.Models
{
    public class TodoList
    {
        public Guid Id;
        public string Caption;
        public string Description;
        public string Icon;
        public string Color;

        public ICollection<TodoListItem> ListItems;
    }
}
