import React from 'react';
import '@shopify/polaris/build/esm/styles.css';
import { Page, Card, Button} from '@shopify/polaris';

const Dashbord = () => {
    return (
        <>
            <Page title="Example app">
            <Card sectioned>
                <Button onClick={() => alert('Button clicked!')}>Example button</Button>
            </Card>
            </Page>
        </>
    )
}

export default Dashbord;