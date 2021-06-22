using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApi.Models;
using TodoApi.Models.DTOs;

namespace TodoApi.Services
{
    public class EFTodoRepositoryService : ITodoRepositoryService
    {
        private readonly TodoDBContext _dbContext;

        public EFTodoRepositoryService(TodoDBContext dBContext)
        {
            _dbContext = dBContext;
        }

        public async Task<TodoListItem> AddItemToList(TodoListItemDTO item, Guid listId)
        {
            TodoListItem todoListItem = ToListItemDataModel(item, listId);
            await _dbContext.TodoListItems.AddAsync(todoListItem);
            await _dbContext.SaveChangesAsync();
            return todoListItem;
        }

        public async Task<TodoList> CreateList(TodoListDTO todoListDTO)
        {
            TodoList todoList = ToListItemDataModel(todoListDTO);
            await _dbContext.TodoLists.AddAsync(todoList);
            await _dbContext.SaveChangesAsync();
            return todoList;
        }

        public async Task DeleteList(Guid listId)
        {
            _dbContext.TodoLists.Remove(new TodoList() { Id = listId});
            await _dbContext.SaveChangesAsync();
        }

        public async Task<TodoList> EditList(TodoListDTO todoListDTO)
        {
            TodoList todoList = await _dbContext.TodoLists.FindAsync(todoListDTO.Id);
            todoList.Caption = todoListDTO.Caption;
            todoList.Description = todoListDTO.Description;
            todoList.Icon = todoListDTO.Icon;
            todoList.Color = todoListDTO.Color;
            await _dbContext.SaveChangesAsync();
            return todoList;
        }

        public async Task<IEnumerable<TodoList>> GetAllLists()
        {
            return await _dbContext.TodoLists.ToListAsync();
        }

        public async Task<IEnumerable<TodoListItem>> GetAllUncompletedItems()
        {
            return await _dbContext.TodoListItems.Where(i => i.IsDone == false)
                                                 .ToListAsync();
        }

        public async Task<IEnumerable<TodoListItem>> GetListItems(Guid listId)
        {
            return await _dbContext.TodoListItems.Where(i => i.ListId == listId)
                                                 .ToListAsync();
        }

        public async Task<TodoListItem> MarkItemAsComplete(Guid itemId)
        {
            TodoListItem listItem = await _dbContext.TodoListItems.FindAsync(itemId);
            listItem.IsDone = true;
            return listItem;
        }


        //ToDataModel Helper methods
        private static TodoListItem ToListItemDataModel(TodoListItemDTO todoListItemDTO, Guid ListID)
        {
            return new TodoListItem()
            {
                Id = todoListItemDTO.Id,
                Caption = todoListItemDTO.Caption,
                IsDone = todoListItemDTO.IsDone,
                ListId = ListID
            };
        }

        private static TodoList ToListItemDataModel(TodoListDTO todoListDTO)
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

    }
}
