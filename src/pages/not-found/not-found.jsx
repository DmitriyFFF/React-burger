import { Button } from "@ya.praktikum/react-developer-burger-ui-components";
import styles from "./not-found.module.css";

export const NotFound404 = () => {

  return (
    <section className={styles.container}>
      <span className={styles.image}>¯\_(ツ)_/¯</span>
      <div className={styles.heading}>
        <p className="text text_type_main-medium">Страница не найдена</p>
      </div>
      <Button extraClass="mt-6 mb-20" type="primary" size="medium" htmlType="button">Назад</Button>
    </section>
  );
};
