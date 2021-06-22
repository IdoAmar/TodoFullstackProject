using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApi.Models;
using TodoApi.Models.DTOs;

namespace TodoApi.Services
{
    public interface ITodoRepositoryService
    {
        public Task<IEnumerable<TodoList>> GetAllLists();
        public Task<IEnumerable<TodoListItem>> GetListItems(Guid listId);
        public Task<IEnumerable<TodoListItem>> GetAllUncompletedItems();
        public Task<TodoListItem> MarkItemAsComplete(Guid itemId);
        public Task<TodoList> CreateList(TodoListDTO todoListDTO);
        public Task<TodoList> EditList(TodoListDTO todoListDTO);
        public Task<TodoListItem> AddItemToList(TodoListItemDTO item, Guid listId);
        public Task DeleteList(Guid listId);
    }
}
