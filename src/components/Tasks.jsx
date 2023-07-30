import Task from '../components/Task'

const Tasks = ({tasks, onDelete, onToggle}) => {
  
  return (
    <>
      {tasks.map((task) => {
        return (
         <Task task={task} onDelete={onDelete} onToggle={onToggle}/>
        );
      })}
    </>
  );
};

export default Tasks;
