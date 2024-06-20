import { useState, ChangeEvent, FormEvent } from "react";
import { Participant } from "../types";

interface ParticipantFormProps {
    onCreateParticipant: (participant: Participant) => void;
}

const ParticipantForm = ({ onCreateParticipant }: ParticipantFormProps) => {
    const [participant, setParticipant] = useState<Participant>({
        name: "",
        age: 0,
        gender: "male",
        club: "",
    });

    const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
        const { id, value } = e.target;
        setParticipant((prevParticipant) => ({
            ...prevParticipant,
            [id]: value,
        }));
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        onCreateParticipant(participant);
        setParticipant({
            name: "",
            age: 0,
            gender: "male",
            club: "",
        });
    };

    return (
        <>
            <section>
                <h4>Participant Form</h4>
                <form onSubmit={handleSubmit}>
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
                    <button type="submit" className="btn btn-primary">
                        Submit
                    </button>
                </form>
            </section>
        </>
    );
};

export default ParticipantForm;

// import { useState, ChangeEvent, FormEvent, useEffect } from "react";
// import { Participant } from "../types";

// type ParticipantFormProps = {
//     onSubmitted: (participant: Participant) => void;
// };

// export default function ParticipantForm() {
//     const [participant, setParticipant] = useState<Participant>({
//         name: "",
//         age: 0,
//         gender: "",
//         club: "",
//     });

//     return (
//         <>
//             <section>
//                 <h4>Participant Form</h4>
//                 <form>
//                     <div className="mb-2">
//                         <label htmlFor="name" className="form-label">
//                             Name
//                         </label>
//                         <input type="text" className="form-control" id="name" onChange={handleChange} />
//                     </div>
//                     <div className="mb-2">
//                         <label htmlFor="age" className="form-label">
//                             Age
//                         </label>
//                         <input type="number" className="form-control" id="age" onChange={handleChange} />
//                     </div>
//                     <div className="mb-2">
//                         <label htmlFor="gender" className="form-label">
//                             Gender
//                         </label>
//                         <select className="form-select" id="gender">
//                             <option value="male">Male</option>
//                             <option value="female">Female</option>
//                         </select>
//                     </div>
//                     <div className="mb-2">
//                         <label htmlFor="club" className="form-label">
//                             Club
//                         </label>
//                         <input type="text" className="form-control" id="club" />
//                     </div>
//                     <button type="submit" className="btn btn-primary">
//                         Submit
//                     </button>
//                 </form>
//                 <p>{JSON.stringify(participant)}</p>
//             </section>
//         </>
//     );
// }
