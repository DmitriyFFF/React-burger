import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { EmailInput, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./login.module.css";
import { postLogin } from "../../services/actions/auth";
import { useForm } from "../../hooks/useForm";

export const Login = () => {
  const { values, handleChange } = useForm({ email: '', password: '' });
  const { isAuthenticated } = useSelector(store => store.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from || "/";

  const onSubmit = (e) => {
    e.preventDefault();
    dispatch(postLogin(values.email, values.password));
  };

  useEffect(() => {
    if (isAuthenticated) {
      navigate(-1);
    }
  }, [navigate, isAuthenticated, from]);

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h1 className={`${styles.heading} text text_type_main-medium`}>Вход</h1>
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name={'email'}
          placeholder="E-mail"
          extraClass="mt-6"
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password}
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
