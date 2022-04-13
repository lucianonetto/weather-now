import { Header } from './components/Header';
import { Climates } from './components/Climates';
import { QueryClient,QueryClientProvider } from 'react-query'
import { persistQueryClient } from 'react-query/persistQueryClient-experimental'
import { createWebStoragePersistor } from 'react-query/createWebStoragePersistor-experimental'


const queryClient = new QueryClient();
 
const localStoragePersistor = createWebStoragePersistor({storage: window.localStorage})

persistQueryClient({
  queryClient,
  persistor: localStoragePersistor,
  refetchOnWindowFocus: false,
})

function App() {
  return (
    <div className="App">
      <QueryClientProvider client={queryClient}>
        <Header />
        <Climates />
      </QueryClientProvider>
    </div>
  );
}

export default App;
