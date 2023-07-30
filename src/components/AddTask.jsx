import { useState } from "react";

const AddTask = ({onAdd}) => {
  const [text, setText] = useState("");
  const [day, setDay] = useState("");
  const [reminder, setReminder] = useState(false)

  const onSubmit = (e) => {
      e.preventDefault()
      if (!text) {
          alert('please add task')
          return
      }
      onAdd({text, day, reminder})

      setText('')
      setDay('')
      setReminder(false)
  }

  return (
    <form className="add-form" action="" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Day and Time</label>
        <input
          type="text"
          name=""
          id=""
          placeholder="Add day and time"
          value={day}
          onChange={(e) => setDay(e.target.value)}
        />
      </div>

      <div className="form-control form-control-check">
        <label>Set Reminder</label>
        <input
          type="checkbox"
          checked={reminder}
          name=""
          id=""
          value={reminder}
          onChange={(e) => setReminder(e.currentTarget.checked)}
        />
      </div>

      <input
        type="submit"
        name=""
        id=""
        value="save task"
        className="btn btn-block"
      />
    </form>
  );
};

export default AddTask;
