using Microsoft.EntityFrameworkCore;
using TodoBackend.Models;

namespace TodoBackend.Configuration
{
    public class TodoConfiguration : IEntityTypeConfiguration<Todo>
    {
        public void Configure(Microsoft.EntityFrameworkCore.Metadata.Builders.EntityTypeBuilder<Todo> builder)
        {
            builder.ToTable("todos");
            builder.HasKey(t => t.Id);
            builder.Property(t => t.Name).IsRequired();
            builder.Property(t=>t.IsComplete).IsRequired().HasDefaultValue(false);
        }
    }
}
