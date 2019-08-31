import React from 'react';
import ArticlesList from './articles/ArticlesList';
import { Link } from '@reach/router';

function Home() {
  return (
    <div className="Home jr">
      <br />
      <h3 className="text-white">Sort those Articles</h3>
      <div className="bd-example">
        <div
          id="carouselExampleCaptions"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleCaptions"
              data-slide-to="0"
              className="active"
            />
            <li data-target="#carouselExampleCaptions" data-slide-to="1" />
            <li data-target="#carouselExampleCaptions" data-slide-to="2" />
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <Link to="topics/coding">
                <img
                  style={{ width: '40rem' }}
                  src="https://i.kinja-img.com/gawker-media/image/upload/s--rQaEvfMt--/c_scale,f_auto,fl_progressive,q_80,w_800/qz2dwlp7qdghie0c4vn2.jpg"
                  className="d-block h-50 mx-auto border border-white img-fluid"
                  alt="..."
                />
              </Link>
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-wrap">Technology </h5>
                <p>
                  Nulla vitae elit libero, a pharetra augue mollis interdum.
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <Link to="topics/football">
                <img
                  style={{ width: '40rem' }}
                  src="https://static01.nyt.com/images/2019/04/16/sports/16onsoccerweb-2/merlin_153612873_5bb119b9-8972-4087-b4fd-371cab8c5ba2-articleLarge.jpg?quality=75&auto=webp&disable=upscale"
                  className="d-block h-50 mx-auto border border-white img-fluid "
                  alt="..."
                />
              </Link>
              <div className="carousel-caption d-none d-md-block">
                <h5>Sport</h5>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
            <div className="carousel-item">
              <Link to="topics/cooking">
                <img
                  style={{ width: '40rem' }}
                  src="https://static.wixstatic.com/media/27344d_3777bfd24d424ab6a239459835447aec~mv2_d_1980_1320_s_2.jpg/v1/fill/w_626,h_417/27344d_3777bfd24d424ab6a239459835447aec~mv2_d_1980_1320_s_2.jpg"
                  className="d-block h-50 mx-auto border border-white img-fluid"
                  alt="..."
                />
              </Link>
              <div className="carousel-caption d-none d-md-block">
                <h5>Food</h5>
                <p>
                  Praesent commodo cursus magna, vel scelerisque nisl
                  consectetur.
                </p>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleCaptions"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </div>
      <ArticlesList className="mt-1" />
    </div>
  );
}

export default Home;
