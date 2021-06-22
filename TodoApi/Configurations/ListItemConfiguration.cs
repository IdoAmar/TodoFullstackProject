using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApi.Models;

namespace TodoApi.Configurations
{
    public class ListItemConfiguration : IEntityTypeConfiguration<TodoListItem>
    {
        public void Configure(EntityTypeBuilder<TodoListItem> builder)
        {
            builder.HasKey(i => i.Id);

            builder.Property(i => i.Caption)
                   .IsRequired();

            builder.Property(i => i.IsDone)
                   .IsRequired();

            builder.HasOne(i => i.List)
                   .WithMany(l => l.ListItems)
                   .HasForeignKey(i => i.ListId)
                   .OnDelete(DeleteBehavior.Cascade);
        }
    }
}
