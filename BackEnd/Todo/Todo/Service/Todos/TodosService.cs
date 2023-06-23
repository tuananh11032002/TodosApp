using TodoBackend.Data;
using TodoBackend.Models;

namespace TodoBackend.Service.Todos
{
    public class TodosService : ITodosService
    {
        private readonly TodoDbContext _todoDbContext;
        public TodosService(TodoDbContext todoDbContext)
        {
            _todoDbContext = todoDbContext;

        }
        public bool AddTodo(Todo todo)
        {
            
            _todoDbContext.Todos.Add(todo);
            _todoDbContext.SaveChanges();
            return true;
        }

        public bool DelTodo(int id)
        {
            Todo todo = _todoDbContext.Todos.Find(id);
            _todoDbContext.Todos.Remove(todo);
            _todoDbContext.SaveChanges();

            return true;
        }

        public List<Todo> GetTodos()
        {
            return _todoDbContext.Todos.OrderByDescending(x=>x.Id).ToList();
        }

        public bool UpdateTodo(Todo todo)
        {
            _todoDbContext.Todos.Update(todo);
            _todoDbContext.SaveChanges();

            return true;
        }
    }
}
