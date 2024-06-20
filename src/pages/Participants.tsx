import ParticipantsList from "../components/ParticipantList";
import { Participant } from "../types";
import { useEffect, useState } from "react";
import { fetchAllParticipants, deleteParticipantById, createParticipant } from "../service/apiFacade";
import ParticipantForm from "../components/ParticipantForm";

export default function Participants() {
    const [participants, setParticipants] = useState<Participant[]>([]);

    useEffect(() => {
        fetchParticipants();
    }, []);

    const fetchParticipants = async () => {
        const fetchedParticipants = await fetchAllParticipants();
        setParticipants(fetchedParticipants);
    };

    const deleteParticipant = async (id: number) => {
        await deleteParticipantById(id);
        await fetchParticipants();
    };

    const handleCreateParticipant = async (newParticipant: Participant) => {
        await createParticipant(newParticipant);
        await fetchParticipants();
    };

    return (
        <>
            <h1 className="d-flex justify-content-center m-2">Participants</h1>
            <div className="d-flex justify-content-center m-2">
                <ParticipantsList participants={participants} deleteParticipant={deleteParticipant} />
                <ParticipantForm onCreateParticipant={handleCreateParticipant} />
            </div>
        </>
    );
}

// import ParticipantsList from "../components/ParticipantList";
// import { Participant } from "../types";
// import { useEffect, useState } from "react";
// import { fetchAllParticipants, deleteParticipantById, createParticipant} from "../service/apiFacade";
// import ParticipantForm from "../components/ParticipantForm";

// export default function Participants() {
//     const [participants, setParticipants] = useState<Participant[]>([]);

//     useEffect(() => {
//         async function fetchParticipants() {
//             const participants = await fetchAllParticipants();
//             setParticipants(participants);
//             console.log(participants);
//         }
//         fetchParticipants();
//     }, []);

//     const deleteParticipant = async (id: number) => {
//         await deleteParticipantById(id);
//         const participant = await fetchAllParticipants();
//         setParticipants(participant);
//     };

//     return (
//         <>
//             <h1 className="d-flex justify-content-center m-2">Participants</h1>
//             <div className="d-flex justify-content-center m-2">
//                 <ParticipantsList participants={participants} deleteParticipant={deleteParticipant} />
//                 <ParticipantForm />
//             </div>
//         </>
//     );
// }
