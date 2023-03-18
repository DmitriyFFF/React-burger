import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import {  NavLink } from "react-router-dom";
// import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
// import { useDispatch, useSelector } from "react-redux";
// import { postLogout, patchUserData } from "../../services/actions/auth";
import { ProfileForm } from "../../components/Profile/ProfileForm/ProfileForm";
import { ProfileNavigation } from "../../components/Profile/ProfileNavigation/ProfileNavigation";
import { ProfileOrders } from "../../components/Profile/ProfileOrders/ProfileOrders";
import styles from "./profile.module.css";

export const Profile = () => {

  return (
    <section className={styles.container}>
      <ProfileNavigation />
      <Routes>
        <Route path="/" element={<ProfileForm />} />
        <Route path="/orders" element={<ProfileOrders />} />
      </Routes>
    </section>
  );
};
  // const { user } = useSelector(state => state.authReducer);
  // const [form, setForm] = useState({ ...user, password: '******' });
  // const [isChanged, setIsChanged] = useState(false);
  // const dispatch = useDispatch();

  // const setActiveLink = ({isActive}) => isActive ? styles.activeLink : styles.link;

  // const onChange = e => {
  //   setForm({
  //     ...form,
  //     [e.target.name]: e.target.value
  //   });
  //   setIsChanged(true);
  // };

  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   dispatch(patchUserData(form.name, form.email));
  //   setIsChanged(false);
  // };

  // const logout = () => {
  //   dispatch(postLogout());
  // };

  // const cancelForm = () => {
  //   setForm({ ...user });
  //   setIsChanged(false);
  // };

// export const Profile = () => {
//   const { user } = useSelector(state => state.authReducer);
//   const [form, setForm] = useState({ ...user, password: '******' });
//   const [isChanged, setIsChanged] = useState(false);
//   const dispatch = useDispatch();

//   const setActiveLink = ({isActive}) => isActive ? styles.activeLink : styles.link;

//   const onChange = e => {
//     setForm({
//       ...form,
//       [e.target.name]: e.target.value
//     });
//     setIsChanged(true);
//   };

//   const onSubmit = (e) => {
//     e.preventDefault();
//     dispatch(patchUserData(form.name, form.email));
//     setIsChanged(false);
//   };

//   const logout = () => {
//     dispatch(postLogout());
//   };

//   const cancelForm = () => {
//     setForm({ ...user });
//     setIsChanged(false);
//   };

//   return (
//     <section className={styles.container}>
//       <nav className={`${styles.wrapper} mr-15`}>
//         <ul className={styles.list}>
//           <li className={`${styles.listItem} text text_type_main-medium`}>
//             <NavLink className={setActiveLink} to="/profile">Профиль</NavLink>
//           </li>
//           <li className={`${styles.listItem} text text_type_main-medium`}>
//             <NavLink className={setActiveLink} to="/profile/orders">История заказов</NavLink>
//           </li>
//           <li className={styles.listItem}>
//             <button className={`${styles.exitButton} text text_type_main-medium text_color_inactive`} onClick={logout}>Выход</button>
//           </li>
//         </ul>
//         <p className={`${styles.text} text text_type_main-default text_color_inactive mt-20`}>В&nbsp;этом разделе вы&nbsp;можете
// изменить свои персональные данные</p>
//       </nav>
//       <form className={styles.form} onSubmit={onSubmit}>
//         <Input
//           onChange={onChange}
//           value={form.name}
//           name={'name'}
//           placeholder="Имя"
//           icon="EditIcon"
//         />
//         <EmailInput
//           onChange={onChange}
//           value={form.email}
//           name={'email'}
//           placeholder="Логин"
//           extraClass="mt-6"
//           icon="EditIcon"
//         />
//         <PasswordInput
//           onChange={onChange}
//           value={form.password}
//           name={'password'}
//           placeholder="Пароль"
//           extraClass="mt-6"
//           icon="EditIcon"
//         />
//         {isChanged && (
//           <div className={styles.buttonContainer}>
//             <Button extraClass="mt-6" type="secondary" size="medium" htmlType="button" onClick={() => cancelForm()}>Отмена</Button>
//             <Button extraClass="mt-6" type="primary" size="medium" htmlType="submit">Сохранить</Button>
//           </div>
//           )
//         }
//       </form>
//     </section>
//   );
// };
