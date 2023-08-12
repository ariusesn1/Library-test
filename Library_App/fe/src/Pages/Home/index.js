import React from 'react';
import './style.css';
import './js.js';
import Slide from './slide';
<head>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap/dist/js/bootstrap.bundle.min.js"></script>
</head>


export default function home() {
  return (
    <div>
        <Slide/>
        <div className="wrapper"> 
            <h1>DANH MỤC</h1>
            <div className="container">
                <div className="row g-1">
                    <div className="col-md-3">
                        <div className="card p-3">
                            <div className="text-center">
                                <img src="https://i.imgur.com/w2rCsEw.jpg" width="200"/>                        
                            </div>
                            <div className="product-details">
                                <span className="font-weight-bold d-block">$ 7.00</span>
                                <span>Red Redish</span>
                                <div className="buttons d-flex flex-row">
                                    <div className="cart"><i className="fa fa-shopping-cart"></i></div> <button className="btn btn-success cart-button btn-block"><span className="dot">1</span>Add to cart </button>
                                </div>
                                <div className="weight">
                                    <small>1 piece 2.5kg</small>                                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-3">
                            <div className="text-center">
                                <img src="https://i.imgur.com/ZRUetRF.jpg" width="200"/>
                            </div>
                            <div className="product-details">
                                <span className="font-weight-bold d-block">$ 7.00</span>
                                <span>Red Redish</span>
                                <div className="buttons d-flex flex-row">
                                    <div className="cart"><i className="fa fa-shopping-cart"></i></div> <button className="btn btn-success cart-button btn-block"><span className="dot">1</span>Add to cart </button>
                                </div>
                                <div className="weight">
                                    <small>1 piece 2.5kg</small>                              
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-3">
                            <div className="text-center">
                                <img src="https://i.imgur.com/0M7pldG.jpg" width="200"/> 
                            </div>
                            <div className="product-details">
                                <span className="font-weight-bold d-block">$ 7.00</span>
                                <span>Red Redish</span>
                                <div className="buttons d-flex flex-row">
                                    <div className="cart"><i className="fa fa-shopping-cart"></i></div> <button className="btn btn-success cart-button btn-block"><span className="dot">1</span>Add to cart </button>
                                </div>
                                <div className="weight">
                                    <small>1 piece 2.5kg</small>                               
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-3">
                            <div className="text-center">
                                <img src="https://i.imgur.com/emb60L5.jpg" width="200"/> 
                            </div>
                            <div className="product-details">
                                <span className="font-weight-bold d-block">$ 7.00</span>
                                <span>Red Redish</span>
                                <div className="buttons d-flex flex-row">
                                    <div className="cart"><i className="fa fa-shopping-cart"></i></div> <button className="btn btn-success cart-button btn-block"><span className="dot">1</span>Add to cart </button>
                                </div>
                                <div className="weight">
                                    <small>20 piece 2.5kg</small>                          
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <br></br>
            <h1>SẢN PHẨM</h1>
            <div className="container">
                <div className="row g-1">
                    <div className="col-md-3">
                        <div className="card p-3">
                            <div className="text-center">
                                <img src="https://i.imgur.com/w2rCsEw.jpg" width="200"/>                        
                            </div>
                            <div className="product-details">
                                <span className="font-weight-bold d-block">$ 7.00</span>
                                <span>Red Redish</span>
                                <div className="buttons d-flex flex-row">
                                    <div className="cart"><i className="fa fa-shopping-cart"></i></div> <button className="btn btn-success cart-button btn-block"><span className="dot">1</span>Add to cart </button>
                                </div>
                                <div className="weight">
                                    <small>1 piece 2.5kg</small>                                                   
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-3">
                            <div className="text-center">
                                <img src="https://i.imgur.com/ZRUetRF.jpg" width="200"/>
                            </div>
                            <div className="product-details">
                                <span className="font-weight-bold d-block">$ 7.00</span>
                                <span>Red Redish</span>
                                <div className="buttons d-flex flex-row">
                                    <div className="cart"><i className="fa fa-shopping-cart"></i></div> <button className="btn btn-success cart-button btn-block"><span className="dot">1</span>Add to cart </button>
                                </div>
                                <div className="weight">
                                    <small>1 piece 2.5kg</small>                              
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-3">
                            <div className="text-center">
                                <img src="https://i.imgur.com/0M7pldG.jpg" width="200"/> 
                            </div>
                            <div className="product-details">
                                <span className="font-weight-bold d-block">$ 7.00</span>
                                <span>Red Redish</span>
                                <div className="buttons d-flex flex-row">
                                    <div className="cart"><i className="fa fa-shopping-cart"></i></div> <button className="btn btn-success cart-button btn-block"><span className="dot">1</span>Add to cart </button>
                                </div>
                                <div className="weight">
                                    <small>1 piece 2.5kg</small>                               
                                </div>
                            </div> 
                        </div>
                    </div>
                    <div className="col-md-3">
                        <div className="card p-3">
                            <div className="text-center">
                                <img src="https://i.imgur.com/emb60L5.jpg" width="200"/> 
                            </div>
                            <div className="product-details">
                                <span className="font-weight-bold d-block">$ 7.00</span>
                                <span>Red Redish</span>
                                <div className="buttons d-flex flex-row">
                                    <div className="cart"><i className="fa fa-shopping-cart"></i></div> <button className="btn btn-success cart-button btn-block"><span className="dot">1</span>Add to cart </button>
                                </div>
                                <div className="weight">
                                    <small>20 piece 2.5kg</small>                          
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
    
  )
}





