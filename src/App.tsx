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
                  <Link to='/' className="site-title">Nutrimate</Link>
                  <nav id="main" className="font-semibold">
                    <Menu />
                  </nav>
                </header>
                <main id="main-content" className="rounded-md p-2">
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
