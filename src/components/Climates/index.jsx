import { useQuery } from 'react-query'
import { Card } from '../Card'
import { api } from '../../services/api'
import styles from './climates.module.sass'
import loader from '../../assets/loader.svg';

export function Climates() {
    const {data, isLoading, error} = useQuery('climates', async () => {
        const { data } = await api.get(`group?id=3421319,3445709,184745&appid=${process.env.REACT_APP_API_KEY}&units=metric`);
        const climates = data.list.map(d => {
            return {
                name: d.name,
                sys: d.sys,
                main: d.main,
                id: d.id,
                updated: new Date().toLocaleTimeString('en-US'),
                color: color(d.main.temp.toFixed(0))
            }
        });
        return climates;
    }, {
        refetchInterval: 600000,
        staleTime: 600000,
    });

    const color = (temp) => {
        if (temp < 6) return 'blue'
        else if (temp > 25) return 'red'
        return 'orange'
    }

    return (
        <main className={styles.climates}>
            {isLoading ? (
                <img src={loader} className={styles.loader} alt="Loading" />
            ) : error ? (
                <p>Error</p>
            ) : (
                <div className={styles.list}>
                    {data.map((item) => (
                        <Card key={item.id} item={item} />
                    ))}
                </div>
            )}
        </main>
    )
}