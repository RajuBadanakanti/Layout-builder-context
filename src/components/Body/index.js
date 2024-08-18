// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      return (
        <div className="bg-body-container">
          {/* >>>>>>>>>> LEFT NAVBAR >>>>>>>> */}
          {showLeftNavbar ? (
            <div className="left-nav-container">
              <h1 className="left-nav-header">Left Navbar Menu</h1>
              <ul className="left-nav-list">
                <li className="list-items">Item 1</li>
                <li className="list-items">Item 2</li>
                <li className="list-items">Item 3</li>
                <li className="list-items">Item 4</li>
              </ul>
            </div>
          ) : null}

          {/* >>>>>>>>>> CONTENT >>>>>>>> */}
          {showContent ? (
            <div className="mid-content-container">
              <h1 className="mid-content-header">Content</h1>
              <p className="mid-content-description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqa. Ut
                enim ad minim veniam.
              </p>
            </div>
          ) : null}

          {/* >>>>>>>>>> RIGHT NAVBAR >>>>>>>> */}
          {showRightNavbar ? (
            <div className="right-nav-container">
              <h1 className="right-nav-header">Right Navbar</h1>
              <div className="right-nav-boxes-contsiner">
                <p className="box-item">Ad 1</p>

                <p className="box-item">Ad 2</p>
              </div>
            </div>
          ) : null}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body
