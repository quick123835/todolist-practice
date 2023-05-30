import TodoItem from './TodoItem';

const TodoCollection = ({
  todos,
  onSave,
  onDelete,
  onToggle,
  onChangeMode,
}) => {
  return (
    <div>
      {todos.map((todo) => {
        return (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={(id) => {
              onToggle?.(id);
            }}
            onChangeMode={({ id, isEdit }) => {
              onChangeMode?.({ id, isEdit });
            }}
            onSave={({ value, id }) => {
              onSave?.({ value, id });
            }}
            onDelete={(id) => {
              onDelete?.(id);
            }}
          />
        );
      })}
    </div>
  );
};

export default TodoCollection;
