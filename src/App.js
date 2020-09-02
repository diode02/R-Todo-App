import React,{useState} from 'react';

// import {Input} from '@material-ui/core'
import './app.css';
function App() {
  const [tasks, setTasks] = useState([]);
  const [inputDesc, setInputDesc] = useState('');
  const [checkComp, setCheckComp] = useState(false);

  let handleInput=(e)=>{
    setInputDesc(e.target.value);
  }

  let handleSubmit = (e)=>{
    e.preventDefault();

    setTasks([...tasks, {
      description: inputDesc,
      completed: checkComp
    }])

    setCheckComp(false);
    setInputDesc('')
  }
  let handleCheckBox = (e)=>{
    setCheckComp(
      !checkComp
    )
  }

  let handleDelete = (e)=>{
    setTasks(
      tasks.filter((task,index)=> index!=e.target.id )
    )
  }

  let handleTaskComplete = (e)=>{
    setTasks(
      tasks.map((task,index)=>{
        if(index==e.target.task_id)
          task.completed=!task.completed
        return task;
      })
    )
  }

  let br={
    padding:'40px'
  }

  return (
    <div style={{
      // backgroundColor: 'black' ,
      // color: 'white',
      height:'100vh',
      display: "flex"
    }}>
      <div style={{
          backgroundColor:'white',
          width:'40%'
      }}>
        <p style={{
          width:'100%',
          textAlign:"center",
          fontSize:'60px',
          color:'black'
        }}>
          A 
          <div style={br}/>
          TODO 
          <div style={br}/>
          APP
          <div style={br}/> 
          FOR 
          <div style={br}/>
          YOU
        </p>
      </div>
      <div style={{
        width: '100%',
        textAlign: 'center',
        padding: '100px 0 0 0'
      }}>
        <form onSubmit={handleSubmit} style={{
          width:'50%',
          margin:'0 auto'
        }}>
          <input value={inputDesc} required placeholder='Task Desription' name='inputDesc' onChange={handleInput} style={{
            fontSize:'30px',
            borderRadius: '10px',
            width:'100%',
            textAlign:"center"
          }}  ></input>
          <br/>
          <div>
          <label name='checkComp' style={{
            fontSize: '30px'
          }}>Completed:</label>
          <input type='checkbox' checked={checkComp} onChange={handleCheckBox} style={{
            transform: 'scale(2)',
            padding: '10px',
            margin:'10px',
          }}></input>

          </div>
          <input type='submit' style={{
            fontWeight: 'bold',
            fontSize: '20px'
          }}></input>
        </form >


      <div style={{
        width:'50%',
        margin:'0 auto'
      }}>
        <ol>
        {tasks.map((task, index)=>
          <li key={index}><div style={{
            fontSize:'20px'
          }}>
            <p>Description: {task.description} Completed: {task.completed?'YES':'NO'}</p>

            <label className="container">One
                <input type="checkbox" task_id={index} checked={task.completed} onChange={handleTaskComplete}></input>
                <span className="checkmark"></span>
            </label>

          <button style={{
            fontWeight: 'bold',
            fontSize: '20px',
            marginLeft:'20px'
          }} onClick={handleDelete} id={index}>Delete</button> </div></li>
        )}
        </ol>
      </div>
      </div>
    </div>
    );
}

export default App;
