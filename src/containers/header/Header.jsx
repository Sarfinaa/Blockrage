import React ,{Component}from 'react';
import ai from '../../assets/ai.png';
import './header.css';


class Header extends Component {
  render(){ 
    return(
      <div>
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Let&apos;s Secure Your Data With BLOCKRAGE</h1>
      <p className="para">Store your data with no third party involved and share your file's hashcode with your friends in a most secure way.</p>
      
      
      <form onSubmit={(event) => {
                    event.preventDefault()
                    const description = this.fileDescription.value
                    this.props.uploadFile(description)
                  }} >
      <div className="gpt3__header-content__input">
        <div className="indiv">
      <input id="fileDescription"
                            type="text"
                            ref={(input) => { this.fileDescription = input }}
                            className="form-control text-monospace"
                            placeholder="File Description..."
                            required />
                                                <input className="i2" type="file" onChange={this.props.captureFile} className="text-white text-monospace"/>

                                    <button type="submit">Upload file</button>

                                    </div>
      </div>
      </form>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
   
  </div>
  <div>
   
 
  </div>
  </div>
);
  }
}

export default Header;
