import styles from "./css/index.module.css";
import MexicoImg from "../../assets/home/mexico.png";
import BoliviaImg from "../../assets/home/bolivia.png";
import ArgentinaImg from "../../assets/home/argentina.png";
import ItaliaImg from "../../assets/home/italia.png";
import PortadaImg from "../../assets/home/portada.png";
import PlayerImg from "../../assets/home/lampe.jpg";
import { UseRouter } from "../../hooks/useRouter";

const Home = () => {
    const {redirect} = UseRouter()
  return (
    <div className={styles.container_father}>
      <div className={styles.container_nav}>
        <input type="search" placeholder="Buscar..." name="" id="" />
        <div className={styles.container_nav_user}>
          <button onClick={()=>redirect("/auth")}>Iniciar sesion</button>
          <img src={PlayerImg} alt="User" />
        </div>
      </div>

      <div className={styles.container_header}>
        <div className={styles.container_banner}>
          <img className={styles.banner} src={PortadaImg} alt="portada" />
        </div>

        <div className={styles.content}>
          <div className={styles.header}>
            <h4>Partido en vivo</h4>
            <p>62:24</p>
          </div>
          <div className={styles.central}>
            <img src={MexicoImg} alt="" />
            <p>
              <span>2</span> <span>-</span> <span>2</span>
            </p>
            <img src={BoliviaImg} alt="" />
          </div>
          <div className={styles.footer}>
            <div>
              <h5>Goles</h5>
              <p>7 - 4</p>
            </div>
            <div>
              <h5>Faltas</h5>
              <p>3 - 2</p>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.container_games}>
        <div>
          <h3>Partidos de futbol</h3>
        </div>

        <div className={styles.category}>
          <p className={styles.active}>Ultimos partidos</p>
          <p>Futuros partidos</p>
        </div>

        <table>
          <tbody>
            <tr>
              <td>
                <div>
                  <img src={ArgentinaImg} alt="" />
                  <p>Argentina</p>
                </div>
              </td>
              <td>
                <p className={styles.goals}>1-2</p>
              </td>
              <td>
                <div>
                  <img src={ItaliaImg} alt="" />
                  <p>Italia</p>
                </div>
              </td>
              <td className={styles.date}>10 diciembre 2022</td>
            </tr>

            <tr>
              <td>
                <div>
                  <img src={ArgentinaImg} alt="" />
                  <p>Argentina</p>
                </div>
              </td>
              <td>
                <p className={styles.goals}>1-2</p>
              </td>
              <td>
                <div>
                  <img src={ItaliaImg} alt="" />
                  <p>Italia</p>
                </div>
              </td>
              <td className={styles.date}>10 diciembre 2022</td>
            </tr>
            <tr>
              <td>
                <div>
                  <img src={ArgentinaImg} alt="" />
                  <p>Argentina</p>
                </div>
              </td>
              <td>
                <p className={styles.goals}>1-2</p>
              </td>
              <td>
                <div>
                  <img src={ItaliaImg} alt="" />
                  <p>Italia</p>
                </div>
              </td>
              <td className={styles.date}>10 diciembre 2022</td>
            </tr>

            <tr>
              <td>
                <div>
                  <img src={ArgentinaImg} alt="" />
                  <p>Argentina</p>
                </div>
              </td>
              <td>
                <p className={styles.goals}>1-2</p>
              </td>
              <td>
                <div>
                  <img src={ItaliaImg} alt="" />
                  <p>Italia</p>
                </div>
              </td>
              <td className={styles.date}>10 diciembre 2022</td>
            </tr>
          </tbody>
        </table>
      </div>

      <div>
        <div>
          <h2>Jugadores</h2>

          <select className={styles.select_selected} name="cars" id="cars">
            <option value="volvo">Lampe</option>
            <option value="saab">Cristiano</option>
            <option value="mercedes">Messi</option>
            <option value="audi">Maradona</option>
          </select>
        </div>

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
      </div>
    </div>
  );
};

export default Home;
