import Sidebar from "../../../components/sidebar"
import styles from "./styles/index.module.css"
const Index = () => {
  return (
    <>
      <Sidebar
        children={
          <>
            <form> class={styles.form}
         
              <input type="text" className={styles.input} />
              <button className={styles.button}>Guardar</button>
            </form>
          </>
        }
      />
    </>
  )
}

export default Index
