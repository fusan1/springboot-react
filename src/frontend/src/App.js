import {Button,
        Radio}  from "antd";
import './App.css';
import {getAllStudent} from "./client";

function App() {
        getAllStudent()
            .then(res => res.json())
            .then(console.log)
  return (
    <div className="App">
     <Button type='primary'>Hello</Button>
        <br/>
        <Radio.Group value='large' >
            <Radio.Button value="large">Large</Radio.Button>
            <Radio.Button value="default">Default</Radio.Button>
            <Radio.Button value="small">Small</Radio.Button>
        </Radio.Group>
    </div>
  );
}

export default App;
