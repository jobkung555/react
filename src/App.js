import AppRouter from "./router/Public";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

function App() {
  return (
    <ShoppingCartProvider>
      <AppRouter/>
    </ShoppingCartProvider>
  );
}

export default App;
