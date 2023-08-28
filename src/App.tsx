import { UserDataProvider } from "./providers/UserProvider";
import { Route, Routes } from "react-router";
import { routes } from "./routes";
import { BrowserRouter } from "react-router-dom";
import { Menu } from "./Menu";

const App = () => {
  return (
    <>
      <UserDataProvider>
        <BrowserRouter>
          <div className="flex justify-center mb-8">
            <div className="w-full mx-4 sm:w-96">
              <nav className="mt-2 font-semibold">
                <Menu />
              </nav>

              <section className="rounded-xl bg-background-dark mt-4 p-4">
                <Routes>
                  {routes.map((route, index) => <Route key={index} {...route} />)}
                </Routes>
              </section>
            </div>
          </div>
        </BrowserRouter>
      </UserDataProvider>
    </>
  );
};

export default App;
