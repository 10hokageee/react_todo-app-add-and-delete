import { Todo } from '../types/Todo';
import { TempTodo } from './TempTodo';
import { TodoInfo } from './TodoInfo';

type Props = {
  todos: Todo[];
  tempTodo: Todo | null;
  deleteTodo: (userId: number) => void;
  loading: number[];
};

export const TodoList: React.FC<Props> = ({
  todos,
  deleteTodo,
  tempTodo,
  loading: loading,
}) => {
  return (
    <section className="todoapp__main" data-cy="TodoList">
      {todos.map(todo => (
        <TodoInfo
          todo={todo}
          key={todo.id}
          deleteTodo={deleteTodo}
          loading={loading}
        />
      ))}
      {tempTodo && <TempTodo tempTitle={tempTodo.title} />}
    </section>
  );
};
