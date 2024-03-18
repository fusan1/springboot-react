import {useState, useEffect} from 'react';
import {getAllStudent} from "./client";

function App() {
    const [students, setStudents] = useState([]);
    const fetchStudents = () =>
        getAllStudent()
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setStudents(data);})

    useEffect(() => {
        console.log("component is mounted");
        fetchStudents();

    }, []);

    return <p>{students.length}</p>;
}

export default App;
