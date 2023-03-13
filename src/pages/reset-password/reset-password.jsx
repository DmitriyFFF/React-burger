import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Input, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./reset-password.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postResetPassword } from "../../services/actions/reset-password";


export const ResetPassword = () => {
  const [form, setForm] = useState({ password: '', token: '' });
  const { resetPasswordFailed } = useSelector(store => store.resetPasswordReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onChange = e => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postResetPassword(form.password, form.token));
    if (!resetPasswordFailed) {
      navigate({pathname:'/login'})
    }
  };

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h1 className={`${styles.heading} text text_type_main-medium`}>Восстановление пароля</h1>
        <PasswordInput
          onChange={onChange}
          value={form.password}
          name={'password'}
          placeholder="Введите новый пароль"
          extraClass="mt-6"
          required
        />
        <Input
          onChange={onChange}
          value={form.token}
          name={'token'}
          placeholder="Введите код из письма"
          extraClass="mt-6"
          required
        />
        <Button extraClass="mt-6 mb-20" type="primary" size="medium" htmlType="submit">Сохранить</Button>
      </form>
      <div>
        <p className="text text_type_main-default text_color_inactive">{"Вспомнили пароль? "}
          <Link className={`${styles.link} text text_type_main-default`} to="/login">Войти</Link>
        </p>
      </div>
    </section>
  );
};
