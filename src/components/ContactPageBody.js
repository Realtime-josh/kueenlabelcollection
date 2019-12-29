import React from 'react';

export default (props) => (
  <div className='contactbody'>
    <table className='contacttable'>
      <tbody>
        <tr>
          <td className='contact__first'><i className="material-icons contact_icon">call</i></td>
          <td className='contact__second'>
            <p className='subtle_text1'>Reach Out</p>
            <p className='subtle_text2'>8328651883</p>
          </td>
        </tr>
        <tr>
          <td className='contact__first'><i className="material-icons contact_icon">mail_outline</i></td>
          <td className='contact__second'>
            <p className='subtle_text1'>Mail Us</p>
            <p className='subtle_text2'>kueenlabel@gmail.com</p>
          </td>
        </tr>
        <tr>
          <td className='contact__first'><i className="material-icons contact_icon">add_location</i></td>
          <td className='contact__second'>
            <p className='subtle_text1'>Our Centre</p>
            <p className='subtle_text2'>Houston,USA.</p>
          </td>
        </tr>
      </tbody>
    </table>
    <form className='contact__form'>
      <p className='subtle_text'>Request Information</p>
      <input type='text' className="login__text contact_text" placeholder='Your Name' id='contact_name' /><br/><br/>
      <input type='text' className="login__text contact_text" placeholder='Your Email' id='contact_email' /><br/><br/>
      <textarea className='postdescription1' placeholder='Your Message'></textarea><br/><br/>
      <input className='contact__button' type='submit' value='Send Enquiry' />
    </form>
  </div>
)
