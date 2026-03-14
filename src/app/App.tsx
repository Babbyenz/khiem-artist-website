import { RouterProvider } from 'react-router';
import { router } from './routes';
import { ArtistProvider } from './context/artist-context';
import { Toaster } from './components/ui/sonner';

export default function App() {
  return (
    <ArtistProvider>
      <RouterProvider router={router} />
      <Toaster position="top-center" />
    </ArtistProvider>
  );
}
