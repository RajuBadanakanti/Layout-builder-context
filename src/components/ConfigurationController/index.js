// Write your code here
import ConfigurationContext from '../../context/ConfigurationContext'

import './index.css'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value

      const onChangeShowContent = event => {
        onToggleShowContent(event.target.value)
      }

      const onChangeShowLeft = event => {
        onToggleShowLeftNavbar(event.target.value)
      }

      const onChangeShowRight = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <div className="bg-controllers-container">
          <div className="nav-container">
            <h1 className="nav-header">Layout</h1>
            <div className="checkbox-label-div">
              <input
                id="input1"
                type="checkbox"
                className="checkbox-inputs"
                onChange={onChangeShowContent}
                checked={showContent}
              />
              <label htmlFor="input1" className="label-text">
                Content
              </label>
            </div>

            <div className="checkbox-label-div">
              <input
                id="input2"
                type="checkbox"
                className="checkbox-inputs"
                onChange={onChangeShowLeft}
                checked={showLeftNavbar}
              />
              <label htmlFor="input2" className="label-text">
                Left Navbar
              </label>
            </div>

            <div className="checkbox-label-div">
              <input
                id="input3"
                type="checkbox"
                className="checkbox-inputs"
                onChange={onChangeShowRight}
                checked={showRightNavbar}
              />
              <label htmlFor="input3" className="label-text">
                Right Navbar
              </label>
            </div>
          </div>
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController
