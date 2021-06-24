using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApi.Models;
using TodoApi.Models.Requests;

namespace TodoApi.Utilities
{
    public class ListConverter
    {
        public static TodoList ToTodoListDataModel(TodoListDTO todoListDTO)
        {
            return new TodoList()
            {
                Id = todoListDTO.Id,
                Caption = todoListDTO.Caption,
                Description = todoListDTO.Description,
                Icon = todoListDTO.Icon,
                Color = todoListDTO.Color
            };
        }

        public static TodoList ToTodoListDataModel(ListRequest todoListRequest)
        {
            return new TodoList()
            {
                Caption = todoListRequest.Caption,
                Description = todoListRequest.Description,
                Icon = todoListRequest.Icon,
                Color = todoListRequest.Color
            };
        }

        public static TodoListDTO ToTodoListDTO(TodoList todoList)
        {
            return new TodoListDTO(todoList.Id,
                                   todoList.Caption,
                                   todoList.Description,
                                   todoList.Icon,
                                   todoList.Color);
        }
    }
}
