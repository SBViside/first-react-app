import { useState } from "react";
import { timer } from "../utils/utils";

export default function useFetching(callback) {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState('');

    const fetching = async () => {
        try {
            setIsLoading(true);
            await timer(700);
            await callback();
        } catch (e) {
            setError(e.message);
        } finally {
            setIsLoading(false);
        }
    }

    return [fetching, isLoading, error];
}