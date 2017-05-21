// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
//NEED TO PUT BACK this.state.week ETC IN RENDER


import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Legend, Bar, RadialBarChart, RadialBar, PieChart, Pie, Sector, Cell} from 'recharts'
//import ReactFitText from 'react-fittext'
import { Row, Col, Tabs, Tab, Nav, NavItem, Image, ButtonToolbar, Button, Table, Modal} from 'react-bootstrap'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table.min.css';

//Custom Components
//import ChartEvo from './components/ChartEvo';

//Images

import logo from './assets/images/logo.png'
import head from './assets/images/UpDown-Bald-Head.gif'
import techguy from './assets/images/tech.jpeg'
import teacherguy from './assets/images/teacher.jpeg'
import bossguy from './assets/images/boss.jpeg'
import marketinggirl from './assets/images/marketing.jpeg'




const style = {
    top: 165,
    left: 20,
  	lineHeight: '24px'
  };



var week = 0;
const pastweek = 6;
var weekLabels = ["W1"];

const pagesLabels = ["Top", "Middle", "Long", "Paginations", "Useless"];

const ini_blog = {
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

var segData_pie = {
    visits: [
        {name: segData[0]["name"], value: segData[0]["visits"]},
        {name: segData[1]["name"], value: segData[1]["visits"]},
        {name: segData[2]["name"], value: segData[2]["visits"]},
        {name: segData[3]["name"], value: segData[3]["visits"]},
        {name: segData[4]["name"], value: segData[4]["visits"]}    
    ],
    pages: [
        {name: segData[0]["name"], value: segData[0]["pages"]},
        {name: segData[1]["name"], value: segData[1]["pages"]},
        {name: segData[2]["name"], value: segData[2]["pages"]},
        {name: segData[3]["name"], value: segData[3]["pages"]},
        {name: segData[4]["name"], value: segData[4]["pages"]}    
    ],
    active_pages: [
        {name: segData[0]["name"], value: segData[0]["active_pages"]},
        {name: segData[1]["name"], value: segData[1]["active_pages"]},
        {name: segData[2]["name"], value: segData[2]["active_pages"]},
        {name: segData[3]["name"], value: segData[3]["active_pages"]},
        {name: segData[4]["name"], value: segData[4]["active_pages"]}    
    ],
    visits_byAP: [
        {name: segData[0]["name"], value: segData[0]["visits_byAP"]},
        {name: segData[1]["name"], value: segData[1]["visits_byAP"]},
        {name: segData[2]["name"], value: segData[2]["visits_byAP"]},
        {name: segData[3]["name"], value: segData[3]["visits_byAP"]},
        {name: segData[4]["name"], value: segData[4]["visits_byAP"]}    
    ],
    comp_pages: [
        {name: segData[0]["name"], value: segData[0]["comp_pages"]},
        {name: segData[1]["name"], value: segData[1]["comp_pages"]},
        {name: segData[2]["name"], value: segData[2]["comp_pages"]},
        {name: segData[3]["name"], value: segData[3]["comp_pages"]},
        {name: segData[4]["name"], value: segData[4]["comp_pages"]}    
    ],
    notcomp_pages: [
        {name: segData[0]["name"], value: segData[0]["notcomp_pages"]},
        {name: segData[1]["name"], value: segData[1]["notcomp_pages"]},
        {name: segData[2]["name"], value: segData[2]["notcomp_pages"]},
        {name: segData[3]["name"], value: segData[3]["notcomp_pages"]},
        {name: segData[4]["name"], value: segData[4]["notcomp_pages"]}    
    ],
    crawled_comp_pages: [
        {name: segData[0]["name"], value: segData[0]["crawled_comp_pages"]},
        {name: segData[1]["name"], value: segData[1]["crawled_comp_pages"]},
        {name: segData[2]["name"], value: segData[2]["crawled_comp_pages"]},
        {name: segData[3]["name"], value: segData[3]["crawled_comp_pages"]},
        {name: segData[4]["name"], value: segData[4]["crawled_comp_pages"]}    
    ],
    crawled_notcomp_pages: [
        {name: segData[0]["name"], value: segData[0]["crawled_notcomp_pages"]},
        {name: segData[1]["name"], value: segData[1]["crawled_notcomp_pages"]},
        {name: segData[2]["name"], value: segData[2]["crawled_notcomp_pages"]},
        {name: segData[3]["name"], value: segData[3]["crawled_notcomp_pages"]},
        {name: segData[4]["name"], value: segData[4]["crawled_notcomp_pages"]}   
    ],
    active_comp_pages: [
        {name: segData[0]["name"], value: segData[0]["active_comp_pages"]},
        {name: segData[1]["name"], value: segData[1]["active_comp_pages"]},
        {name: segData[2]["name"], value: segData[2]["active_comp_pages"]},
        {name: segData[3]["name"], value: segData[3]["active_comp_pages"]},
        {name: segData[4]["name"], value: segData[4]["active_comp_pages"]}    
    ],
    active_notcomp_pages: [
        {name: segData[0]["name"], value: segData[0]["active_notcomp_pages"]},
        {name: segData[1]["name"], value: segData[1]["active_notcomp_pages"]},
        {name: segData[2]["name"], value: segData[2]["active_notcomp_pages"]},
        {name: segData[3]["name"], value: segData[3]["active_notcomp_pages"]},
        {name: segData[4]["name"], value: segData[4]["active_notcomp_pages"]}    
    ],
    
};



var evoData = [
    {
        name: 'Week 1',

        visits: segData[0].visits + segData[1].visits + segData[2].visits + segData[3].visits + segData[4].visits,

        visits_comp: segData[0].visits_comp + segData[1].visits_comp + segData[2].visits_comp + segData[3].visits_comp + segData[4].visits_comp,

        visits_notcomp: segData[0].visits_notcomp + segData[1].visits_notcomp + segData[2].visits_notcomp + segData[3].visits_notcomp + segData[4].visits_notcomp,

        active_pages: segData[0].active_pages + segData[1].active_pages + segData[2].active_pages + segData[3].active_pages + segData[4].active_pages,

        visits_byAP: Math.round(10*(segData[0].visits + segData[1].visits + segData[2].visits + segData[3].visits + segData[4].visits)/(segData[0].active_pages + segData[1].active_pages + segData[2].active_pages + segData[3].active_pages + segData[4].active_pages))/10,

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


var segData_piepages = [{
    comp_pages: [
        {name: 'Indexable Pages', value: evoData[0]["comp_pages"]},
        {name: 'Not Indexable Pages', value: evoData[0]["notcomp_pages"]}  
    ],
    notcomp_pages: [
        {name: 'Indexable Pages', value: evoData[0]["comp_pages"]},
        {name: 'Not Indexable Pages', value: evoData[0]["notcomp_pages"]}  
    ],
    crawled_comp_pages: [
        {name: 'Crawled Indexable Pages', value: evoData[0]["crawled_comp_pages"]},
        {name: 'Crawled Not Indexable Pages', value: evoData[0]["crawled_notcomp_pages"]}  
    ],
    crawled_notcomp_pages: [
        {name: 'Crawled Indexable Pages', value: evoData[0]["crawled_comp_pages"]},
        {name: 'Crawled Not Indexable Pages', value: evoData[0]["crawled_notcomp_pages"]}  
    ],
    active_comp_pages: [
        {name: 'Active Indexable Pages', value: evoData[0]["active_comp_pages"]},
        {name: 'Active Not Indexable Pages', value: evoData[0]["active_notcomp_pages"]}  
    ],
    active_notcomp_pages: [
        {name: 'Active Indexable Pages', value: evoData[0]["active_comp_pages"]},
        {name: 'Active Not Indexable Pages', value: evoData[0]["active_notcomp_pages"]}   
    ],
}];

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

function nextWeek(curweek) {

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

            segData[i]['comp_pages'] += Math.round(segData[i]['comp_pages'] * natevo[curweek].comp_pages[i]);
            segData[i]['notcomp_pages'] += Math.round(segData[i]['notcomp_pages'] * natevo[curweek].notcomp_pages[i]);

            bound(segData[i], 'comp_pages', borne.comp_pages.min[i], borne.comp_pages.max[i]);
            bound(segData[i], 'notcomp_pages', borne.notcomp_pages.min[i], borne.notcomp_pages.max[i]);

            segData[i]['pages'] = segData[i]['comp_pages'] + segData[i]['notcomp_pages'];

            ////////////////////////////////////////////////

            segData[i]['avg_inlinks'] += Math.round(segData[i]['avg_inlinks'] * natevo[curweek].avg_inlinks[i]);
            segData[i]['avg_depth'] += Math.round(Math.round(segData[i]['avg_depth'] * natevo[curweek].avg_depth[i]));
            segData[i]['avg_loadtimes'] += Math.round(segData[i]['avg_loadtimes'] * natevo[curweek].avg_loadtimes[i]);
            segData[i]['avg_badhttp'] = Math.round(segData[i]['notcomp_pages'] * 0.2);

            ///////////////////////////////////////////////

            segData[i]['pct_duptitles'] += Math.round(segData[i]['pct_duptitles'] * natevo[curweek].pct_duptitles[i]);
            segData[i]['avg_words'] += Math.round(segData[i]['avg_words'] * natevo[curweek].avg_words[i]);
            segData[i]['avg_unicity'] += Math.round(segData[i]['avg_unicity'] * natevo[curweek].avg_unicity[i]);
            segData[i]['avg_AnchorsVar'] += Math.round(segData[i]['avg_AnchorsVar'] * natevo[curweek].avg_AnchorsVar[i]);

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

            segData[i]['crawl_ratio_oncomp'] += Math.round(segData[i]['crawl_ratio_oncomp'] * natevo[curweek].crawled_ratio_oncomp[i]);
            segData[i]['crawl_ratio_oncomp'] += Math.round(segData[i]['crawl_ratio_oncomp'] * natevo[curweek].avg_inlinks[i] / dim.avg_inlinks[i]);
            segData[i]['crawl_ratio_oncomp'] += Math.round(segData[i]['crawl_ratio_oncomp'] * natevo[curweek].avg_depth[i] / dim.avg_depth[i]);
            segData[i]['crawl_ratio_oncomp'] += Math.round(segData[i]['crawl_ratio_oncomp'] * natevo[curweek].avg_loadtimes[i] / dim.avg_loadtimes[i]);
            segData[i]['crawl_ratio_oncomp'] += Math.round(segData[i]['crawl_ratio_oncomp'] * ini_blog.notcomp_to_badhttp[i] / dim.avg_badhttp[i]);
            segData[i]['crawl_ratio_oncomp'] += Math.round(segData[i]['crawl_ratio_oncomp'] * natevo[curweek].notcomp_pages[i] / dim.notcomp_pages[i]);

            bound(segData[i], 'crawl_ratio_oncomp', borne.crawled_ratio_oncomp.min[i], borne.crawled_ratio_oncomp.max[i]);

            ///////////////////////////////////////////////

            segData[i]['crawled_ratio_notcomp'] = Math.round(segData[i]['crawl_ratio_oncomp'] * ini_blog.comp_to_notcomp[i]) + Math.round(random(-2, 2));

            segData[i]['active_ratio_oncomp'] = Math.round(segData[i]['crawl_ratio_oncomp'] * ini_blog.comp_to_active_comp[i]) + Math.round(random(-4, 4));

            bound(segData[i], 'active_ratio_oncomp', borne.active_ratio_oncomp.min[i], borne.active_ratio_oncomp.max[i]);

            segData[i]['active_ratio_onnotcomp'] = Math.round(segData[i]['crawled_ratio_notcomp'] * ini_blog.comp_to_active_notcomp[i]);

            ///////////////////////////////////////////////

            segData[i]['crawled_comp_pages'] = Math.round(segData[i]['comp_pages'] * segData[i]['crawl_ratio_oncomp']/100);
            segData[i]['crawled_notcomp_pages'] = Math.round(segData[i]['notcomp_pages'] * segData[i]['crawled_ratio_notcomp']/100);

            ///////////////////////////////////////////////

            segData[i]['active_comp_pages'] = Math.round(segData[i]['comp_pages'] * segData[i]['active_ratio_oncomp']/100);
            bound(segData[i], 'active_ratio_oncomp', borne.active_ratio_oncomp.min[i], borne.active_ratio_oncomp.max[i]);

            segData[i]['active_notcomp_pages'] = Math.round(segData[i]['notcomp_pages'] * segData[i]['active_ratio_onnotcomp']/100);

            segData[i]['active_pages'] = segData[i]['active_comp_pages'] + segData[i]['active_notcomp_pages'];

            ///////////////////////////////////////////////

            segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * natevo[curweek].visits_byAP_comp[i]);
            segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * natevo[curweek].avg_inlinks[i] / dim.avg_inlinks[i]);

            segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * natevo[curweek].pct_duptitles[i] / dim.pct_duptitles[i]);
            segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * natevo[curweek].avg_words[i] / dim.avg_words[i]);
            segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * natevo[curweek].avg_unicity[i] / dim.avg_unicity[i]);
            segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * natevo[curweek].avg_AnchorsVar[i] / dim.avg_AnchorsVar[i]);

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

            segData[i]['crawled_comp_pages'] = Math.round(segData[i]['comp_pages'] * segData[i]['crawl_ratio_oncomp']/100);
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
            
            if ((segData[i]['active_comp_pages'] + segData[i]['active_notcomp_pages']) > 0) {
               segData[i]['visits_byAP'] = Math.round(10*(segData[i]['visits'])/(segData[i]['active_comp_pages'] + segData[i]['active_notcomp_pages']))/10; 
            }
            else {
                segData[i]['visits_byAP'] = 0;
            }
            
            

        }

        console.log(segData);
        ////////////////////////////////////////////////
        allSegData.push(segData);
        console.log("allSegData");
        console.log(allSegData);

        segData_pie = {
            visits: [
                {name: segData[0]["name"], value: segData[0]["visits"]},
                {name: segData[1]["name"], value: segData[1]["visits"]},
                {name: segData[2]["name"], value: segData[2]["visits"]},
                {name: segData[3]["name"], value: segData[3]["visits"]},
                {name: segData[4]["name"], value: segData[4]["visits"]}    
            ],
            pages: [
                {name: segData[0]["name"], value: segData[0]["pages"]},
                {name: segData[1]["name"], value: segData[1]["pages"]},
                {name: segData[2]["name"], value: segData[2]["pages"]},
                {name: segData[3]["name"], value: segData[3]["pages"]},
                {name: segData[4]["name"], value: segData[4]["pages"]}     
            ],
            active_pages: [
                {name: segData[0]["name"], value: segData[0]["active_pages"]},
                {name: segData[1]["name"], value: segData[1]["active_pages"]},
                {name: segData[2]["name"], value: segData[2]["active_pages"]},
                {name: segData[3]["name"], value: segData[3]["active_pages"]},
                {name: segData[4]["name"], value: segData[4]["active_pages"]}    
            ],
            visits_byAP: [
                {name: segData[0]["name"], value: segData[0]["visits_byAP"]},
                {name: segData[1]["name"], value: segData[1]["visits_byAP"]},
                {name: segData[2]["name"], value: segData[2]["visits_byAP"]},
                {name: segData[3]["name"], value: segData[3]["visits_byAP"]},
                {name: segData[4]["name"], value: segData[4]["visits_byAP"]}    
            ],
            comp_pages: [
                {name: segData[0]["name"], value: segData[0]["comp_pages"]},
                {name: segData[1]["name"], value: segData[1]["comp_pages"]},
                {name: segData[2]["name"], value: segData[2]["comp_pages"]},
                {name: segData[3]["name"], value: segData[3]["comp_pages"]},
                {name: segData[4]["name"], value: segData[4]["comp_pages"]}    
            ],
            notcomp_pages: [
                {name: segData[0]["name"], value: segData[0]["notcomp_pages"]},
                {name: segData[1]["name"], value: segData[1]["notcomp_pages"]},
                {name: segData[2]["name"], value: segData[2]["notcomp_pages"]},
                {name: segData[3]["name"], value: segData[3]["notcomp_pages"]},
                {name: segData[4]["name"], value: segData[4]["notcomp_pages"]}    
            ],
            crawled_comp_pages: [
                {name: segData[0]["name"], value: segData[0]["crawled_comp_pages"]},
                {name: segData[1]["name"], value: segData[1]["crawled_comp_pages"]},
                {name: segData[2]["name"], value: segData[2]["crawled_comp_pages"]},
                {name: segData[3]["name"], value: segData[3]["crawled_comp_pages"]},
                {name: segData[4]["name"], value: segData[4]["crawled_comp_pages"]}    
            ],
            crawled_notcomp_pages: [
                {name: segData[0]["name"], value: segData[0]["crawled_notcomp_pages"]},
                {name: segData[1]["name"], value: segData[1]["crawled_notcomp_pages"]},
                {name: segData[2]["name"], value: segData[2]["crawled_notcomp_pages"]},
                {name: segData[3]["name"], value: segData[3]["crawled_notcomp_pages"]},
                {name: segData[4]["name"], value: segData[4]["crawled_notcomp_pages"]}   
            ],
            active_comp_pages: [
                {name: segData[0]["name"], value: segData[0]["active_comp_pages"]},
                {name: segData[1]["name"], value: segData[1]["active_comp_pages"]},
                {name: segData[2]["name"], value: segData[2]["active_comp_pages"]},
                {name: segData[3]["name"], value: segData[3]["active_comp_pages"]},
                {name: segData[4]["name"], value: segData[4]["active_comp_pages"]}    
            ],
            active_notcomp_pages: [
                {name: segData[0]["name"], value: segData[0]["active_notcomp_pages"]},
                {name: segData[1]["name"], value: segData[1]["active_notcomp_pages"]},
                {name: segData[2]["name"], value: segData[2]["active_notcomp_pages"]},
                {name: segData[3]["name"], value: segData[3]["active_notcomp_pages"]},
                {name: segData[4]["name"], value: segData[4]["active_notcomp_pages"]}    
            ]

        };
    
        console.log("segData_pie");
        console.log(segData_pie);

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
    
        console.log("visitsData");
        console.log(visitsData);
        ////////////////////////////////////////////////
        visits_byAPData.push(Math.round(10*(segData[0].visits + segData[1].visits + segData[2].visits + segData[3].visits + segData[4].visits)/(segData[0].active_comp_pages + segData[1].active_comp_pages + segData[2].active_comp_pages + segData[3].active_comp_pages + segData[4].active_comp_pages + segData[0].active_notcomp_pages + segData[1].active_notcomp_pages + segData[2].active_notcomp_pages + segData[3].active_notcomp_pages + segData[4].active_notcomp_pages))/10);
        ////////////////////////////////////////////////
    
        console.log("visits_byAPData");
        console.log(visits_byAPData);

        visits_byAP_compData.push(Math.round(10*(segData[0].visits_byAP_comp * segData[0].comp_pages + segData[1].visits_byAP_comp * segData[1].comp_pages + segData[2].visits_byAP_comp * segData[2].comp_pages + segData[3].visits_byAP_comp * segData[3].comp_pages + segData[4].visits_byAP_comp * segData[4].comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10);

        /////////////////////////////////////////////////
        visits_byAP_notcompData.push(Math.round(10*(segData[0].visits_byAP_notcomp * segData[0].comp_pages + segData[1].visits_byAP_notcomp * segData[1].comp_pages + segData[2].visits_byAP_notcomp * segData[2].comp_pages + segData[3].visits_byAP_notcomp * segData[3].comp_pages + segData[4].visits_byAP_notcomp * segData[4].comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages))/10);

        /////////////////////////////////////////////////

        //Update Week and Week Labels
        week = curweek + 1;
        //Create evoData (Total evolutions) Tab
        evoData = [];
        segData_piepages = [];
        for (var i = 0; i < week + 1; i++) {
            evoData.push({
                name: "Week " + (i - pastweek),

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
            
            segData_piepages.push({
                comp_pages: [
                    {name: 'Indexable Pages', value: evoData[i]["comp_pages"]},
                    {name: 'Not Indexable Pages', value: evoData[i]["notcomp_pages"]}  
                ],
                notcomp_pages: [
                    {name: 'Indexable Pages', value: evoData[i]["comp_pages"]},
                    {name: 'Not Indexable Pages', value: evoData[i]["notcomp_pages"]}  
                ],
                crawled_comp_pages: [
                    {name: 'Crawled Indexable Pages', value: evoData[i]["crawled_comp_pages"]},
                    {name: 'Crawled Not Indexable Pages', value: evoData[i]["crawled_notcomp_pages"]}  
                ],
                crawled_notcomp_pages: [
                    {name: 'Crawled Indexable Pages', value: evoData[i]["crawled_comp_pages"]},
                    {name: 'Crawled Not Indexable Pages', value: evoData[i]["crawled_notcomp_pages"]}  
                ],
                active_comp_pages: [
                    {name: 'Active Indexable Pages', value: evoData[i]["active_comp_pages"]},
                    {name: 'Active Not Indexable Pages', value: evoData[i]["active_notcomp_pages"]}  
                ],
                active_notcomp_pages: [
                    {name: 'Active Indexable Pages', value: evoData[i]["active_comp_pages"]},
                    {name: 'Active Not Indexable Pages', value: evoData[i]["active_notcomp_pages"]}   
                ],
            });
            
        }

    }

var areaData = [
    {name: 'Visits', top: segData[0].visits, middle: segData[1].visits, long: segData[2].visits, paginations: segData[3].visits, useless: segData[4].visits},
    {name: 'Visits', top: segData[0].visits, middle: segData[1].visits, long: segData[2].visits, paginations: segData[3].visits, useless: segData[4].visits},
    {name: 'Visits', top: segData[0].visits, middle: segData[1].visits, long: segData[2].visits, paginations: segData[3].visits, useless: segData[4].visits},
    
]

console.log("week");
console.log(week);

for (var i = 0; i < pastweek + 1; i++) {
    nextWeek(week);
}


console.log("week");
console.log(week);
console.log("evoData");
console.log(evoData);

/*
var visitsSegData = [segData[0].visits, segData[1].visits, segData[2].visits, segData[3].visits, segData[4].visits]
var activePagesSegData = [segData[0].active_pages, segData[1].active_pages, segData[2].active_pages, segData[3].active_pages, segData[4].active_pages]
var pagesSegData = [segData[0].pages, segData[1].pages, segData[2].pages, segData[3].pages, segData[4].pages]
*/

var a = (
    <div>
        <h1>This is a Title</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc.</p>
    </div>
);

//var a = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec pulvinar fermentum elit, at facilisis nunc mollis sed. Integer quis dapibus libero, et vestibulum urna.";
var b = "Mauris ultricies nulla sit amet massa suscipit egestas. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nam commodo tellus ac gravida imperdiet. Integer scelerisque, tellus vitae posuere placerat, eros nulla egestas sem, eu imperdiet nisl ligula ac arcu. ";
var c = "Nunc tincidunt, est at feugiat tempus, turpis turpis porttitor sapien, in euismod augue velit sollicitudin erat. Vestibulum tincidunt magna et auctor lobortis. Fusce accumsan convallis nisi, non rutrum ante tincidunt in. Suspendisse quis congue lorem. Suspendisse vel elit vel velit pulvinar rutrum.";

const kpiTextData = {
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

//function numberWithCommas(x) {
//    var parts = x.toString().split(".");
//    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
//    return parts.join(".");
//}

function numberWithCommasPCT(x) {
    
    if (x > 0) {
       return ('+' + x.toLocaleString('en')); 
    }
    else {
        return x.toLocaleString('en');
    }
}

function numberWithCommas(x) {
    
    return x.toLocaleString('en');
}


function setColorDown(x) {
    if (x > 0) {
        return {color: "red"};
    }
    else {
        return {color: "green"};
    }
}

/*//////////////////////////////

REACT CLASS DEFINITONS

*////////////////////////////////

class Example extends Component {
     render() {
        return (
            <div>
                <h3>TEST!</h3>
            </div> 
        );
     }
}

class ChartEvo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kpiName: 'Visits',
            data: evoData,
            dataKey: 'visits'
        };
    }
    render() {
        return (
            <div>
                <div className="left-1">
                   <h3>{this.props.kpiName}, evolution</h3>
                   <div className="box-4">
                       <ResponsiveContainer height={130}>
                        <AreaChart data={this.props.data}
                            margin={{top: 20, right: 30, left: 0, bottom: 0}}>
                          <XAxis dataKey="name"/>
                          <YAxis/>
                          <CartesianGrid strokeDasharray="3 3"/>
                          <Tooltip/>
                          <Area type='monotoneX' dataKey={this.props.dataKey} stroke='#000' fill='#000' dot={{ stroke: 'black', strokeWidth: 1 }}/>
                        </AreaChart>
                    </ResponsiveContainer>
                   </div>
                </div> 
            </div> 
        );
     }
}



class KPIsRow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kpi: 'Visits',
            kpiValue: evoData[week].visits,
            kpiEvo: Math.round(1000*(evoData[week]['visits'] - evoData[week-1]['visits'])/ evoData[week-1]['visits'])/10,
            evoData: evoData,
            segData: segData,
            selected_kpi: 'visits'
        };
    this.setColorUp = this.setColorUp.bind(this);
//    this.displayEVO = this.displayEVO.bind(this);
    }

    setColorUp(x) {
        if (x == 0) {
            return {color: "black"};
        }
        else if (x > 0) {
            return {color: "#66bb6a"};
        }
        else  {
            return {color: "#ef5350"};
        }
    }
    
    render() {
        return (
            <div>
                <Row className="show-grid">
                    <Col md={12} lg={6}>
                        <div className="left-1">
                            <Row className="col-1">
                               <Col xs={12} className="kpi-box">
                                <div className="intro-kpi">
                                    <span className="intro-kpitext">{this.props.title1}</span>
                                </div>
                               <div className="bigkpi">
                                  <span className="bigkpitext" style={this.props.style}>{this.props.kpi}</span>
                                </div>
                               </Col>
                            </Row>


                        </div>
                    </Col>
                    <Col md={12} lg={6}>
                            <Col xs={6} className="kpi-box">
                                <div className="intro-kpi1">
                                    <span className="intro-kpitext">{this.props.title2}</span>
                                </div>
                                <div className="smallkpi">
                                    <span className="smallkpitext">{numberWithCommas(this.props.kpiValue)}{this.props.pct}</span>
                                </div>
                            </Col>
                            <Col xs={6} className="kpi-box">
                                <div className="intro-kpi2">
                                    <span className="intro-kpitext">{this.props.title3}</span>
                                </div>
                                <div className="smallevo">
                                  <span className="smallevotext" style={this.setColorUp(this.props.kpiEvo)}>{numberWithCommasPCT(this.props.kpiEvo)}%</span>
                                </div>
                            </Col>                               
                    </Col>
                </Row>
            </div> 
        );
     }
}

class ChartBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kpi: 'Visits',
            segData: segData,
            selected_kpi: 'visits'
        };
    }
    render() {
        return (
            <div>
                <div className="left-1">
                    <h3>{this.props.kpiName}, by templates</h3>
                    <div className="box-3">
                        <ResponsiveContainer height={230}>
                            <BarChart data={this.props.data}>
                              <XAxis dataKey="name" />
                              <YAxis />
                              <CartesianGrid strokeDasharray="3 3" />
                              <Tooltip />

                              <Bar dataKey={this.props.dataKey} fill={this.props.fill} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div> 
        );
     }
}

class ChartRadialBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kpi: 'Visits',
            segData: segData,
            selected_kpi: 'visits'
        };
    }
    render() {
        return (
            <div>
                <div className="left-1">
                <h3>{this.props.kpiName}, Distribution</h3>
                    <div className="box-3">
                    <ResponsiveContainer height={230}>
                        <RadialBarChart width={800} height={300} cx={230} cy={150} innerRadius={20} outerRadius={140} barSize={13} data={this.props.data}>          
                            <RadialBar minAngle={15} label background clockWise={true} dataKey={this.props.dataKey}/>               
                            <Legend iconSize={10} width={400} height={140} layout='horizontal' verticalAlign='bottom' align="center" wrapperStyle={style}/>
                            <Tooltip/>
                        </RadialBarChart>
                    </ResponsiveContainer>
                    </div>
                </div>  
            </div> 
        );
     }
}

const COLORS = ['#b39ddb', '#9fa8da', '#90caf9', '#fff59d', '#ffcc80'];
const COLORS_INDEX = ['#69f0ae', '#eeff41'];
const COLORS_CRAWLED = ['#40c4ff', '#ff5252'];
const COLORS_ACTIVE = ['#69f0ae', '#ff5252'];


const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const style2 = {
top: 0,
left: 350,
lineHeight: '24px'
};

class ChartPie extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        var data = this.props.data;
        return (
            <div>
                <div className="left-1">
                    <h3>{this.props.kpiName}, by templates</h3>
                    <div className="box-3">
                        
                            <PieChart width={275} height={275} >
                                <Pie 
                              
                                data={data} 
                                cx={150} 
                                cy={125}
                                
                                >
                                {
                                    data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                                }
                                </Pie>
                            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style2}/>
                            <Tooltip/>
                            </PieChart>
                       
                    </div>
                </div>
            </div> 
        );
     }
}

var pieColors = {
    comp_pages: COLORS_INDEX,
    notcomp_pages: COLORS_INDEX,
    crawled_comp_pages: COLORS_CRAWLED,
    crawled_notcomp_pages: COLORS_CRAWLED,
    active_comp_pages: COLORS_ACTIVE,
    active_notcomp_pages: COLORS_ACTIVE
}

class ChartPiePages extends React.Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        var data = this.props.data;
        var kpiName = this.props.kpiName;
        var dataKey = this.props.dataKey;
        var COLORS_INDEX = this.props.colors;

            return (
            <div>
                <div className="left-1">
                    <h3>{kpiName}, distribution</h3>
                    <div className="box-3">
                        
                            <PieChart width={275} height={275} >
                                <Pie 
                              
                                data={data} 
                                cx={150} 
                                cy={125}
                                
                                >
                                {
                                    data.map((entry, index) => <Cell fill={COLORS_INDEX[index % COLORS_INDEX.length]}/>)
                                }
                                </Pie>
                            <Legend iconSize={10} width={120} height={140} layout='vertical' verticalAlign='middle' wrapperStyle={style2}/>
                            <Tooltip/>
                            </PieChart>
                       
                    </div>
                </div>
            </div> 
        );

 
     }
}

//<ChartPie kpiName={this.state.selected_kpi} data={this.state.segData_pie} />

class CourseTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            kpi: 'Visits',
            kpiTextDef: "The number of organic visits generated in one month.",
            kpiTextToDo: "To increase your Visits, you need to analyze all the KPIs, and then spend credits on Marketing and Technical SEO Tasks."
        };
    }
    render() {
        return (
            <div>
                <Table striped bordered condensed hover responsive className="def-tab">
                    <tbody>
                        <tr>
                            <td className="def-tab-labels">Selected KPI</td>
                            <td className="def-tab-labels-kpi">{this.props.kpiName}</td>
                        </tr>
                        <tr>
                            <td className="def-tab-labels">Definition</td>
                            <td className="def-tab-text">{this.props.kpiTextDef}</td>
                        </tr>
                        <tr>
                            <td className="def-tab-labels">Why it's important?</td>
                            <td className="def-tab-text">{this.props.kpiTextImpo}</td>
                        </tr>
                        <tr>
                            <td className="def-tab-labels">What should I do?</td>
                            <td className="def-tab-text">{this.props.kpiTextToDo}</td>
                        </tr>
                    </tbody>
                </Table>  
            </div> 
        );
     }
}

class KPIsTableLine_UP extends React.Component {
    constructor(props) {
        super(props);

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
    evoDiff(evoData, curweek, kpi) {
 
        return Math.round(1000*(evoData[curweek][kpi] - evoData[curweek-1][kpi])/ evoData[curweek-1][kpi])/10;
        
    }
    
    render() {
        var kpiName = this.props.kpiName;
        var stateWeek = this.props.stateWeek;
        var kpiKey = this.props.kpiKey;
        
        return (
                <tr>
                    <td className="kpi-col">{kpiName}</td>
                    <td>{numberWithCommas(allSegData[stateWeek-1][0][kpiKey])}{this.props.pct}</td>
                    <td>{numberWithCommas(allSegData[stateWeek-1][1][kpiKey])}{this.props.pct}</td>
                    <td>{numberWithCommas(allSegData[stateWeek-1][2][kpiKey])}{this.props.pct}</td>
                    <td>{numberWithCommas(allSegData[stateWeek-1][3][kpiKey])}{this.props.pct}</td>
                    <td>{numberWithCommas(allSegData[stateWeek-1][4][kpiKey])}{this.props.pct}</td>
                    <td>{numberWithCommas(evoData[stateWeek][kpiKey])}{this.props.pct}</td>
                    <td style={this.setColorUp(this.evoDiff(evoData, stateWeek, kpiKey))}>{numberWithCommasPCT(this.evoDiff(evoData, stateWeek, kpiKey))}%</td>
                </tr>
        );
     }
}

//<KPIsTableLine_UP kpiName="Visits" stateWeek={this.state.week} kpiKey="visits"/>

class KPIsTableLine_DOWN extends React.Component {
    constructor(props) {
        super(props);

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
 
        return Math.round(1000*(evoData[curweek][kpi] - evoData[curweek-1][kpi])/ evoData[curweek-1][kpi])/10;
        
    }
    
    render() {
        var kpiName = this.props.kpiName;
        var stateWeek = this.props.stateWeek;
        var kpiKey = this.props.kpiKey;
        
        return (
                <tr>
                    <td>{kpiName}</td>
                    <td>{numberWithCommas(allSegData[stateWeek-1][0][kpiKey])}{this.props.pct}</td>
                    <td>{numberWithCommas(allSegData[stateWeek-1][1][kpiKey])}{this.props.pct}</td>
                    <td>{numberWithCommas(allSegData[stateWeek-1][2][kpiKey])}{this.props.pct}</td>
                    <td>{numberWithCommas(allSegData[stateWeek-1][3][kpiKey])}{this.props.pct}</td>
                    <td>{numberWithCommas(allSegData[stateWeek-1][4][kpiKey])}{this.props.pct}</td>
                    <td>{numberWithCommas(evoData[stateWeek][kpiKey])}{this.props.pct}</td>
                    <td style={this.setColorDown(this.evoDiff(evoData, stateWeek, kpiKey))}>{this.evoDiff(evoData, stateWeek, kpiKey)}%</td>
                </tr>
        );
     }
}

//<KPIsTableLine_UP kpiName="Visits" stateWeek={this.state.week} kpiKey="visits"/>


const techTasks = [
    {
        id: 1,
        kpi: "Depth",
        pages: "Top Pages",
        name: "Reduce the Depth of the Top Pages.",
        credits: 2,
        select: "Select",
        impact: 0    
    }, 
    {
        id: 2,
        kpi: "Depth",
        pages: "Categories",
        name: "Reduce the Depth of the Categories pages.",
        credits: 2,
        select: "Select",
        impact: 0
    },
    {
        id: 3,
        kpi: "Depth",
        pages: "Articles",
        name: "Reduce the Depth of the Articles pages.",
        credits: 2,
        select: "Select",
        impact: 0
    },
    {
        id: 4,
        kpi: "Depth",
        pages: "Paginations",
        name: "Reduce the Depth of the Top Pages.",
        credits: 2,
        select: "Select",
        impact: 0
    },
    {
        id: 5,
        kpi: "Depth",
        pages: "Useless Pages",
        name: "Reduce the Depth of the Useless Pages.",
        credits: 2,
        select: "Select",
        impact: 0
    },
];

const marketTasks = [
    {
        id: 1,
        kpi: "Depth",
        pages: "Top Pages",
        name: "Reduce the Depth of the Top Pages.",
        credits: 2,
        select: "Select",
        impact: 0    
    }, 
    {
        id: 2,
        kpi: "Depth",
        pages: "Categories",
        name: "Reduce the Depth of the Categories pages.",
        credits: 2,
        select: "Select",
        impact: 0
    },
    {
        id: 3,
        kpi: "Depth",
        pages: "Articles",
        name: "Reduce the Depth of the Articles pages.",
        credits: 2,
        select: "Select",
        impact: 0
    },
    {
        id: 4,
        kpi: "Depth",
        pages: "Paginations",
        name: "Reduce the Depth of the Top Pages.",
        credits: 2,
        select: "Select",
        impact: 0
    },
    {
        id: 5,
        kpi: "Depth",
        pages: "Useless Pages",
        name: "Reduce the Depth of the Useless Pages.",
        credits: 2,
        select: "Select",
        impact: 0
    },
];


var products = [{
      id: 1,
      name: "Product1",
      price: 120
  }, {
      id: 2,
      name: "Product2",
      price: 80
  }];

let order = 'desc';


var creditsTech = 6;
var creditsMarket = 4;

const style3 = {
fontSize: '4em'
};



/*//////////////////////////////

MAIN APPLICATION

*////////////////////////////////




export default class Boss_Start extends Component {

    constructor(props) {
        super(props);
        this.state = {
            week: week,
            kpi: 'Visits',
            kpiValue: evoData[week].visits,
            kpiEvo: Math.round(1000*(evoData[week]['visits'] - evoData[week-1]['visits'])/ evoData[week-1]['visits'])/10,
            evoData: evoData,
            segData: segData,
            segData_pie: segData_pie.visits,
            segData_piepages: segData_piepages[week].comp_pages,
            pieColors: pieColors.comp_pages,
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
            creditsTech: creditsTech,
            creditsMarket: creditsMarket,
            tasksTech: [],
            tasksMarket: [],
            showModal: false
        };
        this.goToNextWeek = this.goToNextWeek.bind(this);
        this.missionTab = this.missionTab.bind(this);
        this.analysisTab = this.analysisTab.bind(this);
        this.marketingTab = this.marketingTab.bind(this);
        this.techTab = this.techTab.bind(this);
        this.nextweekTab = this.nextweekTab.bind(this);
        this.supportTab = this.supportTab.bind(this);
        this.displayEVO = this.displayEVO.bind(this);
        this.displayEVO2 = this.displayEVO2.bind(this);
        this.displayEVO3 = this.displayEVO3.bind(this);
        this.onSelectAll = this.onSelectAll.bind(this);
        this.onRowSelectTech = this.onRowSelectTech.bind(this);
        this.onRowSelectMarket = this.onRowSelectMarket.bind(this);
        this.validateTasksTECH = this.validateTasksTECH.bind(this);
        this.validateTasksMARK = this.validateTasksMARK.bind(this);
        this.open = this.open.bind(this);
        this.close = this.close.bind(this);
      
    }
 


    missionTab(event) {
        this.setState({
            week: week,
            kpi: 'Visits',
            evoData: evoData,
            segData: segData,
            segData_pie: segData_pie.visits,
            selected_kpi: 'visits',
            key: 'first',
            kpiValue: evoData[this.state.week].visits,
            kpiEvo: this.evoDiff(evoData, this.state.week, "visits"),
        });
    }
    analysisTab (event) {
        this.setState({
            week: week,
            kpi: 'Visits',
            evoData: evoData,
            segData: segData,
            segData_pie: segData_pie.visits,
            selected_kpi: 'visits',
            key: 'second',
            kpiValue: evoData[this.state.week].visits,
            kpiEvo: this.evoDiff(evoData, this.state.week, "visits"),
        });
    }
    ratioTab (event) {
        this.setState({
            week: week,
            kpi: 'Crawl Ratio',
            evoData: evoData,
            segData: segData,
            segData_pie: segData_pie.visits,
            selected_kpi: 'crawl_ratio_oncomp',
            key: 'second-2',
            kpiValue: evoData[this.state.week].crawl_ratio_oncomp,
            kpiEvo: this.evoDiff(evoData, this.state.week, "crawl_ratio_oncomp"),
        });
    }
    pagesTab (event) {
        this.setState({
            week: week,
            kpi: 'Indexable Pages',
            evoData: evoData,
            segData: segData,
            segData_pie: segData_pie.visits,
            selected_kpi: 'comp_pages',
            key: 'second-3',
            kpiValue: evoData[this.state.week].comp_pages,
            kpiEvo: this.evoDiff(evoData, this.state.week, "comp_pages"),
        });
    }
    structureTab (event) {
        this.setState({
            week: week,
            kpi: 'Internal Links',
            evoData: evoData,
            segData: segData,
            segData_pie: segData_pie.visits,
            selected_kpi: 'avg_inlinks',
            key: 'second-4',
            kpiValue: evoData[this.state.week].avg_inlinks,
            kpiEvo: this.evoDiff(evoData, this.state.week, "avg_inlinks"),
        });
    }
    qualityTab (event) {
        this.setState({
            week: week,
            kpi: 'Duplicate Titles %',
            evoData: evoData,
            segData: segData,
            segData_pie: segData_pie.visits,
            selected_kpi: 'pct_duptitles',
            key: 'second-5',
            kpiValue: evoData[this.state.week].pct_duptitles,
            kpiEvo: this.evoDiff(evoData, this.state.week, "pct_duptitles"),
        });
    }
    marketingTab(event) {
        this.setState({
            week: week,
            kpi: 'Visits',
            evoData: evoData,
            segData: segData,
            segData_pie: segData_pie.visits,
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
            segData_pie: segData_pie.visits,
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
            segData_pie: segData_pie.visits,
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
            segData_pie: segData_pie.visits,
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
 
        return Math.round(1000*(evoData[curweek][kpi] - evoData[curweek-1][kpi])/ evoData[curweek-1][kpi])/10;
        
    }

    goToNextWeek(event) {

        nextWeek(this.state.week);

        this.setState({
            week: week,
            evoData: evoData,
            segData: segData,
            kpiValue: evoData[this.state.week].visits,
            segData_pie: segData_pie,
            kpiEvo: this.evoDiff(evoData, this.state.week + 1, "visits"),
            kpi: 'Visits',
            selected_kpi: 'visits',
            key: 'first'
        });
        console.log("setColorUp(this.state.week)");
        console.log(this.state.week);
        console.log(this.setColorUp(this.state.week));
    }

    goToNextWeekTest(event) {

        nextWeek(this.state.week);

        this.setState({
            week: week,
            evoData: evoData,
            segData: segData,
            kpiValue: evoData[this.state.week].visits,
            //segData_pie: segData_pie.visits,
            segData_piepages: segData_piepages[week].comp_pages,
            kpiEvo: this.evoDiff(evoData, this.state.week + 1, "visits"),
            kpi: 'Visits',
            selected_kpi: 'visits',
            key: 'first'
        });
        console.log("setColorUp(this.state.week)");
        console.log(this.state.week);
        console.log(this.setColorUp(this.state.week));
    }

    displayEVO(event, name, selectedkpi) {
            
        var kpiValue = this.state.evoData[week][selectedkpi];
        var kpiEvo = this.evoDiff(evoData, this.state.week, selectedkpi);
        var kpiTextDef = kpiTextData[selectedkpi].def;
        var kpiTextToDo = kpiTextData[selectedkpi].todo;

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
            kpiTextToDo: kpiTextToDo
        });
    };
    
    
    displayEVO2(event, name, selectedkpi) {
            
        var kpiValue = this.state.evoData[week][selectedkpi];
        var kpiEvo = this.evoDiff(evoData, this.state.week, selectedkpi);
        var kpiTextDef = kpiTextData[selectedkpi].def;
        var kpiTextToDo = kpiTextData[selectedkpi].todo;
        var kpiPieValue = segData_pie[selectedkpi];
        var kpiPiePagesValue = segData_piepages[week][selectedkpi];
        var kpiPieColors = pieColors[selectedkpi];

        this.setState({
            week: week,
            kpi: name,
            kpiValue: kpiValue,
            kpiEvo: kpiEvo,
            evoData: evoData,
            segData: segData,
            segData_pie: kpiPieValue,
            segData_piepages: kpiPiePagesValue,
            selected_kpi: selectedkpi,
            seoCourse: name + ':',
            seoConclusion: '',
            kpiTextDefTag: '',
            kpiTextToDoTag: '',
            kpiTextDef: kpiTextDef,
            kpiTextToDo: kpiTextToDo,
            pieColors: kpiPieColors
        });
    };
    
    displayEVO3(event, name, selectedkpi) {
            
        var kpiValue = this.state.evoData[week][selectedkpi];
        var kpiEvo = this.evoDiff(evoData, this.state.week, selectedkpi);
        var kpiTextDef = kpiTextData[selectedkpi].def;
        var kpiTextToDo = kpiTextData[selectedkpi].todo;

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
            segData_pie: segData_pie[selectedkpi],
        });
    };
    
    
    onRowSelectTech(row, isSelected, e) {

        var credits = this.state.creditsTech;
        var tasks = this.state.tasksTech;
        
        if (isSelected) {
            
            if (credits - row.credits >= 0) {
                
                credits = credits - row.credits;
                tasks.push(row);
                
                this.setState({
                    creditsTech: credits,
                    tasksTech: tasks
                });
            }
            else {
                return false;
            }
            
        }
        else {

            if (credits + row.credits <= creditsTech) {
                
                credits = credits + row.credits;
                var index = tasks.indexOf(row);
                if (index >= 0) {
                    tasks.splice(index, 1);
                }
                
                this.setState({
                    creditsTech: credits,
                    tasksTech: tasks
                });
            }
            else {
                return false;
            }           
        }

        
    };
    onRowSelectMarket(row, isSelected, e) {

        var credits = this.state.creditsMarket;
        var tasks = this.state.tasksMarket;
        
        if (isSelected) {
            
            if (credits - row.credits >= 0) {
                
                credits = credits - row.credits;
                tasks.push(row);
                
                this.setState({
                    creditsMarket: credits,
                    tasksMarket: tasks
                });
            }
            else {
                return false;
            }
            
        }
        else {

            if (credits + row.credits <= creditsMarket) {
                
                credits = credits + row.credits;
                var index = tasks.indexOf(row);
                if (index >= 0) {
                    tasks.splice(index, 1);
                }
                
                this.setState({
                    creditsMarket: credits,
                    tasksMarket: tasks
                });
            }
            else {
                return false;
            }           
        }

        
    };

    onSelectAll(isSelected, rows) {
        return false;
    };
    
    validateTasksTECH (event) {
        alert('Your Technical Tasks are validated!');
    };
    
    validateTasksMARK (event) {
        alert('Your Marketing Tasks are validated!');
    };
    
    close() {
        this.setState({ showModal: false });
    };

    open() {
        this.setState({ showModal: true });
    };
    
    render() {
        
    const selectRowProp = {
        mode: 'checkbox',
        bgColor: 'pink',
        clickToSelect: true,
        onSelect: this.onRowSelectTech,
        onSelectAll: this.onSelectAll
    };
    
    const selectRowProp2 = {
        mode: 'checkbox',
        bgColor: 'pink',
        clickToSelect: true,
        onSelect: this.onRowSelectMarket,
        onSelectAll: this.onSelectAll
    };
    
    return (
 <div>

           
    <Row className="top-div">
       
        <Col xs={2} className="logo">
            <center>
                <h1>SEO GUY</h1></center>
                
        </Col>
        <Col xs={10} className="top-bar">
            <span>Week #{this.state.week - pastweek}</span>
        </Col>
    </Row>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" activeKey={this.state.key}>
        <Row className="clearfix main-div">
            <Col xs={2} className="sidebar">
                <Nav bsStyle="pills" stacked>
                    <NavItem eventKey="first">
                        <Button bsStyle="default" bsSize="large" onClick={event=> this.missionTab(event)} className="barbutton">Your Mission</Button>
                    </NavItem>
                    <NavItem eventKey="second">
                        <Button bsStyle="default" bsSize="large" onClick={event=> this.analysisTab(event)} className="barbutton">Main SEO KPIs</Button>
                    </NavItem>
                    <NavItem eventKey="second-2">
                        <Button bsStyle="default" bsSize="large" onClick={event=> this.ratioTab(event)} className="barbutton">Main SEO Ratios</Button>
                    </NavItem>
                    <NavItem eventKey="second-3">
                        <Button bsStyle="default" bsSize="large" onClick={event=> this.pagesTab(event)} className="barbutton">Pages KPIs</Button>
                    </NavItem>
                    <NavItem eventKey="second-4">
                        <Button bsStyle="default" bsSize="large" onClick={event=> this.structureTab(event)} className="barbutton">Structural KPIs</Button>
                    </NavItem>
                    <NavItem eventKey="second-5">
                        <Button bsStyle="default" bsSize="large" onClick={event=> this.qualityTab(event)} className="barbutton">Quality KPIs</Button>
                    </NavItem>
                    <NavItem eventKey="fourth">
                        <Button bsStyle="default" bsSize="large" onClick={event=> this.techTab(event)} className="barbutton">Technical Tasks</Button>
                    </NavItem>
                    <NavItem eventKey="third">
                        <Button bsStyle="default" bsSize="large" onClick={event=> this.marketingTab(event)} className="barbutton">Marketing Tasks</Button>
                    </NavItem>
                    <NavItem eventKey="fith">
                        <Button bsStyle="default" bsSize="large" onClick={event=> this.nextweekTab(event)} className="barbutton">Go To Next Week</Button>
                    </NavItem>
                    <NavItem eventKey="sixth">
                        <Button bsStyle="default" bsSize="large" onClick={event=> this.supportTab(event)} className="barbutton">Support Us!</Button>
                    </NavItem>
                </Nav>
            </Col>
            <Col xs={10} className="maincontent">
                <Tab.Content animation>
                    <Tab.Pane eventKey="first">

                        <div className="title-div">
                            <Image src={bossguy} responsive className="smallimage" />
                            <h1 className="title-h1">Mission Status</h1>
                            <p className="title-p">Hi SEO Guy, I'm your new boss and the CEO of LicornesMagazine.com.
                            <br/>I need you to generate 100K visits per month ASAP! Don't disappoint me!</p>
                        </div>

                        <div className="spacediv"></div>
                        
                        <KPIsRow kpi="100K visits per week" kpiValue={this.state.kpiValue} kpiEvo={this.state.kpiEvo}
                            style={{fontSize: '3em'}}
                            title1="Objective"
                            title2="Current Visits"
                            title3="Visits Evolution"/>

                        <Row className="show-grid">
                            <Col xs={12}>

                                <ChartEvo kpiName={this.state.kpi} data={this.state.evoData} dataKey={this.state.selected_kpi} />
                            </Col>
                        </Row>

                        <Row className="show-grid">

                            <Col xs={12}>
                                <Table striped bordered condensed hover responsive className="def-tab">
                                    <tbody>
                                        <tr>
                                            <td className="def-tab-labels">Objective</td>
                                            <td className="def-tab-text">Generate 100K visits per month before week #52.</td>
                                        </tr>
                                        <tr>
                                            <td className="def-tab-labels">Status</td>
                                            <td className="def-tab-text">80K visits generated during the last month (the last 4 weeks).</td>
                                        </tr>
                                        <tr>
                                            <td className="def-tab-labels">Credits</td>
                                            <td className="def-tab-text">5 credits left to spend on SEO Marketing Tasks and SEO Technical Tasks on week #{this.state.week - pastweek}</td>
                                        </tr>
                                        <tr>
                                            <td className="def-tab-labels">Technical Tasks</td>
                                            <td className="def-tab-text">On week #{this.state.week - pastweek}:
                                                <ul>
                                                    <li>Reduce the Depth of the Article pages.</li>
                                                    <li>Optimize the Load Times of the Category pages.</li>
                                                </ul>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="def-tab-labels">Marketing Tasks</td>
                                            <td className="def-tab-text">No Marketing Tasks on week #{this.state.week - pastweek}:
                                            </td>
                                        </tr>
                                    </tbody>
                                </Table>
                            </Col>
                        </Row>

                        <div className="spacediv"></div>

                    </Tab.Pane>


                    <Tab.Pane eventKey="second">

                        <div className="title-div">

                            <Image src={teacherguy} responsive className="smallimage" />
                            <h1 className="title-h1">SEO KPIs Analysis</h1>
                            <p className="title-p">Hi SEO Guy, I'm the SEO Consultant. Here are your Main SEO KPIs.
                            <br/>Use the buttons below to select a KPI and analyze it</p>
                        </div>
                        <Row className="show-grid">
                            <div className="kpis-selection">
                                
                                
                                <ButtonToolbar className="kpis-tab">
                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-2" 
                                    onClick={event=> this.displayEVO3(event,'Visits','visits')}>Visits</Button>

                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-2" 
                                    onClick={event=> this.displayEVO3(event,'Pages','pages')}>Pages</Button>

                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-2" 
                                    onClick={event=> this.displayEVO3(event,'Active Pages','active_pages')}>Active Pages</Button>

                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-2" 
                                    onClick={event=> this.displayEVO3(event,'Visits by AP','visits_byAP')}>Visits by AP</Button>
                                </ButtonToolbar>
                            </div>
                        </Row>

                        <KPIsRow kpi={this.state.kpi} kpiValue={this.state.kpiValue} kpiEvo={this.state.kpiEvo} 
                            title1="Selected KPI"
                            title2="KPI value"
                            title3="KPI evolution"/>
                            
                        <Row className="show-grid">
                            <Col xs={12}>
                                <ChartEvo kpiName={this.state.kpi} data={this.state.evoData} dataKey={this.state.selected_kpi} />
                            </Col>
                        </Row>

                        <Row className="show-grid">
                            <Col md={12} lg={6}>
                                <ChartPie kpiName={this.state.kpi} data={this.state.segData_pie} color={COLORS}/>
                            </Col>
                            <Col md={12} lg={6}>
                                <ChartRadialBar kpiName={this.state.kpi} data={this.state.segData} dataKey={this.state.selected_kpi} />
                            </Col>
                        </Row>
                        <Table striped bordered condensed hover responsive>
                            <thead>
                                <tr>
                                    <th>WEEK #{this.state.week - pastweek} - KPIs</th>
                                    <th>{this.state.segData[0].name}</th>
                                    <th>{this.state.segData[1].name}</th>
                                    <th>{this.state.segData[2].name}</th>
                                    <th>{this.state.segData[3].name}</th>
                                    <th>{this.state.segData[4].name}</th>
                                    <th>All Pages</th>
                                    <th>Evolution</th>
                                </tr>
                            </thead>                            
                            <tbody>
                                <KPIsTableLine_UP kpiName="Visits" stateWeek={this.state.week} kpiKey="visits"/>
                                <KPIsTableLine_UP kpiName="Total Pages" stateWeek={this.state.week} kpiKey="pages"/>
                                <KPIsTableLine_UP kpiName="Active Pages" stateWeek={this.state.week} kpiKey="active_pages"/>
                                <KPIsTableLine_UP kpiName="Visits by Active Page" stateWeek={this.state.week} kpiKey="visits_byAP"/>              
                            </tbody>
                        </Table>
                        <div className="spacediv"></div>
                        <Row className="show-grid">
                            <Col xs={12}>
                                <CourseTable kpiName={this.state.kpi} kpiTextDef={this.state.kpiTextDef} kpiTextImpo={this.state.kpiTextDef} kpiTextToDo={this.state.kpiTextToDo} />
                            </Col>
                        </Row>

                        <div className="spacediv"></div>
                        <ButtonToolbar>
                            <Button bsStyle="primary" bsSize="large" className="nextbutton" onClick={event=> this.goToNextWeekTest(event)} >Go To The Next Week!</Button>
                        </ButtonToolbar>
 
                        <div className="spacediv"></div>

                    </Tab.Pane>
                    <Tab.Pane eventKey="second-2">
                        <div className="title-div">
                            <Image src={teacherguy} responsive className="smallimage" />
                            <h1 className="title-h1">Main SEO Ratios</h1>
                            <p className="title-p">Let's learn about your website Main SEO Ratios.
                            <br/>Use the buttons below to select a KPI and analyze it.</p>
                        </div>

                        <Row className="show-grid">
                            <div className="kpis-selection">
                                <ButtonToolbar className="kpis-tab">
                                    
                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-23" 
                                    onClick={event=> this.displayEVO(event,'Crawl Ratio', 'crawl_ratio_oncomp')}>Crawl Ratio</Button>
                                    
                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-23" 
                                    onClick={event=> this.displayEVO(event,'Active Ratio', 'active_ratio_oncomp')}>Active Ratio</Button>
                                    
                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-23" 
                                    onClick={event=> this.displayEVO(event,'Indexability Ratio', 'indexable_ratio')}>Indexability Ratio</Button>
                                </ButtonToolbar>
                            </div>
                        </Row>
                        
                        <KPIsRow kpi={this.state.kpi} kpiValue={this.state.kpiValue} kpiEvo={this.state.kpiEvo} 
                            title1="Selected KPI"
                            title2="KPI value"
                            title3="KPI evolution"
                            pct="%"/>
                            
                        <Row className="show-grid">
                            <Col xs={12}>
                                <ChartEvo kpiName={this.state.kpi} data={this.state.evoData} dataKey={this.state.selected_kpi} />
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col md={12} lg={6}>
                                <ChartBar kpiName={this.state.kpi} data={this.state.segData} dataKey={this.state.selected_kpi} fill="#000" />
                            </Col>
                            <Col md={12} lg={6}>
                                <ChartRadialBar kpiName={this.state.kpi} data={this.state.segData} dataKey={this.state.selected_kpi} />
                            </Col>
                        </Row>
                        <Table striped bordered condensed hover responsive>
                            <thead>
                                <tr>
                                    <th>WEEK #{this.state.week - pastweek} - KPIs</th>
                                    <th>{this.state.segData[0].name}</th>
                                    <th>{this.state.segData[1].name}</th>
                                    <th>{this.state.segData[2].name}</th>
                                    <th>{this.state.segData[3].name}</th>
                                    <th>{this.state.segData[4].name}</th>
                                    <th>All Pages</th>
                                    <th>Evolution</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <KPIsTableLine_UP kpiName="Indexability Ratio" stateWeek={this.state.week} kpiKey="indexable_ratio" pct="%"/>
                                <KPIsTableLine_UP kpiName="Crawl Ratio" stateWeek={this.state.week} kpiKey="crawl_ratio_oncomp" pct="%"/>
                                <KPIsTableLine_UP kpiName="Active Ratio" stateWeek={this.state.week} kpiKey="active_ratio_oncomp" pct="%"/>             
                            </tbody>
                        </Table>
                        <div className="spacediv"></div>
                        <Row className="show-grid">
                            <Col xs={12}>
                                <CourseTable kpiName={this.state.kpi} kpiTextDef={this.state.kpiTextDef} kpiTextImpo={this.state.kpiTextDef} kpiTextToDo={this.state.kpiTextToDo} />
                            </Col>
                        </Row>
                    <div className="spacediv"></div>
                    </Tab.Pane>


                    <Tab.Pane eventKey="second-3">
                        <div className="title-div">
                            <Image src={teacherguy} responsive className="smallimage" />
                            <h1 className="title-h1">Pages Indexability KPIs</h1>
                            <p className="title-p">Let's learn about your Pages Indexability KPIs.
                            <br/>Use the buttons below to select a KPI and analyze it.</p>
                        </div>

                        <Row className="show-grid">
                            <div className="kpis-selection">
                                <ButtonToolbar className="kpis-tab">
                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-23" 
                                    onClick={event=> this.displayEVO2(event,'Indexable Pages', 'comp_pages')}>Indexable</Button>

                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-23" 
                                    onClick={event=> this.displayEVO2(event,'Crawled Index. Pages', 'crawled_comp_pages')}>Crawled Indexable</Button>

                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-23" 
                                    onClick={event=> this.displayEVO2(event,'Active Index. Pages', 'active_comp_pages')}>Active Indexable</Button>
                                </ButtonToolbar>

                                <ButtonToolbar className="kpis-tab">
                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-23" 
                                    onClick={event=> this.displayEVO2(event,'Not Indexable Pages', 'notcomp_pages')}>Not Indexable</Button>

                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-23" 
                                    onClick={event=> this.displayEVO2(event,'Crawled Not Index. Pages', 'crawled_notcomp_pages')}>Crawled Not Indexable</Button>

                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-23" 
                                    onClick={event=> this.displayEVO2(event,'Active Not Index. Pages', 'active_notcomp_pages')}>Active Not Indexable</Button>
                                </ButtonToolbar>
                            </div>
                        </Row>

                        <KPIsRow kpi={this.state.kpi} kpiValue={this.state.kpiValue} kpiEvo={this.state.kpiEvo}
                            style={{fontSize: '3em'}}
                            title1="Selected KPI"
                            title2="KPI value"
                            title3="KPI evolution"/>
                            
                        <Row className="show-grid">
                            <Col xs={12}>
                                <ChartEvo kpiName={this.state.kpi} data={this.state.evoData} dataKey={this.state.selected_kpi} />
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col md={12} lg={6}>
                                <ChartPie kpiName={this.state.kpi} data={this.state.segData_pie} />
                            </Col>
                            <Col md={12} lg={6}>
                                <ChartPiePages kpiName={this.state.kpi} data={this.state.segData_piepages} dataKey={this.state.selected_kpi} colors={this.state.pieColors}/>
                            </Col>
                        </Row>
                        <Table striped bordered condensed hover responsive>
                            <thead>
                                <tr>
                                    <th>WEEK #{this.state.week - pastweek} - KPIs</th>
                                    <th>{this.state.segData[0].name}</th>
                                    <th>{this.state.segData[1].name}</th>
                                    <th>{this.state.segData[2].name}</th>
                                    <th>{this.state.segData[3].name}</th>
                                    <th>{this.state.segData[4].name}</th>
                                    <th>All Pages</th>
                                    <th>Evolution</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <KPIsTableLine_UP kpiName="Indexable Pages" stateWeek={this.state.week} kpiKey="comp_pages"/>
                                <KPIsTableLine_DOWN kpiName="Not Indexable Pages" stateWeek={this.state.week} kpiKey="notcomp_pages"/>
                                <KPIsTableLine_UP kpiName="Crawled Indexable Pages" stateWeek={this.state.week} kpiKey="crawled_comp_pages"/>
                                <KPIsTableLine_DOWN kpiName="Crawled Not Indexable Pages" stateWeek={this.state.week} kpiKey="crawled_notcomp_pages"/>
                                <KPIsTableLine_UP kpiName="Active Indexable Pages" stateWeek={this.state.week} kpiKey="active_comp_pages"/>
                                <KPIsTableLine_UP kpiName="Active Not Indexable Pages" stateWeek={this.state.week} kpiKey="active_notcomp_pages"/>            
                            </tbody>
                        </Table>
                        <div className="spacediv"></div>
                        <Row className="show-grid">
                            <Col xs={12}>
                                <CourseTable kpiName={this.state.kpi} kpiTextDef={this.state.kpiTextDef} kpiTextImpo={this.state.kpiTextDef} kpiTextToDo={this.state.kpiTextToDo} />
                            </Col>
                        </Row>
                        <div className="spacediv"></div>
                        <ButtonToolbar>
                            <Button bsStyle="primary" bsSize="large" className="nextbutton" onClick={event=> this.goToNextWeekTest(event)} >Go To The Next Week!</Button>
                        </ButtonToolbar>
                        <div className="spacediv"></div>
                        
                    </Tab.Pane>

                    <Tab.Pane eventKey="second-4">
                        <div className="title-div">
                            <Image src={teacherguy} responsive className="smallimage" />
                            <h1 className="title-h1">Structural KPIs Analysis</h1>
                            <p className="title-p">Let's learn about your website Structural KPIs.
                            <br/>Use the buttons below to select a KPI and analyze it.</p>
                            
                        </div>
                        <Row className="show-grid">
                            <div className="kpis-selection">
                                <ButtonToolbar className="kpis-tab">
                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-2" 
                                    onClick={event=> this.displayEVO(event,'Avg. Internal Links', 'avg_inlinks')}>Internal Links</Button>
                                    
                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-2" 
                                    onClick={event=> this.displayEVO(event,'Avg. Depth', 'avg_depth')}>Depth</Button>
                                    
                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-2" 
                                    onClick={event=> this.displayEVO(event,'Avg. Load Times', 'avg_loadtimes')}>Load Times</Button>
                                    
                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-2" 
                                    onClick={event=> this.displayEVO(event,'Broken Links', 'avg_badhttp')}>Broken Links</Button>
                                </ButtonToolbar>
                            </div>
                        </Row>

                        <KPIsRow kpi={this.state.kpi} kpiValue={this.state.kpiValue} kpiEvo={this.state.kpiEvo} 
                            title1="Selected KPI"
                            title2="KPI value"
                            title3="KPI evolution"/>
                            
                        <Row className="show-grid">
                            <Col xs={12}>
                                <ChartEvo kpiName={this.state.kpi} data={this.state.evoData} dataKey={this.state.selected_kpi} />
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col md={12} lg={6}>
                                <ChartBar kpiName={this.state.kpi} data={this.state.segData} dataKey={this.state.selected_kpi} fill="#000" />
                            </Col>
                            <Col md={12} lg={6}>
                                <ChartRadialBar kpiName={this.state.kpi} data={this.state.segData} dataKey={this.state.selected_kpi} />
                            </Col>
                        </Row>
                        <Table striped bordered condensed hover responsive>
                            <thead>
                                <tr>
                                    <th>WEEK #{this.state.week - pastweek} - KPIs</th>
                                    <th>{this.state.segData[0].name}</th>
                                    <th>{this.state.segData[1].name}</th>
                                    <th>{this.state.segData[2].name}</th>
                                    <th>{this.state.segData[3].name}</th>
                                    <th>{this.state.segData[4].name}</th>
                                    <th>All Pages</th>
                                    <th>Evolution</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <KPIsTableLine_UP kpiName="Avg. Internal Links" stateWeek={this.state.week} kpiKey="avg_inlinks"/>
                                <KPIsTableLine_DOWN kpiName="Avg. Depth" stateWeek={this.state.week} kpiKey="avg_depth" />
                                <KPIsTableLine_DOWN kpiName="Avg. Load Times" stateWeek={this.state.week} kpiKey="avg_loadtimes" />
                                <KPIsTableLine_DOWN kpiName="Broken Links" stateWeek={this.state.week} kpiKey="avg_badhttp" />            
                            </tbody>
                        </Table>
                        <div className="spacediv"></div>
                        <Row className="show-grid">
                            <Col xs={12}>
                                <CourseTable kpiName={this.state.kpi} kpiTextDef={this.state.kpiTextDef} kpiTextImpo={this.state.kpiTextDef} kpiTextToDo={this.state.kpiTextToDo} />
                            </Col>
                        </Row>

                        <div className="spacediv"></div>

                    </Tab.Pane>


                    <Tab.Pane eventKey="second-5">
                        <div className="title-div">
                            <Image src={teacherguy} responsive className="smallimage" />
                            <h1 className="title-h1">Quality KPIs Analysis</h1>
                            <p className="title-p">Let's learn about your website Quality KPIs.
                            <br/>Use the buttons below to select a KPI and analyze it.</p>
                        </div>
                        <Row className="show-grid">
                            <div className="kpis-selection">
                                <ButtonToolbar className="kpis-tab">
                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-2" 
                                    onClick={event=> this.displayEVO(event,'Duplicate Titles %', 'pct_duptitles')}>Duplicate Titles</Button>
                                    
                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-2" 
                                    onClick={event=> this.displayEVO(event,'Avg. Words', 'avg_words')}>Words</Button>
                                    
                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-2" 
                                    onClick={event=> this.displayEVO(event,'Avg. Unicity %', 'avg_unicity')}>Unicity</Button>
                                    
                                    <Button bsStyle="default" bsSize="large" 
                                    className="kpibut-2" 
                                    onClick={event=> this.displayEVO(event,'Anchors Variations', 'avg_AnchorsVar')}>Anchors Variations</Button>
                                </ButtonToolbar>
                            </div>
                        </Row>

                        <KPIsRow kpi={this.state.kpi} kpiValue={this.state.kpiValue} kpiEvo={this.state.kpiEvo} 
                            title1="Selected KPI"
                            title2="KPI value"
                            title3="KPI evolution"/>
                            
                        <Row className="show-grid">
                            <Col xs={12}>
                                <ChartEvo kpiName={this.state.kpi} data={this.state.evoData} dataKey={this.state.selected_kpi} />
                            </Col>
                        </Row>
                        <Row className="show-grid">
                            <Col md={12} lg={6}>
                                <ChartBar kpiName={this.state.kpi} data={this.state.segData} dataKey={this.state.selected_kpi} fill="#000" />
                            </Col>
                            <Col md={12} lg={6}>
                                <ChartRadialBar kpiName={this.state.kpi} data={this.state.segData} dataKey={this.state.selected_kpi} />
                            </Col>
                        </Row>
                        <Table striped bordered condensed hover responsive>
                            <thead>
                                <tr>
                                    <th>WEEK #{this.state.week - pastweek} - KPIs</th>
                                    <th>{this.state.segData[0].name}</th>
                                    <th>{this.state.segData[1].name}</th>
                                    <th>{this.state.segData[2].name}</th>
                                    <th>{this.state.segData[3].name}</th>
                                    <th>{this.state.segData[4].name}</th>
                                    <th>All Pages</th>
                                    <th>Evolution</th>
                                </tr>
                            </thead>
                            
                            <tbody>
                                <KPIsTableLine_DOWN kpiName="Duplicate Titles %" stateWeek={this.state.week} kpiKey="pct_duptitles" pct="%"/>
                                <KPIsTableLine_UP kpiName="Avg. Words" stateWeek={this.state.week} kpiKey="avg_words" />
                                <KPIsTableLine_DOWN kpiName="Avg. Unicity %" stateWeek={this.state.week} kpiKey="avg_unicity" />
                                <KPIsTableLine_UP kpiName="Avg. Anchors Variations" stateWeek={this.state.week} kpiKey="avg_AnchorsVar" />            
                            </tbody>
                        </Table>
                        <div className="spacediv"></div>
                        <Row className="show-grid">
                            <Col xs={12}>
                                <CourseTable kpiName={this.state.kpi} kpiTextDef={this.state.kpiTextDef} kpiTextImpo={this.state.kpiTextDef} kpiTextToDo={this.state.kpiTextToDo} />
                            </Col>
                        </Row>
                        
                        <div className="spacediv"></div>
                        
                    </Tab.Pane>

                    <Tab.Pane eventKey="fourth">
                        <div className="title-div">
                            <Image src={techguy} responsive className="smallimage" />
                            <h1 className="title-h1">SEO Technical Tasks</h1>
                            <p className="title-p">Hi SEO Guy, I'm the Tech Guy. What should I work on?
                            <br/>Use the tasks table below to select your Technical Tasks.</p>
                        </div>
                        
                        <div className="spacediv"></div>
                        
                        <Row className="show-grid">
                            <Col md={12} lg={12}>
                               
                                <Row className="show-grid">
                                    <Col md={12} lg={6}>
                                        <div className="left-1">
                                            <Row className="col-1">
                                               <Col xs={12} className="kpi-box">
                                                <div className="intro-kpi">
                                                    <span className="intro-kpitext">Credits left to spend on Technical Tasks</span>
                                                </div>
                                               <div className="bigkpi">
                                                  <span className="bigkpitext" style={style3}>{this.state.creditsTech} credits</span>
                                                </div>
                                               </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col md={12} lg={6}>
                                        <ButtonToolbar className="kpis-tab">
                                            <Button bsStyle="default" bsSize="large" 
                                            className="kpibut-24" 
                                            onClick={event=> this.validateTasksTECH(event)}>Validate Tasks Selection</Button>
                                        </ButtonToolbar>
                                    </Col>
                                </Row>
                                <BootstrapTable data={techTasks} selectRow={ selectRowProp } striped hover>
                                  <TableHeaderColumn isKey dataField='id' width="7%" dataSort={ true }>#</TableHeaderColumn>
                                  <TableHeaderColumn dataField='kpi' width="17%" dataSort={ true }>KPIs</TableHeaderColumn>
                                  <TableHeaderColumn dataField='pages' width="17%" dataSort={ true }>Pages</TableHeaderColumn>
                                  <TableHeaderColumn dataField='name' width="52%" dataSort={ true }>Tasks</TableHeaderColumn>
                                  <TableHeaderColumn dataField='credits' width="7%">Credits</TableHeaderColumn>                  
                                </BootstrapTable>                             
                                
                                <div className="spacediv"></div>
                                <div className="spacediv"></div> 
                           
                            </Col>
                        </Row>
                        
                        
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="third">
                       
                        <div className="title-div">
                            <Image src={marketinggirl} responsive className="smallimage" />
                            <h1 className="title-h1">SEO Marketing Tasks</h1>
                            <p className="title-p">Hi SEO Guy, I'm the Marketing Girl. What should I work on?
                            <br/>Use the tasks table below to select your Marketing Tasks.</p>
                        </div>
                        
                        <div className="spacediv"></div>
                        
                        <Row className="show-grid">
                            <Col md={12} lg={12}>
                               
                                <Row className="show-grid">
                                    <Col md={12} lg={6}>
                                        <div className="left-1">
                                            <Row className="col-1">
                                               <Col xs={12} className="kpi-box">
                                                <div className="intro-kpi">
                                                    <span className="intro-kpitext">Credits left to spend on Marketing Tasks</span>
                                                </div>
                                               <div className="bigkpi">
                                                  <span className="bigkpitext" style={style3}>{this.state.creditsMarket} credits</span>
                                                </div>
                                               </Col>
                                            </Row>
                                        </div>
                                    </Col>
                                    <Col md={12} lg={6}>
                                        <ButtonToolbar className="kpis-tab">
                                            <Button bsStyle="default" bsSize="large" 
                                            className="kpibut-24" 
                                            onClick={this.open}>Validate Tasks Selection</Button>
                                        </ButtonToolbar>
                                    </Col>
                                </Row>
                                <BootstrapTable data={marketTasks} selectRow={ selectRowProp2 } striped hover>
                                  <TableHeaderColumn isKey dataField='id' width="7%" dataSort={ true }>#</TableHeaderColumn>
                                  <TableHeaderColumn dataField='kpi' width="17%" dataSort={ true }>KPIs</TableHeaderColumn>
                                  <TableHeaderColumn dataField='pages' width="17%" dataSort={ true }>Pages</TableHeaderColumn>
                                  <TableHeaderColumn dataField='name' width="52%" dataSort={ true }>Tasks</TableHeaderColumn>
                                  <TableHeaderColumn dataField='credits' width="7%">Credits</TableHeaderColumn>                  
                                </BootstrapTable>                             
                                
                                <div className="spacediv"></div>
                                <div className="spacediv"></div> 
                           
                            </Col>
                            
                            <Modal show={this.state.showModal} onHide={this.close}>
                              <Modal.Header closeButton>
                                <Modal.Title>Modal heading</Modal.Title>
                              </Modal.Header>
                              <Modal.Body>
                                <h4>Text in a modal</h4>
                                <p>Duis mollis, est non commodo luctus, nisi erat porttitor ligula.</p>
                                <h4>Overflowing text to show scroll behavior</h4>
                                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>

                              </Modal.Body>
                              <Modal.Footer>
                                <Button onClick={this.close}>Close</Button>
                              </Modal.Footer>
                            </Modal>

                        </Row>
                    </Tab.Pane>
                    
                    <Tab.Pane eventKey="fith">
                        <h2 className="weektitle">You have 5 Credits left to spend this month on Marketing or Technical Tasks.<br/><br/>Are you sure you want to go to the next week?<br/><br/></h2>
                        <ButtonToolbar>
                            <Button bsStyle="primary" bsSize="large" className="nextbutton" onClick={event=> this.goToNextWeek(event)} >Go To The Next Week!</Button>
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
