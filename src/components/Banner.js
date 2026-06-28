export default function Banners() {
    return (
        <>
            <div id="carouselExample" className="carousel slide" data-bs-ride="carousel">

                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="0" className="active"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="1"></button>
                    <button type="button" data-bs-target="#carouselExample" data-bs-slide-to="2"></button>
                </div>

                <div className="carousel-inner">

                    <div className="carousel-item active">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/006/774/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" className="d-block w-100" alt="Banner 1"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>First Slide</h5>
                                <p>Some description here..</p>
                            </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/006/774/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" className="d-block w-100" alt="Banner 2"/>
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Second Slide</h5>
                                <p>More content here</p>
                            </div>
                    </div>

                    <div className="carousel-item">
                        <img src="https://static.vecteezy.com/system/resources/thumbnails/002/006/774/small/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-backgroud-for-banner-market-ecommerce-free-vector.jpg" className="d-block w-100" alt="Banner 3" />
                        <div className="carousel-caption d-none d-md-block">
                            <h5>Third Slide</h5>
                            <p>More content here</p>
                        </div>
                    </div>

                </div>

                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon"></span>
                </button>

                <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
                    <span className="carousel-control-next-icon"></span>
                </button>

            </div>
        </>
    )
}