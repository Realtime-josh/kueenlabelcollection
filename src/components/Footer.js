import React from 'react';

export default () =>  (
  <footer>   
    <div className="footer__smallscreen" id="linksSocial1">
        <p className="footerTalk" id="footerTalk1"><span id="LS">kueenlabelcollection.com </span> 
          is market-place for quality hair extensions.
        </p>
          <nav  className="footnav" id="footnav3">
            <br/><p className="headersoclin">We Are Social</p><br/>
              <ul>
                <table className='footerIconsTable'>
                  <tbody>
                    <tr>
                      <td className='smallDevIcon'><i className="fa fa-facebook social-icon-linkk"></i></td>
                      <td className='smallDevIconText'><a className='social_color' href="#">Facebook</a></td>
                    </tr>
                    <tr>
                      <td className='smallDevIcon'><i className="fa fa-instagram social-icon-linkk"></i></td>
                      <td className='smallDevIconText'><a className='social_color' href="#">Instagram</a></td>
                    </tr>
                    <tr>
                      <td className='smallDevIcon'><i className="fa fa-twitter social-icon-linkk" ></i></td>
                      <td className='smallDevIconText'><a className='social_color' href="#">Twitter</a></td>
                    </tr>
                    <tr>
                      <td className='smallDevIcon'><i className="fa fa-youtube social-icon-linkk"></i></td>
                      <td className='smallDevIconText'><a className='social_color' href="#">YouTube</a></td>
                    </tr>
                    <tr>
                      <td className='smallDevIcon'><i className="fa fa-envelope social-icon-linkk"></i></td>
                      <td className='smallDevIconText'><a className='social_color' href="#">Email</a></td>
                    </tr>
                  </tbody>
                </table>
              </ul>
          </nav>
        </div>                                    
    <div className='newsletterDiv'>
      <table>
        <tbody>
        <tr>
          <th className='first__linker'>Company</th>
          <th className='first__linker'>Customer Service</th>
          <th className='first__linker'>My Account</th>
          <th className='first__linker'>New Subscribers Receive Life Time Access</th>
        </tr>
        <tr>
          <td className='first__link'><a href='#'>About Us</a></td>
          <td><a href='#'>Customer Services</a></td>
          <td><a href='#'>Kueen Label Subscriptions</a></td>
          <td>
            <form className='newsletterForm'>
              <input className='newsLetterEmail' type='text' placeholder=' Enter Email Here'/>
              <input className='submitNewsletter' type='submit' value='Get Now' />
              <p className='errorEmailHandlerSubscribe'></p>
              </form>
            </td>
        </tr>
        <tr>
          <td className='first__link'><a href='#'>KUEEN LABEL COLLECTION</a></td>
          <td><a href='#'>FAQs</a></td>
          <td><a href='#'>My Rewards</a></td>
        </tr>
        <tr>
            <td className='first__link'><a href='#'>Testimonials</a></td>
            <td><a href='#'>About Rewards</a></td>
            <td><a href='#'>My Favorites</a></td>
            <td><a href='#'>Follow Us On</a></td>
          </tr>
          <tr>
            <td className='first__link'><a href='#'>Press</a></td>
            <td><a href='#'>Order Status</a></td>
            <td><a href='#'>Order History</a></td>
            <td>
              <a className='social-icon-link' href='https://www.facebook.com' target="_blank">
                <i className="fa fa-facebook"></i>
              </a>
              <a className='social-icon-link' href='https://www.twitter.com' target="_blank">
                <i className="fa fa-twitter" ></i>
              </a>
              <a className='social-icon-link' href='https://www.instagram.com' target="_blank">
                <i className="fa fa-instagram"></i>
              </a>
              <a className='social-icon-link' href='https://www.youtube.com' target="_blank">
                <i className="fa fa-youtube"></i>
              </a>
              <a className='social-icon-link' href='https://www.gmail.com' target="_blank">
                <i className="fa fa-envelope"></i>
              </a>
            </td>
          </tr>
          <tr>
            <td className='first__link'><a href='#'>Affliates</a></td>
            <td><a href='#'>Shipping Information</a></td>
            <td><a href='#'>Returns</a></td>
          </tr>
          <tr>
            <td><a href='#'>Brand Submissions</a></td>
            <td><a href='#'>Recalls</a></td>
          </tr>
          <tr>
            <td><a href='#'>eGift Cards</a></td>
          </tr>
        </tbody>
      </table>
    </div>

    <div className='copyright-div'>
      <p className='copyright-text'>Copyright &copy; Joshua Frankson. All Rights Reserved</p>
    </div>
  </footer>
);
