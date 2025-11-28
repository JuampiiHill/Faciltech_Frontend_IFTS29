import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const ProductCard = ({ producto, agregarAlCarrito }) => {
  const { title, price, image } = producto;

  const agregar = () => {
    agregarAlCarrito(producto);
    toast.success("Producto añadido exitosamente", {
      position: "top-right",
      autoClose: 2000,
    });
  };

   return (
    <div className="col-md-4 mb-4">
      <div className="card h-100 d-flex flex-column">
        <Link to={`/product/${producto.id}`}>
          <img
            src={image}
            className="card-img-top p-3"
            style={{ height: "200px", objectFit: "contain", cursor: "pointer" }}
            alt={title}
          />
        </Link>

        <div className="card-body d-flex flex-column justify-content-between">
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">${parseFloat(price).toFixed(2)}</p>
          </div>

          <div className="mt-2 d-flex justify-content-between">
            <Link to={`/product/${producto.id}`} className="btn btn-outline-primary btn-sm">
              Ver más
            </Link>

            <button 
              className="btn btn-success btn-sm"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                agregar();
              }}
            >
              Agregar al carrito
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ProductCard;