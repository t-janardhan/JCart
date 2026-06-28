import prod from '../assets/images/prod.jpg'
export default function Cart() {
    return (
        <>
            <div className="container">
                <div className="row m-0 py-5">

                <div className="col-md-8">
                    <div className="card shadow-sm p-3">

                        <div className="d-flex align-items-center border-bottom pb-3 mb-3">
                            <img src={prod} className="me-3 rounded" alt="product" />

                            <div className="flex-grow-1">
                                <h5>Product Name</h5>
                                <p className="text-muted mb-1">Price: ₹500</p>

                                <div className="d-flex align-items-center">
                                    <button className="btn btn-sm btn-outline-secondary">-</button>
                                    <span className="mx-2">1</span>
                                    <button className="btn btn-sm btn-outline-secondary">+</button>
                                </div>
                            </div>

                            <div>
                                <h6 className="text-success">₹500</h6>
                                <button className="btn btn-sm btn-danger mt-2">Remove</button>
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <img src={prod} className="me-3 rounded" alt="product" />

                            <div className="flex-grow-1">
                                <h5>Another Product</h5>
                                <p className="text-muted mb-1">Price: ₹300</p>

                                <div className="d-flex align-items-center">
                                    <button className="btn btn-sm btn-outline-secondary">-</button>
                                    <span className="mx-2">2</span>
                                    <button className="btn btn-sm btn-outline-secondary">+</button>
                                </div>
                            </div>

                            <div>
                                <h6 className="text-success">₹600</h6>
                                <button className="btn btn-sm btn-danger mt-2">Remove</button>
                            </div>
                        </div>

                    </div>
                </div>

                <div className="col-md-4">
                    <div className="card shadow-sm p-3">
                        <h5>Order Summary</h5>

                        <p className="d-flex justify-content-between">
                            <span>Subtotal</span>
                            <span>₹1100</span>
                        </p>

                        <p className="d-flex justify-content-between">
                            <span>Delivery</span>
                            <span>₹50</span>
                        </p>


                        <h5 className="d-flex justify-content-between">
                            <span>Total</span>
                            <span className="text-success">₹1150</span>
                        </h5>

                        <button className="btn btn-success w-100 mt-3">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>

            </div>
            </div>
        </>
    )
}