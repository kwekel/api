import SearchMeal from './components/search-meals';
import FetchTopQuotes from './components/top-quotes';
import { ToastContainer } from 'react-toastify';
import Users from './components/users';
import { QueryClient, QueryClientProvider } from 'react-query';
import UpdateQuotes from './components/update-quote';
import PaginatedQuotes from './components/paginated-quotes';
import InfiniteScrollQuotes from './components/infinite-scroll-quotes';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ToastContainer />
        <InfiniteScrollQuotes />
        <PaginatedQuotes />
        <UpdateQuotes />
        <FetchTopQuotes />
      </QueryClientProvider>
      <SearchMeal />
      <Users />
    </>
  );
}

export default App;
