import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.imageblock}>
        <Image src='/main1.png' alt='img'
          width={1400}
          height={650}
        />
      </div>
      <div className={styles.shefblock}>
        <div className={styles.shefblock_text}>
          <h3 className={styles.shefblock_text_title}>About</h3>
          <div className={styles.shefblock_text_content}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore mollitia maiores sed, iste illo placeat eos cupiditate odio aliquid, ullam excepturi qui necessitatibus autem impedit, blanditiis quisquam culpa earum ipsa.
          </div>
          <p className="">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae, earum odio, odit, molestiae officia laboriosam doloremque modi sunt debitis quisquam voluptatem voluptas unde ad laborum deserunt! Ipsum, dicta deserunt.</p>
        </div>
        <div className={styles.shefblock_img}>
          <Image src='/shef1.png' alt='img'
            width={540}
            height={301}
          />
        </div>
      </div>

      <h3 className="menu">Menu</h3>
      <div className={styles.dishes}>
        <div className={styles.dishes_item}>
          <div className={styles.dishes_item_img}>
            <Image src='/dish1.png' alt='img'
              width={540}
              height={301}
            />
          </div>
          <div className={styles.dishes_item_text}>
            <h3>Pasta</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minus fugiat dolore assumenda nihil fuga rem illo sit saepe aliquid officia, dicta tempore, tenetur ea molestiae provident sequi modi adipisci!</p>
          </div>
        </div>

        <div className={styles.dishes_item}>
          <div className={styles.dishes_item_text}>
            <h3>Rissota</h3>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti tempore non blanditiis dolore, explicabo labore repellat omnis necessitatibus, atque rem eveniet ullam officiis nulla cupiditate eaque, aspernatur repellendus voluptatem beatae.</p>
          </div>
          <div className={styles.dishes_item_img}>
            <Image src='/dish2.png' alt='img'
              width={540}
              height={301}
            />
          </div>
        </div>



        <div className={styles.dishes_item}>
          <div className={styles.dishes_item_img}>
            <Image src='/dish3.png' alt='img'
              width={540}
              height={301}
            />
          </div>
          <div className={styles.dishes_item_text}>
            <h3>Lasanda</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis enim aliquid obcaecati, sunt magnam nobis quisquam voluptate voluptatibus minus. Ea incidunt modi animi quaerat, nesciunt ex alias vero officiis tempora.</p>
          </div>
        </div>
      </div>
    </main>
  );
}
