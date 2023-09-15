import './App.css';
import dataDummy from './data.js';
import { Routes, Route, Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';


function App() {

  const navigate = useNavigate();

  const [data, setData] = useState(dataDummy);

  const onDelete = (targetId)=>{
    const newMovieList = data.filter((it)=>it.id !== targetId)
    setData(newMovieList);
  }

  const onCreate = (state)=>{
    //console.log(state)
    const newItem = {...state}
    //console.log(newItem)
    setData([...data, newItem]);
    navigate("/");
  }

  return (
    <div className="App">
        
        <Link to="/list" className='list'>List</Link>/
        <Link to="/regist" className='add'>Add New Movie</Link>

        <Routes>
          <Route path="/" element={
            <>
              <h2>Movies</h2>
              <MovieList movieList={data} onDelete={onDelete}/>
            </>
          }/>
          <Route path="/list" element={
            <>
              <MovieList movieList={data} onDelete={onDelete}/>
            </>
          }/>
          <Route path="/regist" element={
            <>
              <h2>Create Movie</h2>
              <MovieEditor onCreate={onCreate}/>
            </>
          }/>
        </Routes>

    </div>
  );
}


function MovieList({movieList, onDelete}){
  return(
    <div className="MovieList">
      <table>
        <thead>
          <tr>
            <th width="80px">Id</th>
            <th width="80px">Title</th>
            <th width="80px">Genre</th>
            <th width="100px">Release Date</th>
            <th width="80px">Action</th>
          </tr>
        </thead>
        <tbody>
          {
            movieList.map((it)=>{
              return(
                  <MovieItem key={it.id} {...it} onDelete={onDelete} />
              )
              
            })
          }
        </tbody>
      </table>
    </div>
  )
}


function MovieItem({id, title, genre, releaseDate, onDelete}){
  
  const handleDelete = ()=>{
    onDelete(id)
  }
  
  return(
    //<div className="MovieItem">
      <>
      <tr>
        <td>{id}</td>
        <td>{title}</td>
        <td>{genre}</td>
        <td>{releaseDate}</td>
        <td>
          <button onClick={handleDelete}>Delete</button>
        </td>
      </tr>
      </>
    //</div>
  )
}


function MovieEditor({onCreate}){

  const [state, setState] = useState({
    id:"",
    title:"",
    genre:"",
    releaseDate:"",
  })

  const handleChangeState = (e)=>{
    setState({...state,
    [e.target.name]:e.target.value
    })
  }

  const handleSubmit = ()=>{
    onCreate(state) /*싸그리보내*/
    setState({
      id:"",
      title:"",
      genre:"",
      releaseDate:"",
    })
  }

  return(
      <div className="MovieEditor">
        <>
          <div>
            <input
              placeholder='Input movie id'
              name="id"
              value={state.id}
              onChange={handleChangeState}
            />
          </div>
          <div>
            <input 
              placeholder='Input movie title'
              name="title"
              value={state.title}
              onChange={handleChangeState}
            />
          </div>
          <div>
            <input 
              placeholder='Input movie genre'
              name="genre"
              value={state.genre}
              onChange={handleChangeState}
            />
          </div>
          <div>
            <input 
              type="date"
              name="releaseDate"
              value={state.releaseDate}
              onChange={handleChangeState}
            />
          </div>
          <div>
            <button onClick={handleSubmit}>Add Movie</button>
          </div>
        </>
      </div>
    
  )
}



export default App;
