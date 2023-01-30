import { Toaster } from "react-hot-toast"
import { Route, Routes } from "react-router-dom"


export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<div>Home</div>}></Route>
      </Routes>
      <Toaster position="top-right" reverseOrder={false}/>
    </>
  );
};
