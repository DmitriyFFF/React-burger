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
        <h1 className={`${styles.heading} text text_type_main-medium`}>Регистрация</h1>
        <Input
          onChange={onChange}
          value={form.name}
          name={'name'}
          placeholder="Имя"
          /*isIcon={true}*/
          extraClass="mt-6"
        />
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
        <Button extraClass="mt-6 mb-20" type="primary" size="medium"> Зарегистрироваться</Button>
      </form>
      <div>
          <p className="text text_type_main-default text_color_inactive">{"Уже зарегистрированы? "}
            <Link className="text text_type_main-default" to="/login">Войти</Link>
          </p>
      </div>
      {/* <div>
          <p className="text text_type_main-default">Забыли пароль?</p>
          <Link className="text text_type_main-default" to="/forgot-password">Восстановить пароль</Link>
      </div> */}
    </section>
  );
};
