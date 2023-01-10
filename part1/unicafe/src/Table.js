import TableLine from './TableLine'

const Table = ({ good, neutral, bad, all, positive, average}) => {
    const positiveValue = positive + ' %'
    return(
        <>
            <table>
                <thead>
                    <tr className='header'>
                        <td className='tdHeader'>Name</td>
                        <td className='tdHeader'>Value</td>
                    </tr>
                </thead>
                <tbody>
                <TableLine name='Good' value={good} />
                    <TableLine name='Neutral' value={neutral} />
                    <TableLine name='Bad' value={bad} />
                    <TableLine name='All' value={all} />
                    <TableLine name='Positive' value={positiveValue} />
                    <TableLine name='Average' value={average} />
                </tbody>
            </table>
        </>
    )
}

export default Table