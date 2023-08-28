import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Palettes from "./components/Palettes";
import Palette from "./components/Palette";

function App() {
  return (
    <BrowserRouter>
      <AppStyled>
        <div className="grid"></div>
        <Routes>
          <Route path="/" element={<Palettes />} />
          <Route path="/palette/:id" element={<Palette />} />
        </Routes>
      </AppStyled>
    </BrowserRouter>
  );
}

const AppStyled = styled.div`
  min-height: 100vh;
  background-color: slateblue;
  position: relative;
  .grid {
    position: absolute;
    width: 100%;
    height: 100%;
  }
`;

export default App;
