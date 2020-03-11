// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';
// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import richDate from 'part:@sanity/form-builder/input/rich-date/schema';

// We import object and document schemas
import person from './documents/person';
import sermon from './documents/sermon';
import series from './documents/series';
import ministry from './documents/ministry';
import campus from './documents/campus';
import event from './documents/event';
import group from './documents/group';
import announcement from './documents/announcement';
// import page from './documents/page';
import prayerVenture from './documents/prayerVenture';

import homePage from './singletons/homePage';
import siteSettings from './singletons/siteSettings';
import imNewPage from './singletons/imNewPage';
import locationsPage from './singletons/locationsPage';
import givePage from './singletons/givePage';
import staffPage from './singletons/staffPage';
import watchListenPage from './singletons/watchListenPage';
import whatWeDoPage from './singletons/whatWeDoPage';
import whoWeArePage from './singletons/whoWeArePage';
import beliefsPage from './singletons/beliefsPage';
import historyPage from './singletons/historyPage';
import lingoPage from './singletons/lingoPage';
import reachPage from './singletons/reachPage';
import liveStreamPage from './singletons/liveStreamPage';

import bannerImage from './objects/bannerImage';
import basicPageIntro from './objects/basicPageIntro';
import blockContent from './objects/blockContent';
import giveBlock from './objects/giveBlock';
import heroBlock from './objects/heroBlock';
import highlightedMinistry from './objects/highlightedMinistry';
import imNewBlock from './objects/imNewBlock';
import internalLink from './objects/internalLink';
import internalLinkWithText from './objects/internalLinkWithText';
import location from './objects/location';
import pageIntro from './objects/pageIntro';
import richText from './objects/richText';
import update from './objects/update';
import seoDescription from './objects/seoDescription';
import socialLink from './objects/socialLink';
import socialMediaLink from './objects/socialMediaLink';
import titleMessage from './objects/titleMessage';
import youTube from './objects/youTube';
import scripture from './objects/scripture';
import prayerStations from './objects/prayerStations';
import phoneNumber from './objects/phoneNumber';
import navItem from './objects/navItem';
import blockLink from './objects/blockLink';
import timelineItem from './objects/timelineItem';
import whoWeAreBlock from './objects/whoWeAreBlock';
import definitionItem from './objects/definitionItem';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
    // We name our schema
    name: 'default',
    // Then proceed to concatenate our document type
    // to the ones provided by any plugins that are installed
    types: schemaTypes.concat([
        // The following are document types which will appear
        // in the studio.
        event,
        ministry,
        campus,
        person,
        sermon,
        series,
        group,
        siteSettings,
        announcement,
        // page,

        homePage,
        liveStreamPage,
        imNewPage,
        locationsPage,
        givePage,
        prayerVenture,
        staffPage,
        watchListenPage,
        whatWeDoPage,
        whoWeArePage,
        beliefsPage,
        historyPage,
        lingoPage,
        reachPage,

        bannerImage,
        basicPageIntro,
        blockContent,
        definitionItem,
        giveBlock,
        heroBlock,
        highlightedMinistry,
        imNewBlock,
        internalLinkWithText,
        internalLink,
        location,
        pageIntro,
        phoneNumber,
        prayerStations,
        richText,
        scripture,
        seoDescription,
        socialLink,
        socialMediaLink,
        titleMessage,
        youTube,
        navItem,
        richDate,
        blockLink,
        whoWeAreBlock,
        timelineItem,
        update,
    ]),
});
