import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/home/home.component.jsx";
import { Navigation } from "./routes/navigation/navigation.component.jsx";
import { Authentication } from "./routes/authentication/authentication.component.jsx";
import { Shop } from "./routes/shop/shop.component";
import { Checkout } from "./routes/checkout/checkout.component";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        {/* when you match / add index as base component */}
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="checkout" element={<Checkout />} />
        <Route path="auth" element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
