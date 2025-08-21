import React from "react";

function HomePage() {
  return (
    <div className="flex justify-between">
      {/* Hero Section */}
      <section className="text-center py-5 ">
        <h1>
          From Ideas To Impact
          <br />
          Raise Fund Easily
          <br />
          On Fundbook
        </h1>
      </section>

      {/* Featured Campaigns Section */}
      <section className="container py-5">
        <h2 className="mb-4 text-center">Our Featured Campaigns</h2>

        {/* Carousel Component */}
        <div
          id="fundbookCarousel"
          className="carousel slide"
          data-bs-ride="carousel"
        >

          {/* Carousel Inner */}
          <div className="carousel-inner ">
            <div className="carousel-item active">
              <img
                src="https://picsum.photos/800/400?random=1"
                className="d-block  w-100 rounded-full"
                alt="Campaign 1"
              />
              <div className="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/800/400?random=2"
                className="d-block  rounded-full"
                alt="Campaign 2"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Campaign Two</h5>
                <p>Empowering communities through funding.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="https://picsum.photos/800/400?random=3"
                className="d-block rounded-full"
                alt="Campaign 3"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5>Campaign Three</h5>
                <p>Turning dreams into reality with support.</p>
              </div>
            </div>
          </div>

        
        </div>
      </section>
    </div>
  );
}

export default HomePage;
