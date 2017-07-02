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


//Import Blog Initial Values
import {ini_blog, borne, dim, random, natevo} from './data/initial_blog';
//Import SegData and EvoData
import {segData_ini, segData_pie_ini, evoData_ini, segData_piepages_ini} from './data/segdata';

//Import Courses Texts
import {kpiTextData} from './data/courses_text.jsx';
//Import Tasks Data
import {techTasks, marketTasks} from './data/tasks';




//Import Images
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

console.log(random(0.5,1));

var week = 0;
const pastweek = 17;
var weekLabels = ["W1"];

console.log("natevo");
console.log(natevo);

var segData = segData_ini;
var segData_pie = segData_pie_ini;
var evoData = evoData_ini;
var segData_piepages = segData_piepages_ini;



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

function idExists_ApplyTechTasks(id1, id2, id3, id4, id5, tasksArray, i) {
   
    //FIND IF THE TASKS IDS EXISTS
    
    var found1 = tasksArray.some(function(el) {
        return el.id === id1;
    });
    var found2 = tasksArray.some(function(el) {
        return el.id === id2;
    });
    var found3 = tasksArray.some(function(el) {
        return el.id === id3;
    });
    var found4 = tasksArray.some(function(el) {
        return el.id === id4;
    });
    var found5 = tasksArray.some(function(el) {
        return el.id === id5;
    });
    
    //IF THE TASKS IDS EXIST, ADD A VARIATION OF X% ON THE STRUCTURAL KPIS

    if (found1) {segData[i]['avg_inlinks'] = Math.round(10*(segData[i]['avg_inlinks'] + 0.1 * segData[i]['avg_inlinks']))/10;}
    if (found2) {segData[i]['avg_depth'] = Math.round(10*(segData[i]['avg_depth'] - 0.1 * segData[i]['avg_depth']))/10;}
    if (found3) {segData[i]['avg_loadtimes'] = Math.round(10*(segData[i]['avg_loadtimes'] - 0.1 * segData[i]['avg_loadtimes']))/10;}
    if (found4) {segData[i]['avg_badhttp'] = Math.round(10*(segData[i]['avg_badhttp'] - 0.1 * segData[i]['avg_badhttp']))/10;}
    if (found5) {segData[i]['notcomp_pages'] = Math.round(10*(segData[i]['notcomp_pages'] - 0.1 * segData[i]['notcomp_pages']))/10;}
    
    //IF THE TASKS IDS EXIST, ADD A VARIATION OF (X% * DIM) ON THE VISITS BY AP, AND THE CRAWL RATIO
    
    if (found1) {segData[i]['crawl_ratio_oncomp'] += Math.round(segData[i]['crawl_ratio_oncomp'] * 0.1 / dim.avg_inlinks[i]);}
    if (found1) {segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * 0.1 / dim.avg_inlinks[i]);}  
    if (found2) {segData[i]['crawl_ratio_oncomp'] += Math.round(segData[i]['crawl_ratio_oncomp'] * 0.1 / dim.avg_depth[i]);}    
    if (found3) {segData[i]['crawl_ratio_oncomp'] += Math.round(segData[i]['crawl_ratio_oncomp'] * 0.1 / dim.avg_loadtimes[i]);}    
    if (found4) {segData[i]['crawl_ratio_oncomp'] += Math.round(segData[i]['crawl_ratio_oncomp'] * 0.1 / dim.avg_badhttp[i]);}    
    if (found5) {segData[i]['crawl_ratio_oncomp'] += Math.round(segData[i]['crawl_ratio_oncomp'] * 0.1 / dim.notcomp_pages[i]);}
        
}

function idExists_ApplyMarketTasks(id1, id2, id3, id4, tasksArray, i) {
   
    //FIND IF THE TASKS IDS EXISTS
    
    var found1 = tasksArray.some(function(el) {
        return el.id === id1;
    });
    var found2 = tasksArray.some(function(el) {
        return el.id === id2;
    });
    var found3 = tasksArray.some(function(el) {
        return el.id === id3;
    });
    var found4 = tasksArray.some(function(el) {
        return el.id === id4;
    });
    
    //IF THE TASKS IDS EXIST, ADD A VARIATION OF X% ON THE KPIS

    if (found1) {segData[i]['pct_duptitles'] = Math.round(10*(segData[i]['pct_duptitles'] - 0.1 * segData[i]['pct_duptitles']))/10;}
    if (found2) {segData[i]['avg_words'] = Math.round((segData[i]['avg_words'] + 0.1 * segData[i]['avg_words']));}
    if (found3) {segData[i]['avg_unicity'] = Math.round(10*(segData[i]['avg_unicity'] + 0.1 * segData[i]['avg_unicity']))/10;}
    if (found4) {segData[i]['avg_AnchorsVar'] = Math.round(10*(segData[i]['avg_AnchorsVar'] + 0.1 * segData[i]['avg_AnchorsVar']))/10;}
    
    //IF THE TASKS IDS EXIST, ADD A VARIATION OF (X% * DIM) ON THE VISITS BY AP
    
    if (found1) {segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * 0.1 / dim.pct_duptitles[i]);}  
    if (found2) {segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * 0.1 / dim.avg_words[i]);}    
    if (found3) {segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * 0.1 / dim.avg_unicity[i]);}    
    if (found4) {segData[i]['visits_byAP_comp'] += Math.round(segData[i]['visits_byAP_comp'] * 0.1 / dim.avg_AnchorsVar[i]);}    

}



function nextWeek(curweek, techTasks, marketTasks) {

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
            
            //CALCUL DES EVOLUTIONS NATURELLES DES PAGES, STRUCTURAL KPIS, ET QUALITY KPIS
            ////////////////////////////////////////////////////////////////////////////////////////////////

            segData[i]['comp_pages'] += Math.round(segData[i]['comp_pages'] * natevo[curweek].comp_pages[i]);
            segData[i]['notcomp_pages'] += Math.round(segData[i]['notcomp_pages'] * natevo[curweek].notcomp_pages[i]);

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
            
            // BORNAGE #1 DES STRUCTURAL ET QUALITY KPIS (AVANT LES IMPACTS DES TASKS)
            ///////////////////////////////////////////////
            
            bound(segData[i], 'comp_pages', borne.comp_pages.min[i], borne.comp_pages.max[i]);
            bound(segData[i], 'notcomp_pages', borne.notcomp_pages.min[i], borne.notcomp_pages.max[i]);

            segData[i]['pages'] = segData[i]['comp_pages'] + segData[i]['notcomp_pages'];

            bound(segData[i], 'avg_loadtimes', borne.avg_loadtimes.min[i], borne.avg_loadtimes.max[i]);
            bound(segData[i], 'avg_depth', borne.avg_depth.min[i], borne.avg_depth.max[i]);
            bound(segData[i], 'avg_badhttp', borne.avg_badhttp.min[i], borne.avg_badhttp.max[i]);
            bound(segData[i], 'avg_inlinks', borne.avg_inlinks.min[i], borne.avg_inlinks.max[i]);

            bound(segData[i], 'pct_duptitles', borne.pct_duptitles.min[i], borne.pct_duptitles.max[i]);
            bound(segData[i], 'avg_words', borne.avg_words.min[i], borne.avg_words.max[i]);
            bound(segData[i], 'avg_unicity', borne.avg_unicity.min[i], borne.avg_unicity.max[i]);
            bound(segData[i], 'avg_AnchorsVar', borne.avg_AnchorsVar.min[i], borne.avg_AnchorsVar.max[i]);

            
            ///////////////////////////////////////////////
            // CALCUL DES IMPACTS DES SELECTED TASKS
            ///////////////////////////////////////////////
            
            // TECHNICAL TASKS - Top Tail
            if (i === 0) {idExists_ApplyTechTasks(1, 6, 11, 16, 21, techTasks, i);}
            
            // TECHNICAL TASKS - Middle Tail
            if (i === 1) {idExists_ApplyTechTasks(2, 7, 12, 17, 22, techTasks, i);}
            
            // TECHNICAL TASKS - Long Tail
            if (i === 2) {idExists_ApplyTechTasks(3, 8, 13, 18, 23, techTasks, i);}
            
            // TECHNICAL TASKS - Paginations
            if (i === 3) {idExists_ApplyTechTasks(4, 9, 14, 19, 24, techTasks, i);}
            
            // TECHNICAL TASKS - Useless Pages
            if (i === 4) {idExists_ApplyTechTasks(5, 10, 15, 20, 25, techTasks, i);}
            
            
            // TECHNICAL TASKS - Top Tail
            if (i === 0) {idExists_ApplyMarketTasks(1, 6, 11, 16, marketTasks, i);}
            
            // TECHNICAL TASKS - Middle Tail
            if (i === 1) {idExists_ApplyMarketTasks(2, 7, 12, 17, marketTasks, i);}
            
            // TECHNICAL TASKS - Long Tail
            if (i === 2) {idExists_ApplyMarketTasks(3, 8, 13, 18, marketTasks, i);}
            
            // TECHNICAL TASKS - Paginations
            if (i === 3) {idExists_ApplyMarketTasks(4, 9, 14, 19, marketTasks, i);}
            
            // TECHNICAL TASKS - Useless Pages
            if (i === 4) {idExists_ApplyMarketTasks(5, 10, 15, 20, marketTasks, i);}
              
            
            // BORNAGE #2 DES STRUCTURAL ET QUALITY KPIS (APRÈS LES IMPACTS DES TASKS)
            ///////////////////////////////////////////////
            
            bound(segData[i], 'comp_pages', borne.comp_pages.min[i], borne.comp_pages.max[i]);
            bound(segData[i], 'notcomp_pages', borne.notcomp_pages.min[i], borne.notcomp_pages.max[i]);

            segData[i]['pages'] = segData[i]['comp_pages'] + segData[i]['notcomp_pages'];

            bound(segData[i], 'avg_loadtimes', borne.avg_loadtimes.min[i], borne.avg_loadtimes.max[i]);
            bound(segData[i], 'avg_depth', borne.avg_depth.min[i], borne.avg_depth.max[i]);
            bound(segData[i], 'avg_badhttp', borne.avg_badhttp.min[i], borne.avg_badhttp.max[i]);
            bound(segData[i], 'avg_inlinks', borne.avg_inlinks.min[i], borne.avg_inlinks.max[i]);

            bound(segData[i], 'pct_duptitles', borne.pct_duptitles.min[i], borne.pct_duptitles.max[i]);
            bound(segData[i], 'avg_words', borne.avg_words.min[i], borne.avg_words.max[i]);
            bound(segData[i], 'avg_unicity', borne.avg_unicity.min[i], borne.avg_unicity.max[i]);
            bound(segData[i], 'avg_AnchorsVar', borne.avg_AnchorsVar.min[i], borne.avg_AnchorsVar.max[i]);
            

            ///////////////////////////////////////////////
            
            //****** A REFAIRE AVEC PRISE EN COMPTE DES TASKS !!!!!!!!!! *********
            
            //CALCUL DES RATIOS
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
    nextWeek(week, [], []);
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
    this.setColorDown = this.setColorDown.bind(this);
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
    setColorDown(x) {
        if (x == 0) {
            return {color: "black"};
        }
        else if (x > 0) {
            return {color: "#ef5350"};
        }
        else  {
            return {color: "#66bb6a"};
        }
    }
    
    render() {
        var setColor;
        var kpi = this.props.kpi;
        if (kpi == 'Not Indexable Pages'| kpi == 'Crawled Not Index. Pages' | kpi == 'Avg. Depth' | kpi == 'Avg. Load Times' | kpi == 'Duplicate Titles %') {
            setColor = this.setColorDown;
        }
        else {
            setColor = this.setColorUp;
        }
        
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
                                  <span className="smallevotext" style={setColor(this.props.kpiEvo)}>{numberWithCommasPCT(this.props.kpiEvo)}%</span>
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
            clearTasksSelection: false,
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

        nextWeek(this.state.week, this.state.tasksTech, this.state.tasksMarket);
        
        this.refs.table1.cleanSelected();
        this.refs.table2.cleanSelected();

        this.setState({
            week: week,
            evoData: evoData,
            segData: segData,
            kpiValue: evoData[this.state.week + 1].visits,
            //segData_pie: segData_pie.visits,
            segData_piepages: segData_piepages[week].comp_pages,
            kpiEvo: this.evoDiff(evoData, this.state.week + 1, "visits"),
            kpi: 'Visits',
            selected_kpi: 'visits',
            key: 'first',
            creditsTech: creditsTech,
            creditsMarket: creditsMarket,
            tasksTech: [],
            tasksMarket: []
        });
        console.log("setColorUp(this.state.week)");
        console.log(this.state.week);
        console.log(this.setColorUp(this.state.week));
    }

    goToNextWeekTest(event) {

        nextWeek(this.state.week, this.state.tasksTech, this.state.tasksMarket);
        
        this.refs.table1.cleanSelected();
        this.refs.table2.cleanSelected();

        this.setState({
            week: week,
            evoData: evoData,
            segData: segData,
            kpiValue: evoData[this.state.week + 1].visits,
            //segData_pie: segData_pie.visits,
            segData_piepages: segData_piepages[week].comp_pages,
            kpiEvo: this.evoDiff(evoData, this.state.week + 1, "visits"),
            kpi: 'Visits',
            selected_kpi: 'visits',
            key: 'first',
            creditsTech: creditsTech,
            creditsMarket: creditsMarket,
            tasksTech: [],
            tasksMarket: []
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
        bgColor: '#fcd1d1',
        clickToSelect: true,
        onSelect: this.onRowSelectTech,
        onSelectAll: this.onSelectAll
    };
    
    const selectRowProp2 = {
        mode: 'checkbox',
        bgColor: '#fcd1d1',
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
                                <BootstrapTable ref='table1' data={techTasks} selectRow={ selectRowProp } striped hover>
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
                                <BootstrapTable ref='table2' data={marketTasks} selectRow={ selectRowProp2 } striped hover>
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
                        <h2 className="weektitle">You have {this.state.creditsTech + this.state.creditsMarket} Credits left to spend this week on Marketing or Technical Tasks.<br/><br/>Are you sure you want to go to the next week?<br/><br/></h2>
                        <ButtonToolbar>
                            <Button bsStyle="primary" bsSize="large" className="nextbutton" onClick={event=> this.goToNextWeek(event)} >Yes, Go To The Next Week!</Button>
                        </ButtonToolbar>
                        
                        <div className="spacediv-week"></div>
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
