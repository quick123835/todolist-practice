import { PageContextProvider } from 'contexts/PageContext';
import './App.scss';
import { TodoPage, LoginPage, SignUpPage } from './pages';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AuthContextProvider } from 'contexts/AuthContext';

function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <AuthContextProvider>
          <PageContextProvider>
            <Routes>
              <Route path="/login" element={<LoginPage />}></Route>
              <Route path="/signup" element={<SignUpPage />}></Route>
              <Route path="/todos" element={<TodoPage />}></Route>
            </Routes>
          </PageContextProvider>
        </AuthContextProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
