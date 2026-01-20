import { BrowserRouter, Routes, Route } from "react-router-dom";
import AppLayout from "./layouts/AppLayout"; //Importo AppLayout
import Home from "./pages/Home"; //Importo Home
import MoviesPage from "./pages/MoviesPage"; //Importo MoviesPage
import About from "./pages/About"; //Importo About

function App() {
  /*  Constante per la condizione, prima del return, questo pasarà attraverso props a Header*/
  const nameApp = "Movie App";
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AppLayout nameApp={nameApp} />}>
            <Route element={<Home />} path="/"/>
            <Route element={<About />} path="/about"/>
            <Route element={<MoviesPage />} path="/movies" />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
