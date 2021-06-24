using Microsoft.AspNetCore.Mvc;
using ServiceStack.Host;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using TodoApi.Models;
using TodoApi.Models.Requests;
using TodoApi.Services;
using TodoApi.Utilities;

// For more information on enabling Web API for empty projects, visit https://go.microsoft.com/fwlink/?LinkID=397860

namespace TodoApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodoListController : ControllerBase
    {
        private readonly ITodoRepositoryService _todoRepo;

        public TodoListController(ITodoRepositoryService todoRepo)
        {
            _todoRepo = todoRepo;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TodoListDTO>>> GetAllLists()
        {
            IEnumerable<TodoList> lists = await _todoRepo.GetAllLists();
            
            if (!lists.Any())
                throw new HttpException((int)HttpStatusCode.NotFound, 
                    "Couldn't find any list");
            
            IEnumerable<TodoListDTO> listsDTOs = 
                lists.Select(l => ListConverter.ToTodoListDTO(l));

            return Ok(listsDTOs);
        }

        [HttpGet("{listId}")]
        public async Task<ActionResult<TodoListDTO>> GetList(Guid listId)
        {
            TodoList list = await _todoRepo.GetList(listId);
            
            if(list is null)
            {
                throw new HttpException((int)HttpStatusCode.NotFound, 
                    "Couldnt find the requested list");
            }
            return Ok(ListConverter.ToTodoListDTO(list));
        }

        [HttpPost]
        public async Task<ActionResult<TodoListDTO>> CreateList([FromBody] ListRequest listRequest)
        {
            if (!ModelState.IsValid)
                throw new HttpException((int)HttpStatusCode.BadRequest,
                    "The given list parameters are invalid");

            TodoList list = await _todoRepo.CreateList(listRequest);
            TodoListDTO listDTO = ListConverter.ToTodoListDTO(list);
            return CreatedAtAction(nameof(GetList), new { listId = listDTO.Id}, listDTO);
        }

        [HttpPut("{listId}")]
        public async Task<ActionResult<TodoListDTO>> EditList(Guid listId, [FromBody] ListRequest listRequest)
        {
            if (!ModelState.IsValid)
                throw new HttpException((int)HttpStatusCode.BadRequest,
                    "The given list parameters are invalid");

            TodoList list = await _todoRepo.EditList(listId, listRequest);
            TodoListDTO listDTO = ListConverter.ToTodoListDTO(list);

            return Ok(listDTO);
        }

        [HttpDelete("{listId}")]
        public async Task<ActionResult> Delete(Guid listId)
        {
            await _todoRepo.DeleteList(listId);
            return NoContent();
        }
    }
}
