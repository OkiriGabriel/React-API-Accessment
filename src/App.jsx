import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainLoader from './components/helpers/MainLoader'

//Context-Api states

import StudentState from './context/student/studentState'

// components: lazyload pages
const Home = React.lazy(() => import('./components/pages/Home'));

const App = () => {
  
  return(
    <Router>

      <StudentState>

        <Suspense fallback={MainLoader()}>
            <Switch>
              <Route exact path="/" component={Home} />

              {/* <Route exact path="*" component={Home} /> */}
            </Switch>
        </Suspense>
        
        </StudentState>

    </Router>
  )
}

export default App;