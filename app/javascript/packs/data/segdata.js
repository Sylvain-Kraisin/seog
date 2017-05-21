import {ini_blog} from './initial_blog';

export const segData_ini = [
    {
        name: 'Top Pages',

        visits: ini_blog.visits_byAP_comp[0]* 1 *ini_blog.comp_pages[0] * ini_blog.crawl_ratio_oncomp[0]/100 + ini_blog.visits_byAP_notcomp[0] * Math.round(1*ini_blog.notcomp_pages[0] * ini_blog.crawled_ratio_notcomp[0]/100),
        
        visits_byAP: Math.round(10*(ini_blog.visits_byAP_comp[0]* 1 *ini_blog.comp_pages[0] * ini_blog.crawl_ratio_oncomp[0]/100 + ini_blog.visits_byAP_notcomp[0] * Math.round(1*ini_blog.notcomp_pages[0] * ini_blog.crawled_ratio_notcomp[0]/100))/(Math.round(1*ini_blog.comp_pages[0] * ini_blog.crawl_ratio_oncomp[0]/100) + Math.round(1*ini_blog.notcomp_pages[0] * ini_blog.crawled_ratio_notcomp[0]/100)))/10,

        visits_comp: ini_blog.visits_byAP_comp[0]* 1 *ini_blog.comp_pages[0] * ini_blog.crawl_ratio_oncomp[0]/100,
        visits_notcomp: ini_blog.visits_byAP_notcomp[0] * Math.round(1*ini_blog.notcomp_pages[0] * ini_blog.crawled_ratio_notcomp[0]/100),

        active_pages: Math.round(1*ini_blog.comp_pages[0] * ini_blog.crawl_ratio_oncomp[0]/100) + Math.round(1*ini_blog.notcomp_pages[0] * ini_blog.crawled_ratio_notcomp[0]/100) ,

        visits_byAP_comp: ini_blog.visits_byAP_comp[0],
        visits_byAP_notcomp: ini_blog.visits_byAP_notcomp[0],

        crawl_ratio_oncomp: ini_blog.crawl_ratio_oncomp[0],
        crawled_ratio_notcomp: ini_blog.crawled_ratio_notcomp[0],

        active_ratio_oncomp: 1*ini_blog.crawl_ratio_oncomp[0],
        active_ratio_onnotcomp: 1*ini_blog.crawled_ratio_notcomp[0],

        pages: ini_blog.comp_pages[0] + ini_blog.notcomp_pages[0],
        indexable_ratio: Math.round(1000*ini_blog.comp_pages[0] / (ini_blog.comp_pages[0] + ini_blog.notcomp_pages[0]))/10,
        comp_pages: ini_blog.comp_pages[0],
        notcomp_pages: ini_blog.notcomp_pages[0],

        crawled_comp_pages: Math.round(ini_blog.comp_pages[0] * ini_blog.crawl_ratio_oncomp[0]/100),
        crawled_notcomp_pages: Math.round(ini_blog.notcomp_pages[0] * ini_blog.crawled_ratio_notcomp[0]/100),

        active_comp_pages: Math.round(1*ini_blog.comp_pages[0] * ini_blog.crawl_ratio_oncomp[0]/100),
        active_notcomp_pages: Math.round(1*ini_blog.notcomp_pages[0] * ini_blog.crawled_ratio_notcomp[0]/100),

        avg_badhttp_pages: 0 * ini_blog.notcomp_pages[0],
        avg_inlinks_pages: ini_blog.avg_Inlinks[0] * ini_blog.comp_pages[0],
        avg_depth_pages: ini_blog.avg_Depth[0] * ini_blog.comp_pages[0],
        avg_loadtimes_pages: ini_blog.avg_LoadTimes[0] * ini_blog.comp_pages[0],

        pct_duptitles_pages: ini_blog.pct_DupTitles[0] * ini_blog.comp_pages[0],
        avg_words_pages: ini_blog.avg_Words[0] * ini_blog.comp_pages[0],
        avg_unicity_pages: ini_blog.avg_unicity[0] * ini_blog.comp_pages[0],
        avg_AnchorsVar_pages: ini_blog.avg_AnchorsVar[0] * ini_blog.comp_pages[0],

        avg_badhttp: Math.round(0.2*ini_blog.notcomp_pages[0]),
        avg_inlinks: ini_blog.avg_Inlinks[0],
        avg_depth: ini_blog.avg_Depth[0],
        avg_loadtimes: ini_blog.avg_LoadTimes[0],

        pct_duptitles: ini_blog.pct_DupTitles[0],
        avg_words: ini_blog.avg_Words[0],
        avg_unicity: ini_blog.avg_unicity[0],
        avg_AnchorsVar: ini_blog.avg_AnchorsVar[0],
        
        fill: '#b39ddb'

    },
    {
        name: 'Categories',

        visits: ini_blog.visits_byAP_comp[1]* 0.8 *ini_blog.comp_pages[1] * ini_blog.crawl_ratio_oncomp[1]/100 + ini_blog.visits_byAP_notcomp[1] * Math.round(0.3*ini_blog.notcomp_pages[1] * ini_blog.crawled_ratio_notcomp[1]/100),
        
        visits_byAP: Math.round(10*(ini_blog.visits_byAP_comp[1]* 1 *ini_blog.comp_pages[1] * ini_blog.crawl_ratio_oncomp[1]/100 + ini_blog.visits_byAP_notcomp[1] * Math.round(1*ini_blog.notcomp_pages[1] * ini_blog.crawled_ratio_notcomp[1]/100))/(Math.round(1*ini_blog.comp_pages[1] * ini_blog.crawl_ratio_oncomp[1]/100) + Math.round(1*ini_blog.notcomp_pages[1] * ini_blog.crawled_ratio_notcomp[1]/100)))/10,

        visits_comp: ini_blog.visits_byAP_comp[1]* 0.8 *ini_blog.comp_pages[1] * ini_blog.crawl_ratio_oncomp[1]/100,
        visits_notcomp: ini_blog.visits_byAP_notcomp[1] * Math.round(0.3*ini_blog.notcomp_pages[1] * ini_blog.crawled_ratio_notcomp[1]/100),

        active_pages: Math.round(0.8*ini_blog.comp_pages[1] * ini_blog.crawl_ratio_oncomp[1]/100) + Math.round(1*ini_blog.notcomp_pages[1] * ini_blog.crawled_ratio_notcomp[1]/100),

        visits_byAP_comp: ini_blog.visits_byAP_comp[1],
        visits_byAP_notcomp: ini_blog.visits_byAP_notcomp[1],

        crawl_ratio_oncomp: ini_blog.crawl_ratio_oncomp[1],
        crawled_ratio_notcomp: ini_blog.crawled_ratio_notcomp[1],

        active_ratio_oncomp: 0.8*ini_blog.crawl_ratio_oncomp[1],
        active_ratio_onnotcomp: 0.3*ini_blog.crawled_ratio_notcomp[1],

        pages: ini_blog.comp_pages[1] + ini_blog.notcomp_pages[1],
        indexable_ratio: Math.round(1000*ini_blog.comp_pages[1] / (ini_blog.comp_pages[1] + ini_blog.notcomp_pages[1]))/10,
        comp_pages: ini_blog.comp_pages[1],
        notcomp_pages: ini_blog.notcomp_pages[1],

        crawled_comp_pages: Math.round(ini_blog.comp_pages[1] * ini_blog.crawl_ratio_oncomp[1]/100),
        crawled_notcomp_pages: Math.round(ini_blog.notcomp_pages[1] * ini_blog.crawled_ratio_notcomp[1]/100),

        active_comp_pages: Math.round(0.8*ini_blog.comp_pages[1] * ini_blog.crawl_ratio_oncomp[1]/100),
        active_notcomp_pages: Math.round(0.3*ini_blog.notcomp_pages[1] * ini_blog.crawled_ratio_notcomp[1]/100),

        avg_badhttp_pages: 0.2*ini_blog.notcomp_pages[1] * ini_blog.notcomp_pages[1],
        avg_inlinks_pages: ini_blog.avg_Inlinks[1] * ini_blog.comp_pages[1],
        avg_depth_pages: ini_blog.avg_Depth[1] * ini_blog.comp_pages[1],
        avg_loadtimes_pages: ini_blog.avg_LoadTimes[1] * ini_blog.comp_pages[1],

        pct_duptitles_pages: ini_blog.pct_DupTitles[1] * ini_blog.comp_pages[1],
        avg_words_pages: ini_blog.avg_Words[1] * ini_blog.comp_pages[1],
        avg_unicity_pages: ini_blog.avg_unicity[1] * ini_blog.comp_pages[1],
        avg_AnchorsVar_pages: ini_blog.avg_AnchorsVar[1] * ini_blog.comp_pages[1],

        avg_badhttp: Math.round(0.2*ini_blog.notcomp_pages[1]),
        avg_inlinks: ini_blog.avg_Inlinks[1],
        avg_depth: ini_blog.avg_Depth[1],
        avg_loadtimes: ini_blog.avg_LoadTimes[1],

        pct_duptitles: ini_blog.pct_DupTitles[1],
        avg_words: ini_blog.avg_Words[1],
        avg_unicity: ini_blog.avg_unicity[1],
        avg_AnchorsVar: ini_blog.avg_AnchorsVar[1],
        
        fill: '#9fa8da'

    },
    {
        name: 'Articles',

        visits: ini_blog.visits_byAP_comp[2]* 0.4 *ini_blog.comp_pages[2] * ini_blog.crawl_ratio_oncomp[2]/100 + ini_blog.visits_byAP_notcomp[2] * Math.round(0.2*ini_blog.notcomp_pages[2] * ini_blog.crawled_ratio_notcomp[2]/100),
        
        visits_byAP: Math.round(10*(ini_blog.visits_byAP_comp[2]* 1 *ini_blog.comp_pages[2] * ini_blog.crawl_ratio_oncomp[2]/100 + ini_blog.visits_byAP_notcomp[2] * Math.round(1*ini_blog.notcomp_pages[2] * ini_blog.crawled_ratio_notcomp[2]/100))/(Math.round(1*ini_blog.comp_pages[2] * ini_blog.crawl_ratio_oncomp[2]/100) + Math.round(1*ini_blog.notcomp_pages[2] * ini_blog.crawled_ratio_notcomp[2]/100)))/10,

        visits_comp: ini_blog.visits_byAP_comp[2]* 0.4 *ini_blog.comp_pages[2] * ini_blog.crawl_ratio_oncomp[2]/100,
        visits_notcomp: ini_blog.visits_byAP_notcomp[2] * Math.round(0.2*ini_blog.notcomp_pages[2] * ini_blog.crawled_ratio_notcomp[2]/100),

        active_pages: Math.round(0.4*ini_blog.comp_pages[2] * ini_blog.crawl_ratio_oncomp[2]/100) + Math.round(0.2*ini_blog.notcomp_pages[2] * ini_blog.crawled_ratio_notcomp[2]/100),

        visits_byAP_comp: ini_blog.visits_byAP_comp[2],
        visits_byAP_notcomp: ini_blog.visits_byAP_notcomp[2],

        crawl_ratio_oncomp: ini_blog.crawl_ratio_oncomp[2],
        crawled_ratio_notcomp: ini_blog.crawled_ratio_notcomp[2],

        active_ratio_oncomp: 0.4 *ini_blog.crawl_ratio_oncomp[2],
        active_ratio_onnotcomp: 0.2*ini_blog.crawled_ratio_notcomp[2],

        pages: ini_blog.comp_pages[2] + ini_blog.notcomp_pages[2],
        indexable_ratio: Math.round(1000*ini_blog.comp_pages[2] / (ini_blog.comp_pages[2] + ini_blog.notcomp_pages[2]))/10,
        comp_pages: ini_blog.comp_pages[2],
        notcomp_pages: ini_blog.notcomp_pages[2],

        crawled_comp_pages: Math.round(ini_blog.comp_pages[2] * ini_blog.crawl_ratio_oncomp[2]/100),
        crawled_notcomp_pages: Math.round(ini_blog.notcomp_pages[2] * ini_blog.crawled_ratio_notcomp[2]/100),

        active_comp_pages: Math.round(0.4*ini_blog.comp_pages[2] * ini_blog.crawl_ratio_oncomp[2]/100),
        active_notcomp_pages: Math.round(0.2*ini_blog.notcomp_pages[2] * ini_blog.crawled_ratio_notcomp[2]/100),

        avg_badhttp_pages: 0.2 * ini_blog.notcomp_pages[2],
        avg_inlinks_pages: ini_blog.avg_Inlinks[2] * ini_blog.comp_pages[2],
        avg_depth_pages: ini_blog.avg_Depth[2] * ini_blog.comp_pages[2],
        avg_loadtimes_pages: ini_blog.avg_LoadTimes[2] * ini_blog.comp_pages[2],

        pct_duptitles_pages: ini_blog.pct_DupTitles[2] * ini_blog.comp_pages[2],
        avg_words_pages: ini_blog.avg_Words[2] * ini_blog.comp_pages[2],
        avg_unicity_pages: ini_blog.avg_unicity[2] * ini_blog.comp_pages[2],
        avg_AnchorsVar_pages: ini_blog.avg_AnchorsVar[2] * ini_blog.comp_pages[2],

        avg_badhttp: Math.round(0.2*ini_blog.notcomp_pages[2]),
        avg_inlinks: ini_blog.avg_Inlinks[2],
        avg_depth: ini_blog.avg_Depth[2],
        avg_loadtimes: ini_blog.avg_LoadTimes[2],

        pct_duptitles: ini_blog.pct_DupTitles[2],
        avg_words: ini_blog.avg_Words[2],
        avg_unicity: ini_blog.avg_unicity[2],
        avg_AnchorsVar: ini_blog.avg_AnchorsVar[2],
        
        fill: '#90caf9'

    },
    {
        name: 'Paginations',

        visits: ini_blog.visits_byAP_comp[3]* 0 *ini_blog.comp_pages[3] * ini_blog.crawl_ratio_oncomp[3]/100 + ini_blog.visits_byAP_notcomp[3] * Math.round(0.02*ini_blog.notcomp_pages[3] * ini_blog.crawled_ratio_notcomp[3]/100),
        
        visits_byAP: Math.round(10*(ini_blog.visits_byAP_comp[3]* 1 *ini_blog.comp_pages[3] * ini_blog.crawl_ratio_oncomp[3]/100 + ini_blog.visits_byAP_notcomp[3] * Math.round(1*ini_blog.notcomp_pages[3] * ini_blog.crawled_ratio_notcomp[3]/100))/(Math.round(1*ini_blog.comp_pages[3] * ini_blog.crawl_ratio_oncomp[3]/100) + Math.round(1*ini_blog.notcomp_pages[3] * ini_blog.crawled_ratio_notcomp[3]/100)))/10,

        visits_comp: ini_blog.visits_byAP_comp[3]* 0 *ini_blog.comp_pages[3] * ini_blog.crawl_ratio_oncomp[3]/100,
        visits_notcomp: ini_blog.visits_byAP_notcomp[3] * Math.round(0.02*ini_blog.notcomp_pages[3] * ini_blog.crawled_ratio_notcomp[3]/100),

        active_pages: Math.round(0*ini_blog.comp_pages[3] * ini_blog.crawl_ratio_oncomp[3]/100) + Math.round(0*ini_blog.notcomp_pages[3] * ini_blog.crawled_ratio_notcomp[3]/100),

        visits_byAP_comp: ini_blog.visits_byAP_comp[3],
        visits_byAP_notcomp: ini_blog.visits_byAP_notcomp[3],

        crawl_ratio_oncomp: ini_blog.crawl_ratio_oncomp[3],
        crawled_ratio_notcomp: ini_blog.crawled_ratio_notcomp[3],

        active_ratio_oncomp: 0*ini_blog.crawl_ratio_oncomp[3],
        active_ratio_onnotcomp: 0.02*ini_blog.crawled_ratio_notcomp[3],

        pages: ini_blog.comp_pages[3] + ini_blog.notcomp_pages[3],
        indexable_ratio: Math.round(1000*ini_blog.comp_pages[3] / (ini_blog.comp_pages[3] + ini_blog.notcomp_pages[3]))/10,
        comp_pages: ini_blog.comp_pages[3],
        notcomp_pages: ini_blog.notcomp_pages[3],

        crawled_comp_pages: Math.round(ini_blog.comp_pages[3] * ini_blog.crawl_ratio_oncomp[3]/100),
        crawled_notcomp_pages: Math.round(ini_blog.notcomp_pages[3] * ini_blog.crawled_ratio_notcomp[3]/100),

        active_comp_pages: Math.round(0*ini_blog.comp_pages[3] * ini_blog.crawl_ratio_oncomp[3]/100),
        active_notcomp_pages: Math.round(0.02*ini_blog.notcomp_pages[3] * ini_blog.crawled_ratio_notcomp[3]/100),

        avg_badhttp_pages: 0.2 * ini_blog.notcomp_pages[3],
        avg_inlinks_pages: ini_blog.avg_Inlinks[3] * ini_blog.comp_pages[3],
        avg_depth_pages: ini_blog.avg_Depth[3] * ini_blog.comp_pages[3],
        avg_loadtimes_pages: ini_blog.avg_LoadTimes[3] * ini_blog.comp_pages[3],

        pct_duptitles_pages: ini_blog.pct_DupTitles[3] * ini_blog.comp_pages[3],
        avg_words_pages: ini_blog.avg_Words[3] * ini_blog.comp_pages[3],
        avg_unicity_pages: ini_blog.avg_unicity[3] * ini_blog.comp_pages[3],
        avg_AnchorsVar_pages: ini_blog.avg_AnchorsVar[3] * ini_blog.comp_pages[3],

        avg_badhttp: Math.round(0.2*ini_blog.notcomp_pages[3]),
        avg_inlinks: ini_blog.avg_Inlinks[3],
        avg_depth: ini_blog.avg_Depth[3],
        avg_loadtimes: ini_blog.avg_LoadTimes[3],

        pct_duptitles: ini_blog.pct_DupTitles[3],
        avg_words: ini_blog.avg_Words[3],
        avg_unicity: ini_blog.avg_unicity[3],
        avg_AnchorsVar: ini_blog.avg_AnchorsVar[3],
        
        fill: '#fff59d'

    },
    {
        name: 'Useless Pages',

        visits: ini_blog.visits_byAP_comp[4]* 0 *ini_blog.comp_pages[4] * ini_blog.crawl_ratio_oncomp[4]/100 + ini_blog.visits_byAP_notcomp[4] * Math.round(0*ini_blog.notcomp_pages[4] * ini_blog.crawled_ratio_notcomp[4]/100),
        
        visits_byAP: Math.round(10*(ini_blog.visits_byAP_comp[4]* 1 *ini_blog.comp_pages[4] * ini_blog.crawl_ratio_oncomp[4]/100 + ini_blog.visits_byAP_notcomp[4] * Math.round(1*ini_blog.notcomp_pages[4] * ini_blog.crawled_ratio_notcomp[4]/100))/(Math.round(1*ini_blog.comp_pages[4] * ini_blog.crawl_ratio_oncomp[4]/100) + Math.round(1*ini_blog.notcomp_pages[4] * ini_blog.crawled_ratio_notcomp[4]/100)))/10,

        visits_comp: ini_blog.visits_byAP_comp[4]* 0 *ini_blog.comp_pages[4] * ini_blog.crawl_ratio_oncomp[4]/100,
        visits_notcomp: ini_blog.visits_byAP_notcomp[4] * Math.round(1*ini_blog.notcomp_pages[4] * ini_blog.crawled_ratio_notcomp[4]/100),

        active_pages: Math.round(0*ini_blog.comp_pages[4] * ini_blog.crawl_ratio_oncomp[4]/100) + Math.round(0*ini_blog.notcomp_pages[4] * ini_blog.crawled_ratio_notcomp[4]/100),

        visits_byAP_comp: ini_blog.visits_byAP_comp[4],
        visits_byAP_notcomp: ini_blog.visits_byAP_notcomp[4],

        crawl_ratio_oncomp: ini_blog.crawl_ratio_oncomp[4],
        crawled_ratio_notcomp: ini_blog.crawled_ratio_notcomp[4],

        active_ratio_oncomp: 0*ini_blog.crawl_ratio_oncomp[4],
        active_ratio_onnotcomp: 0*ini_blog.crawled_ratio_notcomp[4],

        pages: ini_blog.comp_pages[4] + ini_blog.notcomp_pages[4],
        indexable_ratio: Math.round(1000*ini_blog.comp_pages[4] / (ini_blog.comp_pages[4] + ini_blog.notcomp_pages[4]))/10,
        comp_pages: ini_blog.comp_pages[4],
        notcomp_pages: ini_blog.notcomp_pages[4],

        crawled_comp_pages: Math.round(ini_blog.comp_pages[4] * ini_blog.crawl_ratio_oncomp[4]/100),
        crawled_notcomp_pages: Math.round(ini_blog.notcomp_pages[4] * ini_blog.crawled_ratio_notcomp[4]/100),

        active_comp_pages: Math.round(0*ini_blog.comp_pages[4] * ini_blog.crawl_ratio_oncomp[4]/100),
        active_notcomp_pages: Math.round(0*ini_blog.notcomp_pages[4] * ini_blog.crawled_ratio_notcomp[4]/100),

        avg_badhttp_pages: 0 * ini_blog.comp_pages[4],
        avg_inlinks_pages: ini_blog.avg_Inlinks[4] * ini_blog.comp_pages[4],
        avg_depth_pages: ini_blog.avg_Depth[4] * ini_blog.comp_pages[4],
        avg_loadtimes_pages: ini_blog.avg_LoadTimes[4] * ini_blog.comp_pages[4],

        pct_duptitles_pages: ini_blog.pct_DupTitles[4] * ini_blog.comp_pages[4],
        avg_words_pages: ini_blog.avg_Words[4] * ini_blog.comp_pages[4],
        avg_unicity_pages: ini_blog.avg_unicity[4] * ini_blog.comp_pages[4],
        avg_AnchorsVar_pages: ini_blog.avg_AnchorsVar[4] * ini_blog.comp_pages[4],

        avg_badhttp: Math.round(0.2*ini_blog.notcomp_pages[4]),
        avg_inlinks: ini_blog.avg_Inlinks[4],
        avg_depth: ini_blog.avg_Depth[4],
        avg_loadtimes: ini_blog.avg_LoadTimes[4],

        pct_duptitles: ini_blog.pct_DupTitles[4],
        avg_words: ini_blog.avg_Words[4],
        avg_unicity: ini_blog.avg_unicity[4],
        avg_AnchorsVar: ini_blog.avg_AnchorsVar[4],
        
        fill: '#ffcc80'

    }
];

export const segData_pie_ini = {
    visits: [
        {name: segData_ini[0]["name"], value: segData_ini[0]["visits"]},
        {name: segData_ini[1]["name"], value: segData_ini[1]["visits"]},
        {name: segData_ini[2]["name"], value: segData_ini[2]["visits"]},
        {name: segData_ini[3]["name"], value: segData_ini[3]["visits"]},
        {name: segData_ini[4]["name"], value: segData_ini[4]["visits"]}    
    ],
    pages: [
        {name: segData_ini[0]["name"], value: segData_ini[0]["pages"]},
        {name: segData_ini[1]["name"], value: segData_ini[1]["pages"]},
        {name: segData_ini[2]["name"], value: segData_ini[2]["pages"]},
        {name: segData_ini[3]["name"], value: segData_ini[3]["pages"]},
        {name: segData_ini[4]["name"], value: segData_ini[4]["pages"]}    
    ],
    active_pages: [
        {name: segData_ini[0]["name"], value: segData_ini[0]["active_pages"]},
        {name: segData_ini[1]["name"], value: segData_ini[1]["active_pages"]},
        {name: segData_ini[2]["name"], value: segData_ini[2]["active_pages"]},
        {name: segData_ini[3]["name"], value: segData_ini[3]["active_pages"]},
        {name: segData_ini[4]["name"], value: segData_ini[4]["active_pages"]}    
    ],
    visits_byAP: [
        {name: segData_ini[0]["name"], value: segData_ini[0]["visits_byAP"]},
        {name: segData_ini[1]["name"], value: segData_ini[1]["visits_byAP"]},
        {name: segData_ini[2]["name"], value: segData_ini[2]["visits_byAP"]},
        {name: segData_ini[3]["name"], value: segData_ini[3]["visits_byAP"]},
        {name: segData_ini[4]["name"], value: segData_ini[4]["visits_byAP"]}    
    ],
    comp_pages: [
        {name: segData_ini[0]["name"], value: segData_ini[0]["comp_pages"]},
        {name: segData_ini[1]["name"], value: segData_ini[1]["comp_pages"]},
        {name: segData_ini[2]["name"], value: segData_ini[2]["comp_pages"]},
        {name: segData_ini[3]["name"], value: segData_ini[3]["comp_pages"]},
        {name: segData_ini[4]["name"], value: segData_ini[4]["comp_pages"]}    
    ],
    notcomp_pages: [
        {name: segData_ini[0]["name"], value: segData_ini[0]["notcomp_pages"]},
        {name: segData_ini[1]["name"], value: segData_ini[1]["notcomp_pages"]},
        {name: segData_ini[2]["name"], value: segData_ini[2]["notcomp_pages"]},
        {name: segData_ini[3]["name"], value: segData_ini[3]["notcomp_pages"]},
        {name: segData_ini[4]["name"], value: segData_ini[4]["notcomp_pages"]}    
    ],
    crawled_comp_pages: [
        {name: segData_ini[0]["name"], value: segData_ini[0]["crawled_comp_pages"]},
        {name: segData_ini[1]["name"], value: segData_ini[1]["crawled_comp_pages"]},
        {name: segData_ini[2]["name"], value: segData_ini[2]["crawled_comp_pages"]},
        {name: segData_ini[3]["name"], value: segData_ini[3]["crawled_comp_pages"]},
        {name: segData_ini[4]["name"], value: segData_ini[4]["crawled_comp_pages"]}    
    ],
    crawled_notcomp_pages: [
        {name: segData_ini[0]["name"], value: segData_ini[0]["crawled_notcomp_pages"]},
        {name: segData_ini[1]["name"], value: segData_ini[1]["crawled_notcomp_pages"]},
        {name: segData_ini[2]["name"], value: segData_ini[2]["crawled_notcomp_pages"]},
        {name: segData_ini[3]["name"], value: segData_ini[3]["crawled_notcomp_pages"]},
        {name: segData_ini[4]["name"], value: segData_ini[4]["crawled_notcomp_pages"]}   
    ],
    active_comp_pages: [
        {name: segData_ini[0]["name"], value: segData_ini[0]["active_comp_pages"]},
        {name: segData_ini[1]["name"], value: segData_ini[1]["active_comp_pages"]},
        {name: segData_ini[2]["name"], value: segData_ini[2]["active_comp_pages"]},
        {name: segData_ini[3]["name"], value: segData_ini[3]["active_comp_pages"]},
        {name: segData_ini[4]["name"], value: segData_ini[4]["active_comp_pages"]}    
    ],
    active_notcomp_pages: [
        {name: segData_ini[0]["name"], value: segData_ini[0]["active_notcomp_pages"]},
        {name: segData_ini[1]["name"], value: segData_ini[1]["active_notcomp_pages"]},
        {name: segData_ini[2]["name"], value: segData_ini[2]["active_notcomp_pages"]},
        {name: segData_ini[3]["name"], value: segData_ini[3]["active_notcomp_pages"]},
        {name: segData_ini[4]["name"], value: segData_ini[4]["active_notcomp_pages"]}    
    ],
    
};

export const evoData_ini = [
    {
        name: 'Week 1',

        visits: segData_ini[0].visits + segData_ini[1].visits + segData_ini[2].visits + segData_ini[3].visits + segData_ini[4].visits,

        visits_comp: segData_ini[0].visits_comp + segData_ini[1].visits_comp + segData_ini[2].visits_comp + segData_ini[3].visits_comp + segData_ini[4].visits_comp,

        visits_notcomp: segData_ini[0].visits_notcomp + segData_ini[1].visits_notcomp + segData_ini[2].visits_notcomp + segData_ini[3].visits_notcomp + segData_ini[4].visits_notcomp,

        active_pages: segData_ini[0].active_pages + segData_ini[1].active_pages + segData_ini[2].active_pages + segData_ini[3].active_pages + segData_ini[4].active_pages,

        visits_byAP: Math.round(10*(segData_ini[0].visits + segData_ini[1].visits + segData_ini[2].visits + segData_ini[3].visits + segData_ini[4].visits)/(segData_ini[0].active_pages + segData_ini[1].active_pages + segData_ini[2].active_pages + segData_ini[3].active_pages + segData_ini[4].active_pages))/10,

        visits_byAP_comp: Math.round(10*(segData_ini[0].visits_byAP_comp * segData_ini[0].comp_pages + segData_ini[1].visits_byAP_comp * segData_ini[1].comp_pages + segData_ini[2].visits_byAP_comp * segData_ini[2].comp_pages + segData_ini[3].visits_byAP_comp * segData_ini[3].comp_pages + segData_ini[4].visits_byAP_comp * segData_ini[4].comp_pages)/(segData_ini[0].comp_pages + segData_ini[1].comp_pages + segData_ini[2].comp_pages + segData_ini[3].comp_pages + segData_ini[4].comp_pages))/10,

        visits_byAP_notcomp: Math.round(10*(segData_ini[0].visits_byAP_notcomp * segData_ini[0].comp_pages + segData_ini[1].visits_byAP_notcomp * segData_ini[1].comp_pages + segData_ini[2].visits_byAP_notcomp * segData_ini[2].comp_pages + segData_ini[3].visits_byAP_notcomp * segData_ini[3].comp_pages + segData_ini[4].visits_byAP_notcomp * segData_ini[4].comp_pages)/(segData_ini[0].comp_pages + segData_ini[1].comp_pages + segData_ini[2].comp_pages + segData_ini[3].comp_pages + segData_ini[4].comp_pages))/10,

        crawl_ratio_oncomp: Math.round(1000*(segData_ini[0].crawled_comp_pages + segData_ini[1].crawled_comp_pages + segData_ini[2].crawled_comp_pages + segData_ini[3].crawled_comp_pages + segData_ini[4].crawled_comp_pages)/(segData_ini[0].comp_pages + segData_ini[1].comp_pages + segData_ini[2].comp_pages + segData_ini[3].comp_pages + segData_ini[4].comp_pages))/10,

        active_ratio_onnotcomp: Math.round(1000*(segData_ini[0].crawled_notcomp_pages + segData_ini[1].crawled_notcomp_pages + segData_ini[2].crawled_notcomp_pages + segData_ini[3].crawled_notcomp_pages + segData_ini[4].crawled_notcomp_pages)/(segData_ini[0].notcomp_pages + segData_ini[1].notcomp_pages + segData_ini[2].notcomp_pages + segData_ini[3].notcomp_pages + segData_ini[4].notcomp_pages))/10,

        active_ratio_oncomp: Math.round(1000*(segData_ini[0].active_comp_pages + segData_ini[1].active_comp_pages + segData_ini[2].active_comp_pages + segData_ini[3].active_comp_pages + segData_ini[4].active_comp_pages)/(segData_ini[0].comp_pages + segData_ini[1].comp_pages + segData_ini[2].comp_pages + segData_ini[3].comp_pages + segData_ini[4].comp_pages))/10,

        active_ratio_onnotcomp: Math.round(1000*(segData_ini[0].active_notcomp_pages + segData_ini[1].active_notcomp_pages + segData_ini[2].active_notcomp_pages + segData_ini[3].active_notcomp_pages + segData_ini[4].active_notcomp_pages)/(segData_ini[0].notcomp_pages + segData_ini[1].notcomp_pages + segData_ini[2].notcomp_pages + segData_ini[3].notcomp_pages + segData_ini[4].notcomp_pages))/10,

        pages: segData_ini[0].pages + segData_ini[1].pages + segData_ini[2].pages + segData_ini[3].pages + segData_ini[4].pages,
        indexable_ratio: Math.round(1000*(segData_ini[0].comp_pages + segData_ini[1].comp_pages + segData_ini[2].comp_pages + segData_ini[3].comp_pages + segData_ini[4].comp_pages)/(segData_ini[0].pages + segData_ini[1].pages + segData_ini[2].pages + segData_ini[3].pages + segData_ini[4].pages))/10,
        comp_pages: segData_ini[0].comp_pages + segData_ini[1].comp_pages + segData_ini[2].comp_pages + segData_ini[3].comp_pages + segData_ini[4].comp_pages,
        notcomp_pages: segData_ini[0].notcomp_pages + segData_ini[1].notcomp_pages + segData_ini[2].notcomp_pages + segData_ini[3].notcomp_pages + segData_ini[4].notcomp_pages,

        crawled_comp_pages: segData_ini[0].crawled_comp_pages + segData_ini[1].crawled_comp_pages + segData_ini[2].crawled_comp_pages + segData_ini[3].crawled_comp_pages + segData_ini[4].crawled_comp_pages,
        crawled_notcomp_pages: segData_ini[0].crawled_notcomp_pages + segData_ini[1].crawled_notcomp_pages + segData_ini[2].crawled_notcomp_pages + segData_ini[3].crawled_notcomp_pages + segData_ini[4].crawled_notcomp_pages,

        active_comp_pages: segData_ini[0].active_comp_pages + segData_ini[1].active_comp_pages + segData_ini[2].active_comp_pages + segData_ini[3].active_comp_pages + segData_ini[4].active_comp_pages,
        active_notcomp_pages: segData_ini[0].active_notcomp_pages + segData_ini[1].active_notcomp_pages + segData_ini[2].active_notcomp_pages + segData_ini[3].active_notcomp_pages + segData_ini[4].active_notcomp_pages,

        avg_badhttp_pages: 0,
        avg_inlinks_pages: 0,
        avg_depth_pages: 0,
        avg_loadtimes_pages: 0,

        pct_duptitles_pages: 0,
        avg_words_pages: 0,
        avg_unicity_pages: 0,
        avg_AnchorsVar_pages: 0,

        avg_badhttp: segData_ini[0].avg_badhttp + segData_ini[1].avg_badhttp + segData_ini[2].avg_badhttp + segData_ini[3].avg_badhttp + segData_ini[4].avg_badhttp,

        avg_inlinks: Math.round(10*(segData_ini[0].avg_inlinks_pages + segData_ini[1].avg_inlinks_pages + segData_ini[2].avg_inlinks_pages + segData_ini[3].avg_inlinks_pages + segData_ini[4].avg_inlinks_pages)/(segData_ini[0].comp_pages + segData_ini[1].comp_pages + segData_ini[2].comp_pages + segData_ini[3].comp_pages + segData_ini[4].comp_pages))/10,

        avg_depth: Math.round(10*(segData_ini[0].avg_depth_pages + segData_ini[1].avg_depth_pages + segData_ini[2].avg_depth_pages + segData_ini[3].avg_depth_pages + segData_ini[4].avg_depth_pages)/(segData_ini[0].comp_pages + segData_ini[1].comp_pages + segData_ini[2].comp_pages + segData_ini[3].comp_pages + segData_ini[4].comp_pages))/10,

        avg_loadtimes: Math.round((segData_ini[0].avg_loadtimes_pages + segData_ini[1].avg_loadtimes_pages + segData_ini[2].avg_loadtimes_pages + segData_ini[3].avg_loadtimes_pages + segData_ini[4].avg_loadtimes_pages)/(segData_ini[0].comp_pages + segData_ini[1].comp_pages + segData_ini[2].comp_pages + segData_ini[3].comp_pages + segData_ini[4].comp_pages)),

        pct_duptitles: Math.round(10*(segData_ini[0].pct_duptitles_pages + segData_ini[1].pct_duptitles_pages + segData_ini[2].pct_duptitles_pages + segData_ini[3].pct_duptitles_pages + segData_ini[4].pct_duptitles_pages)/(segData_ini[0].comp_pages + segData_ini[1].comp_pages + segData_ini[2].comp_pages + segData_ini[3].comp_pages + segData_ini[4].comp_pages))/10,

        avg_words: Math.round((segData_ini[0].avg_words_pages + segData_ini[1].avg_words_pages + segData_ini[2].avg_words_pages + segData_ini[3].avg_words_pages + segData_ini[4].avg_words_pages)/(segData_ini[0].comp_pages + segData_ini[1].comp_pages + segData_ini[2].comp_pages + segData_ini[3].comp_pages + segData_ini[4].comp_pages)),

        avg_unicity: Math.round(10*(segData_ini[0].avg_unicity_pages + segData_ini[1].avg_unicity_pages + segData_ini[2].avg_unicity_pages + segData_ini[3].avg_unicity_pages + segData_ini[4].avg_unicity_pages)/(segData_ini[0].comp_pages + segData_ini[1].comp_pages + segData_ini[2].comp_pages + segData_ini[3].comp_pages + segData_ini[4].comp_pages))/10,

        avg_AnchorsVar: Math.round(10*(segData_ini[0].avg_AnchorsVar_pages + segData_ini[1].avg_AnchorsVar_pages + segData_ini[2].avg_AnchorsVar_pages + segData_ini[3].avg_AnchorsVar_pages + segData_ini[4].avg_AnchorsVar_pages)/(segData_ini[0].comp_pages + segData_ini[1].comp_pages + segData_ini[2].comp_pages + segData_ini[3].comp_pages + segData_ini[4].comp_pages))/10

    }
];


export const segData_piepages_ini = [{
    comp_pages: [
        {name: 'Indexable Pages', value: evoData_ini[0]["comp_pages"]},
        {name: 'Not Indexable Pages', value: evoData_ini[0]["notcomp_pages"]}  
    ],
    notcomp_pages: [
        {name: 'Indexable Pages', value: evoData_ini[0]["comp_pages"]},
        {name: 'Not Indexable Pages', value: evoData_ini[0]["notcomp_pages"]}  
    ],
    crawled_comp_pages: [
        {name: 'Crawled Indexable Pages', value: evoData_ini[0]["crawled_comp_pages"]},
        {name: 'Crawled Not Indexable Pages', value: evoData_ini[0]["crawled_notcomp_pages"]}  
    ],
    crawled_notcomp_pages: [
        {name: 'Crawled Indexable Pages', value: evoData_ini[0]["crawled_comp_pages"]},
        {name: 'Crawled Not Indexable Pages', value: evoData_ini[0]["crawled_notcomp_pages"]}  
    ],
    active_comp_pages: [
        {name: 'Active Indexable Pages', value: evoData_ini[0]["active_comp_pages"]},
        {name: 'Active Not Indexable Pages', value: evoData_ini[0]["active_notcomp_pages"]}  
    ],
    active_notcomp_pages: [
        {name: 'Active Indexable Pages', value: evoData_ini[0]["active_comp_pages"]},
        {name: 'Active Not Indexable Pages', value: evoData_ini[0]["active_notcomp_pages"]}   
    ],
}];