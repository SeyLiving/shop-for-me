import { useState } from "react";
import axios from "axios";


const url = "http://localhost:3000/api/task";

export default function TaskHome(props) {
	const [tasks, setTasks] = useState(props.tasks);
	const [task, setTask] = useState({ task: "" });

	const handleChange = ({ currentTarget: input }) => {
		input.value === ""
			? setTask({ task: "" })
			: setTask((prev) => ({ ...prev, task: input.value }));
	};

	const addTask = async (e) => {
		e.preventDefault();
		try {
			if (task._id) {
				const { data } = await axios.put(url + "/" + task._id, {
					task: task.task,
				});
				const originalTasks = [...tasks];
				const index = originalTasks.findIndex((t) => t._id === task._id);
				originalTasks[index] = data.data;
				setTasks(originalTasks);
				setTask({ task: "" });
				console.log(data.message);
			} else {
				const { data } = await axios.post(url, task);
				setTasks((prev) => [...prev, data.data]);
				setTask({ task: "" });
				console.log(data.message);
			}
		} catch (error) {
			console.log(error);
		}
	};

	const editTask = (id) => {
		const currentTask = tasks.filter((task) => task._id === id);
		setTask(currentTask[0]);
	};

	const updateTask = async (id) => {
		try {
			const originalTasks = [...tasks];
			const index = originalTasks.findIndex((t) => t._id === id);
			const { data } = await axios.put(url + "/" + id, {
				completed: !originalTasks[index].completed,
			});
			originalTasks[index] = data.data;
			setTasks(originalTasks);
			console.log(data.message);
		} catch (error) {
			console.log(error);
		}
	};

	const deleteTask = async (id) => {
		try {
			const { data } = await axios.delete(url + "/" + id);
			setTasks((prev) => prev.filter((task) => task._id !== id));
			console.log(data.message);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<div className='bg-red-200'>
			<h1 className=''>TO-DO</h1>
			<div className=''>
				<form onSubmit={addTask} className=''>
					<input
						className=''
						type="text"
						placeholder="Task to be done..."
						onChange={handleChange}
						value={task.task}
					/>
					<button type="submit" className=''>
						{task._id ? "Update" : "Add"}
					</button>
				</form>
				{tasks.map((task) => (
					<div className='' key={task._id}>
						<input
							type="checkbox"
							className=''
							checked={task.completed}
							onChange={() => updateTask(task._id)}
						/>
						<p
							className={
								task.completed
									? styles.task_text + " " + styles.line_through
									: styles.task_text
							}
						>
							{task.task}
						</p>
						<button
							onClick={() => editTask(task._id)}
							className=''
						>
							&#9998;
						</button>
						<button
							onClick={() => deleteTask(task._id)}
							className=''
						>
							&#10006;
						</button>
					</div>
				))}
				{tasks.length === 0 && <h2 className=''>No tasks</h2>}
			</div>
		</div>
	);
}

export const getServerSideProps = async () => {
	const { data } = await axios.get(url);
	return {
		props: {
			tasks: data.data,
		},
	};
};
