import Title from "./Title"
import StatisticLine from "./StatisticLine"
import Table from "./Table"

const Statistics = ({good, neutral, bad}) => {

    function calculateWeightedSum(positiveElements, negativeElements) {
        return (positiveElements * 1) - (negativeElements * 1)
    }

    function calculateAverage(sum, all) { 
        if (all === 0) return 0
        return sum / all 
    }
    
    const all = good + neutral + bad
    const sum = calculateWeightedSum(good, bad) 
    const avg = calculateAverage(sum, all)
    const positive = good / all * 100

    // no stats yet
    if (all === 0) return (
        <h1>No feedback given</h1>
    )

    // return stats
    return (
        <>
            <Title titleText='Statistics' />
            <StatisticLine text='Good' value={good} />
            <StatisticLine text='Neutral' value={neutral} />
            <StatisticLine text='Bad' value={bad} />
            <StatisticLine text='All' value={all} />
            <StatisticLine text='Positive' value={positive} />
            <StatisticLine text='Average' value={avg} />
            <Table good={good} neutral={neutral} bad={bad} all={all} positive={positive} average={avg} />
        </>
    )
}

export default Statistics