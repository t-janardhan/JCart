import Banners from "../components/Banner";

import Products from "../components/Products";

export default function Dashboard() {
    return (
        <>
            <Banners />
            <div className="container">
                <Products />
            </div>
        </>
    )
}