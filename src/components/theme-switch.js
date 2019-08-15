import React from 'react'
import Switch from 'react-switch'
import { useColorMode } from 'theme-ui'

const ThemeSwitch = () => {
  const [colorMode, setColorMode] = useColorMode()

  function changeTheme() {
    if (colorMode === 'light') {
      setColorMode('dark')
    } else {
      setColorMode('light')
    }
  }

  return (
    <div className="switch-theme">
      <label htmlFor="switch-theme">
        <Switch
          checked={colorMode === 'light' ? true : false}
          onChange={() => changeTheme()}
          offColor={'#FFF'}
          offHandleColor={'#232323'}
          onColor={'#232323'}
          onHandleColor={'#FFF'}
          id="switch-theme"
          handleDiameter={6}
          height={16}
          width={28}
          uncheckedIcon={false}
          checkedIcon={false}
          activeBoxShadow={'0 0 1px 2px #FB575E'}
        />
      </label>
    </div>
  )
}

export default ThemeSwitch
