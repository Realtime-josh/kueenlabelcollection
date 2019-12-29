import React from 'react';
import { connect } from 'react-redux';
import BrazilianHair from '../images/BrazilianHair.png';
import MalaysianHair from '../images/MalaysianHair.png';
import { setHoverStateHt, setHoverState, setHoverStateHc } from '../actions/css';

class HairTexture extends React.Component{
  render(){
    const { hoverStateht } = this.props.css;
    const handleHoverShowHT = () => {  
      this.props.dispatch(setHoverState(false)); 
      this.props.dispatch(setHoverStateHc(false));    
      this.props.dispatch(setHoverStateHt(true));      
    }

    const handleHoverHideHT = () => {     
      this.props.dispatch(setHoverStateHt(false));      
    }
    return (
      hoverStateht &&  <div onMouseEnter={handleHoverShowHT} onMouseLeave={handleHoverHideHT} className='hair-texture-div'>
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
    )
  }
}

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(HairTexture);
