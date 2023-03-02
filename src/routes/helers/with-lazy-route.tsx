import React, {Suspense} from 'react';

const WithLazyRoute = ({children}:React.PropsWithChildren) => {
    return (
        <Suspense fallback={'LOADING'}>
            {children}
        </Suspense>
    );
};

export default WithLazyRoute;