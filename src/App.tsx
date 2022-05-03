import { useState } from "react";
import NavButton from "./component/NavButton";
import Bmi from "./page/Bmi";

const App = () => {
  const [pageSelection, setPageSelection] = useState<'bmi'>('bmi');

  return (
    <>
      <div className="flex justify-center">
        <div>
          <nav className="mt-2 font-semibold">
            <NavButton onClick={() => setPageSelection('bmi')}>BMI</NavButton>
          </nav>

          <section className="rounded p-4 m-4 bg-silk">
            {pageSelection === 'bmi' && <Bmi />}
          </section>
        </div>
      </div>
    </>
  );
};

export default App;
