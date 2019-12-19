import React from 'react';
import { connect } from 'react-redux';

class SearchBarSS extends React.Component{
  render(){
    return(
      <div className='search-small-screen'>
        <table className='search-table-ss' align='right'>
          <tbody>
            <tr>
              <td className='search-image-td'><i class="search-icon-image-ss fa fa-search"></i></td>
              <td className='search-image-td'><i class="search-icon-image-ss fa fa-user-o"></i></td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  };
};

const mapStateToProps = (state) => state;

export default connect(mapStateToProps)(SearchBarSS); 

