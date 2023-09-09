import { UserDataProvider } from "./providers/UserProvider";
import { Route, Routes } from "react-router";
import { routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "./Menu";
import { SettingsProvider } from "./providers/SettingsProvider";
import { UnitSystemSelector } from "./component/UnitSystemSelector";

const App = () => {
  return (
    <>
      <UserDataProvider>
        <SettingsProvider>
          <BrowserRouter>
            <section className="flex justify-center mb-8">
              <div className="w-full mx-4 sm:w-96">
                <nav className="mt-4 font-semibold">
                  <Menu />
                </nav>
                <UnitSystemSelector />

                <main id="main-content" className="rounded-md bg-background-dark mt-4 p-2">
                  <Routes>
                    {routes.map((route, index) => <Route key={index} {...route} />)}
                  </Routes>
                </main>
              </div>
            </section>
          </BrowserRouter>
        </SettingsProvider>
      </UserDataProvider>
    </>
  );
};

export default App;
