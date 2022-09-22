function groupMembers(employees, selectTeam) {
    let teams = [];

    let teamAMembers = employees.filter((employee) => employee.teamName === 'TeamA');
    let teamA = {
        team: 'TeamA',
        members: teamAMembers,
        collapsed: selectTeam === 'TeamA' ? false : true
    }
    teams.push(teamA);

    let teamBMembers = employees.filter((employee) => employee.teamName === 'TeamB');
    let teamB = {
        team: 'TeamB',
        members: teamBMembers,
        collapsed: selectTeam === 'TeamB' ? false : true
    }
    teams.push(teamB);

    let teamCMembers = employees.filter((employee) => employee.teamName === 'TeamC');
    let teamC = {
        team: 'TeamC',
        members: teamCMembers,
        collapsed: selectTeam === 'Team C' ? false : true
    }
    teams.push(teamC);

    let teamDMembers = employees.filter((employee) => employee.teamName === 'TeamD');
    let teamD = {
        team: 'TeamD',
        members: teamDMembers,
        collapsed: selectTeam === 'TeamD' ? false : true
    }
    teams.push(teamD);

    return teams;
}

export default groupMembers