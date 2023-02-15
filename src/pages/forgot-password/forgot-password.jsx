import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { EmailInput, Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./forgot-password.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postForgotPassword } from "../../services/actions/forgot-password";

export const ForgotPassword = () => {
  const [form, setForm] = useState({ email: '' });
  const { forgotPasswordFailed } = useSelector(store => store.forgotPasswordReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const onSubmit = (e) => {
    console.log("111")//////////////////
    e.preventDefault();
    dispatch(postForgotPassword(form.email));
    if(!forgotPasswordFailed) {
      navigate({pathname:'/reset-password'})
    }
  };

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h1 className={`${styles.heading} text text_type_main-medium`}>Восстановление пароля</h1>
        <EmailInput
          onChange={onChange}
          value={form.email}
          name={'email'}
          placeholder="Укажите e-mail"
          extraClass="mt-6"
        />
        <Button extraClass="mt-6 mb-20" type="primary" size="medium" htmlType="submit">Восстановить</Button>
      </form>
      <div>
        <p className="text text_type_main-default text_color_inactive">{"Вспомнили пароль? "}
          <Link className={`${styles.link} text text_type_main-default`} to="/login">Войти</Link>
        </p>
      </div>
    </section>
  );
};
