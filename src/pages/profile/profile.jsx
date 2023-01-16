import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Input, EmailInput, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./profile.module.css";

export const Profile = () => {
  const [form, setValue] = useState({ email: '', password: '' })
  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value })
  };

  // const [value, setValue] = React.useState('password')
  // const onChange = e => {
  //   setValue(e.target.value)
  // };

  return (
    <section className={styles.container}>
      <div className={`${styles.wrapper} mr-15`}>
        <ul className={styles.list}>
          <li className={styles.listItem}>
            <NavLink className="text text_type_main-medium" to="/profile">Профиль</NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink className="text text_type_main-medium text_color_inactive" to="/">История заказов</NavLink>
          </li>
          <li className={styles.listItem}>
            <NavLink className="text text_type_main-medium text_color_inactive" to="/">Выход</NavLink>
          </li>
        </ul>
        <p className="text text_type_main-small text_color_inactive mt-20">В&nbsp;этом разделе вы&nbsp;можете
изменить свои персональные данные</p>
      </div>
      <form className={styles.form}>
        <Input
          onChange={onChange}
          value={form.name}
          name={'name'}
          placeholder="Имя"
          /*isIcon={true}*/
          extraClass="mt-6"
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
      </form>
    </section>
  );
};
