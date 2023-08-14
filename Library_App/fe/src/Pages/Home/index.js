import React from 'react';
import './style.css';
import './head';

export default function index() {
  return (
    <div className="App">
        <section className="section-pagetop bg">
            <div className="container">
                <h2 className="title-page">Book Available</h2>
            </div> 
        </section>
        <section className="section-content padding-y">
            <div className="container">
                <div className="row">
                    <aside className="col-md-3">
                        <div className="card">
                            <article className="filter-group">
                                <header className="card-header">
                                    <a href="#" data-toggle="collapse" data-target="#collapse_1" aria-expanded="true" className="">
                                        <i className="icon-control fa fa-chevron-down"></i>
                                        <h6 className="title">Category available</h6>
                                    </a>
                                </header>
                                <div className="filter-content collapse show" id="collapse_1">
                                    <div className="card-body">
                                        <form className="pb-3">
                                        <div className="input-group">
                                        <input type="text" className="form-control" placeholder="Search" />
                                        <div className="input-group-append">
                                            <button className="btn btn-light" type="button"><i className="fa fa-search"></i></button>
                                        </div>
                                        </div>
                                        </form>
                                        
                                        <ul className="list-menu">
                                            <li>
                                                <a href="/Library_App/fe/src/Pages/Author/Author.js">Author</a>
                                            </li>
                                        </ul>
                                    </div> 
                                </div>
                            </article>
                        </div> 
                    </aside> 
                    <main className="col-md-9">
                        <header className="border-bottom mb-4 pb-3">
                                <div className="form-inline">
                                    <select className="mr-2 form-control">
                                        <option>Latest items</option>
                                        <option>Trending</option>
                                        <option>Most Popular</option>
                                        <option>Cheapest</option>
                                    </select>
                                </div>
                        </header>
                        <div className="row">
                            <div className="col-md-4">
                                <figure className="card card-product-grid">
                                    <div className="img-wrap"> 
                                        <img src="https://cf.shopee.vn/file/faf244b30f2a2dc8515a6983cc57327a" width={100}/>
                                    </div> 
                                    <figcaption className="info-wrap">
                                        <div className="fix-height">
                                            <a href="#" className="title">Sách Ngôn Tình</a>
                                            <br/>
                                            <a className="btn-overlay" href="#"><i className="fa fa-search-plus"></i> Xem Chi Tiết</a>
                                        </div>
                                    
                                    </figcaption>
                                </figure>
                            </div> 
                        </div> 
                    </main>
                </div>
            </div> 
        </section>
    </div>
  );
}
