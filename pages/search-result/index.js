import React, {Fragment} from 'react';
import PageTitle from '../../components/pagetitle';
import { connect } from "react-redux";
import Navbar from '../../components/Navbar';
import { addToCart } from "../../store/actions/action";
import SearchRooms from '../../components/SearchRooms/SearchRooms';
import api from "../../api";
import Scrollbar from '../../components/scrollbar';
import Footer from '../../components/footer';
import { useRouter } from 'next/router';

const SearchResults =({ addToCart }) => {
    const router = useRouter();
    const { storeys, bedrooms, lotWidth } = router.query;

    const productsArray = api();
    
    const addToCartProduct = (product, qty = 1) => {
        addToCart(product, qty);
      };

    const products = productsArray

    return(
        <Fragment>
            <Navbar hclass={'wpo-header-style-3'}/>
            <PageTitle pageTitle={'Hotel Booking Search'} pagesub={'Search'}/> 
              <section className="wpo-shop-page">
                  <div className="container">
                      <div className="row">
                          <div className="col-lg-12">
                              {/* <SearchRooms
                                      addToCartProduct={addToCartProduct}
                                      products={products}
                                  /> */}
                                  <h2>Search Results</h2>
                                    <div>
                                        <p>Selected Storeys: {storeys}</p>
                                        <p>Selected Bedrooms: {bedrooms}</p>
                                        <p>Selected Lot Width: {lotWidth}</p>
                                    </div>
                          </div>
                      </div>
                  </div>
              </section>
              <Footer/>
            <Scrollbar/>
        </Fragment>
    )
};

export default connect(null, { addToCart })(SearchResults);