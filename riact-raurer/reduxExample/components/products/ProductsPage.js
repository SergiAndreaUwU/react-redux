import React from "react";
import { connect } from "react-redux";
import * as productActions from "../../redux/actions/productActions";
import PropTypes from "prop-types";
import { bindActionCreators } from "redux";
import ProductList from "./ProductsList";


class ProductsPage extends React.Component {
  componentDidMount() {
    const { products, actions } = this.props;

    if (products.length === 0) {
      actions.loadProducts().catch(error => {
        alert("Loading productss failed" + error);
      });
    }

  }

  render() {
    return (
      <>
        <h2>Products</h2>

        <button
          style={{ marginBottom: 20 }}
          className="btn btn-primary add-products"
          onClick={() => this.setState({ redirectToAddProductPage: true })}
        >
          Add Product
        </button>

        <ProductList products={this.props.products} />
      </>
    );
  }
}

ProductsPage.propTypes = {
  authors: PropTypes.array.isRequired,
  products: PropTypes.array.isRequired,
  actions: PropTypes.object.isRequired
};

function mapStateToProps(state) {
  return {
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      loadProducts: bindActionCreators(productActions.loadProducts, dispatch),
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductsPage);
