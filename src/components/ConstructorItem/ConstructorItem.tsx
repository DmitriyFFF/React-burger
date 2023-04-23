import React, { useRef, FC } from "react";
// import PropTypes from 'prop-types';
// import { useDispatch } from "react-redux";
import { useDispatch } from "../../hooks/hooks";
import { useDrop, useDrag } from "react-dnd";
import { ConstructorElement, DragIcon } from "@ya.praktikum/react-developer-burger-ui-components";
import { /*deleteIngredient,*/ MOVE_INGREDIENT } from "../../services/actions/constructor";
import styles from './ConstructorItem.module.css'
import { TConstructorItemProps, TDropItem } from "../../utils/types";

export const ConstructorItem: FC<TConstructorItemProps> = ({ingredient, index, deleteIngredient}) => {
  const dispatch = useDispatch();
  const ref = useRef<HTMLLIElement>(null);

  const [{isDragging}, dragRef] = useDrag({
    type:'constructorIngredient',
    item: () => {
      return {
        // id: ingredient.key,
        index
      }
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging()
    })
  });

  const [, dropRef] = useDrop({
    accept: 'constructorIngredient',
    hover(item: TDropItem, monitor) {
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

      if (clientOffset === null) {
        return;
      }

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

  dragRef(dropRef(ref));
  // console.log(ingredient)
  return (
    <li
      className={`${styles.ingredientItem}`}
      style={{opacity}}
      ref={ref}
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

// ConstructorItem.propTypes = {
//   ingredient: ingredientType.isRequired,
//   index: PropTypes.number.isRequired
// };
