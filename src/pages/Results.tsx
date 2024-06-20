import { useEffect, useState } from "react";
import { Result } from "../types";
import { deleteResultById, fetchAllResults } from "../service/apiFacade";
import ResultsList from "../components/results/ResultsList";

export default function Results() {
    const [results, setResults] = useState<Result[]>([]);
    
    useEffect(() => {
        fetchResults();
    }, []);

    const fetchResults = async () => {
        const fetchedResults = await fetchAllResults();
        setResults(fetchedResults);
        console.log(fetchedResults);
    }

    const deleteResult = async (id: number) => {
        await deleteResultById(id);
        await fetchResults();
    }
    
    return (
        <>
            <h1 className="d-flex justify-content-center m-2">Results</h1>
            <div className="d-flex justify-content-center">
                <ResultsList results={results} deleteResult={deleteResult} />
            </div>
        </>
    );
}