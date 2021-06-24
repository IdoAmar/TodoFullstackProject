using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApi.Models;
using TodoApi.Models.DTOs;
using TodoApi.Models.Requests;

namespace TodoApi.Services
{
    public interface ITodoRepositoryService
    {
        public Task<IEnumerable<TodoList>> GetAllLists();//
        public Task<TodoList> GetList(Guid listId);//
        public Task<IEnumerable<TodoListItem>> GetListItems(Guid listId);//
        public Task<IEnumerable<TodoListItem>> GetAllUncompletedItems();//
        public Task<TodoListItem> MarkItemAsComplete(Guid itemId);//
        public Task<TodoList> CreateList(ListRequest todoListRequest);//
        public Task<TodoList> EditList(Guid listId, ListRequest listRequest);//
        public Task<TodoListItem> AddItemToList(Guid listId, ListItemRequest listItemRequest);//
        public Task DeleteList(Guid listId);
    }
}
