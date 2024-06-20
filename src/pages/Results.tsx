import { useEffect, useState } from "react";
import { Result } from "../types";
import { fetchAllResults } from "../service/apiFacade";
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
    
    return (
        <>
            <h1 className="d-flex justify-content-center m-2">Results</h1>
            <div className="d-flex justify-content-center">
                <ResultsList results={results} />
            </div>
        </>
    );
}