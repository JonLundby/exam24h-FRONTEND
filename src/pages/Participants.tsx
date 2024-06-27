import ParticipantsList from "../components/participants/ParticipantList";
import { Participant } from "../types";
import { useEffect, useState } from "react";
import { fetchAllParticipants, deleteParticipantById, createParticipant, updateParticipant } from "../service/apiFacade";
import ParticipantForm, { CreateUpdateFunctionProps } from "../components/participants/ParticipantForm";

export default function Participants() {
    const [participants, setParticipants] = useState<Participant[]>([]);
    const [participantToUpdate, setParticipantToUpdate] = useState<Participant | undefined>(undefined);

    useEffect(() => {
        fetchParticipants();
    }, []);

    const fetchParticipants = async () => {
        const fetchedParticipants = await fetchAllParticipants();
        setParticipants(fetchedParticipants);
        console.log(fetchedParticipants);
    };

    const handleCreateUpdateParticipant: CreateUpdateFunctionProps = async (newParticipant: Participant, isCreate) => {
        console.log(isCreate);
        if (isCreate) {
            await createParticipant(newParticipant);
        } else {
            await updateParticipant(newParticipant);
        }
        await fetchParticipants();
    };

    const editListedParticipant = (id: number) => {
        console.log(id);
        const participantToUpdate = participants.find((p) => p.id === id);
        if (participantToUpdate) {
            setParticipantToUpdate(participantToUpdate);
        }
    };
    
    const deleteParticipant = async (id: number) => {
        await deleteParticipantById(id);
        await fetchParticipants();
    };

    return (
        <>
            <h1 className="d-flex justify-content-center m-2">Participants</h1>
            <div className="d-flex justify-content-center m-2">
                <ParticipantsList
                    participants={participants}
                    editListedParticipant={editListedParticipant}
                    deleteParticipant={deleteParticipant}
                />
                <ParticipantForm
                    onSubmitParticipant={handleCreateUpdateParticipant}
                    defaultParticipant={participantToUpdate}
                />
            </div>
        </>
    );
}
