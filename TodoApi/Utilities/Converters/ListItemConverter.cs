using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApi.Models;
using TodoApi.Models.DTOs;
using TodoApi.Models.Requests;

namespace TodoApi.Utilities
{
    public class ListItemConverter
    {
        public static TodoListItem ToTodoListItemDataModel(TodoListItemDTO todoListItemDTO)
        {
            return new TodoListItem()
            {
                Id = todoListItemDTO.Id,
                Caption = todoListItemDTO.Caption,
                IsDone = todoListItemDTO.IsDone,
                ListId = todoListItemDTO.ListId
            };
        }

        public static TodoListItem ToTodoListItemDataModel(ListItemRequest listItemRequest)
        {
            return new TodoListItem()
            {
                Caption = listItemRequest.Caption,
            };
        }
        public static TodoListItemDTO ToTodoListItemDTO(TodoListItem todoListItem)
        {
            return new TodoListItemDTO(todoListItem.Id,
                                   todoListItem.Caption,
                                   todoListItem.IsDone,
                                   todoListItem.ListId);
        }
    }
}
