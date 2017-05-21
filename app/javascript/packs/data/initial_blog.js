export const ini_blog = {
    visits_byAP_comp: [1498, 280, 5, 1, 1],
    visits_byAP_notcomp: [150, 28, 1, 1, 1],
    crawl_ratio_oncomp: [100, 80, 40, 60, 50],
    crawled_ratio_notcomp: [100, 100, 50, 100, 60],
    comp_pages: [10, 90, 18700, 150, 0],
    notcomp_pages: [0, 12, 450, 0, 17800],
    avg_Inlinks: [7600, 140, 5, 2, 1],
    avg_Depth: [1.2, 2.4, 7.0, 6.5, 8.9],
    avg_LoadTimes: [820, 930, 1580, 970, 1210],
    pct_DupTitles: [0, 0, 20, 10, 50],
    avg_Words: [350, 650, 1260, 150, 250],
    avg_unicity: [0, 0, 0, 0, 0],
    avg_AnchorsVar: [0, 0, 0, 0, 0],

    comp_to_notcomp: [1, 1.25, 0.8, 0.6, 0.8],
    notcomp_to_badhttp: [0.2, 0.2, 0.2, 0.3, 0.3],
    comp_to_active_comp: [1, 0.8, 0.4, 0, 0],
    comp_to_active_notcomp: [1, 1, 0.2, 0, 0]
};

var inf = 10000000000000000000;

export const borne = {

    visits: {min: [0, 0, 0, 0, 0, 0], max: [inf, inf, inf, inf, inf]},

    visits_byAP_comp: {min: [1000,100,1,1,1], max: [3024,541,12,1,1]},

    visits_byAP_notcomp: {min: [122,11,1,1,1], max: [298,49,1,1,1]},

    indexable_ratio: {min: [0, 0, 0, 0, 0, 0], max: [100, 100, 100, 100, 100]},
    crawled_ratio_oncomp: {min: [100,83,16,5,5], max: [100,100,74,67,46]},
    active_ratio_oncomp: {min: [100,52,5,0,0], max: [100,100,41,5,0]},

    comp_pages: {min: [10,72,17654,150,0], max: [16,144,47890,1446,0]},
    notcomp_pages: {min: [0,0,356,0,245], max: [4,45,15678,0,173595]},

    crawled_comp_pages: {min: [0, 0, 0, 0, 0, 0], max: [inf, inf, inf, inf, inf]},
    crawled_notcomp_pages: {min: [0, 0, 0, 0, 0, 0], max: [inf, inf, inf, inf, inf]},

    active_comp_pages: {min: [0, 0, 0, 0, 0, 0], max: [inf, inf, inf, inf, inf]},
    active_notcomp_pages: {min: [0, 0, 0, 0, 0, 0], max: [inf, inf, inf, inf, inf]},

    avg_inlinks: {min: [6007,102,1,1,1], max: [14508,245,11,3,3]},
    avg_depth: {min: [1,1.6,4.1,5,4], max: [1.6,3.2,12.3,14.5,13.3]},
    avg_loadtimes: {min: [321,345,369,393,417], max: [1220,1330,2445,1345,1467]},
    avg_badhttp: {min: [0,0,3,2,0,49], max: [0,8,9,3135,6,0,34719]},

    pct_duptitles: {min: [0,0,0,0,39], max: [0,21,32,33,100]},
    avg_words: {min: [299,521,455,102,103], max: [856,980,1980,304,504]},
    avg_unicity: {min: [0, 0, 0, 0, 0, 0], max: [100, 100, 100, 100, 100]},
    avg_AnchorsVar: {min: [0, 0, 0, 0, 0, 0], max: [inf, inf, inf, inf, inf]}
};

export const dim = {
    avg_inlinks:  [2, 3, 3, 4, 4],
    avg_depth:  [4, 4, 4, 4, 4],
    avg_loadtimes: [5, 5, 5, 5, 5],
    avg_badhttp: [7, 7, 7, 7, 7],

    notcomp_pages: [6, 6, 6, 6, 6],
    pct_duptitles: [3, 3, 3, 3, 3],
    avg_words: [6, 6, 6, 6, 6],
    avg_unicity: [6, 6, 6, 6, 6],
    avg_AnchorsVar: [6, 6, 6, 6, 6]
};

export function random(min, max) {
    if (min < 0) {
        return Math.round(100*(min + Math.random() * (Math.abs(min)+max)))/100;
    }else {
        return Math.round(100*(min + Math.random() * max))/100;
    }
}

// Create Natural Evolution Factors for all months/weeks
var natevo = [];
for (var i = 0; i < 60; i++) {
    natevo.push(
        {
            comp_pages: [0, random(0, 0.02), random(-0.05, 0.05), random(-0.05, 0.05), random(-0.05, 0.05)],
            notcomp_pages: [0, random(0, 0.02), random(-0.02, 0.10), random(-0.05, 0.05), random(-0.05, 0.05)],

            avg_inlinks: [random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05)],
            avg_depth: [random(-0.1, 0.1),random(-0.1, 0.1),random(-0.08, 0.08),random(-0.08, 0.08),random(-0.08, 0.08)],
            avg_loadtimes: [random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05)],
            avg_badhttp: [random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05)],

            pct_duptitles: [random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05)],
            avg_words: [random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05)],
            avg_unicity: [random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05)],
            avg_AnchorsVar: [random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05)],

            crawled_ratio_oncomp: [random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05)],

            visits_byAP_comp: [random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05)],
            visits_byAP_notcomp: [random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05),random(-0.05, 0.05)]

        }
    );
}

export {natevo};

