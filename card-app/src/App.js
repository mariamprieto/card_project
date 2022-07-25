import './App.css';

const display = document.querySelector("article");

function gridClick() {
  display.classList.add("grid");
  display.classList.remove("list");

}

function showList() {
  display.classList.add("list");
  display.classList.remove("grid");

}

function App() {
  return (


    <div>
      <div className="directory_menu" >
        <button onClick={gridClick} id="grid">Course</button>
        <button onClick={showList} id="list">Student portal</button>
      </div >

      <article className="grid">
        <h2>Programming Courses</h2>
        <div className="information">
          <div>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQizbeHXSnhVURahe4dVVYso6CM7AmoRtKUaA&usqp=CAU" alt="Exemplo"></img>
            <h2> Course Digital </h2>
            <h3> Hours</h3>
            <p>Learn HTML</p>
            <p> precio</p>
          </div>
        </div>
      </article>
    </div>
  );
}

export default App;
