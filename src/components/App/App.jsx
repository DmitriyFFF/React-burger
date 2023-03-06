import React, {useEffect} from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { AppHeader } from '../AppHeader/AppHeader';
import styles from './App.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { getIngredients } from '../../services/actions/ingredients';
import { Login, Register, Main, ForgotPassword, ResetPassword, Profile, NotFound404, Ingredient } from '../../pages';
import { getUserData } from '../../services/actions/auth';
import { ProtectedRouteElement } from '../ProtectedRoute/ProtectedRoute';
import { AuthorizedRouteElement } from '../AuthorizedRoute/AuthorizedRoute';
// import { OPEN_MODAL, CLOSE_MODAL } from '../../services/actions/modal.js';
import { Modal } from '../Modal/Modal.jsx';
import { IngredientDetails } from '../IngredientDetails/IngredientDetails.jsx';
import { closeModal } from '../../services/actions/modal';

export const App = () => {
  const dispatch = useDispatch();
  const modalIsOpen = useSelector(store => store.modalReducer.open)
  // const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    dispatch(getIngredients());
    dispatch(getUserData());
  }, [dispatch]);

  // const handleClose = () => {
  //   dispatch({
  //     type: CLOSE_MODAL
  //   });
  //   setIsOpen(false);
  // };
  const handleClose = () => {
    // dispatch({
    //   type: CLOSE_MODAL
    // });
    dispatch(closeModal());
    //setIsOpen(false);
    // navigate({pathname: '/'})
  }


  return (
    <div className={styles.App}>
      {/* <Router>

      </Router> */}
      <AppHeader />
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/" element={<AuthorizedRouteElement />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot-password" element={<ForgotPassword />} />
            <Route path="/reset-password" element={<ResetPassword />} />
          </Route>
          <Route path="/" element={<ProtectedRouteElement />}>
            <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="/ingredients/:id" element={<Ingredient />} />
          <Route path="*" element={<NotFound404 />} />
        </Routes>
        {/* {modalIsOpen &&
          <Routes>
            <Route path='/ingredient/:id' element ={
              <Modal
                onClose={handleClose}
                title="Детали ингредиента">
                  <IngredientDetails />
              </Modal>
              }>
            </Route>
          </Routes>} */}
        {/* {isOpen &&
          <Routes>
            <Route path='/ingredient/:id' element ={
              <Modal
                onClose={handleClose}
                title="Детали ингредиента">
                  <IngredientDetails />
              </Modal>
              }>
            </Route>
          </Routes>} */}
    </div>
  );
}

