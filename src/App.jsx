import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import AppLayout from './components/AppLayout';
import ProductList from './pages/ProductList';
import IndividualProduct from './pages/IndividualProduct';
import Cart from './pages/Cart';
import Error from './UI/Error';
import { useState } from 'react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 600 * 1000,
    },
  },
});

function App() {
  const [isAscending, setIsAscending] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  function handleIsOpen(isOpen) {
    setIsOpen(isOpen);
  }

  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />

      <BrowserRouter>
        <Routes>
          <Route
            element={
              <AppLayout
                isAscending={isAscending}
                setIsAscending={setIsAscending}
                isOpen={isOpen}
                handleIsOpen={handleIsOpen}
              />
            }
          >
            <Route index='/all-products' element={<Navigate replace to="/" />}/>
            <Route
              path="/"
              element={
                <ProductList
                  isAscending={isAscending}
                  setIsAscending={setIsAscending}
                  handleIsOpen={handleIsOpen}
                  isOpen={isOpen}
                />
              }
            />
            <Route path="/product/:id" element={<IndividualProduct />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<Error>404 - Page not found</Error>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
