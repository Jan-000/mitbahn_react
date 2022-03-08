import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import GroupList from './pages/GroupList';
import GroupDetails from './pages/GroupDetails';
import EditGroups from './pages/EditGroup';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './components/UserProfile';


import SearchGroup from './components/SearchGroup';
// import GroupsPage from './components/GroupsPage'


import UserProfileEdit from './components/UserProfileEdit'
import LoggedUserInfo from './components/LoggedUserInfo';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />} />

        <Route
          path='/groups'
          element={
            <ProtectedRoute redirectTo='/login'>
              <GroupList />
            </ProtectedRoute>
          }
        />

        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/groups/:id' element={<GroupDetails />} />
        <Route path='/groups/edit/:id' element={<EditGroups />} />
        <Route path='/searchgroup' element={<SearchGroup />} />
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/userprofileedit/:id' element={<UserProfileEdit />} />

      </Routes>
    </div>
  );
}

export default App;
