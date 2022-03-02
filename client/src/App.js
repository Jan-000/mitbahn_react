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
      </Routes>
    </div>
  );
}

export default App;
