import { Result } from "../../types";

type ResultsListProps = {
    results: Result[];
    deleteResult: (id: number) => void;
};

export default function ResultsList({ results, deleteResult }: ResultsListProps) {

    const handledelete = async (id: number) => {
        deleteResult(id);
    };
    return (
        <>
            <section className="d-flex justify-content-center">
                <table className="table m-4">
                    <thead>
                        <tr>
                            <th>Type</th>
                            <th>Value</th>
                            <th>Disciplin</th>
                            <th>Participant</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result) => (
                            <tr key={result.id}>
                                <td>{result.resultType}</td>
                                <td>{result.resultValue}</td>
                                <td>{result.disciplineName}</td>
                                <td>{result.participantName}</td>
                                <td>
                                    <button className="btn btn-danger" onClick={() => handledelete(result.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
}
