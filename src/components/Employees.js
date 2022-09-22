import SearchBar from './SearchBar';

const Employees = ({ employees, team, handleChange, handleClick }) => {
    return (
        <main className='container-fluid'>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-3'>
                    <SearchBar team={team} handleChange={handleChange}/>
                </div>
            </div>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-8 '>
                    <div className='card-collection'>
                        {
                            employees.map((emp) => (
                                <div key={emp.id} id={emp.id}
                                    className={(emp.teamName === team ? 'card m-2 standout' : 'card m-2')}
                                    style={{ cursor: 'pointer' }}
                                    onClick={handleClick}>
                                    <img src={emp.img} className='card-img-top' /> 
                                    <div className='card-body'>
                                        <h5>{emp.fullName}</h5>
                                        <p>{emp.designation}</p>
                                    </div>
                                </div>
                            )
                            )
                        }
                    </div>
                </div>
            </div>

        </main>
    )
}


export default Employees;