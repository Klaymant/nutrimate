import { useState } from "react";
import NavButton from "./component/NavButton";
import Bmi from "./page/Bmi";
import Macros from "./page/Macros";
import { UserDataProvider } from "./providers/UserProvider";

const App = () => {
  const [pageSelection, setPageSelection] = useState<'bmi' | 'macro'>('bmi');

  return (
    <>
      <UserDataProvider>
        <div className="flex justify-center mb-8">
          <div className="w-full mx-4 sm:w-96">
            <nav className="mt-2 font-semibold">
              <NavButton onClick={() => setPageSelection('bmi')} active={pageSelection === 'bmi'}>BMI</NavButton>
              <NavButton onClick={() => setPageSelection('macro')} active={pageSelection === 'macro'}>Macros</NavButton>
            </nav>

            <section className="rounded-xl bg-background-dark mt-4 p-4">
              {pageSelection === 'bmi' && <Bmi />}
              {pageSelection === 'macro' && <Macros />}
            </section>
          </div>
        </div>
      </UserDataProvider>
    </>
  );
};

export default App;
