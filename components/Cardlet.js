import styles from '../styles/Index.module.css'

const Cardlet = ({icon, title, desc}) => {
    return (
        <div className={styles.cardlet}>
            <div className={styles.cardletIcon}>{icon}</div>
            <h3>{title}</h3>
            <p>{desc}</p>
        </div>
    )
}

export default Cardlet
