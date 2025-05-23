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

function App() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<MainPage />} />
                    <Route path="episodes" element={<EpisodesPage />}>
                        <Route path=":id" element={<EpisodePage />} />
                    </Route>
                    <Route path="heroes" element={<HeroesPage />}>
                        <Route path=":id" element={<HeroPage />} />
                    </Route>
                    <Route path="locations" element={<LocationsPage />}>
                        <Route path=":id" element={<LocationPage />} />
                    </Route>
                </Route>
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </>
    );
}

export default App;
