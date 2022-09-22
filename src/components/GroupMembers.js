function groupMembers(employees, selectTeam) {
    let teams = [];

    let teamAMembers = employees.filter((employee) => employee.teamName === 'A');
    let teamA = {
        team: 'A',
        members: teamAMembers,
        collapsed: selectTeam === 'A' ? false : true
    }
    teams.push(teamA);

    let teamBMembers = employees.filter((employee) => employee.teamName === 'B');
    let teamB = {
        team: 'B',
        members: teamBMembers,
        collapsed: selectTeam === 'B' ? false : true
    }
    teams.push(teamB);

    let teamCMembers = employees.filter((employee) => employee.teamName === 'C');
    let teamC = {
        team: 'C',
        members: teamCMembers,
        collapsed: selectTeam === 'C' ? false : true
    }
    teams.push(teamC);

    let teamDMembers = employees.filter((employee) => employee.teamName === 'D');
    let teamD = {
        team: 'D',
        members: teamDMembers,
        collapsed: selectTeam === 'D' ? false : true
    }
    teams.push(teamD);

    return teams;
}

export default groupMembers