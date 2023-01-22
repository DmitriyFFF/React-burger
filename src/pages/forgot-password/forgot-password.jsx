import React, { useState } from "react";
import {Link} from "react-router-dom";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password.module.css";

export const ForgotPassword = () => {
  const [form, setValue] = useState({ email: '' })
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
          placeholder="Укажите e-mail"
          extraClass="mt-6"
        />
        <Button extraClass="mt-6 mb-20" type="primary" size="medium" htmlType="button">Восстановить</Button>
      </form>
      <div>
        <p className="text text_type_main-default text_color_inactive">{"Вспомнили пароль? "}
          <Link className={`${styles.link} text text_type_main-default`} to="/login">Войти</Link>
        </p>
      </div>
    </section>
  );
};
