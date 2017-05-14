// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
//NEED TO PUT BACK this.state.week ETC IN RENDER


import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Legend, Bar, RadialBarChart, RadialBar} from 'recharts'
//import ReactFitText from 'react-fittext'
import { Row, Col, Tabs, Tab, Nav, NavItem, Image, ButtonToolbar, Button, Table } from 'react-bootstrap'

import logo from './assets/images/logo.png'
import head from './assets/images/UpDown-Bald-Head.gif'
import techguy from './assets/images/tech.jpeg'
import teacherguy from './assets/images/teacher.jpeg.png'
import bossguy from './assets/images/boss.jpeg'
import marketgirl from './assets/images/marketing.jpeg'

//EXAMPLES
// const Hello = props => (
//   <div>Hello {props.name}!</div>
// )

// Hello.defaultProps = {
//   name: 'David'
// }
//
// Hello.propTypes = {
//   name: React.PropTypes.string
// }

const style = {
    top: 165,
    left: 20,
  	lineHeight: '24px'
  };

const datapie = [{name: 'Group A', value: 400}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200},
                  {name: 'Group E', value: 278}, {name: 'Group F', value: 189}];

var Toto = "je suis toto 34"
console.log(Toto)

var week = 1;
var weekLabels = ["W1"];

const pagesLabels = ["Top", "Middle", "Long", "Paginations", "Useless"];

const ini_blog = {
    visits_byAP_comp: [1498, 280, 5, 1, 1],
    visits_byAP_notcomp: [150, 28, 1, 1, 1],
    crawled_ratio_comp: [100, 80, 40, 60, 50],
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

const borne = {

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
    avg_badhttp: {min: [0,0,71,2,0,49], max: [0,8,9,3135,6,0,34719]},

    pct_duptitles: {min: [0,0,0,0,39], max: [0,21,32,33,100]},
    avg_words: {min: [299,521,455,102,103], max: [856,980,1980,304,504]},
    avg_unicity: {min: [0, 0, 0, 0, 0, 0], max: [100, 100, 100, 100, 100]},
    avg_AnchorsVar: {min: [0, 0, 0, 0, 0, 0], max: [inf, inf, inf, inf, inf]}
};

const dim = {
    avg_inlinks:  [2, 3, 4, 4, 4],
    avg_depth:  [4, 4, 4, 4, 4],
    avg_loadtimes: [5, 5, 5, 5, 5],
    avg_badhttp: [7, 7, 7, 7, 7],

    notcomp_pages: [6, 6, 6, 6, 6],
    pct_duptitles: [3, 3, 3, 3, 3],
    avg_words: [6, 6, 6, 6, 6],
    avg_unicity: [6, 6, 6, 6, 6],
    avg_AnchorsVar: [6, 6, 6, 6, 6]
};

function random(min, max) {
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

            avg_inlinks: [random(-0.05, 0.05),random(-0.05, 0.05),random(-0.4, 0.4),random(-0.2, 0.2),random(-0.2, 0.2)],
            avg_depth: [random(-0.25, 0.25),random(-0.25, 0.25),random(-0.5, 0.5),random(-0.5, 0.5),random(-0.5, 0.5)],
            avg_loadtimes: [random(-0.25, 0.25),random(-0.25, 0.25),random(-0.25, 0.25),random(-0.25, 0.25),random(-0.25, 0.25)],
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

console.log("natevo");
console.log(natevo);


var segData = [
    {
        name: 'Top Pages',

        visits: ini_blog.visits_byAP_comp[0]* 1 *ini_blog.comp_pages[0] * ini_blog.crawled_ratio_comp[0]/100 + ini_blog.visits_byAP_notcomp[0] * Math.round(1*ini_blog.notcomp_pages[0] * ini_blog.crawled_ratio_notcomp[0]/100),

        visits_comp: ini_blog.visits_byAP_comp[0]* 1 *ini_blog.comp_pages[0] * ini_blog.crawled_ratio_comp[0]/100,
        visits_notcomp: ini_blog.visits_byAP_notcomp[0] * Math.round(1*ini_blog.notcomp_pages[0] * ini_blog.crawled_ratio_notcomp[0]/100),

        active_pages: Math.round(1*ini_blog.comp_pages[0] * ini_blog.crawled_ratio_comp[0]/100) + Math.round(1*ini_blog.notcomp_pages[0] * ini_blog.crawled_ratio_notcomp[0]/100) ,

        visits_byAP_comp: ini_blog.visits_byAP_comp[0],
        visits_byAP_notcomp: ini_blog.visits_byAP_notcomp[0],

        crawled_ratio_comp: ini_blog.crawled_ratio_comp[0],
        crawled_ratio_notcomp: ini_blog.crawled_ratio_notcomp[0],

        active_ratio_oncomp: 1*ini_blog.crawled_ratio_comp[0],
        active_ratio_onnotcomp: 1*ini_blog.crawled_ratio_notcomp[0],

        pages: ini_blog.comp_pages[0] + ini_blog.notcomp_pages[0],
        indexable_ratio: Math.round(1000*ini_blog.comp_pages[0] / (ini_blog.comp_pages[0] + ini_blog.notcomp_pages[0]))/10,
        comp_pages: ini_blog.comp_pages[0],
        notcomp_pages: ini_blog.notcomp_pages[0],

        crawled_comp_pages: Math.round(ini_blog.comp_pages[0] * ini_blog.crawled_ratio_comp[0]/100),
        crawled_notcomp_pages: Math.round(ini_blog.notcomp_pages[0] * ini_blog.crawled_ratio_notcomp[0]/100),

        active_comp_pages: Math.round(1*ini_blog.comp_pages[0] * ini_blog.crawled_ratio_comp[0]/100),
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
        
        fill: '#8884d8'

    },
    {
        name: 'Categories',

        visits: ini_blog.visits_byAP_comp[1]* 0.8 *ini_blog.comp_pages[1] * ini_blog.crawled_ratio_comp[1]/100 + ini_blog.visits_byAP_notcomp[1] * Math.round(1*ini_blog.notcomp_pages[1] * ini_blog.crawled_ratio_notcomp[1]/100),

        visits_comp: ini_blog.visits_byAP_comp[1]* 0.8 *ini_blog.comp_pages[1] * ini_blog.crawled_ratio_comp[1]/100,
        visits_notcomp: ini_blog.visits_byAP_notcomp[1] * Math.round(1*ini_blog.notcomp_pages[1] * ini_blog.crawled_ratio_notcomp[1]/100),

        active_pages: Math.round(0.8*ini_blog.comp_pages[1] * ini_blog.crawled_ratio_comp[1]/100) + Math.round(1*ini_blog.notcomp_pages[1] * ini_blog.crawled_ratio_notcomp[1]/100),

        visits_byAP_comp: ini_blog.visits_byAP_comp[1],
        visits_byAP_notcomp: ini_blog.visits_byAP_notcomp[1],

        crawled_ratio_comp: ini_blog.crawled_ratio_comp[1],
        crawled_ratio_notcomp: ini_blog.crawled_ratio_notcomp[1],

        active_ratio_oncomp: 0.8*ini_blog.crawled_ratio_comp[1],
        active_ratio_onnotcomp: 1*ini_blog.crawled_ratio_notcomp[1],

        pages: ini_blog.comp_pages[1] + ini_blog.notcomp_pages[1],
        indexable_ratio: Math.round(1000*ini_blog.comp_pages[1] / (ini_blog.comp_pages[1] + ini_blog.notcomp_pages[1]))/10,
        comp_pages: ini_blog.comp_pages[1],
        notcomp_pages: ini_blog.notcomp_pages[1],

        crawled_comp_pages: Math.round(ini_blog.comp_pages[1] * ini_blog.crawled_ratio_comp[1]/100),
        crawled_notcomp_pages: Math.round(ini_blog.notcomp_pages[1] * ini_blog.crawled_ratio_notcomp[1]/100),

        active_comp_pages: Math.round(0.8*ini_blog.comp_pages[1] * ini_blog.crawled_ratio_comp[1]/100),
        active_notcomp_pages: Math.round(1*ini_blog.notcomp_pages[1] * ini_blog.crawled_ratio_notcomp[1]/100),

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
        
        fill: '#83a6ed'

    },
    {
        name: 'Articles',

        visits: ini_blog.visits_byAP_comp[2]* 0.4 *ini_blog.comp_pages[2] * ini_blog.crawled_ratio_comp[2]/100 + ini_blog.visits_byAP_notcomp[2] * Math.round(1*ini_blog.notcomp_pages[2] * ini_blog.crawled_ratio_notcomp[2]/100),

        visits_comp: ini_blog.visits_byAP_comp[2]* 0.4 *ini_blog.comp_pages[2] * ini_blog.crawled_ratio_comp[2]/100,
        visits_notcomp: ini_blog.visits_byAP_notcomp[2] * Math.round(1*ini_blog.notcomp_pages[2] * ini_blog.crawled_ratio_notcomp[2]/100),

        active_pages: Math.round(0.4*ini_blog.comp_pages[2] * ini_blog.crawled_ratio_comp[2]/100) + Math.round(0.2*ini_blog.notcomp_pages[2] * ini_blog.crawled_ratio_notcomp[2]/100),

        visits_byAP_comp: ini_blog.visits_byAP_comp[2],
        visits_byAP_notcomp: ini_blog.visits_byAP_notcomp[2],

        crawled_ratio_comp: ini_blog.crawled_ratio_comp[2],
        crawled_ratio_notcomp: ini_blog.crawled_ratio_notcomp[2],

        active_ratio_oncomp: 0.4 *ini_blog.crawled_ratio_comp[2],
        active_ratio_onnotcomp: 0.2*ini_blog.crawled_ratio_notcomp[2],

        pages: ini_blog.comp_pages[2] + ini_blog.notcomp_pages[2],
        indexable_ratio: Math.round(1000*ini_blog.comp_pages[2] / (ini_blog.comp_pages[2] + ini_blog.notcomp_pages[2]))/10,
        comp_pages: ini_blog.comp_pages[2],
        notcomp_pages: ini_blog.notcomp_pages[2],

        crawled_comp_pages: Math.round(ini_blog.comp_pages[2] * ini_blog.crawled_ratio_comp[2]/100),
        crawled_notcomp_pages: Math.round(ini_blog.notcomp_pages[2] * ini_blog.crawled_ratio_notcomp[2]/100),

        active_comp_pages: Math.round(0.4*ini_blog.comp_pages[2] * ini_blog.crawled_ratio_comp[2]/100),
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
        
        fill: '#8dd1e1'

    },
    {
        name: 'Paginations',

        visits: ini_blog.visits_byAP_comp[3]* 0 *ini_blog.comp_pages[3] * ini_blog.crawled_ratio_comp[3]/100 + ini_blog.visits_byAP_notcomp[3] * Math.round(1*ini_blog.notcomp_pages[3] * ini_blog.crawled_ratio_notcomp[3]/100),

        visits_comp: ini_blog.visits_byAP_comp[3]* 0 *ini_blog.comp_pages[3] * ini_blog.crawled_ratio_comp[3]/100,
        visits_notcomp: ini_blog.visits_byAP_notcomp[3] * Math.round(1*ini_blog.notcomp_pages[3] * ini_blog.crawled_ratio_notcomp[3]/100),

        active_pages: Math.round(0*ini_blog.comp_pages[3] * ini_blog.crawled_ratio_comp[3]/100) + Math.round(0*ini_blog.notcomp_pages[3] * ini_blog.crawled_ratio_notcomp[3]/100),

        visits_byAP_comp: ini_blog.visits_byAP_comp[3],
        visits_byAP_notcomp: ini_blog.visits_byAP_notcomp[3],

        crawled_ratio_comp: ini_blog.crawled_ratio_comp[3],
        crawled_ratio_notcomp: ini_blog.crawled_ratio_notcomp[3],

        active_ratio_oncomp: 0*ini_blog.crawled_ratio_comp[3],
        active_ratio_onnotcomp: 0*ini_blog.crawled_ratio_notcomp[3],

        pages: ini_blog.comp_pages[3] + ini_blog.notcomp_pages[3],
        indexable_ratio: Math.round(1000*ini_blog.comp_pages[3] / (ini_blog.comp_pages[3] + ini_blog.notcomp_pages[3]))/10,
        comp_pages: ini_blog.comp_pages[3],
        notcomp_pages: ini_blog.notcomp_pages[3],

        crawled_comp_pages: Math.round(ini_blog.comp_pages[3] * ini_blog.crawled_ratio_comp[3]/100),
        crawled_notcomp_pages: Math.round(ini_blog.notcomp_pages[3] * ini_blog.crawled_ratio_notcomp[3]/100),

        active_comp_pages: Math.round(0*ini_blog.comp_pages[3] * ini_blog.crawled_ratio_comp[3]/100),
        active_notcomp_pages: Math.round(0*ini_blog.notcomp_pages[3] * ini_blog.crawled_ratio_notcomp[3]/100),

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
        
        fill: '#d0ed57'

    },
    {
        name: 'Useless Pages',

        visits: ini_blog.visits_byAP_comp[4]* 0 *ini_blog.comp_pages[4] * ini_blog.crawled_ratio_comp[4]/100 + ini_blog.visits_byAP_notcomp[4] * Math.round(1*ini_blog.notcomp_pages[4] * ini_blog.crawled_ratio_notcomp[4]/100),

        visits_comp: ini_blog.visits_byAP_comp[4]* 0 *ini_blog.comp_pages[4] * ini_blog.crawled_ratio_comp[4]/100,
        visits_notcomp: ini_blog.visits_byAP_notcomp[4] * Math.round(1*ini_blog.notcomp_pages[4] * ini_blog.crawled_ratio_notcomp[4]/100),

        active_pages: Math.round(0*ini_blog.comp_pages[4] * ini_blog.crawled_ratio_comp[4]/100) + Math.round(0*ini_blog.notcomp_pages[4] * ini_blog.crawled_ratio_notcomp[4]/100),

        visits_byAP_comp: ini_blog.visits_byAP_comp[4],
        visits_byAP_notcomp: ini_blog.visits_byAP_notcomp[4],

        crawled_ratio_comp: ini_blog.crawled_ratio_comp[4],
        crawled_ratio_notcomp: ini_blog.crawled_ratio_notcomp[4],

        active_ratio_oncomp: 0*ini_blog.crawled_ratio_comp[4],
        active_ratio_onnotcomp: 0*ini_blog.crawled_ratio_notcomp[4],

        pages: ini_blog.comp_pages[4] + ini_blog.notcomp_pages[4],
        indexable_ratio: Math.round(1000*ini_blog.comp_pages[4] / (ini_blog.comp_pages[4] + ini_blog.notcomp_pages[4]))/10,
        comp_pages: ini_blog.comp_pages[4],
        notcomp_pages: ini_blog.notcomp_pages[4],

        crawled_comp_pages: Math.round(ini_blog.comp_pages[4] * ini_blog.crawled_ratio_comp[4]/100),
        crawled_notcomp_pages: Math.round(ini_blog.notcomp_pages[4] * ini_blog.crawled_ratio_notcomp[4]/100),

        active_comp_pages: Math.round(0*ini_blog.comp_pages[4] * ini_blog.crawled_ratio_comp[4]/100),
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
        
        fill: '#ffc658'

    }
];



var evoData = [
    {
        name: 'Week 1',

        visits: segData[0].visits + segData[1].visits + segData[2].visits + segData[3].visits + segData[4].visits,

        visits_comp: segData[0].visits_comp + segData[1].visits_comp + segData[2].visits_comp + segData[3].visits_comp + segData[4].visits_comp,

        visits_notcomp: segData[0].visits_notcomp + segData[1].visits_notcomp + segData[2].visits_notcomp + segData[3].visits_notcomp + segData[4].visits_notcomp,

        active_pages: segData[0].active_pages + segData[1].active_pages + segData[2].active_pages + segData[3].active_pages + segData[4].active_pages,

        visits_byAP: (segData[0].visits + segData[1].visits + segData[2].visits + segData[3].visits + segData[4].visits)/(segData[0].active_pages + segData[1].active_pages + segData[2].active_pages + segData[3].active_pages + segData[4].active_pages),

        visits_byAP_comp: Math.round(10*(segData[0].visits_byAP_comp * segData[0].comp_pages + segData[1].visits_byAP_comp * segData[1].comp_pages + segData[2].visits_byAP_comp * segData[2].comp_pages + segData[3].visits_byAP_comp * segData[3].comp_pages + segData[4].visits_byAP_comp * segData[4].comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10,

        visits_byAP_notcomp: Math.round(10*(segData[0].visits_byAP_notcomp * segData[0].comp_pages + segData[1].visits_byAP_notcomp * segData[1].comp_pages + segData[2].visits_byAP_notcomp * segData[2].comp_pages + segData[3].visits_byAP_notcomp * segData[3].comp_pages + segData[4].visits_byAP_notcomp * segData[4].comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10,

        crawl_ratio_oncomp: Math.round(1000*(segData[0].crawled_comp_pages + segData[1].crawled_comp_pages + segData[2].crawled_comp_pages + segData[3].crawled_comp_pages + segData[4].crawled_comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10,

        active_ratio_onnotcomp: Math.round(1000*(segData[0].crawled_notcomp_pages + segData[1].crawled_notcomp_pages + segData[2].crawled_notcomp_pages + segData[3].crawled_notcomp_pages + segData[4].crawled_notcomp_pages)/(segData[0].notcomp_pages + segData[1].notcomp_pages + segData[2].notcomp_pages + segData[3].notcomp_pages + segData[4].notcomp_pages))/10,

        active_ratio_oncomp: Math.round(1000*(segData[0].active_comp_pages + segData[1].active_comp_pages + segData[2].active_comp_pages + segData[3].active_comp_pages + segData[4].active_comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10,

        active_ratio_onnotcomp: Math.round(1000*(segData[0].active_notcomp_pages + segData[1].active_notcomp_pages + segData[2].active_notcomp_pages + segData[3].active_notcomp_pages + segData[4].active_notcomp_pages)/(segData[0].notcomp_pages + segData[1].notcomp_pages + segData[2].notcomp_pages + segData[3].notcomp_pages + segData[4].notcomp_pages))/10,

        pages: segData[0].pages + segData[1].pages + segData[2].pages + segData[3].pages + segData[4].pages,
        indexable_ratio: Math.round(1000*(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages)/(segData[0].pages + segData[1].pages + segData[2].pages + segData[3].pages + segData[4].pages))/10,
        comp_pages: segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages,
        notcomp_pages: segData[0].notcomp_pages + segData[1].notcomp_pages + segData[2].notcomp_pages + segData[3].notcomp_pages + segData[4].notcomp_pages,

        crawled_comp_pages: segData[0].crawled_comp_pages + segData[1].crawled_comp_pages + segData[2].crawled_comp_pages + segData[3].crawled_comp_pages + segData[4].crawled_comp_pages,
        crawled_notcomp_pages: segData[0].crawled_notcomp_pages + segData[1].crawled_notcomp_pages + segData[2].crawled_notcomp_pages + segData[3].crawled_notcomp_pages + segData[4].crawled_notcomp_pages,

        active_comp_pages: segData[0].active_comp_pages + segData[1].active_comp_pages + segData[2].active_comp_pages + segData[3].active_comp_pages + segData[4].active_comp_pages,
        active_notcomp_pages: segData[0].active_notcomp_pages + segData[1].active_notcomp_pages + segData[2].active_notcomp_pages + segData[3].active_notcomp_pages + segData[4].active_notcomp_pages,

        avg_badhttp_pages: 0,
        avg_inlinks_pages: 0,
        avg_depth_pages: 0,
        avg_loadtimes_pages: 0,

        pct_duptitles_pages: 0,
        avg_words_pages: 0,
        avg_unicity_pages: 0,
        avg_AnchorsVar_pages: 0,

        avg_badhttp: segData[0].avg_badhttp + segData[1].avg_badhttp + segData[2].avg_badhttp + segData[3].avg_badhttp + segData[4].avg_badhttp,

        avg_inlinks: Math.round(10*(segData[0].avg_inlinks_pages + segData[1].avg_inlinks_pages + segData[2].avg_inlinks_pages + segData[3].avg_inlinks_pages + segData[4].avg_inlinks_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10,

        avg_depth: Math.round(10*(segData[0].avg_depth_pages + segData[1].avg_depth_pages + segData[2].avg_depth_pages + segData[3].avg_depth_pages + segData[4].avg_depth_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10,

        avg_loadtimes: Math.round((segData[0].avg_loadtimes_pages + segData[1].avg_loadtimes_pages + segData[2].avg_loadtimes_pages + segData[3].avg_loadtimes_pages + segData[4].avg_loadtimes_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages)),

        pct_duptitles: Math.round(10*(segData[0].pct_duptitles_pages + segData[1].pct_duptitles_pages + segData[2].pct_duptitles_pages + segData[3].pct_duptitles_pages + segData[4].pct_duptitles_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10,

        avg_words: Math.round((segData[0].avg_words_pages + segData[1].avg_words_pages + segData[2].avg_words_pages + segData[3].avg_words_pages + segData[4].avg_words_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages)),

        avg_unicity: Math.round(10*(segData[0].avg_unicity_pages + segData[1].avg_unicity_pages + segData[2].avg_unicity_pages + segData[3].avg_unicity_pages + segData[4].avg_unicity_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10,

        avg_AnchorsVar: Math.round(10*(segData[0].avg_AnchorsVar_pages + segData[1].avg_AnchorsVar_pages + segData[2].avg_AnchorsVar_pages + segData[3].avg_AnchorsVar_pages + segData[4].avg_AnchorsVar_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10

    }
];



var allSegData = [];
allSegData.push(segData);

const iniEvoData = evoData;

var visitsData = [evoData[0].visits];
var visits_compData = [evoData[0].visits_comp];
var visits_notcompData = [evoData[0].visits_notcomp];

var active_pagesData = [evoData[0].active_pages];

var visits_byAPData = [evoData[0].visits_byAP];
var visits_byAP_compData = [evoData[0].visits_byAP_comp];
var visits_byAP_notcompData = [evoData[0].visits_byAP_notcomp];

var indexable_ratioData = [evoData[0].indexable_ratio];

var crawl_ratio_oncompData = [evoData[0].crawl_ratio_oncomp];
var crawl_ratio_onnotcompData = [evoData[0].crawl_ratio_onnotcomp];

var active_ratio_oncompData = [evoData[0].active_ratio_oncomp];
var active_ratio_onnotcompData = [evoData[0].active_ratio_onnotcomp];

var pagesData = [evoData[0].pages];

var comp_pagesData = [evoData[0].comp_pages];
var notcomp_pagesData = [evoData[0].notcomp_pages];

var crawled_comp_pagesData = [evoData[0].crawled_comp_pages];
var crawled_notcomp_pagesData = [evoData[0].crawled_notcomp_pages];

var active_comp_pagesData = [evoData[0].active_comp_pages];
var active_notcomp_pagesData = [evoData[0].active_notcomp_pages];

var avg_loadtimesData = [evoData[0].avg_loadtimes];
var avg_depthData = [evoData[0].avg_depth];
var avg_badhttpData = [evoData[0].avg_badhttp];
var avg_inlinksData = [evoData[0].avg_inlinks];

var avg_wordsData = [evoData[0].avg_words];
var avg_unicityData = [evoData[0].avg_unicity];
var pct_duptitlesData = [evoData[0].pct_duptitles];
var avg_AnchorsVarData = [evoData[0].avg_AnchorsVar];

/*
var visitsSegData = [segData[0].visits, segData[1].visits, segData[2].visits, segData[3].visits, segData[4].visits]
var activePagesSegData = [segData[0].active_pages, segData[1].active_pages, segData[2].active_pages, segData[3].active_pages, segData[4].active_pages]
var pagesSegData = [segData[0].pages, segData[1].pages, segData[2].pages, segData[3].pages, segData[4].pages]
*/

const kpiTextData = {
        visits: {
            def: "The number of organic visits generated in one month.",
            impo: "Basic",
            todo: "To increase your Visits, you need to analyze all the KPIs, and then spend credits on Marketing and Technical SEO Tasks."
        },
        active_pages: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },

        visits_byAP_comp: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },

        indexable_ratio: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },
        active_ratio_oncomp: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },
        crawl_ratio_oncomp: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },

        pages: {
            def: "The number of pages in your website structure. It contains both Indexable and Not Indexable Pages.",
            todo: "Make sure you have a maximum number of Indexable Pages to generate more organic traffic."
        },
        comp_pages: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },
        notcomp_pages: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },

        crawled_comp_pages: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },
        crawled_notcomp_pages: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },

        active_comp_pages: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },
        active_notcomp_pages: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },

        avg_loadtimes: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },
        avg_depth: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },
        avg_badhttp: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },
        avg_inlinks: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },

        avg_words: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },
        pct_duptitles: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },
        avg_unicity: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        },
        avg_AnchorsVar: {
            def: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.",
            impo: "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ",
            todo: "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum."
        }
}

const bossText =  {
    start: {
        intro: "Hi SEO GUY, I'm your new Boss.",
        begin: "I need you to generate 36k VISITS per month ASAP.",
        end: "Do not disappoint me, SEO GUY!"
    }
}

const chartOptions = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
}

// class Boss_Start extends Component {
//     render() {
//     return (
//         <h3>H</h3>
//     );
//     }
//
// }

function numberWithCommas(x) {
    var parts = x.toString().split(".");
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return parts.join(".");
}


function setColorDown(x) {
    if (x > 0) {
        return {color: "red"};
    }
    else {
        return {color: "green"};
    }
}




export default class Boss_Start extends Component {

    constructor(props) {
        super(props);
        this.state = {
            week: week,
            kpi: 'Visits',
            kpiValue: evoData[0].visits,
            kpiEvo: 0,
            evoData: evoData,
            segData: segData,
            selected_kpi: 'visits',
            seoCourse: "Hi SEO GUY, I'm your SEO teacher.",
            seoConclusion: "Please, select a KPI on the right panel to analyze it on the charts below.",
            kpiTextDefTag: '',
            kpiTextToDoTag: '',
            kpiTextDef: "The number of organic visits generated in one month.",
            kpiTextToDo: "To increase your Visits, you need to analyze all the KPIs, and then spend credits on Marketing and Technical SEO Tasks.",
            bossIntro: bossText.start.intro,
            bossText: bossText.start.begin,
            bossConslusion: bossText.start.end,
            marketIntro: "Hello SEO GUY, I'm the Marketing Girl.",
            marketText: "What do you want to do?",
        };
        this.goToNextWeek = this.goToNextWeek.bind(this);
        this.missionTab = this.missionTab.bind(this);
        this.analysisTab = this.analysisTab.bind(this);
        this.marketingTab = this.marketingTab.bind(this);
        this.techTab = this.techTab.bind(this);
        this.nextweekTab = this.nextweekTab.bind(this);
        this.supportTab = this.supportTab.bind(this);
        this.displayEVO = this.displayEVO.bind(this);
    }
    missionTab(event) {
        this.setState({
            week: week,
            kpi: 'Visits',
            evoData: evoData,
            segData: segData,
            selected_kpi: 'visits',
            key: 'first'
        });
    }
    analysisTab (event) {
        this.setState({
            week: week,
            kpi: 'Visits',
            evoData: evoData,
            segData: segData,
            selected_kpi: 'visits',
            key: 'second'
        });
    }
    marketingTab(event) {
        this.setState({
            week: week,
            kpi: 'Visits',
            evoData: evoData,
            segData: segData,
            selected_kpi: 'visits',
            key: 'third'
        });
    }

    techTab(event) {
        this.setState({
            week: week,
            kpi: 'Visits',
            evoData: evoData,
            segData: segData,
            selected_kpi: 'visits',
            key: 'fourth'
        });
    }
    nextweekTab(event) {
        this.setState({
            week: week,
            kpi: 'Visits',
            evoData: evoData,
            segData: segData,
            selected_kpi: 'visits',
            key: 'fith'
        });
    }
    supportTab(event) {
        this.setState({
            week: week,
            kpi: 'Visits',
            evoData: evoData,
            segData: segData,
            selected_kpi: 'visits',
            key: 'sixth'
        });
    }
    setColorUp(x) {
        if (x == 0) {
            return {color: "black"};
        }
        else if (x > 0) {
            return {color: "green"};
        }
        else  {
            return {color: "red"};
        }
    }
    setColorDown(x) {
        if (x == 0) {
            return {color: "black"};
        }
        else if (x > 0) {
            return {color: "red"};
        }
        else  {
            return {color: "green"};
        }
    }
    evoDiff(evoData, curweek, kpi) {
        if (curweek > 1) {
            return Math.round(1000*(evoData[curweek-1][kpi] - evoData[curweek-2][kpi])/ evoData[curweek-2][kpi])/10;
        }
        else {
            return 0;
        }

    }

    goToNextWeek(event) {

      //Calculate SEO TASKS EVOLUTION of segData KPIs


      //Calculate NATURAL EVOLUTION of segData KPIs

      console.log("segData");
      console.log(segData);



      segData[0]['active_pages'] = Math.round(segData[0].active_pages + 0.1 * Math.random() * segData[0].active_pages);
      segData[1]['active_pages'] = Math.round(segData[1].active_pages + 0.1 * Math.random() * segData[1].active_pages);
      segData[2]['active_pages'] = Math.round(segData[2].active_pages + 0.1 * Math.random() * segData[2].active_pages);

      segData[0]['pages'] = Math.round(segData[0].pages + 0.3 * Math.random() * segData[0].pages);
      segData[1]['pages'] = Math.round(segData[1].pages + 0.3 * Math.random() * segData[1].pages);
      segData[2]['pages'] = Math.round(segData[2].pages + 0.3 * Math.random() * segData[2].pages);
      segData[3]['pages'] = segData[3]['pages'];
      segData[4]['pages'] = segData[4]['pages'];



      console.log(segData);
      allSegData.push(segData);
      console.log("allSegData");
      console.log(allSegData);

      //Push new KPIs Arrays

        visitsData.push(segData[0].visits + segData[1].visits + segData[2].visits + segData[3].visits + segData[4].visits);

      //Update Week and Week Labels
      week = this.state.week + 1;

      evoData = [];
      //evoData.push(iniEvoData);

      for (var i = 0; i < week ; i++) {
        evoData.push({
          name:"Week " + (i+1),

          visits: visitsData[i],
          active_pages: activePagesData[i],

          visits_byAP_comp: 0,

          indexable_ratio: 0,
          active_ratio_oncomp: 0,
          crawl_ratio_oncomp: 0,

          pages: pagesData[i],
          comp_pages: 0,
          notcomp_pages: 0,

          crawled_comp_pages: 0,
          crawled_notcomp_pages: 0,

          active_comp_pages: 0,
          active_notcomp_pages: 0,

          avg_loadtimes: 0,
          avg_depth: 0,
          avg_badhttp: 0,
          avg_inlinks: 0,

          avg_words: 0,
          avg_unicity: 0,
          pct_duptitles: 0,
          pct_duph1: 0,
          pct_dupdesc: 0,
          avg_unicity: 0,
          avg_AnchorsVar: 0
        });
      }
        this.setState({
            week: week,
            kpi: 'Visits',
            evoData: evoData,
            segData: segData,
            selected_kpi: 'visits',
            key: 'first'
        });
    }

    goToNextWeekTest(event) {


        ///////////////////////////////////////////////////
        /*
            CALCULER LES EVOLUTIONS NATURELLES DANS SEGDATA
        */
        ////////////////////////////////////////////////////
        console.log("segData");
        console.log(segData);

        ///////////////////////////////////////////////
        /*
            APPLIQUER LES BORNES MIN ET MAX DES KPIS
        */
        //////////////////////////////////////////////

        function bound(data, key, min, max) {

            if (data[key] < min) {
                data[key] = min;
            }
            else if (data[key] > max) {
                data[key] = max;
            }
            else {
                data[key] = data[key];
            }
        }


        for (var i = 0; i < 5; i++) {

            segData[i]['comp_pages'] += Math.round(segData[i]['comp_pages'] * natevo[this.state.week].comp_pages[i]);
            segData[i]['notcomp_pages'] += Math.round(segData[i]['notcomp_pages'] * natevo[this.state.week].notcomp_pages[i]);

            bound(segData[i], 'comp_pages', borne.comp_pages.min[i], borne.comp_pages.max[i]);
            bound(segData[i], 'notcomp_pages', borne.notcomp_pages.min[i], borne.notcomp_pages.max[i]);

            segData[i]['pages'] = segData[i]['comp_pages'] + segData[i]['notcomp_pages'];

            ////////////////////////////////////////////////

            segData[i]['avg_inlinks'] += Math.round(segData[i]['avg_inlinks'] * natevo[this.state.week].avg_inlinks[i]);
            segData[i]['avg_depth'] += Math.round(Math.round(segData[i]['avg_depth'] * natevo[this.state.week].avg_depth[i]));
            segData[i]['avg_loadtimes'] += Math.round(segData[i]['avg_loadtimes'] * natevo[this.state.week].avg_loadtimes[i]);
            segData[i]['avg_badhttp'] = Math.round(segData[i]['notcomp_pages'] * 0.2);

            ///////////////////////////////////////////////

            segData[i]['pct_duptitles'] += Math.round(segData[i]['pct_duptitles'] * natevo[this.state.week].pct_duptitles[i]);
            segData[i]['avg_words'] += Math.round(segData[i]['avg_words'] * natevo[this.state.week].avg_words[i]);
            segData[i]['avg_unicity'] += Math.round(segData[i]['avg_unicity'] * natevo[this.state.week].avg_unicity[i]);
            segData[i]['avg_AnchorsVar'] += Math.round(segData[i]['avg_AnchorsVar'] * natevo[this.state.week].avg_AnchorsVar[i]);

            ///////////////////////////////////////////////

            bound(segData[i], 'avg_loadtimes', borne.avg_loadtimes.min[i], borne.avg_loadtimes.max[i]);
            bound(segData[i], 'avg_depth', borne.avg_depth.min[i], borne.avg_depth.max[i]);
            //bound(segData[i], 'avg_badhttp', borne.avg_badhttp.min[i], borne.avg_badhttp.max[i]);
            bound(segData[i], 'avg_inlinks', borne.avg_inlinks.min[i], borne.avg_inlinks.max[i]);

            bound(segData[i], 'pct_duptitles', borne.pct_duptitles.min[i], borne.pct_duptitles.max[i]);
            bound(segData[i], 'avg_words', borne.avg_words.min[i], borne.avg_words.max[i]);
            bound(segData[i], 'avg_unicity', borne.avg_unicity.min[i], borne.avg_unicity.max[i]);
            bound(segData[i], 'avg_AnchorsVar', borne.avg_AnchorsVar.min[i], borne.avg_AnchorsVar.max[i]);

            ///////////////////////////////////////////////

            segData[i]['crawled_ratio_comp'] += Math.round(segData[i]['crawled_ratio_comp'] * natevo[this.state.week].crawled_ratio_oncomp[i]);
            segData[i]['crawled_ratio_comp'] += Math.round(segData[i]['crawled_ratio_comp'] * natevo[this.state.week].avg_inlinks[i] / dim.avg_inlinks[i]);
            segData[i]['crawled_ratio_comp'] += Math.round(segData[i]['crawled_ratio_comp'] * natevo[this.state.week].avg_depth[i] / dim.avg_depth[i]);
            segData[i]['crawled_ratio_comp'] += Math.round(segData[i]['crawled_ratio_comp'] * natevo[this.state.week].avg_loadtimes[i] / dim.avg_loadtimes[i]);
            segData[i]['crawled_ratio_comp'] += Math.round(segData[i]['crawled_ratio_comp'] * ini_blog.notcomp_to_badhttp[i] / dim.avg_badhttp[i]);
            segData[i]['crawled_ratio_comp'] += Math.round(segData[i]['crawled_ratio_comp'] * natevo[this.state.week].notcomp_pages[i] / dim.notcomp_pages[i]);

            bound(segData[i], 'crawled_ratio_comp', borne.crawled_ratio_oncomp.min[i], borne.crawled_ratio_oncomp.max[i]);

            ///////////////////////////////////////////////

            segData[i]['crawled_ratio_notcomp'] = Math.round(segData[i]['crawled_ratio_comp'] * ini_blog.comp_to_notcomp[i]) + Math.round(random(-2, 2));

            segData[i]['active_ratio_oncomp'] = Math.round(segData[i]['crawled_ratio_comp'] * ini_blog.comp_to_active_comp[i]) + Math.round(random(-4, 4));

            bound(segData[i], 'active_ratio_oncomp', borne.active_ratio_oncomp.min[i], borne.active_ratio_oncomp.max[i]);

            segData[i]['active_ratio_onnotcomp'] = Math.round(segData[i]['crawled_ratio_notcomp'] * ini_blog.comp_to_active_notcomp[i]);

            ///////////////////////////////////////////////

            segData[i]['crawled_comp_pages'] = Math.round(segData[i]['comp_pages'] * segData[i]['crawled_ratio_comp']/100);
            segData[i]['crawled_notcomp_pages'] = Math.round(segData[i]['notcomp_pages'] * segData[i]['crawled_ratio_notcomp']/100);

            ///////////////////////////////////////////////

            segData[i]['active_comp_pages'] = Math.round(segData[i]['comp_pages'] * segData[i]['active_ratio_oncomp']/100);
            bound(segData[i], 'active_ratio_oncomp', borne.active_ratio_oncomp.min[i], borne.active_ratio_oncomp.max[i]);

            segData[i]['active_notcomp_pages'] = Math.round(segData[i]['notcomp_pages'] * segData[i]['active_ratio_onnotcomp']/100);

            segData[i]['active_pages'] = segData[i]['active_comp_pages'] + segData[i]['active_notcomp_pages'];

            ///////////////////////////////////////////////

            segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * natevo[this.state.week].visits_byAP_comp[i]);
            segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * natevo[this.state.week].avg_inlinks[i] / dim.avg_inlinks[i]);

            segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * natevo[this.state.week].pct_duptitles[i] / dim.pct_duptitles[i]);
            segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * natevo[this.state.week].avg_words[i] / dim.avg_words[i]);
            segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * natevo[this.state.week].avg_unicity[i] / dim.avg_unicity[i]);
            segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * natevo[this.state.week].avg_AnchorsVar[i] / dim.avg_AnchorsVar[i]);

            bound(segData[i], 'visits_byAP_comp', borne.visits_byAP_comp.min[i], borne.visits_byAP_comp.max[i]);

            ///////////////////////////////////////////////

            segData[i]['visits_byAP_notcomp'] = Math.round(segData[i]['visits_byAP_comp'] * 0.09);

            bound(segData[i], 'visits_byAP_notcomp', borne.visits_byAP_notcomp.min[i], borne.visits_byAP_notcomp.max[i]);

            ///////////////////////////////////////////////
            segData[i]['visits_comp'] = Math.round(segData[i]['visits_byAP_comp'] * segData[i]['active_comp_pages']);
            segData[i]['visits_notcomp'] = Math.round(segData[i]['visits_byAP_notcomp'] * segData[i]['active_notcomp_pages']);

            segData[i]['visits'] = segData[i]['visits_comp'] + segData[i]['visits_notcomp'];

            bound(segData[i], 'indexable_ratio', borne.indexable_ratio.min[i], borne.indexable_ratio.max[i]);

        }

        console.log("YO")
        console.log(segData);

        /////////////////////////////////////////////////////////
        /*
           APPLIQUER DES BONUS/MALUS
        */
        //////////////////////////////////////////////////////////






        /////////////////////////////////////////////////////////
        /*
           RECALCULER LES PAGES ET LES VISITES APRÈS LE BORNAGE
        */
        //////////////////////////////////////////////////////////

        for (var i = 0; i < 5; i++) {

            segData[i]['crawled_comp_pages'] = Math.round(segData[i]['comp_pages'] * segData[i]['crawled_ratio_comp']/100);
            segData[i]['crawled_notcomp_pages'] = Math.round(segData[i]['notcomp_pages'] * segData[i]['crawled_ratio_notcomp']/100);

            bound(segData[i], 'crawled_comp_pages', borne.crawled_comp_pages.min[i], borne.crawled_comp_pages.max[i]);
            bound(segData[i], 'crawled_notcomp_pages', borne.crawled_notcomp_pages.min[i], borne.crawled_notcomp_pages.max[i]);

            ///////////////////////////////////////////////

            segData[i]['active_comp_pages'] = Math.round(segData[i]['comp_pages'] * segData[i]['active_ratio_oncomp']/100);
            segData[i]['active_notcomp_pages'] = Math.round(segData[i]['notcomp_pages'] * segData[i]['active_ratio_onnotcomp']/100);

            bound(segData[i], 'active_comp_pages', borne.active_comp_pages.min[i], borne.active_comp_pages.max[i]);
            bound(segData[i], 'active_notcomp_pages', borne.active_notcomp_pages.min[i], borne.active_notcomp_pages.max[i]);

            segData[i]['active_pages'] = segData[i]['active_comp_pages'] + segData[i]['active_notcomp_pages'];

            ///////////////////////////////////////////////
            segData[i]['visits_comp'] = Math.round(segData[i]['visits_byAP_comp'] * segData[i]['active_comp_pages']);
            segData[i]['visits_notcomp'] = Math.round(segData[i]['visits_byAP_notcomp'] * segData[i]['active_notcomp_pages']);

            segData[i]['visits'] = segData[i]['visits_comp'] + segData[i]['visits_notcomp'];

            bound(segData[i], 'visits', borne.visits.min[i], borne.visits.max[i]);

        }

        console.log(segData);
        ////////////////////////////////////////////////
        allSegData.push(segData);
        console.log("allSegData");
        console.log(allSegData);



        /////////////////////////////////////////////////////////
        /*
           POUSSER LES SOMMES DES NOUVEAUX KPIS DANS EVODATA
        */
        //////////////////////////////////////////////////////////


        comp_pagesData.push(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages);
        notcomp_pagesData.push(segData[0].notcomp_pages + segData[1].notcomp_pages + segData[2].notcomp_pages + segData[3].notcomp_pages + segData[4].notcomp_pages);
        pagesData.push(segData[0].pages + segData[1].pages + segData[2].pages + segData[3].pages + segData[4].pages);

        ///////////////////////////////////////////////
        active_comp_pagesData.push(segData[0].active_comp_pages + segData[1].active_comp_pages + segData[2].active_comp_pages + segData[3].active_comp_pages + segData[4].active_comp_pages);
        active_notcomp_pagesData.push(segData[0].active_notcomp_pages + segData[1].active_notcomp_pages + segData[2].active_notcomp_pages + segData[3].active_notcomp_pages + segData[4].active_notcomp_pages);
        active_pagesData.push(segData[0].active_pages + segData[1].active_pages + segData[2].active_pages + segData[3].active_pages + segData[4].active_pages);

        ///////////////////////////////////////////////
        crawled_comp_pagesData.push(segData[0].crawled_comp_pages + segData[1].crawled_comp_pages + segData[2].crawled_comp_pages + segData[3].crawled_comp_pages + segData[4].crawled_comp_pages);
        crawled_notcomp_pagesData.push(segData[0].crawled_notcomp_pages + segData[1].crawled_notcomp_pages + segData[2].crawled_notcomp_pages + segData[3].crawled_notcomp_pages + segData[4].crawled_notcomp_pages);
        ////////////////////////////////////////////////
        avg_inlinksData.push(Math.round((segData[0].avg_inlinks * segData[0].comp_pages + segData[1].avg_inlinks * segData[1].comp_pages + segData[2].avg_inlinks * segData[2].comp_pages + segData[3].avg_inlinks * segData[3].comp_pages + segData[4].avg_inlinks * segData[4].comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages)));

        avg_depthData.push(Math.round(10*(segData[0].avg_depth * segData[0].comp_pages + segData[1].avg_depth * segData[1].comp_pages + segData[2].avg_depth * segData[2].comp_pages + segData[3].avg_depth * segData[3].comp_pages + segData[4].avg_depth * segData[4].comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10);

        
        avg_loadtimesData.push(Math.round((segData[0].avg_loadtimes * segData[0].comp_pages + segData[1].avg_loadtimes * segData[1].comp_pages + segData[2].avg_loadtimes * segData[2].comp_pages + segData[3].avg_loadtimes * segData[3].comp_pages + segData[4].avg_loadtimes * segData[4].comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages)));
        
        console.log("avg_loadtimesData");
        console.log(avg_loadtimesData);

        avg_badhttpData.push((segData[0].avg_badhttp + segData[1].avg_badhttp + segData[2].avg_badhttp + segData[3].avg_badhttp + segData[4].avg_badhttp));

        ////////////////////////////////////////////////
        pct_duptitlesData.push(Math.round(10*(segData[0].pct_duptitles * segData[0].comp_pages + segData[1].pct_duptitles * segData[1].comp_pages + segData[2].pct_duptitles * segData[2].comp_pages + segData[3].pct_duptitles * segData[3].comp_pages + segData[4].pct_duptitles * segData[4].comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10);

        avg_wordsData.push(Math.round(10*(segData[0].avg_words * segData[0].comp_pages + segData[1].avg_words * segData[1].comp_pages + segData[2].avg_words * segData[2].comp_pages + segData[3].avg_words * segData[3].comp_pages + segData[4].avg_words * segData[4].comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10);

        avg_unicityData.push(Math.round(10*(segData[0].avg_unicity * segData[0].comp_pages + segData[1].avg_unicity * segData[1].comp_pages + segData[2].avg_unicity * segData[2].comp_pages + segData[3].avg_unicity * segData[3].comp_pages + segData[4].avg_unicity * segData[4].comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10);

        avg_AnchorsVarData.push(Math.round(10*(segData[0].avg_AnchorsVar * segData[0].comp_pages + segData[1].avg_AnchorsVar * segData[1].comp_pages + segData[2].avg_AnchorsVar * segData[2].comp_pages + segData[3].avg_AnchorsVar * segData[3].comp_pages + segData[4].avg_AnchorsVar * segData[4].comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10);

        ////////////////////////////////////////////////

        indexable_ratioData.push(Math.round(1000*(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages)/(segData[0].pages + segData[1].pages + segData[2].pages + segData[3].pages + segData[4].pages))/10);

        crawl_ratio_oncompData.push(Math.round(1000*(segData[0].crawled_comp_pages + segData[1].crawled_comp_pages + segData[2].crawled_comp_pages + segData[3].crawled_comp_pages + segData[4].crawled_comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10);

        active_ratio_oncompData.push(Math.round(1000*(segData[0].active_comp_pages + segData[1].active_comp_pages + segData[2].active_comp_pages + segData[3].active_comp_pages + segData[4].active_comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10);

        ///////////////////////////////////////////////
        visits_compData.push(segData[0].visits_comp + segData[1].visits_comp + segData[2].visits_comp + segData[3].visits_comp + segData[4].visits_comp);

        visits_notcompData.push(segData[0].visits_notcomp + segData[1].visits_notcomp + segData[2].visits_notcomp + segData[3].visits_notcomp + segData[4].visits_notcomp);

        ////////////////////////////////////////////////
        visitsData.push(segData[0].visits + segData[1].visits + segData[2].visits + segData[3].visits + segData[4].visits);
        ////////////////////////////////////////////////
        visits_byAPData.push((segData[0].visits + segData[1].visits + segData[2].visits + segData[3].visits + segData[4].visits)/(segData[0].active_comp_pages + segData[1].active_comp_pages + segData[2].active_comp_pages + segData[3].active_comp_pages + segData[4].active_comp_pages + segData[0].active_notcomp_pages + segData[1].active_notcomp_pages + segData[2].active_notcomp_pages + segData[3].active_notcomp_pages + segData[4].active_notcomp_pages))
        ////////////////////////////////////////////////

        visits_byAP_compData.push(Math.round(10*(segData[0].visits_byAP_comp * segData[0].comp_pages + segData[1].visits_byAP_comp * segData[1].comp_pages + segData[2].visits_byAP_comp * segData[2].comp_pages + segData[3].visits_byAP_comp * segData[3].comp_pages + segData[4].visits_byAP_comp * segData[4].comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10);

        /////////////////////////////////////////////////
        visits_byAP_notcompData.push(Math.round(10*(segData[0].visits_byAP_notcomp * segData[0].comp_pages + segData[1].visits_byAP_notcomp * segData[1].comp_pages + segData[2].visits_byAP_notcomp * segData[2].comp_pages + segData[3].visits_byAP_notcomp * segData[3].comp_pages + segData[4].visits_byAP_notcomp * segData[4].comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10);

        /////////////////////////////////////////////////

        //Update Week and Week Labels
        week = this.state.week + 1;
        //Create evoData (Total evolutions) Tab
        evoData = [];
        for (var i = 0; i < week; i++) {
            evoData.push({
                name: "Week " + (i + 1),

                visits: visitsData[i],
                visits_comp: visits_compData[i],
                visits_notcomp: visits_notcompData[i],


                active_pages: active_pagesData[i],

                visits_byAP: visits_byAPData[i],
                visits_byAP_comp: visits_byAP_compData[i],
                visits_byAP_notcomp: visits_byAP_notcompData[i],

                indexable_ratio: indexable_ratioData[i],
                active_ratio_oncomp: active_ratio_oncompData[i],
                crawl_ratio_oncomp: crawl_ratio_oncompData[i],

                pages: pagesData[i],
                comp_pages: comp_pagesData[i],
                notcomp_pages: notcomp_pagesData[i],

                crawled_comp_pages: crawled_comp_pagesData[i],
                crawled_notcomp_pages: crawled_notcomp_pagesData[i],

                active_comp_pages: active_comp_pagesData[i],
                active_notcomp_pages: active_notcomp_pagesData[i],

                avg_loadtimes: avg_loadtimesData[i],
                avg_depth: avg_depthData[i],
                avg_badhttp: avg_badhttpData[i],
                avg_inlinks: avg_inlinksData[i],

                avg_words: avg_wordsData[i],
                avg_unicity: avg_unicityData[i],
                pct_duptitles: pct_duptitlesData[i],
                avg_AnchorsVar: avg_AnchorsVarData[i]
            });
        }

        this.setState({
            week: week,
            evoData: evoData,
            segData: segData,
            kpiValue: evoData[this.state.week].visits,
            kpiEvo: this.evoDiff(evoData, this.state.week + 1, "visits"),
            kpi: 'Visits',
            selected_kpi: 'visits',
            key: 'first'
        });
        console.log("setColorUp(this.state.week)");
        console.log(this.state.week);
        console.log(this.setColorUp(this.state.week));
    }


    displayEVO(event, name, selectedkpi, kpiValue, kpiEvo, kpiTextDef, kpiTextToDo) {

        this.setState({
            week: week,
            kpi: name,
            kpiValue: kpiValue,
            kpiEvo: kpiEvo,
            evoData: evoData,
            segData: segData,
            selected_kpi: selectedkpi,
            seoCourse: name + ':',
            seoConclusion: '',
            kpiTextDefTag: '',
            kpiTextToDoTag: '',
            kpiTextDef: kpiTextDef,
            kpiTextToDo: kpiTextToDo,
        });
    };


    render() {
    return (
        <div>
            <Row className="top-div">
                <Col xs={2} className="logo">
                    <center><h1>SEO GUY</h1></center>
                </Col>
                <Col xs={10} className="top-bar">
                    <span>Week #{this.state.week}</span>
                </Col>
            </Row>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" activeKey={this.state.key}>
        <Row className="clearfix main-div">
          <Col xs={2} className="sidebar">
            <Nav bsStyle="pills" stacked>
                <NavItem eventKey="first"><Button bsStyle="default" bsSize="large" onClick={event => this.missionTab(event)} className="barbutton">Your Mission</Button></NavItem>
                <NavItem eventKey="second"><Button bsStyle="default" bsSize="large" onClick={event => this.analysisTab(event)} className="barbutton">Website Analysis</Button>
                </NavItem>
                <NavItem eventKey="third"><Button bsStyle="default" bsSize="large" onClick={event => this.marketingTab(event)} className="barbutton">Marketing Tasks</Button></NavItem>
                <NavItem eventKey="fourth"><Button bsStyle="default" bsSize="large" onClick={event => this.techTab(event)} className="barbutton">Technical Tasks</Button></NavItem>
                <NavItem eventKey="fith"><Button bsStyle="default" bsSize="large" onClick={event => this.nextweekTab(event)} className="barbutton">Go To Next Week</Button></NavItem>
                <NavItem eventKey="sixth"><Button bsStyle="default" bsSize="large" onClick={event => this.supportTab(event)} className="barbutton">Support Us!</Button></NavItem>
            </Nav>
          </Col>
          <Col xs={10} className="maincontent">
            <Tab.Content animation>
              <Tab.Pane eventKey="first">
    <h2>Mission Status</h2>
                        <Row className="show-grid">
                            <Col md={12} lg={6}>
                                <div className="left-1"><h3>The Boss is talking to you</h3>
                                   <Row className="col-1">
                                       <Col xs={4} className="box-1">
                                          <Image src={bossguy} responsive className="guyimage" />
                                       </Col>
                                       <Col xs={8} className="box-2">
                                        <p className="guytext-2">
                                           <span className="indicator">{this.state.bossIntro}</span>
                                           <br/><br/>
                                           <span className="indicator">{this.state.bossText}</span>
                                           <br/><br/>
                                           <span className="indicator">{this.state.bossConslusion}</span>
                                        </p>
                                       </Col>
                                   </Row>

                                </div>
                            </Col>
                            <Col md={12} lg={6}>
                                <div className="left-1">
                                <h3 className="kpi"><span className="tag">Visits</span><br/>{this.state.evoData[this.state.week-1].visits} +X%</h3>

                                   <div className="box-4">
                                       <ResponsiveContainer height={110}>
                                        <AreaChart data={this.state.evoData}
                                            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                                          <XAxis dataKey="name"/>
                                          <YAxis/>
                                          <CartesianGrid strokeDasharray="3 3"/>
                                          <Tooltip/>
                                          <Area type='monotone' dataKey='visits' stroke='#000' fill='#000' />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                   </div>

                                </div>
                            </Col>

                        </Row>
                        <Row className="show-grid">
                            <Col md={12} lg={6}>
                                <div className="left-1"><h3>Your Status</h3>

                                    <div className="box-3">

                                        <h4><span className="bold">Deadline:</span> You have {12 - this.state.week} months left to generate 36K visits per month.</h4>
                                        <br/>

                                        <h4><span className="bold">Resources:</span> You have 4 credits left to spend this month on marketing or technical SEO tasks.</h4>
                                        <br/>
                                     </div>
                                </div>
                            </Col>
                            <Col md={12} lg={6}>
                                <div className="left-1">
                                <h3>Visits, by templates</h3>
                                    <div className="box-3">
                                    <ResponsiveContainer height={230}>
                                        <BarChart data={this.state.segData}>
                                          <XAxis dataKey="name" />
                                          <YAxis />
                                          <CartesianGrid strokeDasharray="3 3" />
                                          <Tooltip />

                                          <Bar dataKey='visits' fill="#000" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                    </div>
                                </div>
                            </Col>

                        </Row>
              </Tab.Pane>
              <Tab.Pane eventKey="second" >
                        <div className="title-div">
                            <Image src={teacherguy} responsive className="smallimage" />
                            <h1 className="title-h1">SEO KPIs Analysis</h1>
                            <p className="title-p">Use the buttons below to select a KPI and analyze it.</p>
                        </div>

                        <Row className="show-grid">
                        <Col md={12} lg={6}>
                            
                           <div className="kpis-selection">
                              <Tab.Container id="kpis-tab" defaultActiveKey="one">
                                <Row className="clearfix">
                                  <Col sm={4} className="col-kpis">
                                    <Nav bsStyle="pills" stacked>
                                        <NavItem eventKey="one"><Button bsStyle="default" bsSize="large" className="barbutton-2">GENERAL</Button></NavItem>
                                        <NavItem eventKey="two"><Button bsStyle="default" bsSize="large" className="barbutton-2">INDEXABILITY</Button></NavItem>
                                        <NavItem eventKey="three"><Button bsStyle="default" bsSize="large" className="barbutton-2">STRUCTURE</Button></NavItem>
                                        <NavItem eventKey="four"><Button bsStyle="default" bsSize="large" className="barbutton-2">QUALITY</Button></NavItem>
                                    </Nav>
                                  </Col>
                                  <Col sm={8}>
                                    <Tab.Content animation className="kpis-tab-buttons">
                                      <Tab.Pane eventKey="one">
                                            <ButtonToolbar className="kpis-tab">
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Visits','visits', this.state.evoData[week-1].visits, this.evoDiff(evoData, this.state.week, "visits"), kpiTextData.visits.def, kpiTextData.visits.todo)}>Visits</Button>
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Pages', 'pages', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Pages</Button>
                                            </ButtonToolbar>
                                            <ButtonToolbar className="kpis-tab">
                                              <Button bsStyle="default" bsSize="large" className="kpibut-3" onClick={event => this.displayEVO(event,'Indexability Ratio', 'indexable_ratio', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Indexability Ratio</Button>
                                              <Button bsStyle="default" bsSize="large" className="kpibut-3" onClick={event => this.displayEVO(event,'Crawl Ratio', 'crawl_ratio_oncomp', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Crawl Ratio</Button>
                                              <Button bsStyle="default" bsSize="large" className="kpibut-3" onClick={event => this.displayEVO(event,'Active Ratio', 'active_ratio_oncomp', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Active Ratio</Button>
                                              <Button bsStyle="default" bsSize="large" className="kpibut-3"></Button>
                                            </ButtonToolbar>
                                            
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="two">
                                            <ButtonToolbar className="kpis-tab">
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2-3" onClick={event => this.displayEVO(event,'Indexable Pages', 'comp_pages', this.state.evoData[week-1].comp_pages, this.evoDiff(evoData, this.state.week, "comp_pages"),kpiTextData.comp_pages.def, kpiTextData.comp_pages.todo)}>Indexable</Button>
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2-3" onClick={event => this.displayEVO(event,'Not Indexable Pages', 'pages', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Not Indexable</Button>
                                            </ButtonToolbar>
                                            <ButtonToolbar className="kpis-tab">
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2-3" onClick={event => this.displayEVO(event,'Crawled Index. Pages', 'pages', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Crawled Indexable</Button>
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2-3" onClick={event => this.displayEVO(event,'Crawled Not Index. Pages', 'pages', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Crawled Not Indexable</Button>
                                            </ButtonToolbar>
                                            <ButtonToolbar className="kpis-tab">
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2-3" onClick={event => this.displayEVO(event,'Active Index. Pages', 'pages', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Active Indexable</Button>
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2-3" onClick={event => this.displayEVO(event,'Active Not Index. Pages', 'pages', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Active Not Indexable</Button>
                                            </ButtonToolbar>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="three">
                                            <ButtonToolbar className="kpis-tab">
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Internal Links', 'pages', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Internal Links</Button>
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Avg. Depth', 'pages', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Depth</Button>
                                            </ButtonToolbar>
                                            <ButtonToolbar className="kpis-tab">
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Avg. Load Times', 'pages', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Load Times</Button>
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Broken Links', 'pages', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Broken Links</Button>
                                              <Button bsStyle="default" bsSize="large" className="kpibut-3"></Button>
                                              <Button bsStyle="default" bsSize="large" className="kpibut-3"></Button>
                                            </ButtonToolbar>
                                      </Tab.Pane>
                                      <Tab.Pane eventKey="four">
                                            <ButtonToolbar className="kpis-tab">
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Dup. Titles', 'pages', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Dup. Titles</Button>
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Words', 'pages', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Words</Button>
                                            </ButtonToolbar>
                                            <ButtonToolbar className="kpis-tab">
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Similar Pages Ratio', 'pages', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Similarity %</Button>
                                              <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Anchors Variations', 'pages', this.state.evoData[week-1].pages, this.evoDiff(evoData, this.state.week, "pages"),kpiTextData.pages.def, kpiTextData.pages.todo)}>Anchors Variations</Button>
                                              <Button bsStyle="default" bsSize="large" className="kpibut-3"></Button>
                                              <Button bsStyle="default" bsSize="large" className="kpibut-3"></Button>
                                            </ButtonToolbar>
                                      </Tab.Pane>
                                    </Tab.Content>
                              </Col>
                            </Row>
                          </Tab.Container>
                            </div>
                            </Col>
                            <Col md={12} lg={6}>
                                <div className="left-1">
                                    <Row className="col-1">
                                       <Col xs={12} className="kpi-box">
                                       <div className="bigkpi">
                                          <span className="bigkpitext">{this.state.kpi}</span>
                                        </div>
                                       </Col>
                                    </Row>
                                    <Row className="col-1">
                                        <Col xs={6} className="kpi-box">
                                            <div className="smallkpi">
                                                <span className="smallkpitext">{numberWithCommas(this.state.kpiValue)}</span>
                                            </div>
                                        </Col>
                                        <Col xs={6} className="kpi-box">
                                            <div className="smallevo">
                                              <span className="smallevotext" style={this.setColorUp(this.state.kpiEvo)}>{numberWithCommas(this.state.kpiEvo)}%</span>
                                            </div>
                                        </Col>
                                    </Row>


                                </div>
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col md={6} lg={6}>
                                <Table striped bordered condensed hover responsive className="def-tab">
                                    <tbody>
                                        <tr>
                                            <td className="def-tab-labels">KPI name</td>
                                            <td className="def-tab-labels-kpi">{this.state.kpi}</td>
                                        </tr>
                                        <tr>
                                            <td className="def-tab-labels">Definition</td>
                                            <td className="def-tab-text">{this.state.kpiTextDef}</td>
                                        </tr>
                                        <tr>
                                            <td className="def-tab-labels">Why it's important?</td>
                                            <td className="def-tab-text">Because it's important!</td>
                                        </tr>
                                        <tr>
                                            <td className="def-tab-labels">What should I do?</td>
                                            <td className="def-tab-text">{this.state.kpiTextToDo}</td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                            <Col md={6} lg={6}>
                                <div className="left-1">
                                   <h3>{this.state.kpi}, evolution</h3>
                                   <div className="box-4">
                                       <ResponsiveContainer height={110}>
                                        <AreaChart data={this.state.evoData}
                                            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                                          <XAxis dataKey="name"/>
                                          <YAxis/>
                                          <CartesianGrid strokeDasharray="3 3"/>
                                          <Tooltip/>
                                          <Area type='monotoneX' dataKey={this.state.selected_kpi} stroke='#000' fill='#000' dot={{ stroke: 'black', strokeWidth: 1 }}/>
                                        </AreaChart>
                                    </ResponsiveContainer>
                                   </div>
                                </div>
                                <div className="left-1">
                                <h3>{this.state.kpi}, by templates</h3>
                                    <div className="box-3">
                                    <ResponsiveContainer height={230}>
                                        <BarChart data={this.state.segData}>
                                          <XAxis dataKey="name" />
                                          <YAxis />
                                          <CartesianGrid strokeDasharray="3 3" />
                                          <Tooltip />

                                          <Bar dataKey={this.state.selected_kpi} fill="#000" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                    </div>
                                </div>
                                <div className="left-1">
                                <h3>{this.state.kpi}, Distribution</h3>
                                    <div className="box-3">
                                    <ResponsiveContainer height={230}>
                                        <RadialBarChart width={800} height={300} cx={230} cy={150} innerRadius={20} outerRadius={140} barSize={13} data={this.state.segData}>
                                        <RadialBar minAngle={15} label background clockWise={true} dataKey={this.state.selected_kpi}/>
                                        <Legend iconSize={10} width={400} height={140} layout='horizontal' verticalAlign='bottom' align="center" wrapperStyle={style}/>
                                        </RadialBarChart>
                                    </ResponsiveContainer>
                                    </div>
                                </div>                                
                            </Col>
                        </Row>

                        <ButtonToolbar>
                            <Button bsStyle="primary" bsSize="large" className="nextbutton"  onClick={event => this.goToNextWeekTest(event)} >Go To The Next Week!</Button>
                        </ButtonToolbar>
  <Table striped bordered condensed hover responsive>
    <thead>
      <tr>
        <th>WEEK #{this.state.week} - KPIs</th>
        <th>Top Tail</th>
        <th>Middle Tail</th>
        <th>Long Tail</th>
        <th>Paginations</th>
        <th>Useless</th>
        <th>Total</th>
        <th>Diff</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Visits</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["visits"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["visits"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["visits"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["visits"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["visits"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["visits"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "visits"))}>{this.evoDiff(evoData, this.state.week, "visits")}%</td>
      </tr>
      <tr>
        <td>Total Pages</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["pages"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["pages"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "pages"))}>{this.evoDiff(evoData, this.state.week, "pages")}%</td>
      </tr>
      <tr>
        <td>Active Ratio (Indexable Pages)</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["active_ratio_oncomp"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["active_ratio_oncomp"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["active_ratio_oncomp"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["active_ratio_oncomp"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["active_ratio_oncomp"])}%</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["active_ratio_oncomp"])}%</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "active_ratio_oncomp"))}>{this.evoDiff(evoData, this.state.week, "active_ratio_oncomp")}%</td>
      </tr>
      <tr>
        <td>Crawl Ratio (Indexable Pages)</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["crawled_ratio_comp"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["crawled_ratio_comp"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["crawled_ratio_comp"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["crawled_ratio_comp"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["crawled_ratio_comp"])}%</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["crawl_ratio_oncomp"])}%</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "crawl_ratio_oncomp"))}>{this.evoDiff(evoData, this.state.week, "crawl_ratio_oncomp")}%</td>
      </tr>
      <tr>
        <td>Indexability Ratio</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["indexable_ratio"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["indexable_ratio"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["indexable_ratio"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["indexable_ratio"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["indexable_ratio"])}%</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["indexable_ratio"])}%</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "indexable_ratio"))}>{this.evoDiff(evoData, this.state.week, "indexable_ratio")}%</td>
      </tr>
      <tr>
        <td>Visits (Comp)</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["visits_comp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["visits_comp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["visits_comp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["visits_comp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["visits_comp"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["visits_comp"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "visits_comp"))}>{this.evoDiff(evoData, this.state.week, "visits_comp")}%</td>
      </tr>
      <tr>
        <td>Visits by Active Page (Comp)</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["visits_byAP_comp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["visits_byAP_comp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["visits_byAP_comp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["visits_byAP_comp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["visits_byAP_comp"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["visits_byAP_comp"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "visits_byAP_comp"))}>{this.evoDiff(evoData, this.state.week, "visits_byAP_comp")}%</td>
      </tr>
      <tr>
        <td>Active Indexable Pages</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["active_comp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["active_comp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["active_comp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["active_comp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["active_comp_pages"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["active_comp_pages"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "active_comp_pages"))}>{this.evoDiff(evoData, this.state.week, "active_comp_pages")}%</td>
      </tr>
      <tr>
        <td>Crawled Indexable Pages</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["crawled_comp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["crawled_comp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["crawled_comp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["crawled_comp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["crawled_comp_pages"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["crawled_comp_pages"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "crawled_comp_pages"))}>{this.evoDiff(evoData, this.state.week, "crawled_comp_pages")}%</td>
      </tr>
      <tr>
        <td>Indexable Pages</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["comp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["comp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["comp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["comp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["comp_pages"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["comp_pages"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "comp_pages"))}>{this.evoDiff(evoData, this.state.week, "comp_pages")}%</td>
      </tr>
      <tr>
        <td>Visits (Not Comp)</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["visits_notcomp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["visits_notcomp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["visits_notcomp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["visits_notcomp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["visits_notcomp"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["visits_notcomp"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "visits_notcomp"))}>{this.evoDiff(evoData, this.state.week, "visits_notcomp")}%</td>
      </tr>
      <tr>
        <td>Visits by Active Page (Not Comp)</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["visits_byAP_notcomp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["visits_byAP_notcomp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["visits_byAP_notcomp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["visits_byAP_notcomp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["visits_byAP_notcomp"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["visits_byAP_notcomp"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "visits_byAP_notcomp"))}>{this.evoDiff(evoData, this.state.week, "visits_byAP_notcomp")}%</td>
      </tr>
      <tr>
        <td>Active Not Indexable Pages</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["active_notcomp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["active_notcomp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["active_notcomp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["active_notcomp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["active_notcomp_pages"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["active_notcomp_pages"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "active_notcomp_pages"))}>{this.evoDiff(evoData, this.state.week, "active_notcomp_pages")}%</td>
      </tr>
      <tr>
        <td>Crawled Not Indexable Pages</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["crawled_notcomp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["crawled_notcomp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["crawled_notcomp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["crawled_notcomp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["crawled_notcomp_pages"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["crawled_notcomp_pages"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "crawled_notcomp_pages"))}>{this.evoDiff(evoData, this.state.week, "crawled_notcomp_pages")}%</td>
      </tr>
      <tr>
        <td>Not Indexable Pages</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["notcomp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["notcomp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["notcomp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["notcomp_pages"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["notcomp_pages"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["notcomp_pages"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "notcomp_pages"))}>{this.evoDiff(evoData, this.state.week, "notcomp_pages")}%</td>
      </tr>

      <tr>
        <td>Internal Links</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["avg_inlinks"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["avg_inlinks"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["avg_inlinks"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["avg_inlinks"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["avg_inlinks"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["avg_inlinks"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "avg_inlinks"))}>{this.evoDiff(evoData, this.state.week, "avg_inlinks")}%</td>
      </tr>
      <tr>
        <td>Depth</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["avg_depth"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["avg_depth"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["avg_depth"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["avg_depth"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["avg_depth"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["avg_depth"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "avg_depth"))}>{this.evoDiff(evoData, this.state.week, "avg_depth")}%</td>
      </tr>
      <tr>
        <td>Load Times</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["avg_loadtimes"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["avg_loadtimes"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["avg_loadtimes"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["avg_loadtimes"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["avg_loadtimes"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["avg_loadtimes"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "avg_loadtimes"))}>{this.evoDiff(evoData, this.state.week, "avg_loadtimes")}%</td>
      </tr>
      <tr>
        <td>Broken Links</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["avg_badhttp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["avg_badhttp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["avg_badhttp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["avg_badhttp"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["avg_badhttp"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["avg_badhttp"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "avg_badhttp"))}>{this.evoDiff(evoData, this.state.week, "avg_badhttp")}%</td>
      </tr>
      <tr>
        <td>% Duplicate Titles</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["pct_duptitles"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["pct_duptitles"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["pct_duptitles"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["pct_duptitles"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["pct_duptitles"])}%</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["pct_duptitles"])}%</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "pct_duptitles"))}>{this.evoDiff(evoData, this.state.week, "pct_duptitles")}%</td>
      </tr>
      <tr>
        <td>Words</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["avg_words"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["avg_words"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["avg_words"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["avg_words"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["avg_words"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["avg_words"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "avg_words"))}>{this.evoDiff(evoData, this.state.week, "avg_words")}%</td>
      </tr>
      <tr>
        <td>% Unicity</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["avg_unicity"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["avg_unicity"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["avg_unicity"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["avg_unicity"])}%</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["avg_unicity"])}%</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["avg_unicity"])}%</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "avg_unicity"))}>{this.evoDiff(evoData, this.state.week, "avg_unicity")}%</td>
      </tr>
      <tr>
        <td>Anchors Variations</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][0]["avg_AnchorsVar"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][1]["avg_AnchorsVar"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][2]["avg_AnchorsVar"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][3]["avg_AnchorsVar"])}</td>
        <td>{numberWithCommas(allSegData[this.state.week-1][4]["avg_AnchorsVar"])}</td>
        <td>{numberWithCommas(evoData[this.state.week-1]["avg_AnchorsVar"])}</td>
        <td style={this.setColorUp(this.evoDiff(evoData, this.state.week, "avg_AnchorsVar"))}>{this.evoDiff(evoData, this.state.week, "avg_AnchorsVar")}%</td>
      </tr>
    </tbody>
  </Table>
              </Tab.Pane>
                <Tab.Pane eventKey="third" >
    <h2>SEO Marketing Tasks<br/></h2>
                        <Row className="show-grid">
                            <Col md={12} lg={12}>
                                <div className="left-1"><h3>The Marketing Team</h3>
                                   <Row className="col-1">
                                       <Col xs={4} className="box-1">
                                          <Image src={marketgirl} responsive className="guyimage" />
                                       </Col>
                                       <Col xs={8} className="box-2">

                                        <p className="guytext-2">
                                           <span className="indicator">{this.state.marketIntro}</span>
                                           <br/><br/>
                                           <span className="indicator">{this.state.marketText}</span>
                                           <br/><br/>
                                           <span className="indicator">{this.state.marketConslusion}</span>
                                        </p>


                                       </Col>
                                   </Row>

                                </div>


                            </Col>

                        </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
    <h2>SEO Technical Tasks<br/></h2>
                        <Row className="show-grid">
                            <Col md={12} lg={12}>
                                <div className="left-1"><h3>The Tech Team</h3>
                                   <Row className="col-1">
                                       <Col xs={4} className="box-1">
                                          <Image src={techguy} responsive className="guyimage" />
                                       </Col>
                                       <Col xs={8} className="box-2">

                                            <div className="guytext-2">
                                                <h4>{this.state.kpiTextDefTag}</h4>
                                                <span className="indicator">{this.state.seoCourse}</span> {this.state.kpiTextDef}
                                                <br/>
                                                <h4>{this.state.kpiTextToDoTag}</h4> {this.state.kpiTextToDo}
                                                <span className="indicator">{this.state.seoConclusion}</span>
                                            </div>


                                       </Col>
                                   </Row>

                                </div>



                            </Col>

                        </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="fith">
                  <h2 className="weektitle">You have 5 Credits left to spend this month on Marketing or Technical Tasks.<br/><br/>Are you sure you want to go to the next week?<br/><br/></h2>
                        <ButtonToolbar>
                            <Button bsStyle="primary" bsSize="large" className="nextbutton"  onClick={event => this.goToNextWeek(event)} >Go To The Next Week!</Button>
                        </ButtonToolbar>
                </Tab.Pane>
              </Tab.Content>
            </Col>
        </Row>
    </Tab.Container>
</div>

    );
    }

}


document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Boss_Start />,
    document.body.appendChild(document.createElement('div')),
  )
})
