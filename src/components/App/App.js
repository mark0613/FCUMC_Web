import {
    BrowserRouter,
    Routes,
    Route,
} from "react-router-dom";

import { Home } from '../Home';
import { Announcement } from '../Announcement';
import { NotFoundPage } from '../NotFoundPage';

export function App() {
    return (
        <BrowserRouter basename="/fcumc">
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="myfcu" element={<Announcement sourceName="myfcu" />} />
                <Route path="fb" element={<Announcement sourceName="fb" />} />
                <Route path="ig" element={<Announcement sourceName="ig" />} />
                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </BrowserRouter>
    );
}
