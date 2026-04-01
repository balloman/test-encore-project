import { api, APIError, ErrCode } from "encore.dev/api";

/**
 * Gets the lot for the given id
 */
export const secondExampleEndpoint = api(
    { method: "GET", expose: true },
    (): Promise<{ test: string }> => {
        throw new APIError(ErrCode.NotFound, "Test Message")
    },
);
