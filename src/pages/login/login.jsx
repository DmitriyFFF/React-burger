import React, { useState } from "react";
import {Link} from "react-router-dom";
import { EmailInput, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";

export const Login = () => {
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
      <form className={styles.form}>
        <h1 className={styles.heading}>Вход</h1>
        <EmailInput
          onChange={onChange}
          value={form.email}
          name={'email'}
          placeholder="E-mail"
          /*isIcon={true}
          extraClass="mb-2"*/
        />
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name={'password'}
          placeholder="Пароль"
          /*extraClass="mb-2"*/
        />
        <Button type="primary" size="medium">Войти</Button>
      </form>
      <div>
          <p className="text text_type_main-default">Вы — новый пользователь?</p>
          <Link className="text text_type_main-default" to="/register">Зарегистрироваться</Link>
      </div>
      <div>
          <p className="text text_type_main-default">Забыли пароль?</p>
          <Link className="text text_type_main-default" to="/forgot-password">Восстановить пароль</Link>
      </div>
    </section>
  );
};
