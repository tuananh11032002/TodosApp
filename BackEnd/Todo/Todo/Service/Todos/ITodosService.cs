﻿using TodoBackend.Models;

namespace TodoBackend.Service.Todos
{
    public interface ITodosService
    {
        List<Todo> GetTodos();
        Boolean AddTodo(Todo todo);
        Boolean UpdateTodo(Todo todo);
        Boolean DelTodo(int id);
    }
}
