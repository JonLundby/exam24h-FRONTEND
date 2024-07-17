import ParticipantsList from "../components/participants/ParticipantList";
import { Participant, Discipline } from "../types";
import { useEffect, useState } from "react";
import { fetchAllParticipants, deleteParticipantById, createParticipant, updateParticipant, fetchAllDisciplines } from "../service/apiFacade";
import ParticipantForm, { CreateUpdateFunctionProps } from "../components/participants/ParticipantForm";

export default function Participants() {
    const [disciplines, setDisciplines] = useState<Discipline[]>([]);
    const [participants, setParticipants] = useState<Participant[]>([]);
    const [participantToUpdate, setParticipantToUpdate] = useState<Participant | undefined>(undefined);

    useEffect(() => {
        fetchParticipants();
        fetchDisciplines();
    }, []);

    const fetchDisciplines = async () => {
        const fetchedDisciplines = await fetchAllDisciplines();
        setDisciplines(fetchedDisciplines);
        console.log(fetchedDisciplines);
    };

    const fetchParticipants = async () => {
        const fetchedParticipants = await fetchAllParticipants();
        setParticipants(fetchedParticipants);
        // console.log(fetchedParticipants);
    };

    const handleCreateUpdateParticipant: CreateUpdateFunctionProps = async (newParticipant: Participant, isCreate) => {
        if (isCreate) {
            await createParticipant(newParticipant);
        } else {
            await updateParticipant(newParticipant);
        }
        await fetchParticipants();
    };

    const editListedParticipant = (id: number) => {
        const participantToUpdate = participants.find((p) => p.id === id);
        if (participantToUpdate) {
            setParticipantToUpdate(participantToUpdate);
        }
        // console.log(participantToUpdate);
    };
    
    const deleteParticipant = async (id: number) => {
        await deleteParticipantById(id);
        await fetchParticipants();
    };

    const resetParticipantToUpdate = () => {
        setParticipantToUpdate(undefined);
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
                    onCancel={resetParticipantToUpdate}
                    disciplines={disciplines}
                />
            </div>
        </>
    );
}
