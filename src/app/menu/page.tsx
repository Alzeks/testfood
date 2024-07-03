import Image from "next/image";
import styles from "./page.module.css";
import DishesItem from "../components/DishesItem";
import Search from "../components/Search";
// Lookup a single random meal   www.themealdb.com/api/json/v1/1/random.php
//by letter 'https://www.themealdb.com/api/json/v1/1/search.php?s=Arrabiata'
//          'https://www.themealdb.com/api/json/v1/1/randomselection.php'

async function getData(option) {

  if (!option) { option = 'a' }
  const res = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?f=${option}`,
    //{cache: "no-store",}
  );
  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
}

export default async function Menu({ searchParams }) {
  const q = searchParams?.query || '';
  
  const data = await getData(q);

  return (
    <main className={styles.container}>
      Menu
      <Search />
      <div className="input">
      </div>
      <div className={styles.dishes}>
        {data.meals.map((item: {}, i: string) =>
          <DishesItem item={item} key={i} //becorse no manipulation 
          />
        )
        }
      </div>
    </main>
  );
}
