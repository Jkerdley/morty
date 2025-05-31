import { Route, Routes } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { MainPage } from "./pages/main/page";
import { HeroesPage } from "./pages/heroes/page";
import { EpisodesPage } from "./pages/episodes/page";
import { NotFoundPage } from "./pages/404/page";
import { EpisodePage } from "./pages/episodes/episode/page";
import { HeroPage } from "./pages/heroes/hero/page";
import { LocationsPage } from "./pages/locations/page";
import { LocationPage } from "./pages/locations/location/page";
import { AuthProvider } from "./context/AuthProvider";
import { LoginPage } from "./pages/auth/login/page";
import { PrivateRoute } from "./modules/components/routes/PrivateRoute";

function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route
            index
            element={
              <PrivateRoute>
                <MainPage />
              </PrivateRoute>
            }
          />
          <Route
            path="episodes"
            element={
              <PrivateRoute>
                <EpisodesPage />
              </PrivateRoute>
            }
          >
            <Route path=":id" element={<EpisodePage />} />
          </Route>
          <Route
            path="heroes"
            element={
              <PrivateRoute>
                <HeroesPage />
              </PrivateRoute>
            }
          >
            <Route path=":id" element={<HeroPage />} />
          </Route>
          <Route
            path="locations"
            element={
              <PrivateRoute>
                <LocationsPage />
              </PrivateRoute>
            }
          >
            <Route path=":id" element={<LocationPage />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <PrivateRoute>
              <NotFoundPage />
            </PrivateRoute>
          }
        />
        <Route path="/auth">
          <Route path="login" element={<LoginPage />} />
          <Route path="registration" element={<LoginPage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
