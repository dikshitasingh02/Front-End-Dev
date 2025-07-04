import React from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import { /*,AutoSuggestion,,CustomBreadCrumb,CustomFormValidations,*/CustomSearchBar,Home,Accordion,Carousel,ToastNotification/*,DragAndDrop,InfiniteScroll*/ } from './pages';
import { Auth } from './components';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

const App = () => {
  return (
    <AuthProvider>
  <Router>
    <Routes>
      <Route path="/login" element={<Auth />} />
      <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} >
      {/* <Route path='draganddrop' element={<DragAndDrop/>} />  
      <Route path='infiniteScroll' element={<InfiniteScroll/>} />
      <Route path='auto-suggestion' element={<AutoSuggestion/>} />
      <Route path='breadCrumb' element={<CustomBreadCrumb/>} />
      <Route path='formValidations' element={<CustomFormValidations/>} /> */}
      <Route path='searchBar' element={<CustomSearchBar />} />
      <Route path='accordion' element={<Accordion/>} />
      <Route path='carousel' element={<Carousel/>} />
      <Route path='toast' element={<ToastNotification/>} />
      </Route>
    </Routes>
  </Router>
  </AuthProvider>
  );
};

export default App