using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata.Builders;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using TodoApi.Models;

namespace TodoApi.Configurations
{
    public class ListConfiguration : IEntityTypeConfiguration<TodoList>
    {
        public void Configure(EntityTypeBuilder<TodoList> builder)
        {
            builder.HasKey(l => l.Id);

            builder.Property(l => l.Caption)
                   .IsRequired();

            builder.Property(l => l.Description)
                   .IsRequired();

            builder.Property(l => l.Icon)
                    .IsRequired();

            builder.Property(l => l.Color)
                   .IsRequired();

            builder.HasMany(l => l.ListItems)
                   .WithOne(i => i.List)
                   .HasForeignKey(i => i.ListId)
                   .IsRequired()
                   .OnDelete(DeleteBehavior.Cascade);

        }
    }
}
