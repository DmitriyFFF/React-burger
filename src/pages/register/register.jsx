import React, { useState } from "react";
import {Link} from "react-router-dom";
import { Input, EmailInput, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register.module.css";

export const Register = () => {
  const [form, setValue] = useState({ name: '', email: '', password: '' })
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
        <h1 className={styles.heading}>Регистрация</h1>
        <Input
          onChange={onChange}
          value={form.name}
          name={'name'}
          placeholder="Имя"
          /*isIcon={true}
          extraClass="mb-2"*/
        />
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
        <Button type="primary" size="medium">Зарегистрироваться</Button>
      </form>
      <div>
          <p className="text text_type_main-default">Уже зарегистрированы?</p>
          <Link className="text text_type_main-default" to="/login">Войти</Link>
      </div>
      {/* <div>
          <p className="text text_type_main-default">Забыли пароль?</p>
          <Link className="text text_type_main-default" to="/forgot-password">Восстановить пароль</Link>
      </div> */}
    </section>
  );
};
