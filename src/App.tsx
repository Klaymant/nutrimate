import { useState } from "react";
import NavButton from "./component/NavButton";
import Bmi from "./page/Bmi";

const App = () => {
  const [pageSelection, setPageSelection] = useState<'bmi' | 'macro'>('bmi');

  return (
    <>
      <div className="flex justify-center">
        <div>
          <nav className="mt-2 font-semibold">
            <NavButton onClick={() => setPageSelection('bmi')} active={pageSelection === 'bmi'}>BMI</NavButton>
            <NavButton onClick={() => setPageSelection('macro')} active={pageSelection === 'macro'}>Macro</NavButton>
          </nav>

          <section className="rounded">
            {pageSelection === 'bmi' && <Bmi />}
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
