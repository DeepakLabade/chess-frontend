import { BrowserRouter, Route, Routes } from "react-router-dom"
import Game from "./screens/Game"
import Landing from "./screens/Landing"

const App = () => {
  return (
    <div className="h-screen w-full bg-slate-900">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/game" element={<Game />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App