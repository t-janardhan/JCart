export default function Orders() {
    return (
        <>


            <div className="container my-5">
                <h2 className="mb-4">📦 My Orders</h2>

                <div className="card shadow-sm">
                    <div className="table-responsive">
                        <table className="table table-bordered align-middle mb-0">
                            <thead className="table-dark">
                                <tr>
                                    <th>Order ID</th>
                                    <th>Product</th>
                                    <th>Date</th>
                                    <th>Amount</th>
                                    <th>Status</th>
                                    <th>Action</th>
                                </tr>
                            </thead>

                            <tbody>
                                <tr>
                                    <td>#ORD123</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img src="https://via.placeholder.com/60" className="me-2 rounded" />
                                            <span>Smart Watch</span>
                                        </div>
                                    </td>
                                    <td>28 Jun 2026</td>
                                    <td>₹1999</td>
                                    <td><span className="badge bg-success">Delivered</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">View</button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#ORD124</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img src="https://via.placeholder.com/60" className="me-2 rounded" />
                                            <span>Headphones</span>
                                        </div>
                                    </td>
                                    <td>25 Jun 2026</td>
                                    <td>₹999</td>
                                    <td><span className="badge bg-warning text-dark">Shipped</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-primary">Track</button>
                                    </td>
                                </tr>

                                <tr>
                                    <td>#ORD125</td>
                                    <td>
                                        <div className="d-flex align-items-center">
                                            <img src="https://via.placeholder.com/60" className="me-2 rounded" />
                                            <span>Mobile Case</span>
                                        </div>
                                    </td>
                                    <td>22 Jun 2026</td>
                                    <td>₹299</td>
                                    <td><span className="badge bg-danger">Cancelled</span></td>
                                    <td>
                                        <button className="btn btn-sm btn-secondary">Details</button>
                                    </td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        </>
    )
}