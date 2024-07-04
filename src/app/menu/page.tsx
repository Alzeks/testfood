import Image from "next/image";
import styles from "./page.module.css";
import Search from "../components/Search";
//api Lookup a single random meal   www.themealdb.com/api/json/v1/1/random.php
//api by letter 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
//api          'https://www.themealdb.com/api/json/v1/1/randomselection.php'

interface Item{
  strMealThumb: string,
  strMeal: string,
  strInstructions: string
}
async function getData(option: string) {
  if (!option) { option = 'a' }
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${option}`,
    //{cache: "no-store",}
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Menu({searchParams}) {
  const q = searchParams?.query || '';

  const {meals} = await getData(q);

  return (
    <main className={styles.container}>
      Menu
      <Search />
      <div className={styles.disheswraper}>
        {meals.map((item: Item, i: string) =>
        <div className={styles.dishes}>
        <div className={styles.dishes_img}>
          <Image src={item.strMealThumb} alt='img'
            width={540}
            height={301}
          />
        </div>
        <div className={styles.dishes_text}>
          <h3>{item.strMeal}</h3>
          <p>{item.strInstructions}</p>
        </div>
      </div>
        )
        }
      </div>
    </main>
  );
}
