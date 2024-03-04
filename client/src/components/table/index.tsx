import styles from "./index.module.css"

const Index = () => {
    const PlayerImg = "https://yt3.googleusercontent.com/ytc/AIdro_k2wsQa2j9sAhjS25DyZxrhAGDJWtNZBYcLVd3uqQ=s900-c-k-c0x00ffffff-no-rj"
  return (
    <div>
    <table id={styles.customers}>
      <thead>
        <th>Nombre</th>
        <th>Apellido</th>
        <th>Ci</th>
        <th>Edad</th>
      </thead>
      <tbody>
        <tr>
          <td className={styles.colum_img}>
            <img src={PlayerImg} alt="jugador" />
            <p>lampe</p>
          </td>

          <td>Mamani</td>
          <td>8021947</td>
          <td>27</td>
        </tr>
        <tr>
          <td className={styles.colum_img}>
            <img src={PlayerImg} alt="jugador" />
            <p>lampe</p>
          </td>

          <td>Mamani</td>
          <td>8021947</td>
          <td>27</td>
        </tr>
        <tr>
          <td className={styles.colum_img}>
            <img src={PlayerImg} alt="jugador" />
            <p>lampe</p>
          </td>

          <td>Mamani</td>
          <td>8021947</td>
          <td>27</td>
        </tr>
        <tr>
          <td className={styles.colum_img}>
            <img src={PlayerImg} alt="jugador" />
            <p>lampe</p>
          </td>

          <td>Mamani</td>
          <td>8021947</td>
          <td>27</td>
        </tr>
        <tr>
          <td className={styles.colum_img}>
            <img src={PlayerImg} alt="jugador" />
            <p>lampe</p>
          </td>

          <td>Mamani</td>
          <td>8021947</td>
          <td>27</td>
        </tr>
      </tbody>
    </table>
  </div>
  )
}

export default Index
