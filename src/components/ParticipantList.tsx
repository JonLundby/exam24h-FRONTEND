import { useState, useEffect } from "react";
import { Participant } from "../types";

type ListOfParticipantsProps = {
    participants: Participant[];
    deleteParticipant: (id: number) => void;
};

export default function ParticipantsList({ participants, deleteParticipant }: ListOfParticipantsProps) {
    const [sortConfig, setSortConfig] = useState<{
        key: keyof Participant | null;
        direction: "ascending" | "descending";
    }>({ key: null, direction: "ascending" });
    const [participantsLocal, setParticipantsLocal] = useState<Participant[]>(participants);

    useEffect(() => {
        setParticipantsLocal(participants);
    }, [participants]);

    const sortedParticipants = [...participantsLocal].sort((a, b) => {
        if (sortConfig.key) {
            const aValue = a[sortConfig.key];
            const bValue = b[sortConfig.key];

            if (aValue !== undefined && bValue !== undefined) {
                if (aValue < bValue) {
                    return sortConfig.direction === "ascending" ? -1 : 1;
                }
                if (aValue > bValue) {
                    return sortConfig.direction === "ascending" ? 1 : -1;
                }
            }
        }
        return 0;
    });

    const requestSort = (key: keyof Participant) => {
        let direction: "ascending" | "descending" = "ascending";
        if (sortConfig.key === key && sortConfig.direction === "ascending") {
            direction = "descending";
        }
        setSortConfig({ key, direction });
    };

    const handleDeleteParticipant = async (id: number) => {
        deleteParticipant(id);
    };

    return (
        <section className="d-flex justify-content-center m-5">
            <table className="table">
                <thead>
                    <tr>
                        <th className="clickable-th" onClick={() => requestSort("name")}>
                            Name
                        </th>
                        <th className="clickable-th" onClick={() => requestSort("age")}>
                            Age
                        </th>
                        <th className="clickable-th" onClick={() => requestSort("gender")}>
                            Gender
                        </th>
                        <th className="clickable-th" onClick={() => requestSort("club")}>
                            Club
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {sortedParticipants.map((participant) => (
                        <tr key={participant.id}>
                            <td>{participant.name}</td>
                            <td>{participant.age}</td>
                            <td>{participant.gender}</td>
                            <td>{participant.club}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteParticipant(participant.id)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

// import { Participant } from "../types";

// type ListOfParticipantsProps = {
//     participants: Participant[];
//     deleteParticipant: (id: number) => void;
// };

// export default function ParticipantsList({ participants, deleteParticipant }: ListOfParticipantsProps) {

//     const handleDeleteParticipant = async (id: number) => {
//         deleteParticipant(id);
//     };

//     return (
//         <section className="d-flex justify-content-center m-5">
//             <table className="table">
//                 <thead>
//                     <tr>
//                         <th>Name</th>
//                         <th>Age</th>
//                         <th>Gender</th>
//                         <th>Club</th>
//                         {/* <th colSpan={2}>
//                             <button className="btn btn-success" onClick={handleNewParticipant}>
//                                 New Participant
//                             </button>
//                         </th> */}
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {participants.map((Participant) => (
//                         <tr key={Participant.id}>
//                             <td>{Participant.name}</td>
//                             <td>{Participant.age}</td>
//                             <td>{Participant.gender}</td>
//                             <td>{Participant.club}</td>
//                             <td>
//                                 <button
//                                     className="btn btn-danger"
//                                     onClick={() => handleDeleteParticipant(Participant.id)}
//                                 >
//                                     Delete
//                                 </button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </section>
//     );
// }
