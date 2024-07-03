import Image from "next/image";
import styles from "./dishesItem.module.css";
import Link from "next/link";
//'http://www.curiousnut.com/roasted-spiced-chicken-ayam-percik/'

export default function DishesItem(props) {
  const item={...props}

  return (
   
     <div className={styles.dishes}>
          <div className={styles.dishes_img}>
            <Image src={item.item.strMealThumb} alt='img'
              width={540}
              height={301}
            />
          </div>
          <div className={styles.dishes_text}>
            <h3>{item.item.strMeal}</h3>
            <p>{item.item.strInstructions }</p>
          </div>
        </div>
        
   
  );
}