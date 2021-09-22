import "./App.css";
import Tag from "./Tag";

function App() {
  return (
   

    <div className="App">
      <section class="hero">
        <div class="hero-body">
          <p class="title">A React Task</p>
          <p class="subtitle">by Boom.dev</p>
        </div>
      </section>
      <div class="container is-fullhd">
        <div class="notification">
          <Tag tags={["boomdotdev","task","tags", "react"]} /> 
          Edit the <code>./src</code> folder to add components.
        </div>
      </div>
    </div>
  );
}

export default App;
