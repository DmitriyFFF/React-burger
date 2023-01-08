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
        <h1 className={`${styles.heading} text text_type_main-medium`}>Вход</h1>
        <EmailInput
          onChange={onChange}
          value={form.email}
          name={'email'}
          placeholder="E-mail"
          /*isIcon={true}*/
          extraClass="mt-6"
        />
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name={'password'}
          placeholder="Пароль"
          extraClass="mt-6"
        />
        <Button extraClass="mt-6 mb-20" type="primary" size="medium">Войти</Button>
      </form>
      <div>
          <p className="text text_type_main-default text_color_inactive">{"Вы — новый пользователь? "}
            <Link className="text text_type_main-default" to="/register">Зарегистрироваться</Link>
          </p>
      </div>
      <div>
          <p className="text text_type_main-default text_color_inactive">{"Забыли пароль? "}
            <Link className="text text_type_main-default" to="/forgot-password">Восстановить пароль</Link>
          </p>
      </div>
    </section>
  );
};
