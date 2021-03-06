import { useState } from "react";
import Header from "./component/Header";
import NavButton from "./component/NavButton";
import Bmi from "./page/Bmi";
import Macros from "./page/Macros";

const App = () => {
  const [pageSelection, setPageSelection] = useState<'bmi' | 'macro'>('bmi');

  return (
    <>
      <div className="flex justify-center mb-8">
        <div className="w-full mx-4 sm:w-96">
          <nav className="mt-2 font-semibold">
            <NavButton onClick={() => setPageSelection('bmi')} active={pageSelection === 'bmi'}>BMI</NavButton>
            <NavButton onClick={() => setPageSelection('macro')} active={pageSelection === 'macro'}>Macros</NavButton>
          </nav>

          {pageSelection === 'bmi' && <Header pageTitle="BMI" />}
          {pageSelection === 'macro' && <Header pageTitle="Macronutrients" />}

          <section className="rounded-xl bg-cream-dark mt-4 p-4">
            {pageSelection === 'bmi' && <Bmi />}
            {pageSelection === 'macro' && <Macros />}
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
