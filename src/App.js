import styled from "styled-components";


import Palettes from './Components/Palettes'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Palette from "./Components/Palette";

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
   background: radial-gradient(circle, rgba(160,219,152,1) 0%, rgba(255,255,255,1) 100%);

      z-index: 0;
    }
`;

export default App;
