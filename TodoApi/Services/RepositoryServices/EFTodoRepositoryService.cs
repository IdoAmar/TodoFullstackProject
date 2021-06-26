using Microsoft.EntityFrameworkCore;
using ServiceStack.Host;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading.Tasks;
using TodoApi.Models;
using TodoApi.Models.DTOs;
using TodoApi.Models.Requests;
using TodoApi.Utilities;

namespace TodoApi.Services
{
    public class EFTodoRepositoryService : ITodoRepositoryService
    {
        private readonly TodoDBContext _dbContext;

        public EFTodoRepositoryService(TodoDBContext dBContext)
        {
            _dbContext = dBContext;
        }

        public async Task<TodoListItem> AddItemToList(Guid listId, ListItemRequest listItemRequest)
        {
            TodoList listToAddTo = await _dbContext.TodoLists.FindAsync(listId);
            
            if (listToAddTo is null)
                throw new HttpException((int)HttpStatusCode.BadRequest,
                    "List to add to does not exist");

            TodoListItem todoListItem = 
                ListItemConverter.ToTodoListItemDataModel(listItemRequest);

            todoListItem.ListId = listId;

            await _dbContext.TodoListItems.AddAsync(todoListItem);
            await _dbContext.SaveChangesAsync();

            return todoListItem;
        }

        public async Task<TodoList> CreateList(ListRequest todoListRequest)
        {
            TodoList todoList = 
                ListConverter.ToTodoListDataModel(todoListRequest);
            
            await _dbContext.TodoLists.AddAsync(todoList);
            await _dbContext.SaveChangesAsync();
            

            return todoList;
        }

        public async Task DeleteList(Guid listId)
        {
            TodoList listToDelete = await _dbContext.TodoLists.FindAsync(listId);
            
            if (listToDelete is null)
                throw new HttpException((int)HttpStatusCode.NotFound,
                    "Supplied list does not exist");

            _dbContext.TodoLists.Remove(listToDelete);
            await _dbContext.SaveChangesAsync();
        }

        public async Task<TodoList> EditList(Guid listId , ListRequest listRequest)
        {
            TodoList todoList = await _dbContext.TodoLists.FindAsync(listId);
            if (todoList is null)
                throw new HttpException((int)HttpStatusCode.NotFound,
                    "Supplied list does not exist");

            todoList.Caption = listRequest.Caption;
            todoList.Description = listRequest.Description;
            todoList.Icon = listRequest.Icon;
            todoList.Color = listRequest.Color;

            await _dbContext.SaveChangesAsync();

            return todoList;
        }

        public async Task<int> GetAllListItemsCount()
        {
            return  await _dbContext.TodoListItems.CountAsync();
        }

        public async Task<IEnumerable<TodoList>> GetAllLists()
        {
            IEnumerable<TodoList> lists = await _dbContext.TodoLists.ToListAsync();
            return lists;
        }

        public async Task<int> GetAllListsCount()
        {
            return await _dbContext.TodoLists.CountAsync();
        }

        public async Task<IEnumerable<TodoListItem>> GetAllUncompletedItems()
        {
            return await _dbContext.TodoListItems.Where(i => i.IsDone == false)
                                                 .ToListAsync();
        }

        public async Task<int> GetAllUncompletedItemsCount()
        {
            return (await GetAllUncompletedItems()).Count();

        }

        public async Task<TodoList> GetList(Guid listId)
        {
            return await _dbContext.TodoLists.FindAsync(listId);
        }

        public async Task<IEnumerable<TodoListItem>> GetListItems(Guid listId)
        {
            return await _dbContext.TodoListItems.Where(i => i.ListId == listId)
                                                 .ToListAsync();
        }

        public async Task<TodoListItem> MarkItemAsComplete(Guid itemId)
        {
            TodoListItem listItem = await _dbContext.TodoListItems.FindAsync(itemId);
            if (listItem.IsDone == true)
                throw new HttpException((int)HttpStatusCode.Conflict, "Item already completed");
            
            listItem.IsDone = true;
            await _dbContext.SaveChangesAsync();
            return listItem;
        }
    }
}
