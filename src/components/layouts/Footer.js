import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <FooterContainer className="main-footer">
      <div className="footer-middle">
        <div className="container">
          <div className="row">
            {/*column 1*/}
            <div className="col-md-3 col-sm-6">
              <h4> Contact Us </h4>
              <ul className="list-unstyled">
                <li>NC NEWS</li>
                <li>Ormskirk Central</li>
                <li>L39 2AT</li>
              </ul>
            </div>
            {/*column 2*/}
            <div className="col-md-3 col-sm-6">
              <h4> Merchandise </h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Jro Clothing</a>
                </li>
                <li>
                  <a href="/">Jro Footwear</a>
                </li>
                <li>
                  <a href="/">Jro Accessories</a>
                </li>
              </ul>
            </div>
            {/*column 3*/}
            <div className="col-md-3 col-sm-6">
              <h4> News & Events </h4>
              <ul className="list-unstyled">
                <li>
                  <a href="/">Coming Soon</a>
                </li>
                <li>
                  <a href="/">Charity Day</a>
                </li>
                <li>
                  <a href="/">Sponsor Us</a>
                </li>
              </ul>
            </div>
            {/* column 4 */}
            <div className="col-md-3 col-sm-6">
              <h4> Gallery </h4>
              <ul className="list-unstyled">
                <li>
                  <a href="https://www.visitliverpool.com/" target="_blank">
                    Liverpool
                  </a>
                </li>
                <li>
                  <a href="https://www.nycgo.com/" target="_blank">
                    New York
                  </a>
                </li>
                <li>
                  <a href="https://www.visitlasvegas.com/uk/" target="_blank">
                    Las Vegas
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Footer Bottom*/}
          <div className="footer-bottom">
            <p className="text-xs-center">
              &copy;{new Date().getFullYear()} J Rowan &nbsp;
              <i className="fas fa-hand-middle-finger" /> - All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  .footer-middle {
    background: var(--mainDark);
    padding-top: 1rem;
    color: var(--mainWhite);
  }

  .footer-bottom {
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
`;

export default Footer;
