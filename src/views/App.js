import React from 'react'
import { TransitionGroup, CSSTransition  } from 'react-transition-group'
let DevTools
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
if (__DEV__ && __COMPONENT_DEVTOOLS__) {
  // 组件形式的 Redux DevTools
  DevTools = require('COMPONENT/DevTools').default
}
const App = ({ children, location}) => (
  <div className="views">
    <TransitionGroup className="view">
      <CSSTransition key={location.key} classNames="fade" timeout={{ enter: 300, exit: 300 }}>
        <MuiThemeProvider>
          {children}
        </MuiThemeProvider>
      </CSSTransition >
    </TransitionGroup>
    {DevTools && <DevTools/>}
  </div>
)

export default App
