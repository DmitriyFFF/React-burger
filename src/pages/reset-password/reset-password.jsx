import React, { useState } from "react";
import {Link} from "react-router-dom";
import { EmailInput, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-password.module.css";

export const ResetPassword = () => {
  const [form, setValue] = useState({ email: '', password: '' })
  const onChange = e => {
    setValue({ ...form, [e.target.name]: e.target.value })
  };

  return (
    <section className={styles.container}>
      <form className={styles.form}>
        <h1 className={`${styles.heading} text text_type_main-medium`}>Восстановление пароля</h1>
        <EmailInput
          onChange={onChange}
          value={form.email}
          name={'email'}
          placeholder="Введите новый пароль"
          extraClass="mt-6"
        />
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name={'password'}
          placeholder="Введите код из письма"
          extraClass="mt-6"
        />
        <Button extraClass="mt-6 mb-20" type="primary" size="medium" htmlType="button">Сохранить</Button>
      </form>
      <div>
          <p className="text text_type_main-default text_color_inactive">{"Вспомнили пароль? "}
            <Link className={`${styles.link} text text_type_main-default`} to="/login">Войти</Link>
          </p>
      </div>
    </section>
  );
};
