import { api, APIError } from "encore.dev/api";

/**
 * Gets the lot for the given id
 */
export const exampleEndpoint = api(
    { method: "GET", expose: true },
    (): Promise<{ test: string }> => {
        throw APIError.notFound("message");
    },
);
