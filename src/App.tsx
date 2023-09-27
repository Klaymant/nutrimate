import { UserDataProvider } from "./providers/UserProvider";
import { Route, Routes } from "react-router";
import { routes } from "./routes";
import { BrowserRouter, Link } from "react-router-dom";
import { Menu } from "./Menu";
import { SettingsProvider } from "./providers/SettingsProvider";
import { Footer } from "./component/Footer";

const App = () => {
  return (
    <>
      <UserDataProvider>
        <SettingsProvider>
          <BrowserRouter>
            <section className="flex justify-center">
              <div className="w-full">
                <header>
                  <nav id="main" className="font-semibold">
                    <Menu />
                  </nav>
                </header>
                <main>
                  <Routes>
                    {routes.map((route, index) => <Route key={index} {...route} />)}
                  </Routes>
                </main>
              </div>
            </section>
            <Footer />
          </BrowserRouter>
        </SettingsProvider>
      </UserDataProvider>
    </>
  );
};

export default App;
