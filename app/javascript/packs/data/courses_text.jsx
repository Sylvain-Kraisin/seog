import React from 'react';

var a = (
    <div>
        <h1>This is a Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc.</p>
    </div>
);

//var a = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.";
var b = "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ";
var c = "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum.";

export const kpiTextData = {
        visits: {
            def: "The number of organic visits generated in one month.",
            impo: "Basic",
            todo: "To increase your Visits, you need to analyze all the KPIs, and then spend credits on Marketing and Technical SEO Tasks."
        },
        active_pages: {
            def: a,
            impo: b,
            todo: c
        },


        visits_byAP: {
            def: a,
            impo: b,
            todo: c
        },

        indexable_ratio: {
            def: a,
            impo: b,
            todo: c
        },
        active_ratio_oncomp: {
            def: a,
            impo: b,
            todo: c
        },
        crawl_ratio_oncomp: {
            def: a,
            impo: b,
            todo: c
        },

        pages: {
            def: "The number of pages in your website structure. It contains both Indexable and Not Indexable Pages.",
            todo: "Make sure you have a maximum number of Indexable Pages to generate more organic traffic."
        },
        comp_pages: {
            def: a,
            impo: b,
            todo: c
        },
        notcomp_pages: {
            def: a,
            impo: b,
            todo: c
        },

        crawled_comp_pages: {
            def: a,
            impo: b,
            todo: c
        },
        crawled_notcomp_pages: {
            def: a,
            impo: b,
            todo: c
        },

        active_comp_pages: {
            def: a,
            impo: b,
            todo: c
        },
        active_notcomp_pages: {
            def: a,
            impo: b,
            todo: c
        },

        avg_loadtimes: {
            def: a,
            impo: b,
            todo: c
        },
        avg_depth: {
            def: a,
            impo: b,
            todo: c
        },
        avg_badhttp: {
            def: a,
            impo: b,
            todo: c
        },
        avg_inlinks: {
            def: a,
            impo: b,
            todo: c
        },

        avg_words: {
            def: a,
            impo: b,
            todo: c
        },
        pct_duptitles: {
            def: a,
            impo: b,
            todo: c
        },
        avg_unicity: {
            def: a,
            impo: b,
            todo: c
        },
        avg_AnchorsVar: {
            def: a,
            impo: b,
            todo: c
        }
}