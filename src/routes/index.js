import Home from './Home/index'

import RouteRoute from './Route'
import PageNotFound from './PageNotFound'
import Redirect from './PageNotFound/redirect'

/*
    Note:   Instead of using JSX, we recommend using react-router
            PlainRoute objects to build route definitions.
*/

export const createRoutes = (store) => ({
  path: '/',
  component: Home,
  indexRoute: Home,
  childRoutes: [
    RouteRoute(store),
    PageNotFound(),
    Redirect
  ]
})


export default createRoutes
