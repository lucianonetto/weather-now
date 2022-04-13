import styles from './card.module.sass'
import loader from '../../assets/loader.svg';

export function Card(props) {
    return (
        <div className={styles.card}>
            <div className={styles.title}>
                {props.item.name}, {props.item.sys.country}
            </div>
            {props.loading && <>
                <div className={styles.loading}>
                    <img src={loader} className={styles.loader} alt="Loading" />
                </div>
            </>}
            {!props.loading && <>
                <div className={styles.content}>
                    <div className={`${styles.temperature} ${styles[props.item.color]}`}>
                        {props.item.main.temp.toFixed(0)}<span>o</span>
                    </div>
                </div>
                <div className={styles.info}>
                    <div className={styles.position}>
                        <div className={styles.values}>
                            <div className={styles.label}>
                                HUMIDITY
                                <div className={styles.value}>{props.item.main.humidity}<span>%</span></div>
                            </div>
                            <div className={styles.label}>
                                PRESSURE
                                <div className={styles.value}>{props.item.main.pressure}<span>hPa</span></div>
                            </div>
                        </div>
                        <div className={styles.updated}>
                            Updated at {props.item.updated}
                        </div>
                    </div>
                </div>
            </>}
        </div>
    )
}