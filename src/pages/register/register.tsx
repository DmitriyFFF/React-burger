import React, { FC, FormEvent } from "react";
import {Link, useNavigate} from "react-router-dom";
import { Input, EmailInput, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register.module.css";
import { useDispatch, useSelector } from "../../hooks/hooks";
// import { useDispatch, useSelector } from "react-redux";
import { postUserData } from "../../services/actions/auth";
import { useForm } from "../../hooks/useForm";

export const Register: FC = () => {
  const { values, handleChange } = useForm({ name: '', email: '', password: '' });
  const { registerFailed } = useSelector(store => store.authReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(postUserData(values.name, values.email, values.password));
    if(!registerFailed) {
      navigate({pathname:'/login'})
    }
  };

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
        <h1 className={`${styles.heading} text text_type_main-medium`}>Регистрация</h1>
        <Input
          onChange={handleChange}
          value={values.name}
          name={'name'}
          placeholder="Имя"
          extraClass="mt-6"
          required
        />
        <EmailInput
          onChange={handleChange}
          value={values.email}
          name={'email'}
          placeholder="E-mail"
          extraClass="mt-6"
          required
        />
        <PasswordInput
          onChange={handleChange}
          value={values.password}
          name={'password'}
          placeholder="Пароль"
          extraClass="mt-6"
          required
        />
        <Button extraClass="mt-6 mb-20" type="primary" size="medium" htmlType="submit">Зарегистрироваться</Button>
      </form>
      <div>
        <p className="text text_type_main-default text_color_inactive">{"Уже зарегистрированы? "}
          <Link className={`${styles.link} text text_type_main-default`} to="/login">Войти</Link>
        </p>
      </div>
    </section>
  );
};
