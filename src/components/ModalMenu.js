import React from 'react';
import { connect } from 'react-redux';
import { NavLink, Link, withRouter } from 'react-router-dom';
import { history } from '../routers/AppRouter';
import { 
  setModalState, setShopAllState,
  setHairTextureState, setKueenKitsState,
  setKueenLashesState, setHairCareState,
  setHairTextureCatState, setHairCareCatState,
  setHairLocateState,setHairContactState,
 } from '../actions/css';
import Modal from 'react-modal';
import paths from '../helpers/paths';

import BrazilianHair from '../images/BrazilianHair.png';
import MalaysianHair from '../images/MalaysianHair.png';
import Shampoo from '../images/img1.png';
import Conditioner from '../images/img2.png';
import TeaTreeOil from '../images/img2.png';
import Footer from './Footer';

class ModalMenu extends React.Component{
  constructor(props){
    super(props)
  }
  render(){
    const { dispatch } = this.props;
    const { 
      modalStatus, shopAll, 
      hairTexture, kueenKits,
      kueenLashes, hairCare,
      hairTextureCat, hairCareCat,
      hairLocations, hairContact } = this.props.css;
    const requestClose = () => dispatch(setModalState(undefined));
    return(
      <Modal
      isOpen={modalStatus}
      onRequestClose={requestClose}
      ariaHideApp={false}
      contentLabel="kueenlabelcollection.com"
      closeTimeoutMS={400}
      className='modal'>
        <div>
          <table>
            <tbody>
              <tr onClick={() => {
          dispatch(setModalState(undefined))
        }}>
                <td><i className="fa fa-close"></i></td>
                <td>Close Menu</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className='shop-all-small-screen'>
          <table className='shop-all-small-table'>
            <tbody>
              <tr onClick={() => {
          dispatch(setShopAllState(!shopAll))
        }}>
                <td className='shop-all-small-left' >SHOP ALL</td>
                <td className='shop-all-small-right'><i className="fa fa-angle-down"></i></td>
              </tr>
            </tbody>
          </table>
          {shopAll && <div className='all-shop-listings'>
            <table className='shop-all-small-hair-text'>
              <tbody>
                <tr onClick={() => {
                  dispatch(setHairTextureState(!hairTexture));
                }}>
                  <td className='shop-all-small-cat-left' >HAIR TEXTURES</td>
                  <td className='shop-all-small-cat-right'><i className="fa fa-angle-down"></i></td>
                </tr>
              </tbody>
            </table>
            {hairTexture && <table className='shop-all-small-hair-text-list'>
              <tbody>
                <tr>
                  <td className='cat-left-child' >BRAZILIAN</td>
                </tr>
                <tr>
                  <td className='cat-left-child' >PERUVIAN</td>
                </tr>
                <tr>
                  <td className='cat-left-child' >MALAYSIAN</td>
                </tr>
                <tr>
                  <td className='cat-left-child' >RAW INDIAN</td>
                </tr>
                <tr>
                  <td className='cat-left-child' >NATURAL KINKY</td>
                </tr>
                <tr>
                  <td className='cat-left-child' >BLONDE</td>
                </tr>
                <tr>
                  <td className='cat-left-child' >CLOSURES & FRONTALS</td>
                </tr>
                <tr>
                  <td className='cat-left-child' >CLIPS INS</td>
                </tr>
              </tbody>
            </table>}
            <table className='shop-all-small-kueen-kits'>
              <tbody>
                <tr onClick={() => {
                  dispatch(setKueenKitsState(!kueenKits));
                }}>
                  <td className='shop-all-small-cat-left' >KUEEN KITS</td>
                  <td className='shop-all-small-cat-right'><i className="fa fa-angle-down"></i></td>
                </tr>
              </tbody>
            </table>
            {kueenKits && <table className='shop-all-small-kueen-kits-list'>
              <tbody>
                <tr>
                  <td className='cat-left-child' > BRAZILIAN</td>
                </tr>
                <tr>
                  <td className='cat-left-child' > PERUVIAN</td>
                </tr>
                <tr>
                  <td className='cat-left-child' > MALAYSIAN</td>
                </tr>
              </tbody>
            </table>}
            <table className='shop-all-small-kueen-lashes'>
              <tbody>
                <tr onClick={() => {
                  dispatch(setKueenLashesState(!kueenLashes));
                }}>
                  <td className='shop-all-small-cat-left' >KUEEN LASHES</td>
                  <td className='shop-all-small-cat-right'><i className="fa fa-angle-down"></i></td>
                </tr>
              </tbody>
            </table>
            {kueenLashes && <table className='shop-all-small-kueen-kits-list'>
              <tbody>
                <tr>
                  <td className='cat-left-child' > BOSS</td>
                </tr>
                <tr>
                  <td className='cat-left-child' > CROWN</td>
                </tr>
                <tr>
                  <td className='cat-left-child' > GLAM</td>
                </tr>
                <tr>
                  <td className='cat-left-child' > QUEEN</td>
                </tr>
              </tbody>
            </table>}
            <table className='shop-all-small-kueen-haircare'>
              <tbody>
                <tr onClick={() => {
                  dispatch(setHairCareState(!hairCare));
                }}>
                  <td className='shop-all-small-cat-left' >HAIR CARE PRODUCTS</td>
                  <td className='shop-all-small-cat-right'><i className="fa fa-angle-down"></i></td>
                </tr>
              </tbody>
            </table>
            {hairCare && <table className='shop-all-small-haircare-list'>
              <tbody>
                <tr>
                  <td className='cat-left-child' > SHAMPOO</td>
                </tr>
                <tr>
                  <td className='cat-left-child' > CONDITIONER</td>
                </tr>
                <tr>
                  <td className='cat-left-child' > SLEEK EDGES</td>
                </tr>
                <tr>
                  <td className='cat-left-child' > TEA TREE OIL</td>
                </tr>
                <tr>
                  <td className='cat-left-child' > ARGAN OIL</td>
                </tr>
                <tr>
                  <td className='cat-left-child' > BIOTIN GUMMIES</td>
                </tr>
              </tbody>
            </table>}
          </div>}
        </div>
        

        <div className='shop-all-small-screen'>
          <table className='shop-all-small-table'>
              <tbody>
                <tr onClick={() => {
                  dispatch(setHairTextureCatState(!hairTextureCat));
                }}>
                  <td className='shop-all-small-left' >HAIR TEXTURES</td>
                  <td className='shop-all-small-right'><i className="fa fa-angle-down"></i></td>
                </tr>
              </tbody>
            </table>
              {hairTextureCat && <div>
                <div className='hair-texture-di'>
                  <div className='hair-texture-category'>
                    <img className='hair-texture-image' src={BrazilianHair}/>
                    <table className='hair-texture-table'>
                      <tbody>
                        <tr>
                          <td className='hair-texture-th'>Brazilian Hair</td>
                        </tr>
                        <tr>
                          <td>100% virgin hair. Choose 12" to 40" inches for desired length.</td>
                        </tr>
                      </tbody>
                    </table>       
                  </div>

                  <div className='hair-texture-category'>
                    <img className='hair-texture-image' src={BrazilianHair}/>
                    <table className='hair-texture-table'>
                      <tbody>
                        <tr>
                          <td className='hair-texture-th'>Peruvian Hair</td>
                        </tr>
                        <tr>
                          <td>Available in 12" to 26" inches. High in quality and full of luster.</td>
                        </tr>
                      </tbody>
                    </table>       
                  </div>

                  <div className='hair-texture-category'>
                    <img className='hair-texture-image' src={MalaysianHair}/>
                    <table className='hair-texture-table'>
                      <tbody>
                        <tr>
                          <td className='hair-texture-th'>Malaysian Hair</td>
                        </tr>
                        <tr>
                          <td>100% human hair extensions.Choose straight, body wave or curly.</td>
                        </tr>
                      </tbody>
                    </table>       
                  </div>

                  <div className='hair-texture-category'>
                    <img className='hair-texture-image' src={MalaysianHair}/>
                    <table className='hair-texture-table'>
                      <tbody>
                        <tr>
                          <td className='hair-texture-th'>Raw Indian Hair</td>
                        </tr>
                        <tr>
                          <td>Silky, soft human hair extensions. Minimal shedding and dye friendly.</td>
                        </tr>
                      </tbody>
                    </table>       
                  </div>

                  <div className='hair-texture-category'>
                    <img className='hair-texture-image' src={MalaysianHair}/>
                    <table className='hair-texture-table'>
                      <tbody>
                        <tr>
                          <td className='hair-texture-th'>Natural Kinky Hair</td>
                        </tr>
                        <tr>
                          <td>Mimicks your natural tresses, providing a flawless look. 12" to 30" inches.</td>
                        </tr>
                      </tbody>
                    </table>       
                  </div>
                </div>
              </div>}
          </div>


          <div className='shop-all-small-screen'>
            <table className='shop-all-small-table'>
              <tbody>
                <tr onClick={() => {
                  dispatch(setHairCareCatState(!hairCareCat));
                }}>
                  <td className='shop-all-small-left' >HAIR CARE</td>
                  <td className='shop-all-small-right'><i className="fa fa-angle-down"></i></td>
                </tr>
              </tbody>
            </table>
            {hairCareCat && <div className='hair-care-di'>
            <div className='hair-texture-category'>
              <img className='hair-texture-image' src={Shampoo}/>
              <table className='hair-texture-table'>
                <tbody>
                  <tr>
                    <td className='hair-texture-th'>Shampoo</td>
                  </tr>
                  <tr>
                    <td>Gently cleases hair and scalp. Argan oil and infused.</td>
                  </tr>
                </tbody>
              </table>       
            </div>
    
            <div className='hair-texture-category'>
              <img className='hair-texture-image' src={Conditioner}/>
              <table className='hair-texture-table'>
                <tbody>
                  <tr>
                    <td className='hair-texture-th'>Conditioner</td>
                  </tr>
                  <tr>
                    <td>Deeply conditions, detangles and strengthens hair.</td>
                  </tr>
                </tbody>
              </table>       
            </div>
    
            <div className='hair-texture-category'>
              <img className='hair-texture-image' src={TeaTreeOil}/>
              <table className='hair-texture-table'>
                <tbody>
                  <tr>
                    <td className='hair-texture-th'>Tea Tree Oil</td>
                  </tr>
                  <tr>
                    <td>The ultimate remedy for dry, coarse or thick hair.</td>
                  </tr>
                </tbody>
              </table>       
            </div>
    
            <div className='hair-texture-category'>
              <img className='hair-texture-image' src={TeaTreeOil}/>
              <table className='hair-texture-table'>
                <tbody>
                  <tr>
                    <td className='hair-texture-th'>Sleek Edges</td>
                  </tr>
                  <tr>
                    <td>Non-flaking, firm, long-lasting hold.</td>
                  </tr>
                </tbody>
              </table>       
            </div>
    
            <div className='hair-texture-category'>
              <img className='hair-texture-image' src={TeaTreeOil}/>
              <table className='hair-texture-table'>
                <tbody>
                  <tr>
                    <td className='hair-texture-th'>Moroccan Argan Oil</td>
                  </tr>
                  <tr>
                    <td>Stimulates hair growth and revives dry hair.</td>
                  </tr>
                </tbody>
              </table>       
            </div>
          </div>}
        </div>

        
        <div className='shop-all-small-screen'>
          <table className='shop-all-small-table'>
            <tbody>
              <tr>
                <td className='shop-all-small-left' >HOME</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className='shop-all-small-screen'>
          <table className='shop-all-small-table'>
            <tbody>
              <tr>
                <td className='shop-all-small-left' >ABOUT US</td>
              </tr>
            </tbody>
          </table>
        </div>


        <div className='shop-all-small-screen'>
          <table className='shop-all-small-table'>
            <tbody>
              <tr onClick={() => {
                dispatch(setHairLocateState(!hairLocations))
              }}>
                <td className='shop-all-small-left' >OUR LOCATIONS</td>
                <td className='shop-all-small-right'><i className="fa fa-angle-down"></i></td>
              </tr>
            </tbody>
          </table>
          {hairLocations && <div className='locations-di'>
            <div className='locations-unit'>
              <p>Atlanta</p>
            </div>
            <div className='locations-unit'>
              <p>Arlington</p>
            </div>
            <div className='locations-unit'>
              <p>Dallas</p>
            </div>
            <div className='locations-unit'>
              <p>Detriot</p>
            </div>
            <div className='locations-unit'>
              <p>Houston - North</p>
            </div>
            <div className='locations-unit'>
              <p>Houston - North</p>
            </div>
            <div className='locations-unit'>
              <p>Houston - South</p>
            </div>
            <div className='locations-unit'>
              <p>Houston - Soutwest</p>
            </div>
          </div>}
        </div>

        <div className='shop-all-small-screen'>
          <table className='shop-all-small-table'>
            <tbody>
              <tr onClick={() => {
                dispatch(setHairContactState(!hairContact))
              }}>
                <td className='shop-all-small-left' >CONTACT US</td>
                <td className='shop-all-small-right'><i className="fa fa-angle-down"></i></td>
              </tr>
            </tbody>
          </table>
          {hairContact && <div className='contactus-di'>
            <div className='contactus-unit'>
              <p onClick={() => {
                history.push(paths.contact);
              }}>Contact Us</p>
            </div>
            <div className='contactus-unit'>
              <p>FAQ</p>
            </div>
          </div>}
        </div>
        <Footer />
      </Modal>
    )
    };
  };
  
  const mapStateToProps = (state) => state;
  
  export default withRouter(connect(mapStateToProps)(ModalMenu)); 
