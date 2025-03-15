import reactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import App from "./App";

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LoginPage />
      },
    ]
  }
]);

const rootElement = document.getElementById('root');
 if (rootElement) {
    reactDOM.createRoot(rootElement).render(<RouterProvider router={router} />);
 }