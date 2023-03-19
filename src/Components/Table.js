import styles from './Table.module.css';

const Table = (props) => {

    return (
        <table className={styles.table}>
            <thead>
                <tr>
                    <th>Key</th>
                    <th>value</th>
                </tr>
            </thead>
            <tbody>
                {props.items.map((item) =>(
                    <tr key={item.key}>
                        <td>{item.key}</td>
                        <td>{item.value}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
};

export default Table;