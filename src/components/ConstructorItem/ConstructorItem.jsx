import React, { useRef } from "react";
import PropTypes from 'prop-types';
import { useDispatch } from "react-redux";
import { useDrop, useDrag } from "react-dnd";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { deleteIngredient, MOVE_INGREDIENT } from "../../services/actions/constructor";
import styles from './ConstructorItem.module.css'
import { ingredientType } from "../../utils/types";

export const ConstructorItem = ({ingredient, index}) => {
  const dispatch = useDispatch();
  const ref = useRef(null);

  const [{isDragging}, dragRef] = useDrag({
    type:'constructorIngredient',
    item: () => {
      return { index }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropRef] = useDrop({
    accept: 'constructorIngredient',
    hover(item, monitor) {
      if (!ref.current) {
        return;
      }

      const dragIndex = item.index;
      const hoverIndex = index;

      if (dragIndex === hoverIndex) {
        return;
      }

      const hoverBoundingRect = ref.current?.getBoundingClientRect();
      const hoverMiddleY = (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;
      const clientOffset = monitor.getClientOffset();
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
          return;
      }

      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
          return;
      }

      dispatch({
        type: MOVE_INGREDIENT,
        dragIndex: dragIndex,
        hoverIndex: hoverIndex,
      });

      item.index = hoverIndex;
    }
  });

  const opacity = isDragging ? 0 : 1;

  return (
    <li
      className={`${styles.ingredientItem}`}
      style={{opacity}}
      ref={dragRef(dropRef(ref))}
    >
      <DragIcon type="primary" />
      <ConstructorElement
        text={ingredient.name}
        price={ingredient.price}
        thumbnail={ingredient.image}
        handleClose={() => dispatch(deleteIngredient(ingredient.key))}
      />
    </li>
  )
}

ConstructorItem.propTypes = {
  ingredient: ingredientType.isRequired,
  index: PropTypes.number.isRequired
};
