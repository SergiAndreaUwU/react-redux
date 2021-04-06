import {useState} from "react"
import { connect } from "react-redux";
import { getProducts } from "../api/productsApi";
import { loadProducts as loadProductsRedux } from "../redux/actions/productActions";

const ConnectedToReduxComp = ({ products, loadProductsRedux }) => {
  const [hasBeenClicked,setHasBeenClicked]=useState(false)
  console.log("render");

  //using redux
  const loadProducts = (e) => {
    e.preventDefault();
    loadProductsRedux();
    setHasBeenClicked(true)
  };

  // from API
  // const loadProducts=async(e)=>{
  //   e.preventDefault()
  //   const res= await getProducts()
  //   console.log(res)
  // }

  return (
    <>
      <p>here is the list  of {hasBeenClicked? "updated":""} products in redux-store</p>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <table>
          <thead style={{ fontWeight: "bolder" }}>
            <tr>
              <td>id</td>
              <td>nombre</td>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.nombre}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <button onClick={loadProducts} disabled={hasBeenClicked}>
        {hasBeenClicked? "updated Products!" : "get new Products"}
        </button>
    </>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    products: state.products,
  };
}

const mapDispatchToProps = {
  loadProductsRedux,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedToReduxComp);
