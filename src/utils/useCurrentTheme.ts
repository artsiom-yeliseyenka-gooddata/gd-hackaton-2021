// (C) 2021 GoodData Corporation
import { useEffect, useState } from "react";

import { LOADING_STATE } from "~constants";
import { ILoadingState } from "~constants/loadingState";
import { getThemeObjects, genericGetRequest } from "~utils";

export const useCurrentTheme = (): ILoadingState => {
    const [requestState, setRequestState] = useState(LOADING_STATE);

    const onRequestError = (error) => {
        setRequestState({ isLoading: false, data: null, error: error.message });
    };

    useEffect(() => {
        getThemeObjects()
            .then(({ query: { entries } }) => {
                const { link } = entries[0];

                genericGetRequest(link)
                    .then((response) => {
                        setRequestState({ isLoading: false, data: response, error: null });
                    })
                    .catch(onRequestError);
            })
            .catch(onRequestError);
    }, []);

    return requestState;
};
