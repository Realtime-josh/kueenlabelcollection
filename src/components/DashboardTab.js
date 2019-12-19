import React from 'react';
import { connect } from 'react-redux';
import kueenLogo from '../images/klclogo.jpg';
import cart from '../images/icons/cart.png';

class DashboardTab extends React.Component{
  render(){
    return(
      <div className='dashboard-tab-bs' id='dashboard-tab-bs'>
        <div className='dashboardtab-div1'>
          <a><i class="search-icon-image-sss fa fa-bars"></i></a>
        </div>
        <table className='dashboardtab-table' align="center">
          <tbody>
            <tr>
              <td className='dashboardtab-td'><a>SHOP ALL <i class="fa fa-angle-down"></i></a></td>
              <td className='dashboardtab-td'><a>HAIR TEXTURES <i class="fa fa-angle-down"></i></a></td>
              <td className='dashboardtab-td'><a>HAIR CARE <i class="fa fa-angle-down"></i></a></td>
              <td className='dashboardtab-td-img'><img className='logo-image-banner' src={kueenLogo}/></td>
              <td className='dashboardtab-td'><a>ABOUT US <i class="fa fa-angle-down"></i></a></td>
              <td className='dashboardtab-td'><a>OUR LOCATIONS <i class="fa fa-angle-down"></i></a></td>
              <td className='dashboardtab-td'><a>CONTACT US <i class="fa fa-angle-down"></i></a></td>
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
