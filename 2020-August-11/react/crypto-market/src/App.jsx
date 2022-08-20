import styles from "./css/App.module.css";
import { data } from "./data/cryptoData";

function App() {
  const { coins } = data;

  return (
    <div className={styles.container}>
      <table className={styles.table}>
        <thead>
          <tr className={styles.headingRow}>
            <th>coin</th>
            <th>price</th>
            <th>market cap</th>
          </tr>
        </thead>
        <tbody>
          {coins.map((coin) => (
            <tr key={coin.name}>
              <td>{coin.name}</td>
              <td>{coin.price}</td>
              <td>{coin.marketCap}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
