import React from 'react';

import { Page} from '../Layout';

export function NotFoundPage() {
    const content = (
        <h1>404 Not Found</h1>
    )
    return <Page content={content} />
}