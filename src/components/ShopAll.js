import React from 'react';
import imageArt from '../images/shopallpics.png';
import { connect } from 'react-redux';
import { setHoverState, setHoverStateHc, setHoverStateHt } from '../actions/css';

class ShopAll extends React.Component{
  render(){
    const { hoverState } = this.props.css;
    const handleHoverShow = () => {
      this.props.dispatch(setHoverStateHc(false)); 
      this.props.dispatch(setHoverStateHt(false));      
      this.props.dispatch(setHoverState(true));      
    }
    const handleHoverHide = () => {     
      this.props.dispatch(setHoverState(false));      
    }
    return (
      hoverState && <div onMouseEnter={handleHoverShow} onMouseLeave={handleHoverHide} className='shop-all'>
      <table className='shop-all-table'>
        <tbody>
          <tr className='shop-all-header'>
            <td>Hair Textures</td>
            <td>Kueen Kits</td>
            <td>Kueen Lashes</td>
            <td>Hair Care Products</td>
          </tr>
          <tr className='shop-all-links'>
            <td className='shop-all-links-hover'>Brazilian</td>
            <td className='shop-all-links-hover'>Brazilian</td>
            <td className='shop-all-links-hover'>Boss</td>
            <td className='shop-all-links-hover'>Shampoo</td>
          </tr>
          <tr className='shop-all-links'>
            <td className='shop-all-links-hover'>Peruvian</td>
            <td className='shop-all-links-hover'>Peruvian</td>
            <td className='shop-all-links-hover'>Crown</td>
            <td className='shop-all-links-hover'>Conditioner</td>
          </tr>
          <tr className='shop-all-links'>
            <td className='shop-all-links-hover'>Malaysian</td>
            <td className='shop-all-links-hover'>Malaysian</td>
            <td className='shop-all-links-hover'>Glam</td>
            <td className='shop-all-links-hover'>Sleek Edges</td>
          </tr>
          <tr className='shop-all-links'>
            <td className='shop-all-links-hover'>Raw Indian</td>
            <td></td>
            <td className='shop-all-links-hover'>Queen</td>
            <td className='shop-all-links-hover'>Tree Oil</td>
          </tr>
          <tr className='shop-all-links'>
            <td className='shop-all-links-hover'>Natural Kinky</td>
            <td></td>
            <td></td>
            <td className='shop-all-links-hover'>Argan Oil</td>
          </tr>
          <tr className='shop-all-links'>
            <td className='shop-all-links-hover'>Blonde</td>
            <td></td>
            <td></td>
            <td className='shop-all-links-hover'>Biotin Gummies</td>
          </tr>
          <tr className='shop-all-links'>
            <td className='shop-all-links-hover'>Closures & Frontals</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className='shop-all-links'>
            <td className='shop-all-links-hover'>Clips Ins</td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
      <table>
        <tbody>
          <tr className='shop-all-header2'>
            <td>Featured Product</td>
          </tr>
          <tr>
            <td>
              <img className='image-shop-all'
              src={imageArt} alt='kueen hair extensions collection' title='kueellabelcollection photos'/>
            </td>
          </tr>
          <tr>
            <td>Afro Kinky</td>
          </tr>
          <tr>
            <td>$ 12.00</td>
          </tr>
        </tbody>
      </table>
    </div>
    )
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ShopAll); 
