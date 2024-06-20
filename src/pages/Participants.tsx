import ParticipantsList from "../components/ParticipantList";
import { Participant } from "../types";
import { useEffect, useState } from "react";
import { fetchAllParticipants, deleteParticipantById,  } from "../service/apiFacade";

export default function Participants() {
    const [participants, setParticipants] = useState<Participant[]>([]);

    useEffect(() => {
        async function fetchParticipants() {
            const participants = await fetchAllParticipants();
            setParticipants(participants);
            console.log(participants);
        }
        fetchParticipants();
    }, []);

    const deleteParticipant = async (id: number) => {
        await deleteParticipantById(id);
        const participant = await fetchAllParticipants();
        setParticipants(participant);
    };

    return (
        <>
            <div className="d-flex justify-content-center m-2">
                <h1>Participants</h1>
                <ParticipantsList participants={participants} deleteParticipant={deleteParticipant}/>
            </div>
        </>
    );
}