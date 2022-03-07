import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import ProjectList from './pages/ProjectList';
import ProjectDetails from './pages/ProjectDetails';
import EditProject from './pages/EditProject';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './components/UserProfile';

// import SearchGroup from './components/SearchGroup';
import ProductsPage from './components/ProductsPage'


import UserProfileEdit from './components/UserProfileEdit'
import UserProfileDeleted from './components/UserProfileDeleted';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route
          path='/projects'
          element={
            <ProtectedRoute redirectTo='/login'>
              <ProjectList />
            </ProtectedRoute>
          }
        />

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/projects/:id' element={<ProjectDetails />} />
        <Route path='/projects/edit/:id' element={<EditProject />} />
        {/* <Route path='/searchgroup' element={<SearchGroup />} /> */}
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/userprofileedit/:id' element={<UserProfileEdit />} />
        <Route path='/userprofiledeleted/:id' element={<UserProfileDeleted />} />
        <Route path='/GroupSearchResult' />

      </Routes>
    </div>
  );
}

export default App;
