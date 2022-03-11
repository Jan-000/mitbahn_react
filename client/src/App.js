import './App.css';
import { Routes, Route } from 'react-router-dom';

import GroupList from './pages/GroupList';
import GroupDetails from './pages/GroupDetails';
import EditGroups from './pages/EditGroup';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import UserProfile from './components/UserProfile';
import HomeView from './components/HomeView'


import SearchGroup from './components/SearchGroup';



import UserProfileEdit from './components/UserProfileEdit';
import LoggedUserInfo from './components/LoggedUserInfo';


function App() {
  return (
    <>
      <Navbar />
    <div className="App">


      <Routes>
        <Route path='/' element={<HomeView />} />

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
       
        <LoggedUserInfo />
    </div>
    </>
  );
}

export default App;
