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
            <section className="flex justify-center mb-4">
              <div className="w-full mx-4 sm:w-96">
                <h1><Link to='/'>🥗 Nutrimate</Link></h1>
                <nav id="main" className="mt-4 font-semibold">
                  <Menu />
                </nav>
                <main id="main-content" className="rounded-md bg-background-dark mt-4 p-2">
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
