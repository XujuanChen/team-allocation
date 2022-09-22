const Header = ({ team, teamCount }) => {
    return (
        <header className='container'>
            <div className='row justify-content-center'>
                <div className='col-8 mt-5'>
                    <h1 className="text-light mt-3"> Pick Your Team Member </h1>
                    <h3 className="text-light mt-3"> {team} has {teamCount} {teamCount === 1 ? "Member" : "Members"}. </h3>
                </div>
            </div>
        </header>
    )
}

export default Header;