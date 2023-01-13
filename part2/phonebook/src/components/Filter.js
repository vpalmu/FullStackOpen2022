const Filter = ({ filterByCriteria, handleFilterEvent: onFilterBy }) => <p>filter shown with: <input value={filterByCriteria} onChange={onFilterBy}></input></p>

export default Filter