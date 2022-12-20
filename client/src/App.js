import { Routes, Route, BrowserRouter} from 'react-router-dom';
import config from "~/config";
import Dashboard from "~/Page/Dashboard/Dashboard";
import Home from "~/Page/Web/Home";
import Login from "~/Page/Login/Login";


function App() {
    return (
                <Routes>
                  <Route path={config.routes.login} element={<Login/>}/>
                      <Route index path={config.routes.dashboard} element={<Dashboard/>}/>
                      <Route index path={config.routes.home} element={<Home/>}/>
                </Routes>
    );
}

export default App;
