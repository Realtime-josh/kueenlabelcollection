import React from 'react';
import { connect } from 'react-redux';
import { history } from '../routers/AppRouter';
import paths from '../helpers/paths';
import kueenLogo from '../images/klclogo.jpg';
import cart from '../images/icons/cart.png';
import { setModalState } from '../actions/css';
import { 
  setHoverStateCu, setHoverState, 
  setHoverStateHt, setHoverStateHc, 
  setHoverStateLc 
} from '../actions/css';

class DashboardTab extends React.Component{
  render(){
    const { dispatch } = this.props;
    const handleHoverShow = () => {
      this.props.dispatch(setHoverStateHt(false)); 
      this.props.dispatch(setHoverStateHc(false));  
      this.props.dispatch(setHoverStateLc(false));    
      this.props.dispatch(setHoverStateCu(false)); 
      this.props.dispatch(setHoverState(true));      
    }
    const handleHoverShowHT = () => {   
      this.props.dispatch(setHoverState(false)); 
      this.props.dispatch(setHoverStateHc(false));  
      this.props.dispatch(setHoverStateLc(false)); 
      this.props.dispatch(setHoverStateCu(false)); 
      this.props.dispatch(setHoverStateHt(true));      
    }
    const handleHoverShowHC = () => {   
      this.props.dispatch(setHoverState(false)); 
      this.props.dispatch(setHoverStateHt(false));   
      this.props.dispatch(setHoverStateLc(false)); 
      this.props.dispatch(setHoverStateCu(false)); 
      this.props.dispatch(setHoverStateHc(true));      
    }
    const handleHoverShowLC = () => {   
      this.props.dispatch(setHoverState(false)); 
      this.props.dispatch(setHoverStateHt(false));   
      this.props.dispatch(setHoverStateHc(false));
      this.props.dispatch(setHoverStateCu(false)); 
      this.props.dispatch(setHoverStateLc(true));     
    }
    const handleHoverShowCU = () => {   
      this.props.dispatch(setHoverState(false)); 
      this.props.dispatch(setHoverStateHt(false));   
      this.props.dispatch(setHoverStateHc(false));
      this.props.dispatch(setHoverStateLc(false));    
      this.props.dispatch(setHoverStateCu(true));  
    }
    const handleHoverHideIT = () => {   
      this.props.dispatch(setHoverState(false)); 
      this.props.dispatch(setHoverStateHt(false));   
      this.props.dispatch(setHoverStateHc(false)); 
      this.props.dispatch(setHoverStateCu(false));    
      this.props.dispatch(setHoverStateLc(false));  
    }
    return(
      <div className='dashboard-tab-bs' id='dashboard-tab-bs'>
        <div className='dashboardtab-div1'>
          <a onClick={() => {
          dispatch(setModalState(true))
        }}><i className="search-icon-image-sss fa fa-bars"></i></a>
        </div>
        <table className='dashboardtab-table' align="center">
          <tbody>
            <tr>
              <td className='dashboardtab-td'>
                <a onMouseEnter={handleHoverShow} onMouseLeave={handleHoverHideIT}>SHOP ALL <i className="fa fa-angle-down"></i></a>
              </td>
              <td className='dashboardtab-td'>
                <a onMouseEnter={handleHoverShowHT} onMouseLeave={handleHoverHideIT}>HAIR TEXTURES <i className="fa fa-angle-down"></i></a>
              </td>
              <td className='dashboardtab-td'>
                <a onMouseEnter={handleHoverShowHC} onMouseLeave={handleHoverHideIT}>HAIR CARE <i className="fa fa-angle-down"></i></a>
              </td>
              <td onClick={() => {
                history.push(paths.dashboard);
              }} className='dashboardtab-td-img'><img className='logo-image-banner' src={kueenLogo}/></td>
              <td onClick={() => {
                history.push(paths.about);
              }} className='dashboardtab-td'><a>ABOUT US</a></td>
              <td className='dashboardtab-td'>
                <a onMouseEnter={handleHoverShowLC} onMouseLeave={handleHoverHideIT}>OUR LOCATIONS <i className="fa fa-angle-down"></i></a>
              </td>
              <td className='dashboardtab-td'>
                <a onMouseEnter={handleHoverShowCU} onMouseLeave={handleHoverHideIT}>CONTACT US <i className="fa fa-angle-down"></i></a>
              </td>
            </tr>
          </tbody>
        </table>
        <div className='dashboardtab-div2'>
          <a className='mailListRef' href='#'><img className='giftIcon' src={cart} /> (0)</a>
        </div>
      </div>
    )
  };
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(DashboardTab); 
