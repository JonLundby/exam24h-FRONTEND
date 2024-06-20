import { Participant } from "../types";

const endpoint = "http://localhost:8080/api";

// ------- PARTICIPANTS ------- //
async function fetchAllParticipants() {
    const response = await fetch(`${endpoint}/participants`);
    if (!response.ok) {
        throw new Error("Could not fetch participants");
    }
    const data = await response.json();
    return data;
}

async function fetchParticipantById(id: number) {
    const response = await fetch(`${endpoint}/participants/${id}`);
    if (!response.ok) {
        throw new Error("Could not fetch participants");
    }
    const data = await response.json();
    return data;
}

async function createParticipant(participant: Participant) {
    const response = await fetch(`${endpoint}/participants`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(participant),
    });
    if (!response.ok) {
        throw new Error("Could not create participant");
    }
    const data = await response.json();
    return data;
}

async function postParticipant(participant: Participant) {
    const response = await fetch(`${endpoint}/participants`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(participant),
    });
    if (!response.ok) {
        throw new Error("Could not post participant");
    }
    const data = await response.json();
    return data;
}

async function updateParticipant(participant: Participant) {
    const response = await fetch(`${endpoint}/participants/${participant.id}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(participant),
    });
    if (!response.ok) {
        throw new Error("Could not update participant");
    }
    const data = await response.json();
    return data;
}

async function deleteParticipantById(id: number) {
    const response = await fetch(`${endpoint}/participants/${id}`, {
        method: "DELETE",
    });
    if (!response.ok) {
        throw new Error("Could not delete participant");
    }
    return response;
}

// ------- PARTICIPANTS ------- //
async function fetchAllResults() {
    const response = await fetch(`${endpoint}/results`);
    if (!response.ok) {
        throw new Error("Could not fetch results");
    }
    const data = await response.json();
    return data;
}

export {
    fetchAllParticipants,
    fetchParticipantById,
    createParticipant,
    postParticipant,
    updateParticipant,
    deleteParticipantById,
    fetchAllResults,
};
