import { useNavigate } from 'react-router-dom';
import '../assets/css/products.css';
import prod from '../assets/images/prod.jpg'
import { useEffect, useState } from 'react';
export default function Products() {
    const navigate = useNavigate();
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://dummyjson.com/products").then(res => res.json()).then(data => setProducts(data.products));

    }, []);
    const [sortby,setSortby] = useState("")
    const [catselect, setCatselect] = useState("all");
    const categories = [...new Set(products.map(p => p.category))];
    const filteredProducts = catselect == 'all' ? products : products.filter(p=> p.category == catselect);
    const sortedProds = [...filteredProducts];
    if(sortby == "price-low"){
        sortedProds.sort((a,b)=> a.price - b.price)
    }
    else if(sortby == "price-high"){
        sortedProds.sort((a,b)=> b.price - a.price)
    }
    else if(sortby == "rating"){
        sortedProds.sort((a,b)=> b.rating - a.rating)
    }
    else if(sortby == "discount"){
        sortedProds.sort((a,b)=> b.discountPercentage - a.discountPercentage)
    }
    return (
        <>
            <div className="py-5">
                <h3>Shop by Category</h3>
                <ul className="cat-btns">
                    <li>
                        <button className="btn" onClick={()=> setCatselect("all")}>All</button>
                    </li>
                    {
                        categories.map((c, i) =>
                            <li key={i}>
                                <button className="btn" onClick={()=> setCatselect(c)}>{c}</button>
                            </li>
                        )
                    }
                    <li className='ms-auto'>
                        <select value={sortby} onChange={(e)=> setSortby(e.target.value)} className='form-control' name="" id="">
                            <option value="" disabled selected>Sort by</option>
                            <option value="price-low">Price Low-High</option>
                            <option value="price-high">Price High-Low</option>
                            <option value="rating">Rating</option>
                            <option value="discount">Discount</option>
                        </select>
                    </li>

                </ul>
                <ul className="products-list">
                    {
                        sortedProds.map((p, i) =>
                            <li key={p.id}>
                                <div className="card shadow-sm">
                                    <img src={p.thumbnail} className="card-img-top" alt="Product" />
                                  <i className="bi bi-star"></i><span>{p.rating}</span>
                                    <div className="card-body text-center">
                                        <h5 className="card-title">{p.title}</h5>
                                        <p className="card-text text-muted">{p.description}</p>

                                        <h6 className="text-success mb-3">₹{p.price}</h6>
                                        <p>Discount: {p.discountPercentage}%</p>
                                        <button className="btn btn-primary w-100" onClick={() => navigate(`/prodinfo/${p.id}`)}>Add to Cart</button>
                                    </div>
                                </div>
                            </li>
                        )
                    }


                </ul>
            </div>
        </>
    )
}