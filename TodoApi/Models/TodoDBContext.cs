using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace TodoApi.Models
{
    public class TodoDBContext : DbContext
    {
        public TodoDBContext(DbContextOptions options) : base(options)
        {
        }

        public DbSet<TodoList> TodoLists { get; set; }
        public DbSet<TodoListItem> TodoListItems { get; set; }

        protected override void OnModelCreating(ModelBuilder builder)
        {
            base.OnModelCreating(builder);
            builder.ApplyConfigurationsFromAssembly(typeof(TodoList).Assembly);
            builder.ApplyConfigurationsFromAssembly(typeof(TodoListItem).Assembly);
        }
    }
}
