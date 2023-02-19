import React, { useState } from "react";
import { Navigate, NavLink, useLocation } from "react-router-dom";
import { Input, EmailInput, PasswordInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postLogout } from "../../services/actions/auth";

export const Profile = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  // const url = useLocation();
  const setActiveLink = ({isActive}) => isActive ? styles.activeLink : styles.link;
  const { isAuthenticated } = useSelector(store => store.authReducer);
  const dispatch = useDispatch();

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const logout = () => {
    dispatch(postLogout());
  }

  if (!isAuthenticated) {
    return (
      <Navigate to='/login' replace />
    )
  }

  // const [value, setValue] = React.useState('password')
  // const onChange = e => {
  //   setValue(e.target.value)
  // };

  return (
    <section className={styles.container}>
      <nav className={`${styles.wrapper} mr-15`}>
        <ul className={styles.list}>
          <li className={`${styles.listItem} text text_type_main-medium`}>
            <NavLink className={setActiveLink} to="/profile">Профиль</NavLink>
          </li>
          <li className={`${styles.listItem} text text_type_main-medium`}>
            <NavLink className={setActiveLink} to="/profile1">История заказов</NavLink>{/* Изменить путь роута позже*/}
          </li>
          <li className={styles.listItem}>
            {/* <NavLink className={setActiveLink} to="/">Выход</NavLink> */}
            <button className={`${styles.exitButton} text text_type_main-medium text_color_inactive`} onClick={logout}>Выход</button>
          </li>
        </ul>
        <p className={`${styles.text} text text_type_main-default text_color_inactive mt-20`}>В&nbsp;этом разделе вы&nbsp;можете
изменить свои персональные данные</p>
      </nav>
      <form className={styles.form} >
        <Input
          onChange={onChange}
          value={form.name}
          name={'name'}
          placeholder="Имя"
          /*isIcon={true}*/
          // extraClass="mt-6"
          icon="EditIcon"
        />
        <EmailInput
          onChange={onChange}
          value={form.email}
          name={'email'}
          placeholder="Логин"
          /*isIcon={true}*/
          extraClass="mt-6"
          icon="EditIcon"
        />
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name={'password'}
          placeholder="Пароль"
          extraClass="mt-6"
          icon="EditIcon"
        />
        <div className={styles.buttonContainer}>
          <Button extraClass="mt-6" type="secondary" size="medium" htmlType="button">Отмена</Button>
          <Button extraClass="mt-6" type="primary" size="medium" htmlType="submit">Сохранить</Button>
        </div>
      </form>
    </section>
  );
};
