import { Participant } from "../types";

type ListOfParticipantsProps = {
    participants: Participant[];
    deleteParticipant: (id: number) => void;
};

export default function ParticipantsList({ participants, deleteParticipant }: ListOfParticipantsProps) {
    function handleNewParticipant() {
        console.log("New Participant");
    }

    const handleDeleteParticipant = async (id: number) => {
        deleteParticipant(id);
    };

    return (
        <section className="d-flex justify-content-center m-5">
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Age</th>
                        <th>Gender</th>
                        <th>Club</th>
                        <th colSpan={2}>
                            <button className="btn btn-success" onClick={handleNewParticipant}>
                                New Participant
                            </button>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {participants.map((Participant) => (
                        <tr key={Participant.id}>
                            <td>{Participant.name}</td>
                            <td>{Participant.age}</td>
                            <td>{Participant.gender}</td>
                            <td>{Participant.club}</td>
                            <td>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => handleDeleteParticipant(Participant.id)}
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
