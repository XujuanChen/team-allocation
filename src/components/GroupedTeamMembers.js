import { useState } from "react";
import groupMembers from "./GroupMembers";

const GroupedTeamMembers = ({ employees, selectTeam, setTeam }) => {
    const [groupedEmployees, setGroupedEmployees] = useState(groupMembers(employees, selectTeam));
    
    const handleClick = (e) => {
        let newGroupData = groupedEmployees.map((groupData) =>
            groupData.team === e.currentTarget.id
                ? { ...groupData, collapsed: !groupData.collapsed }
                : groupData
        )
        setGroupedEmployees(newGroupData);
        setTeam(e.currentTarget.id)
    }

    return (
        <main className='container'>
            <div className='row justify-content-center mt-3 mb-3'>
                <div className='col-8 mb-3'>
                    {
                        groupedEmployees.map((item) => {
                            const {team, collapsed} = item;
                            return (
                                <div key={team} className='card mt-2' style={{ cursor: 'pointer' }}>
                                    <h4 id={team} className='card-header text-secondary' onClick={handleClick}>
                                        Team {team}
                                    </h4>
                                    <div id={'collapse_' + team}
                                        className={collapsed === true ? 'collapse' : ''}>
                                        {
                                            item.members.map((member) => {
                                                return (
                                                    <div className='mt-2'>
                                                        <h5 className='card-title mt-2 text-secondary'>
                                                            <span>{member.fullName}</span>
                                                        </h5>
                                                        <p className='text-secondary'>{member.designation}</p>
                                                    </div>
                                                )
                                            })
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </main>
    )
}

export default GroupedTeamMembers;