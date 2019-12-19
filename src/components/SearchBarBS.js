import React, { lazy, Suspense }  from 'react';
import { connect } from 'react-redux';
import giftIcon from '../images/icons/giftIcon.png';
import user from '../images/icons/duser.png';
import cart from '../images/icons/cart.png';

class SearchBarBS extends React.Component {
  render(){
    return (
      <div className='searchbar'>
        <table className='display-table-cell' align="center">
          <tbody>
            <tr>
              <td className='data-wider-space'>
                <form>
                  <input className='searchStore' type='text' placeholder='Search store' />
                  <input className='enter-search' type='submit' value='Search' />
                  <div className='underlineDiv'></div>
                </form>
              </td>
              <td className='data-wider-space'>
                <a className='mailListRef' href='#'><u>JOIN OUR MAILING LIST FOR EXCLUSIVE DEALS</u></a>
              </td>
              <td className='data-smaller-space'>
                <a className='mailListRef' href='#'><img className='giftIcon' src={giftIcon}/></a>
              </td>
              <td className='data-smaller-space'>
                <a className='mailListRef' href='#'><img className='giftIcon' src={user}/></a>
              </td>
              <td className='data-smaller-space shop-bag'>
                <a className='mailListRef' href='#'><img className='giftIcon' src={cart} /> (0) Bag</a>
              </td>
            </tr> 
          </tbody> 
        </table>
      </div>
    )
  };
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(SearchBarBS); 
