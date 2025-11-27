import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useAuthContext } from "./context/AuthContext";
import { useProductsContext } from "./context/ProductsContext";


import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./components/Cart";
import Admin from "./pages/Admin";
import Layout from "./components/Layout";
import ProtectedRoute from "./components/ProtectedRoute";
import FormularioProducto from "./components/FormularioProducto";

function App() {
  const [carrito, setCarrito] = useState([]);
  const { user } = useAuthContext();
  const { agregarProducto } = useProductsContext();  // ← ACÁ ADENTRO

  const eliminarDelCarrito = (id) => {
    const index = carrito.findIndex((item) => item.id === id);
    if (index !== -1) {
      const nuevoCarrito = [...carrito];
      nuevoCarrito.splice(index, 1);
      setCarrito(nuevoCarrito);
    }
  };

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route
          index
          element={
            <Home agregarAlCarrito={(item) => setCarrito([...carrito, item])} />
          }
        />
        <Route
          path="/product/:id"
          element={
            <ProductDetail
              agregarAlCarrito={(item) => setCarrito([...carrito, item])}
            />
          }
        />
        <Route
          path="/cart"
          element={
            <Cart carrito={carrito} eliminarDelCarrito={eliminarDelCarrito} />
          }
        />
        <Route
          path="/admin"
          element={
            <ProtectedRoute>
              <Admin />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/nuevo-producto"
          element={
            <ProtectedRoute>
              <FormularioProducto onAgregar={agregarProducto} />
            </ProtectedRoute>
          }
        />
        <Route
          path="/admin/editar"
          element={
            <ProtectedRoute>
              <FormularioProducto />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}

export default App;

