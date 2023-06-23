using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Design;

namespace TodoBackend.Data
{
    public class TodoDbContextFactory : IDesignTimeDbContextFactory<TodoDbContext>
    {
        public TodoDbContext CreateDbContext(string[] args)
        {
            IConfigurationRoot configurationRoot = new ConfigurationBuilder().SetBasePath(Directory.GetCurrentDirectory()).AddJsonFile("appsettings.json").Build();
            var connectionString = configurationRoot.GetConnectionString("TodosDatabase");
            var optionBuilder = new DbContextOptionsBuilder<TodoDbContext>();
            optionBuilder.UseSqlServer(connectionString);
            return new TodoDbContext(optionBuilder.Options);
        }
    }
}
