import React from "react";
import Counter from "./components/Counter";
import TodoList from "./components/TodoList";
import LoginToggle from "./components/LoginToggle";
import LiveSearch from "./components/LiveSearch";
import Stopwatch from "./components/Stopwatch";
function App() {
  return (
    <div>
      <h1>Frontend Practical Test</h1>
      <hr />
      <Counter />
      <hr />
      <TodoList />
      <hr />
      <LoginToggle />
      <hr />
      <LiveSearch />
      <hr />
      <Stopwatch />
    </div>
  );
}
export default App;