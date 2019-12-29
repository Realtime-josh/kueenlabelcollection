import React from 'react';
import { connect } from 'react-redux';
import {
  setHoverStateLc, setHoverStateHt, 
  setHoverState, setHoverStateHc 
} from '../actions/css';

class OurLocations extends React.Component{
  render(){
    const { hoverStatelc } = this.props.css;
    const handleHoverShowLC = () => {  
      this.props.dispatch(setHoverState(false)); 
      this.props.dispatch(setHoverStateHc(false));    
      this.props.dispatch(setHoverStateHt(false));
      this.props.dispatch(setHoverStateLc(true));      
    }

    const handleHoverHideLC = () => {     
      this.props.dispatch(setHoverStateLc(false));      
    }
    return(
      hoverStatelc && <div onMouseEnter={handleHoverShowLC} onMouseLeave={handleHoverHideLC} className='locations-div'>
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
      </div>
    )
  };
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(OurLocations);


