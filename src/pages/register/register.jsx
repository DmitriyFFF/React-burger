import React, { useState } from "react";
import {Link, useNavigate} from "react-router-dom";
import { Input, EmailInput, Button, PasswordInput } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./register.module.css";
import { useDispatch, useSelector } from "react-redux";
import { postUserData } from "../../services/actions/auth";

export const Register = () => {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const { registerFailed } = useSelector(store => store.authReducer);
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
    dispatch(postUserData(form.name, form.email, form.password));
    if(!registerFailed) {
      navigate({pathname:'/login'})
    }
  };

  // const [value, setValue] = React.useState('password')
  // const onChange = e => {
  //   setValue(e.target.value)
  // };

  return (
    <section className={styles.container}>
      <form className={styles.form} onSubmit={onSubmit}>
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
        <Button extraClass="mt-6 mb-20" type="primary" size="medium" htmlType="submit"> Зарегистрироваться</Button>
      </form>
      <div>
        <p className="text text_type_main-default text_color_inactive">{"Уже зарегистрированы? "}
          <Link className={`${styles.link} text text_type_main-default`} to="/login">Войти</Link>
        </p>
      </div>
    </section>
  );
};
