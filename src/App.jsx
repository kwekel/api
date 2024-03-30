import SearchMeal from './components/search-meals';
import FetchTopQuotes from './components/top-quotes';
import { ToastContainer } from 'react-toastify';
import Users from './components/users';
import { QueryClient, QueryClientProvider } from 'react-query';
import UpdateQuotes from './components/update-quote';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <UpdateQuotes />
        <FetchTopQuotes />
      </QueryClientProvider>
      <SearchMeal />
      <Users />
    </>
  );
}

export default App;
