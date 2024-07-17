import { useState, ChangeEvent, FormEvent, useEffect } from "react";
import { Participant, Discipline } from "../../types";

export type CreateUpdateFunctionProps = (participant: Participant, isCreate: boolean | undefined) => void;

interface ParticipantFormProps {
    onSubmitParticipant: CreateUpdateFunctionProps; // Function to handle submit which is a function that takes a participant and a boolean
    defaultParticipant: Participant | undefined;
    onCancel: () => void; // onCancel returns void but carries the function call to the parent component
    disciplines: Discipline[];
}

export default function ParticipantForm({ onSubmitParticipant, defaultParticipant, onCancel, disciplines }: ParticipantFormProps) {
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
        // console.log(defaultParticipant);
    }, [defaultParticipant]);

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;

        setParticipant((prevParticipant) => ({
            ...prevParticipant,
            [id]: value,
        }));

        // console.log(participant);
    };
    
    const handleChangeCheckbox = (e: ChangeEvent<HTMLInputElement>) => {
        const { checked, value } = e.target;
        const disciplineId = Number(value);

        setParticipant((prevParticipant) => {
            const disciplines = checked
                ? [...prevParticipant.disciplines, { id: disciplineId, name: "", resultType: "" }]
                : prevParticipant.disciplines.filter((discipline) => discipline.id !== disciplineId);

            return {
                ...prevParticipant,
                disciplines,
            };
        });
    };

    const handleCancel = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        setParticipant((prevParticipant) => ({
            ...prevParticipant, // previous participant is unpacked
            name: "", // the unpacked participant is updated with the new values
            age: 0,
            gender: "male",
            club: "",
            disciplines: [], // disciplines are set to an empty array
        }));

        onCancel();
    }

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

        // console.log(participant);
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
                        {disciplines.map((discipline) => (
                            <div className="form-check" key={discipline.id}>
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    id={`discipline-${discipline.id}`}
                                    checked={participant.disciplines.some((d) => d.id === discipline.id)}
                                    value={discipline.id.toString()}
                                    onChange={handleChangeCheckbox}
                                />
                                <label className="form-check-label" htmlFor={`discipline-${discipline.id}`}>
                                    {discipline.name}
                                </label>
                            </div>
                        ))}
                        {/* <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="100m-løb"
                                checked={participant.disciplines.some((discipline) => discipline.id === 1)} // TODO: Fix this so that it checks if the discipline is in the disciplines array
                                value="1"
                                onChange={handleChangeCheckbox}
                            />
                            <label className="form-check-label" htmlFor="100m-løb">
                                100m-løb
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="Diskoskast"
                                checked={participant.disciplines.some((discipline) => discipline.id === 2)}
                                value="2"
                                onChange={handleChangeCheckbox}
                            />
                            <label className="form-check-label" htmlFor="Diskoskast">
                                Diskoskast
                            </label>
                        </div>
                        <div className="form-check">
                            <input
                                type="checkbox"
                                className="form-check-input"
                                id="Tre-spring"
                                checked={participant.disciplines.some((discipline) => discipline.id === 3)}
                                value="3"
                                onChange={handleChangeCheckbox}
                            />
                            <label className="form-check-label" htmlFor="Tre-spring">
                                Tre-spring
                            </label>
                        </div> */}
                    </div>
                    <div>
                        <button className="btn btn-primary mx-2" onClick={handleSubmit}>
                            {!participant.id ? "Submit" : "Update"}
                        </button>
                        <button className="btn btn-secondary mx-2" onClick={handleCancel}>
                            cancel
                        </button>
                    </div>
                </form>
            </section>
        </>
    );
}
