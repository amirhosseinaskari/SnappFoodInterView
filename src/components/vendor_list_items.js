import Splash from "./splash";
import { store } from "../store/store";
import {connect} from 'react-redux';

function VendorListItems(props) {
    const list = props.list;
    const isLoading = store.getState().entities.vendorLists.isLoading;
    return (<>
             <div className="list-container" onScroll={props.onScroll}>
                {list.length > 0 ? 
                <ul className="vendorList">
                    {Array.prototype.map.call(list,(item , index) => 
                        <li key={index}>
                            <a className="vendorList__link" href="#">
                            <section className="vendorList__card">
                                <div className="vendorList__card__total-info">
                                    <div className="image">
                                        <img src={item.data.defLogo} />
                                    </div>
                                    <div className="title">
                                        <h2>{item.data.title}</h2>
                                        <span className="description">
                                            {item.data.description}
                                        </span>
                                    </div>
                                </div>
                            <div className="vendorList__card__rate-price">
                                    <span className="price">
                                        {item.data.costsForTwo}
                                        تومان
                                    </span>
                                    <span className="rate">
                                        <span className="rate__number">
                                            {item.data.rate.toFixed(1)}
                                        </span>
                                        <span className="rate__vouteCount">
                                        ({item.data.voteCount})
                                        </span>  
                                    </span>
                            </div>
                            </section>
                        </a>
                    </li>)}
                </ul>
                : <Splash />}
                {isLoading ? 
                    <div className="list-container__loader">
                        <div className="loader-bar"></div>
                    </div> : null}
            </div>
      
    </>);
}

const stateMapToProps = (state) => ({
    list: state.entities.vendorLists.vendorList,
    isLoading: state.entities.vendorLists.isLoading
});
export default connect(stateMapToProps)(VendorListItems);