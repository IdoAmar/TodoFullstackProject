using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApi.Models;
using TodoApi.Models.DTOs;
using TodoApi.Models.Requests;
using TodoApi.Services;
using TodoApi.Utilities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoListItemsController : ControllerBase
    {
        private readonly ITodoRepositoryService _todoRepo;

        public TodoListItemsController(ITodoRepositoryService todoRepo)
        {
            _todoRepo = todoRepo;

        }
        [HttpGet("count")]
        public async Task<ActionResult<int>> GetAllListItemsCount()
        {
            return Ok(await _todoRepo.GetAllListItemsCount());
        }

        [HttpGet("uncompleted")]
        public async Task<ActionResult<IEnumerable<TodoListItemDTO>>> GetAllUncompletedItems()
        {
            IEnumerable<TodoListItem> uncompletedItems = 
                await _todoRepo.GetAllUncompletedItems();

            if (!uncompletedItems.Any())
                return NoContent();

            IEnumerable<TodoListItemDTO> uncompletedItemsDTOs =
                uncompletedItems.Select(i => ListItemConverter.ToTodoListItemDTO(i));

            return Ok(uncompletedItemsDTOs);
        }
        [HttpGet("uncompleted/count")]
        public async Task<ActionResult<int>> GetAllUncompletedItemsCount()
        {
            return (await _todoRepo.GetAllUncompletedItemsCount());
        }

        [HttpGet]
        [Route("~/api/todolist/{listId}/items")]
        public async Task<ActionResult<IEnumerable<TodoListItemDTO>>> GetListItems(Guid listId)
        {
            IEnumerable<TodoListItem> listItems =
               await _todoRepo.GetListItems(listId);

            //if (!listItems.Any())
            //    return NoContent();
            
            IEnumerable<TodoListItemDTO> listItemDTOs =
                listItems.Select(i => ListItemConverter.ToTodoListItemDTO(i));

            return Ok(listItemDTOs);
        }

        [HttpPost]
        [Route("~/api/todolist/{listId}/item")]
        public async Task<ActionResult<TodoListItemDTO>> AddItemToList(Guid listId , [FromBody] ListItemRequest listItemRequest)
        {
            TodoListItem listItem =
                await _todoRepo.AddItemToList(listId, listItemRequest);

            TodoListItemDTO listItemDTO = ListItemConverter.ToTodoListItemDTO(listItem);

            return CreatedAtAction(nameof(GetListItems), new { listId = listId }, listItemDTO);
        }

        [HttpPatch("{listItemID}")]
        public async Task<ActionResult<TodoListItemDTO>> MarkItemAsCompleted(Guid listItemID)
        {
            TodoListItem todoListItem =
                await _todoRepo.MarkItemAsComplete(listItemID);

            TodoListItemDTO todoListItemDTO = 
                ListItemConverter.ToTodoListItemDTO(todoListItem);

            return Ok(todoListItemDTO);
        }

    }
}
