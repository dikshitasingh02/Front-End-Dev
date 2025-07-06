import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { /*,AutoSuggestion,,CustomBreadCrumb,*/CustomFormValidations,CustomSearchBar,Home,Accordion,Carousel,ToastNotification,DragAndDrop,Pagination,/*UnsplashInfiniteScroll*/} from './pages';
import { Auth } from './components';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';
import UnsplashInfiniteScroll from './components/UnsplashInfiniteScroll';

const App = () => {
  return (
    <AuthProvider>
  <Router>
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} >
      {/*   
      
      <Route path='auto-suggestion' element={<AutoSuggestion/>} />
      <Route path='breadCrumb' element={<CustomBreadCrumb/>} />
       */}
      <Route path='searchBar' element={<CustomSearchBar />} />
      <Route path='accordion' element={<Accordion/>} />
      <Route path='carousel' element={<Carousel/>} />
      <Route path='toast' element={<ToastNotification/>} />
      <Route path='draganddrop' element={<DragAndDrop/>} />
      <Route path='pagination' element={<Pagination/>} />
      <Route path='infiniteScroll' element={<UnsplashInfiniteScroll/>} />
      <Route path='formValidations' element={<CustomFormValidations/>} />
      </Route>
    </Routes>
  </Router>
  </AuthProvider>
  );
};

export default App