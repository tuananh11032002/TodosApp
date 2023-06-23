using Microsoft.EntityFrameworkCore;
using TodoBackend.Configuration;
using TodoBackend.Models;
using TodoBackend.Seeder;

namespace TodoBackend.Data
{
    public class TodoDbContext : DbContext
    {
        public TodoDbContext(DbContextOptions options) : base(options)
        {

        }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.ApplyConfiguration(new TodoConfiguration());
            modelBuilder.Seed();
        }
        public DbSet<Todo> Todos { get; set; }
    }
}
