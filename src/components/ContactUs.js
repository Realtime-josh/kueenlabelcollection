import React from 'react';
import { connect } from 'react-redux';
import { history } from '../routers/AppRouter';
import paths from '../helpers/paths';
import {
  setHoverStateCu,
  setHoverStateLc, setHoverStateHt, 
  setHoverState, setHoverStateHc,
  setModalState,
} from '../actions/css';

class ContactUs extends React.Component{
  render(){
    const { hoverStatecu } = this.props.css;
    const { dispatch } = this.props;
    const handleHoverShowCu = () => {  
      this.props.dispatch(setHoverState(false)); 
      this.props.dispatch(setHoverStateHc(false));       
      this.props.dispatch(setHoverStateLc(false)); 
      this.props.dispatch(setHoverStateHt(false));   
      this.props.dispatch(setHoverStateCu(true)); 
    }

    const handleHoverHideCu = () => {     
      this.props.dispatch(setHoverStateCu(false));      
    }
    return(
      hoverStatecu && <div onMouseEnter={handleHoverShowCu} onMouseLeave={handleHoverHideCu} className='contactus-div'>
        <div className='contactus-unit'>
          <p onClick={() => {
            dispatch(setModalState(undefined))
            history.push(paths.contact);
          }}>Contact Us</p>
        </div>
        <div className='contactus-unit'>
          <p>FAQ</p>
        </div>
      </div>
    )
  };
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(ContactUs);
