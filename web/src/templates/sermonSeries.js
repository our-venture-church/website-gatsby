import React from 'react';
import { graphql } from 'gatsby';
import SEO from '../components/seo';

export const query = graphql`
    query SermonSeriesTemplateQuery($id: String!) {
        series: sanitySeries(id: { eq: $id }) {
            id
            title
            startDate
            endDate
            _rawDescription
            artwork {
                asset {
                    _id
                }
            }
        }
    }
`;

const SermonSeriesTemplate = props => {
    const { data } = props;
    const series = data && data.series;
    return (
        <div>
            <SEO title={`${series.title}`} description="" />
            <h1>{series.title}</h1>
        </div>
    );
};

export default SermonSeriesTemplate;
