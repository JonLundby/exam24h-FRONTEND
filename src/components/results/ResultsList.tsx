import { Result } from "../../types";

type ResultsListProps = {
    results: Result[];
};

export default function ResultsList({ results }: ResultsListProps) {
    return (
        <>
            <section className="d-flex justify-content-center">
                <table className="table">
                    <thead>
                        <tr>
                            <th>Result Value</th>
                            <th>Formatted Result</th>
                            <th>Grade</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result) => (
                            <tr key={result.id}>
                                <td>{result.resultValue}</td>
                                <td>{result.formattedResult}</td>
                                <td>{result.participantId}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </section>
        </>
    );
}
