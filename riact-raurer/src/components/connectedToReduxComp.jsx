import { connect } from "react-redux";

const ConnectedToReduxComp = ({ products }) => {
  return (
    <>
      <p>here is the list of products in redux-store</p>
      <div style={{display:"flex",alignItems:"center", justifyContent:"center"}}>

      <table>
        <thead style={{fontWeight:"bolder"}}>
          <tr>
            <td>id</td>
            <td>nombre</td>
          </tr>
        </thead>
        <tbody>
          {products.map((product) => (
            <tr>
              <td>{product.id}</td>
              <td>{product.nombre}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>

    </>
  );
};

function mapStateToProps(state, ownProps) {
  return {
    products: state.products,
  };
}

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ConnectedToReduxComp);
