import React from 'react';

import Layout from '../../components/layout';
import SEO from '../../components/seo';
import NarrowPageWrapper from '../../layouts/NarrowPageWrapper';

const Thanks = () => (
    <Layout>
        <SEO title="Thanks for your contacting us." />
        <NarrowPageWrapper includeSidePadding={true} includeTopPadding={true}>
            <h1>Thanks for your contacting us.</h1>
            <p>
                Your message was sent. We'll contact you if your message
                necessitates a reply.
            </p>
        </NarrowPageWrapper>
    </Layout>
);

Thanks.propTypes = {};

export default Thanks;
