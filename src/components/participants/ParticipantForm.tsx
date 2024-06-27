import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Participant } from "../../types";

export type CreateUpdateFunctionProps = (participant: Participant, isCreate: boolean | undefined) => void;

interface ParticipantFormProps {
    onSubmitParticipant: CreateUpdateFunctionProps; // Function to handle submit which is a function that takes a participant and a boolean
    defaultParticipant: Participant | undefined;
}

export default function ParticipantForm ({ onSubmitParticipant, defaultParticipant }: ParticipantFormProps) {
    const [participant, setParticipant] = useState<Participant>({
        name: "",
        age: 0,
        gender: "male",
        club: "",
        disciplines: [],
    });

    useEffect(() => {
        if (defaultParticipant) {
            setParticipant(defaultParticipant);
        } else {
            setParticipant({
                name: "",
                age: 0,
                gender: "male",
                club: "",
                disciplines: [],
            });
        }
    }, [defaultParticipant]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        console.log(e.target);
        setParticipant((prevParticipant) => ({
            ...prevParticipant,
            [id]: value,
        }));
        console.log(participant);
    };

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        const isCreate = !participant.id ? true : false;
        onSubmitParticipant(participant, isCreate);
        setParticipant({
            name: "",
            age: 0,
            gender: "male",
            club: "",
            disciplines: [],
        });
        console.log(participant);
    };

    return (
        <>
            <section>
                <h4>Participant Form</h4>
                <form>
                    <div className="mb-2">
                        <label htmlFor="name" className="form-label">
                            Name
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            onChange={handleChange}
                            value={participant.name}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="age" className="form-label">
                            Age
                        </label>
                        <input
                            type="number"
                            className="form-control"
                            id="age"
                            onChange={handleChange}
                            value={participant.age}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="gender" className="form-label">
                            Gender
                        </label>
                        <select className="form-select" id="gender" onChange={handleChange} value={participant.gender}>
                            <option value="male">Male</option>
                            <option value="female">Female</option>
                        </select>
                    </div>
                    <div className="mb-2">
                        <label htmlFor="club" className="form-label">
                            Club
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="club"
                            onChange={handleChange}
                            value={participant.club}
                        />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="disciplines" className="form-label">
                            Disciplines
                        </label>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="disciplines"
                                value="1"
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="disciplines">
                                100m-løb
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="disciplines"
                                value="2"
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="disciplines">
                                tre-spring
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="disciplines"
                                value="3"
                                onChange={handleChange}
                            />
                            <label className="form-check-label" htmlFor="disciplines">
                                Diskoskast
                            </label>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-primary mx-2" onClick={handleSubmit}>
                            {!participant.id ? "Submit" : "Update"}
                        </button>
                        <button
                            className="btn btn-secondary mx-2"
                            onClick={(e) => {
                                e.preventDefault();
                                setParticipant({
                                    name: "",
                                    age: 0,
                                    gender: "male",
                                    club: "",
                                    disciplines: [],
                                });
                            }}
                        >
                            cancel
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}
