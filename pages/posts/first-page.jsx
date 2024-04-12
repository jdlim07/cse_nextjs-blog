import Image from "next/image";
import styles from "../../styles/page.module.css";
export default function First() {
  return (
    <div>
      <h3 className={styles.title}>HELLO WORLD</h3>
      <p className={`${styles.font22} ${styles.center}`}>
        I'm jadelim. born in winter of 2004. Maybe because of it, kinda blue
        thing is my favorite. <br></br>Nothing related, this is me about 3 years
        old.
      </p>

      <p className={styles.center}>
        {" "}
        <MyImage />{" "}
      </p>
      <a href="/"> back to home</a>
    </div>
  );
}
const MyImage = () => {
  return (
    <Image
      src="/images/profile1.jpg"
      height={800} // Desired size with correct aspect ratio
      width={600} // Desired size with correct aspect ratio
      alt="upload profile"
    />
  );
};
