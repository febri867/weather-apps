import ReactDOM from "react-dom/client";

import { QueryClient } from "@tanstack/react-query";
import { QueryClientProvider } from "@tanstack/react-query";

import App from "./App";

import "./index.css"
import ErrorBoundary from './components/errorBoundary';

const queryClient =
  new QueryClient({
    defaultOptions: {
    queries: {
      retry: 2,
        staleTime:
      1000 * 60 * 5,
        gcTime:
      1000 * 60 * 10,
    },

    mutations: {
      retry: 1,
    },
  },
});

ReactDOM.createRoot(
  document.getElementById("root")!
).render(
  <QueryClientProvider
    client={queryClient}
  >
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </QueryClientProvider>
);