import React from 'react';
import {useFetchArchive} from "../helpers/hooks/use-fetch-archive";

const ArchiveWrapper = ({children}:React.PropsWithChildren) => {

    useFetchArchive()

    return (
        <>
            {children}
        </>
    );
};

export default ArchiveWrapper;