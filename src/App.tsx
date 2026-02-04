import "./App.css";
import { Outlet, Route, Routes } from "react-router";
import IndexPage from "./pages/index-page";
import SignInPage from "./pages/sign-in-page";
import SignUpPage from "./pages/sign-up-page";
import CounterPage from "./pages/counter-page";
import TodoListPage from "./pages/todo-list-page";
import TodoDetailPage from "./pages/todo-detail-page";

function AuthLayout() {
  return (
    <div>
      <header>Auth</header>
      <Outlet></Outlet>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexPage></IndexPage>}></Route>
      <Route path="/counter" element={<CounterPage></CounterPage>}></Route>
      <Route path="/todolist" element={<TodoListPage></TodoListPage>}></Route>
      <Route
        path="/todolist/:id"
        element={<TodoDetailPage></TodoDetailPage>}
      ></Route>

      <Route element={<AuthLayout></AuthLayout>}>
        <Route path="/sign-in" element={<SignInPage></SignInPage>}></Route>
        <Route path="/sign-up" element={<SignUpPage></SignUpPage>}></Route>
      </Route>
    </Routes>
  );
}

export default App;
