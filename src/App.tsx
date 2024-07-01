import { Provider } from 'react-redux';
import { RouterProvider } from 'react-router-dom';
import { Routers } from './Router/Routers';
import { store } from './app/store';

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={Routers} />
    </Provider>
  )
}

export default App