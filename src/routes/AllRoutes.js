import { Routes, Route} from "react-router-dom";
import {HomePage,Cart, PageNotFound} from "../pages";

export const AllRoutes = () => {
  return (
    <div className="dark:bg-slate-800">
        <Routes>
              <Route path="/" element={ <HomePage title="Geeks Bazar"/> } />
              <Route path="/cart" element={ <Cart title="Cart"/> } />
              <Route path="*" element={ <PageNotFound title="Page Not Found"/> } />
        </Routes>
    </div>
  )
}
