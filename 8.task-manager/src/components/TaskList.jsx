export default function TaskList({ tasks }) {
    if (tasks.length === 0) {
        return <p>Henüz görev yok.</p>;
    }
    return (
        <ul style={{ paddingLeft: 18, marginTop: 12 }}>

            {tasks.map((task) => (
                <li key={task.id}>{task.title}</li>
            ))}
        </ul>
    );
}

                    
    