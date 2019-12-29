import React from 'react';
import { connect } from 'react-redux';
import Shampoo from '../images/img1.png';
import Conditioner from '../images/img2.png';
import TeaTreeOil from '../images/img2.png';
import { setHoverStateHc, setHoverStateHt, setHoverState } from '../actions/css';

class HairCare extends React.Component{
    render(){
      const { hoverStatehc } = this.props.css;
      const handleHoverShowHC = () => {
        this.props.dispatch(setHoverStateHt(false)); 
        this.props.dispatch(setHoverState(false));     
        this.props.dispatch(setHoverStateHc(true));      
      }
  
      const handleHoverHideHC = () => {     
        this.props.dispatch(setHoverStateHc(false));      
      }
      return (
        hoverStatehc && <div onMouseEnter={handleHoverShowHC} onMouseLeave={handleHoverHideHC} className='hair-care-div'>
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
        </div>
      )
    }
  }
  
  const mapStateToProps = (state) => state;
  
  export default connect(mapStateToProps)(HairCare);
  
