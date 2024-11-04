import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { Provider } from 'react-redux'
import './App.css'
import { AuthProvider } from './context/AuthContextType'
import { RouterWrapper } from './routes/RouteWrapper'
import store from './store/store'

function App() {

  const queryClient = new QueryClient();

  return (
    <AuthProvider>
      <QueryClientProvider client={queryClient}>
        <Provider store={store}>
          <RouterWrapper />
        </Provider>
      </QueryClientProvider>
    </AuthProvider>
  )
}

export default App
