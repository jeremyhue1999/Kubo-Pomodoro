import TodoTaskCard from "./todo-task-card";

const TodoTaskList = ({ 
  sortedList,
  setShowAddTaskButton,
 }) => {

  return (
    <div>
      {sortedList.map((task) => {
        if (task.completed === false && task.doing === false) {
          return (
            <TodoTaskCard
              containerStyle="bg-slate-800"
              textStyle="text-white"
              task={task}
              key={task.id}
              setShowAddTaskButton={setShowAddTaskButton}
            />
          )
        }
      })}
    </div>
  );
};

export default TodoTaskList;
