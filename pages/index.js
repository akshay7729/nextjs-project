import styles from "../styles/Home.module.css";
import { getFeaturedEvents } from "../dummy-data";

export default function Home() {
  const featuredEvents = getFeaturedEvents();

  console.log("featuredEvents", featuredEvents);

  return <div className={styles.container}>Home Page</div>;
}
