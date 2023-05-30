import { Footer, Header, TodoCollection, TodoInput } from 'components';
import { useState, useEffect } from 'react';
import { createTodo, patchTodo, getTodos, deleteTodo } from 'apis/todos';
import { useNavigate } from 'react-router-dom';
import { useAuth } from 'contexts/AuthContext';

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const navigate = useNavigate();
  const { isAuthenticated, currentMember } = useAuth();

  useEffect(() => {
    if (!isAuthenticated) {
      navigate('/login');
    }
  }, [navigate, isAuthenticated]);

  const handleInput = (value) => {
    setInputValue(value);
  };

  useEffect(() => {
    const getTodosAsync = async () => {
      try {
        const todos = await getTodos();
        setTodos(todos.map((todo) => ({ ...todo, isEdit: false })));
      } catch (error) {
        console.error(error);
      }
    };
    getTodosAsync();
  }, []);

  const handleAddTodo = async () => {
    if (inputValue.length === 0) {
      return;
    }
    try {
      const data = await createTodo({
        title: inputValue,
        isDone: false,
      });
      setTodos((todos) => {
        return [
          ...todos,
          {
            title: data.title,
            isDone: data.isDone,
            isEdit: data.isEdit,
            id: data.id,
          },
        ];
      });
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleKeyDown = async () => {
    if (inputValue.length === 0) {
      return;
    }
    try {
      const data = await createTodo({ title: inputValue, isDone: false });
      setTodos((todos) => {
        return [
          ...todos,
          {
            id: data.id,
            title: data.title,
            isDone: data.isDone,
            isEdit: data.isEdit,
          },
        ];
      });
      setInputValue('');
    } catch (error) {
      console.error(error);
    }
  };

  const handleToggle = async (id) => {
    const currentTodo = todos.find((todo) => todo.id === id);
    try {
      await patchTodo({
        id,
        isDone: !currentTodo.isDone,
      });
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              isDone: !todo.isDone,
            };
          } else {
            return todo;
          }
        }),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = ({ id, isEdit }) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            isEdit,
          };
        } else {
          return todo;
        }
      }),
    );
  };

  const handleSave = async ({ value, id }) => {
    const currentTodo = todos.find((todo) => todo.id === id);
    try {
      await patchTodo({
        id,
        title: value,
        isEdit: false,
      });
      setTodos(
        todos.map((todo) => {
          if (todo.id === id) {
            return {
              ...todo,
              title: value,
              isEdit: false,
            };
          } else {
            return todo;
          }
        }),
      );
    } catch (error) {
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteTodo(id);
      setTodos(todos.filter((todo) => todo.id !== id));
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
      <Header username={currentMember?.name} />
      <TodoInput
        inputValue={inputValue}
        onChange={handleInput}
        onAddTodo={handleAddTodo}
        onKeyDown={handleKeyDown}
      />
      <TodoCollection
        todos={todos}
        onToggle={handleToggle}
        onChangeMode={handleEdit}
        onSave={handleSave}
        onDelete={handleDelete}
      />
      <Footer />
    </div>
  );
};

export default TodoPage;
