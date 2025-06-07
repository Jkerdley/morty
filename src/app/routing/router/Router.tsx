import { Route, Routes } from "react-router-dom";
import { lazy } from "react";
import { Layout } from "../../layout/Layout";
import { PrivateRoute } from "../privateRoute/PrivateRoute";
import { LazyComponent } from "../../../shared/components";
import { NotFoundPage } from "../../../pages/404/page";
import { LoginPage } from "../../../pages/auth/login/page";

const MainPage = lazy(() =>
  import("../../../pages/main/page").then((module) => ({
    default: module.MainPage,
  }))
);
const EpisodesPage = lazy(() =>
  import("../../../pages/episodes/page").then((module) => ({
    default: module.EpisodesPage,
  }))
);
const EpisodePage = lazy(() =>
  import("../../../pages/episodes/episode/page").then((module) => ({
    default: module.EpisodePage,
  }))
);
const HeroesPage = lazy(() =>
  import("../../../pages/heroes/page").then((module) => ({
    default: module.HeroesPage,
  }))
);
const HeroPage = lazy(() =>
  import("../../../pages/heroes/hero/page").then((module) => ({
    default: module.HeroPage,
  }))
);
const LocationsPage = lazy(() =>
  import("../../../pages/locations/page").then((module) => ({
    default: module.LocationsPage,
  }))
);
const LocationPage = lazy(() =>
  import("../../../pages/locations/location/page").then((module) => ({
    default: module.LocationPage,
  }))
);

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <PrivateRoute>
              <LazyComponent>
                <MainPage />
              </LazyComponent>
            </PrivateRoute>
          }
        />
        <Route
          path="episodes"
          element={
            <PrivateRoute>
              <LazyComponent>
                <EpisodesPage />
              </LazyComponent>
            </PrivateRoute>
          }
        >
          <Route path=":id" element={<EpisodePage />} />
        </Route>
        <Route
          path="heroes"
          element={
            <PrivateRoute>
              <LazyComponent>
                <HeroesPage />
              </LazyComponent>
            </PrivateRoute>
          }
        >
          <Route path=":id" element={<HeroPage />} />
        </Route>
        <Route
          path="locations"
          element={
            <PrivateRoute>
              <LazyComponent>
                <LocationsPage />
              </LazyComponent>
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

      <Route path="/">
        <Route
          path="login"
          element={
            <LazyComponent>
              <LoginPage />
            </LazyComponent>
          }
        />
      </Route>
    </Routes>
  );
}
