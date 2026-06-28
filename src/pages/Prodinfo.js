import { useParams } from 'react-router-dom'
import prod from '../assets/images/prod.jpg'
import { useEffect, useState } from 'react';
export default function ProdInfo() {
    const param = useParams();
    const [p, setprodInfo] = useState({});
    useEffect(()=> {
        fetch(`https://dummyjson.com/products/${param.id}`).then(res=> res.json()).then(data=> setprodInfo(data))
    },[param.id]);
    
    return (
        <>

            <div className="container my-5">
                <div className="row">

                    <div className="col-md-5">
                        <div className="card shadow-sm p-3">
                            <img src={p.images?.[0]} className="img-fluid rounded" alt="product" />
                        </div>
                    </div>

                    <div className="col-md-7">
                        <div className="card shadow-sm p-4">

                            <h3>{p.title}</h3>
                            <span className='badge bg-primary' style={{width: "max-content"}}>{p.category}</span>
                            <p className="text-warning">★{p.rating} ({p.reviews?.length} reviews)</p>
                            <h4>
                                <span className="text-success">₹{p.price}</span>
                                <small className="text-muted font-sm">({p.discountPercentage}% Off)</small>
                            </h4>

                            <p className="mt-3">
                                {p.description}
                            </p>

                            <div className="d-flex align-items-center mb-3">
                                <label className="me-2">Qty:</label>
                                <button className="btn btn-outline-secondary btn-sm">-</button>
                                <span className="mx-2">1</span>
                                <button className="btn btn-outline-secondary btn-sm">+</button>
                            </div>

                            <div className="d-flex gap-2">
                                <button className="btn btn-primary w-50">Add to Cart</button>
                                <button className="btn btn-success w-50">Buy Now</button>
                            </div>

                        </div>
                    </div>

                </div>

                <div className="card shadow-sm mt-5 p-4">
                    <ul className="nav nav-tabs" id="productTab" role="tablist">
                        <li className="nav-item">
                            <button className="nav-link active" data-bs-toggle="tab" data-bs-target="#desc">Description</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#spec">Specifications</button>
                        </li>
                        <li className="nav-item">
                            <button className="nav-link" data-bs-toggle="tab" data-bs-target="#review">Reviews</button>
                        </li>
                    </ul>

                    <div className="tab-content mt-3">
                        <div className="tab-pane fade show active" id="desc">
                            <p>Detailed product description goes here.</p>
                        </div>

                        <div className="tab-pane fade" id="spec">
                            <ul>
                                <li>Battery: 7 Days</li>
                                <li>Water Resistant</li>
                                <li>Bluetooth 5.0</li>
                            </ul>
                        </div>

                        <div className="tab-pane fade" id="review">
                            <p>⭐ 4.5/5 based on customer reviews</p>
                        </div>
                    </div>
                </div>

            </div>

        </>
    )
}