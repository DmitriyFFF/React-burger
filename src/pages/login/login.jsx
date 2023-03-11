import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { EmailInput, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { postLogin } from "../../services/actions/auth";

export const Login = () => {
  const [form, setForm] = useState({ email: '', password: '' });
  const { isAuthenticated } = useSelector(store => store.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from || "/";
  // navigate(from, {replace: true});

  const onChange = (e) => {
    setForm({
       ...form,
       [e.target.name]: e.target.value
    })
  };

  const onSubmit = (e) => {
    console.log("111")//////////////////
    e.preventDefault();
    dispatch(postLogin(form.email, form.password))
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(from, {replace: true});
      // return (
      //   <Navigate to='/profile' replace />
      // )
    }
  }, [navigate, isAuthenticated, from])

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
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
        <Button extraClass="mt-6 mb-20" type="primary" size="medium" htmlType="submit">Войти</Button>
      </form>
      <div>
        <p className="text text_type_main-default text_color_inactive">{"Вы — новый пользователь? "}
          <Link className={`${styles.link} text text_type_main-default`} to="/register">Зарегистрироваться</Link>
        </p>
      </div>
      <div>
        <p className="text text_type_main-default text_color_inactive">{"Забыли пароль? "}
          <Link className={`${styles.link} text text_type_main-default`} to="/forgot-password">Восстановить пароль</Link>
        </p>
      </div>
    </section>
  );
};
