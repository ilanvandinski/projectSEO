// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.
//NEED TO PUT BACK this.state.week ETC IN RENDER


import React from 'react'
import ReactDOM from 'react-dom'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Legend, Bar } from 'recharts'
import ReactFitText from 'react-fittext'
import { Row, Col, Tabs, Tab, Nav, NavItem, Image, ButtonToolbar, Button } from 'react-bootstrap'

import logo from './assets/images/logo.png'
import head from './assets/images/UpDown-Bald-Head.gif'
import techguy from './assets/images/tech.jpeg'
import teacherguy from './assets/images/teacher.jpeg'
import bossguy from './assets/images/boss.jpeg'
import marketgirl from './assets/images/marketing.jpeg'

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

var Toto = "je suis toto"
console.log(Toto)

var week = 1
var weekLabels = ["W1"]

const pagesLabels = ["Top", "Middle", "Long", "Paginations", "Useless"]

const ini_blog = {
    visits_byAP: [1500, 280, 5, 0, 0],
    crawled_ratio_comp: [100, 80, 40, 60, 50],
    crawled_ratio_notcomp: [100, 100, 50, 100, 60],
    comp_pages: [10, 90, 18700, 150, 0],
    notcomp_pages: [0, 12, 450, 0, 17800],
    avg_Inlinks: [7600, 140, 5, 2, 1],
    avg_Depth: [1.2, 2.4, 7.3, 6.5, 8.9],
    avg_LoadTimes: [820, 930, 1580, 970, 1210],
    pct_DupTitles: [0, 0, 20, 10, 50],
    avg_Words: [350, 650, 1260, 150, 250],
    pct_Similarity: [0, 0, 0, 0, 0],
    avg_AnchorsVar: [0, 0, 0, 0, 0]
}

var segData = [
    {
        name: 'Top',

        visits: ini_blog.visits_byAP[0]* 1 *ini_blog.comp_pages[0] * ini_blog.crawled_ratio_comp[0]/100,
        active_pages: 1*ini_blog.comp_pages[0] * ini_blog.crawled_ratio_comp[0]/100,

        visits_by_active_pages: ini_blog.visits_byAP[0],

        crawled_ratio_comp: ini_blog.crawled_ratio_comp[0],
        crawled_ratio_notcomp: ini_blog.crawled_ratio_notcomp[0],

        active_ratio_oncomp: 1*ini_blog.crawled_ratio_comp[0],
        active_ratio_onnotcomp: 1*ini_blog.crawled_ratio_notcomp[0],

        pages: ini_blog.comp_pages[0] + ini_blog.notcomp_pages[0],
        indexable_ratio: ini_blog.comp_pages[0] / (ini_blog.comp_pages[0] + ini_blog.notcomp_pages[0]),
        comp_pages: ini_blog.comp_pages[0],
        notcomp_pages: ini_blog.notcomp_pages[0],

        crawled_comp_pages: ini_blog.comp_pages[0] * ini_blog.crawled_ratio_comp[0]/100,
        crawled_notcomp_pages: ini_blog.notcomp_pages[0] * ini_blog.crawled_ratio_notcomp[0]/100,

        active_comp_pages: 1*ini_blog.comp_pages[0] * ini_blog.crawled_ratio_comp[0]/100,
        active_notcomp_pages: 1*ini_blog.notcomp_pages[0] * ini_blog.crawled_ratio_notcomp[0]/100,

        avg_badhttp_pages: 0 * ini_blog.notcomp_pages[0],
        avg_inlinks_pages: ini_blog.avg_Inlinks[0] * ini_blog.comp_pages[0],
        avg_depth_pages: ini_blog.avg_Depth[0] * ini_blog.comp_pages[0],
        avg_loadtimes_pages: ini_blog.avg_LoadTimes[0] * ini_blog.comp_pages[0],

        pct_duptitles_pages: ini_blog.pct_DupTitles[0] * ini_blog.comp_pages[0],
        avg_words_pages: ini_blog.avg_Words[0] * ini_blog.comp_pages[0],
        pct_similarity_pages: ini_blog.pct_Similarity[0] * ini_blog.comp_pages[0],
        avg_AnchorsVar_pages: ini_blog.avg_AnchorsVar[0] * ini_blog.comp_pages[0],

        avg_badhttp: 0.2*ini_blog.notcomp_pages[0],
        avg_inlinks: ini_blog.avg_Inlinks[0],
        avg_depth: ini_blog.avg_Depth[0],
        avg_loadtimes: ini_blog.avg_LoadTimes[0],

        pct_duptitles: ini_blog.pct_DupTitles[0],
        avg_words: ini_blog.avg_Words[0],
        pct_similarity: ini_blog.pct_Similarity[0],
        avg_AnchorsVar: ini_blog.avg_AnchorsVar[0]

    },
    {
        name: 'Middle',

        visits: ini_blog.visits_byAP[1]* 0.8 *ini_blog.comp_pages[1] * ini_blog.crawled_ratio_comp[1]/100,
        active_pages: 0.8*ini_blog.comp_pages[1] * ini_blog.crawled_ratio_comp[1]/100,

        visits_by_active_pages: ini_blog.visits_byAP[1],

        crawled_ratio_comp: ini_blog.crawled_ratio_comp[1],
        crawled_ratio_notcomp: ini_blog.crawled_ratio_notcomp[1],

        active_ratio_oncomp: 0.8*ini_blog.crawled_ratio_comp[1],
        active_ratio_onnotcomp: 1*ini_blog.crawled_ratio_notcomp[1],

        pages: ini_blog.comp_pages[1] + ini_blog.notcomp_pages[1],
        indexable_ratio: ini_blog.comp_pages[1] / (ini_blog.comp_pages[1] + ini_blog.notcomp_pages[1]),
        comp_pages: ini_blog.comp_pages[1],
        notcomp_pages: ini_blog.notcomp_pages[1],

        crawled_comp_pages: ini_blog.comp_pages[1] * ini_blog.crawled_ratio_comp[1]/100,
        crawled_notcomp_pages: ini_blog.notcomp_pages[1] * ini_blog.crawled_ratio_notcomp[1]/100,

        active_comp_pages: 0.8*ini_blog.comp_pages[1] * ini_blog.crawled_ratio_comp[1]/100,
        active_notcomp_pages: 1*ini_blog.notcomp_pages[1] * ini_blog.crawled_ratio_notcomp[1]/100,

        avg_badhttp_pages: 0.2*ini_blog.notcomp_pages[1] * ini_blog.notcomp_pages[1],
        avg_inlinks_pages: ini_blog.avg_Inlinks[1] * ini_blog.comp_pages[1],
        avg_depth_pages: ini_blog.avg_Depth[1] * ini_blog.comp_pages[1],
        avg_loadtimes_pages: ini_blog.avg_LoadTimes[1] * ini_blog.comp_pages[1],

        pct_duptitles_pages: ini_blog.pct_DupTitles[1] * ini_blog.comp_pages[1],
        avg_words_pages: ini_blog.avg_Words[1] * ini_blog.comp_pages[1],
        pct_similarity_pages: ini_blog.pct_Similarity[1] * ini_blog.comp_pages[1],
        avg_AnchorsVar_pages: ini_blog.avg_AnchorsVar[1] * ini_blog.comp_pages[1],

        avg_badhttp: 0.2*ini_blog.notcomp_pages[1],
        avg_inlinks: ini_blog.avg_Inlinks[1],
        avg_depth: ini_blog.avg_Depth[1],
        avg_loadtimes: ini_blog.avg_LoadTimes[1],

        pct_duptitles: ini_blog.pct_DupTitles[1],
        avg_words: ini_blog.avg_Words[1],
        pct_similarity: ini_blog.pct_Similarity[1],
        avg_AnchorsVar: ini_blog.avg_AnchorsVar[1]

    },
    {
        name: 'Long',

visits: ini_blog.visits_byAP[2]* 0.4 *ini_blog.comp_pages[2] * ini_blog.crawled_ratio_comp[2]/100,
        active_pages: 0.4*ini_blog.comp_pages[2] * ini_blog.crawled_ratio_comp[2]/100,

        visits_by_active_pages: ini_blog.visits_byAP[2],

        crawled_ratio_comp: ini_blog.crawled_ratio_comp[2],
        crawled_ratio_notcomp: ini_blog.crawled_ratio_notcomp[2],

        active_ratio_oncomp: 0.4 *ini_blog.crawled_ratio_comp[2],
        active_ratio_onnotcomp: 0.2*ini_blog.crawled_ratio_notcomp[2],

        pages: ini_blog.comp_pages[2] + ini_blog.notcomp_pages[2],
        indexable_ratio: ini_blog.comp_pages[2] / (ini_blog.comp_pages[2] + ini_blog.notcomp_pages[2]),
        comp_pages: ini_blog.comp_pages[2],
        notcomp_pages: ini_blog.notcomp_pages[2],

        crawled_comp_pages: ini_blog.comp_pages[2] * ini_blog.crawled_ratio_comp[2]/100,
        crawled_notcomp_pages: ini_blog.notcomp_pages[2] * ini_blog.crawled_ratio_notcomp[2]/100,

        active_comp_pages: 0.4*ini_blog.comp_pages[2] * ini_blog.crawled_ratio_comp[2]/100,
        active_notcomp_pages: 0.2*ini_blog.notcomp_pages[2] * ini_blog.crawled_ratio_notcomp[2]/100,

        avg_badhttp_pages: 0.2 * ini_blog.notcomp_pages[2],
        avg_inlinks_pages: ini_blog.avg_Inlinks[2] * ini_blog.comp_pages[2],
        avg_depth_pages: ini_blog.avg_Depth[2] * ini_blog.comp_pages[2],
        avg_loadtimes_pages: ini_blog.avg_LoadTimes[2] * ini_blog.comp_pages[2],

        pct_duptitles_pages: ini_blog.pct_DupTitles[2] * ini_blog.comp_pages[2],
        avg_words_pages: ini_blog.avg_Words[2] * ini_blog.comp_pages[2],
        pct_similarity_pages: ini_blog.pct_Similarity[2] * ini_blog.comp_pages[2],
        avg_AnchorsVar_pages: ini_blog.avg_AnchorsVar[2] * ini_blog.comp_pages[2],

        avg_badhttp: 0.2*ini_blog.notcomp_pages[2],
        avg_inlinks: ini_blog.avg_Inlinks[2],
        avg_depth: ini_blog.avg_Depth[2],
        avg_loadtimes: ini_blog.avg_LoadTimes[2],

        pct_duptitles: ini_blog.pct_DupTitles[2],
        avg_words: ini_blog.avg_Words[2],
        pct_similarity: ini_blog.pct_Similarity[2],
        avg_AnchorsVar: ini_blog.avg_AnchorsVar[2]

    },
    {
        name: 'Paginations',

visits: ini_blog.visits_byAP[3]* 0 *ini_blog.comp_pages[3] * ini_blog.crawled_ratio_comp[3]/100,
        active_pages: 0*ini_blog.comp_pages[3] * ini_blog.crawled_ratio_comp[3]/100,

        visits_by_active_pages: ini_blog.visits_byAP[3],

        crawled_ratio_comp: ini_blog.crawled_ratio_comp[3],
        crawled_ratio_notcomp: ini_blog.crawled_ratio_notcomp[3],

        active_ratio_oncomp: 0*ini_blog.crawled_ratio_comp[3],
        active_ratio_onnotcomp: 0*ini_blog.crawled_ratio_notcomp[3],

        pages: ini_blog.comp_pages[3] + ini_blog.notcomp_pages[3],
        indexable_ratio: ini_blog.comp_pages[3] / (ini_blog.comp_pages[3] + ini_blog.notcomp_pages[3]),
        comp_pages: ini_blog.comp_pages[3],
        notcomp_pages: ini_blog.notcomp_pages[3],

        crawled_comp_pages: ini_blog.comp_pages[3] * ini_blog.crawled_ratio_comp[3]/100,
        crawled_notcomp_pages: ini_blog.notcomp_pages[3] * ini_blog.crawled_ratio_notcomp[3]/100,

        active_comp_pages: 0*ini_blog.comp_pages[3] * ini_blog.crawled_ratio_comp[3]/100,
        active_notcomp_pages: 0*ini_blog.notcomp_pages[3] * ini_blog.crawled_ratio_notcomp[3]/100,

        avg_badhttp_pages: 0.2 * ini_blog.notcomp_pages[3],
        avg_inlinks_pages: ini_blog.avg_Inlinks[3] * ini_blog.comp_pages[3],
        avg_depth_pages: ini_blog.avg_Depth[3] * ini_blog.comp_pages[3],
        avg_loadtimes_pages: ini_blog.avg_LoadTimes[3] * ini_blog.comp_pages[3],

        pct_duptitles_pages: ini_blog.pct_DupTitles[3] * ini_blog.comp_pages[3],
        avg_words_pages: ini_blog.avg_Words[3] * ini_blog.comp_pages[3],
        pct_similarity_pages: ini_blog.pct_Similarity[3] * ini_blog.comp_pages[3],
        avg_AnchorsVar_pages: ini_blog.avg_AnchorsVar[3] * ini_blog.comp_pages[3],

        avg_badhttp: 0.2*ini_blog.notcomp_pages[3],
        avg_inlinks: ini_blog.avg_Inlinks[3],
        avg_depth: ini_blog.avg_Depth[3],
        avg_loadtimes: ini_blog.avg_LoadTimes[3],

        pct_duptitles: ini_blog.pct_DupTitles[3],
        avg_words: ini_blog.avg_Words[3],
        pct_similarity: ini_blog.pct_Similarity[3],
        avg_AnchorsVar: ini_blog.avg_AnchorsVar[3]

    },
    {
        name: 'Useless',

        visits: ini_blog.visits_byAP[4]* 0 *ini_blog.comp_pages[4] * ini_blog.crawled_ratio_comp[4]/100,
        active_pages: 0*ini_blog.comp_pages[4] * ini_blog.crawled_ratio_comp[4]/100,

        visits_by_active_pages: ini_blog.visits_byAP[4],

        crawled_ratio_comp: ini_blog.crawled_ratio_comp[4],
        crawled_ratio_notcomp: ini_blog.crawled_ratio_notcomp[4],

        active_ratio_oncomp: 0*ini_blog.crawled_ratio_comp[4],
        active_ratio_onnotcomp: 0*ini_blog.crawled_ratio_notcomp[4],

        pages: ini_blog.comp_pages[4] + ini_blog.notcomp_pages[4],
        indexable_ratio: ini_blog.comp_pages[4] / (ini_blog.comp_pages[4] + ini_blog.notcomp_pages[4]),
        comp_pages: ini_blog.comp_pages[4],
        notcomp_pages: ini_blog.notcomp_pages[4],

        crawled_comp_pages: ini_blog.comp_pages[4] * ini_blog.crawled_ratio_comp[4]/100,
        crawled_notcomp_pages: ini_blog.notcomp_pages[4] * ini_blog.crawled_ratio_notcomp[4]/100,

        active_comp_pages: 0*ini_blog.comp_pages[4] * ini_blog.crawled_ratio_comp[4]/100,
        active_notcomp_pages: 0*ini_blog.notcomp_pages[4] * ini_blog.crawled_ratio_notcomp[4]/100,

        avg_badhttp_pages: 0 * ini_blog.comp_pages[4],
        avg_inlinks_pages: ini_blog.avg_Inlinks[4] * ini_blog.comp_pages[4],
        avg_depth_pages: ini_blog.avg_Depth[4] * ini_blog.comp_pages[4],
        avg_loadtimes_pages: ini_blog.avg_LoadTimes[4] * ini_blog.comp_pages[4],

        pct_duptitles_pages: ini_blog.pct_DupTitles[4] * ini_blog.comp_pages[4],
        avg_words_pages: ini_blog.avg_Words[4] * ini_blog.comp_pages[4],
        pct_similarity_pages: ini_blog.pct_Similarity[4] * ini_blog.comp_pages[4],
        avg_AnchorsVar_pages: ini_blog.avg_AnchorsVar[4] * ini_blog.comp_pages[4],

        avg_badhttp: 0.2*ini_blog.notcomp_pages[4],
        avg_inlinks: ini_blog.avg_Inlinks[4],
        avg_depth: ini_blog.avg_Depth[4],
        avg_loadtimes: ini_blog.avg_LoadTimes[4],

        pct_duptitles: ini_blog.pct_DupTitles[4],
        avg_words: ini_blog.avg_Words[4],
        pct_similarity: ini_blog.pct_Similarity[4],
        avg_AnchorsVar: ini_blog.avg_AnchorsVar[4]

    }
];



var evoData = [
    {
        name: 'Week 1',

        visits: segData[0].visits + segData[1].visits + segData[2].visits,
        active_pages: segData[0].active_pages + segData[1].active_pages + segData[2].active_pages,

        visits_by_active_pages: (segData[0].visits + segData[1].visits + segData[2].visits)/(segData[0].active_pages + segData[1].active_pages + segData[2].active_pages),

        crawled_ratio_comp: (segData[0].crawled_comp_pages + segData[1].crawled_comp_pages + segData[2].crawled_comp_pages + segData[3].crawled_comp_pages + segData[4].crawled_comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages),
        crawled_ratio_notcomp: (segData[0].crawled_notcomp_pages + segData[1].crawled_notcomp_pages + segData[2].crawled_notcomp_pages + segData[3].crawled_notcomp_pages + segData[4].crawled_notcomp_pages)/(segData[0].notcomp_pages + segData[1].notcomp_pages + segData[2].notcomp_pages + segData[3].notcomp_pages + segData[4].notcomp_pages),

        active_ratio_oncomp: (segData[0].active_comp_pages + segData[1].active_comp_pages + segData[2].active_comp_pages + segData[3].active_comp_pages + segData[4].active_comp_pages)/(segData[0].comp_pages + segData[1].comp_pages + segData[2].comp_pages + segData[3].comp_pages + segData[4].comp_pages),
        active_ratio_onnotcomp: (segData[0].active_notcomp_pages + segData[1].active_notcomp_pages + segData[2].active_notcomp_pages + segData[3].active_notcomp_pages + segData[4].active_notcomp_pages)/(segData[0].notcomp_pages + segData[1].notcomp_pages + segData[2].notcomp_pages + segData[3].notcomp_pages + segData[4].notcomp_pages),

        pages: segData[0].pages + segData[1].pages + segData[2].pages + segData[3].pages + segData[4].pages,
        indexable_ratio: 0,
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
        pct_similarity_pages: 0,
        avg_AnchorsVar_pages: 0,

        avg_badhttp: 0,
        avg_inlinks: 0,
        avg_depth: 0,
        avg_loadtimes: 0,

        pct_duptitles: 0,
        avg_words: 0,
        pct_similarity: 0,
        avg_AnchorsVar: 0

    }
];

var visitsData = [evoData[0].visits]
var activePagesData = [evoData[0].active_pages]
var pagesData = [evoData[0].pages]


var visitsSegData = [segData[0].visits, segData[1].visits, segData[2].visits, segData[3].visits, segData[4].visits]
var activePagesSegData = [segData[0].active_pages, segData[1].active_pages, segData[2].active_pages, segData[3].active_pages, segData[4].active_pages]
var pagesSegData = [segData[0].pages, segData[1].pages, segData[2].pages, segData[3].pages, segData[4].pages]

const kpiTextData = {
        visits: {
            def: "The number of organic visits generated in one month.",
            todo: "To increase your Visits, you need to analyze all the KPIs, and then spend credits on Marketing and Technical SEO Tasks."
        },
        active_pages: 0,

        visits_by_active_pages: 0,

        indexable_ratio: 0,
        active_ratio_oncomp: 0,
        crawl_ratio_oncomp: 0,

        pages: {
            def: "The number of pages in your website structure. It contains both Indexable and Not Indexable Pages.",
            todo: "Make sure you have a maximum number of Indexable Pages to generate more organic traffic."
        },
        comp_pages: 0,
        notcomp_pages: 0,

        crawled_comp_pages: 0,
        notcrawled_comp_pages: 0,

        crawled_notcomp_pages: 0,
        notcrawled_notcomp_pages: 0,

        avg_loadtimes: 0,
        avg_depth: 0,
        avg_badhttp: 0,
        avg_inlinks: 0,

        avg_words: 0,
        avg_unicity: 0,
        pct_duptitles: 0,
        pct_duph1: 0,
        pct_dupdesc: 0,
        pct_similarity: 0
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

var state = {
  week: week,
  kpi: 'Visits',
  evoData: evoData,
  segData: segData,
  selected_kpi: 'visits',
  seoCourse: "Hi SEO GUY, I'm your SEO teacher.",
  seoConclusion: "Please, select a KPI on the right panel to analyze it on the charts below.",
  kpiTextDefTag: '',
  kpiTextToDoTag: '',
  kpiTextDef: '',
  kpiTextToDo: '',
  bossIntro: bossText.start.intro,
  bossText: bossText.start.begin,
  bossConslusion: bossText.start.end,
  marketIntro: "Hello SEO GUY, I'm the Marketing Girl.",
  marketText: "What do you want to do?",
}
// console.log(state.week)

const missionTab = event => {
        this.setState({
            week: week,
            kpi: 'Visits',
            evoData: evoData,
            segData: segData,
            selected_kpi: 'visits',
            key: 'first'
        });
}

const analysisTab = event => {
    this.setState({
        week: week,
        kpi: 'Visits',
        evoData: evoData,
        segData: segData,
        selected_kpi: 'visits',
        key: 'second'
    });
}

const marketingTab = event => {
    this.setState({
        week: week,
        kpi: 'Visits',
        evoData: evoData,
        segData: segData,
        selected_kpi: 'visits',
        key: 'third'
    });
}

const techTab = event => {
    this.setState({
        week: week,
        kpi: 'Visits',
        evoData: evoData,
        segData: segData,
        selected_kpi: 'visits',
        key: 'fourth'
    });
}

const nextweekTab = event => {
    this.setState({
        week: week,
        kpi: 'Visits',
        evoData: evoData,
        segData: segData,
        selected_kpi: 'visits',
        key: 'fith'
    });
}

const supportTab = event => {
    this.setState({
        week: week,
        kpi: 'Visits',
        evoData: evoData,
        segData: segData,
        selected_kpi: 'visits',
        key: 'sixth'
    });
}

const goToNextWeek = event => {

  //Calculate new segData KPIs

  console.log("segData");
  console.log(segData);

  segData[0]['visits'] = Math.round(segData[0].visits + 0.3 * Math.random() * segData[0].visits);
  segData[1]['visits'] = Math.round(segData[1].visits + 0.3 * Math.random() * segData[1].visits);
  segData[2]['visits'] = Math.round(segData[2].visits + 0.3 * Math.random() * segData[2].visits);

  segData[0]['active_pages'] = Math.round(segData[0].active_pages + 0.1 * Math.random() * segData[0].active_pages);
  segData[1]['active_pages'] = Math.round(segData[1].active_pages + 0.1 * Math.random() * segData[1].active_pages);
  segData[2]['active_pages'] = Math.round(segData[2].active_pages + 0.1 * Math.random() * segData[2].active_pages);

  segData[0]['pages'] = Math.round(segData[0].pages + 0.3 * Math.random() * segData[0].pages);
  segData[1]['pages'] = Math.round(segData[1].pages + 0.3 * Math.random() * segData[1].pages);
  segData[2]['pages'] = Math.round(segData[2].pages + 0.3 * Math.random() * segData[2].pages);

  console.log(segData);

  //Push new KPIs Arrays

  visitsData.push(segData[0].visits + segData[1].visits + segData[2].visits);
  activePagesData.push(segData[0].active_pages + segData[1].active_pages + segData[2].active_pages);
  pagesData.push(segData[0].pages + segData[0].pages + segData[2].pages);

  //Update Week and Week Labels
  week = this.state.week + 1;

  evoData = [];

  for (var i = 0; i < week ; i++) {
    evoData.push({
      name:"Week " + (i+1),

      visits: visitsData[i],
      active_pages: activePagesData[i],

      visits_by_active_pages: 0,

      indexable_ratio: 0,
      active_ratio_oncomp: 0,
      crawl_ratio_oncomp: 0,

      pages: pagesData[i],
      comp_pages: 0,
      notcomp_pages: 0,

      crawled_comp_pages: 0,
      notcrawled_comp_pages: 0,

      crawled_notcomp_pages: 0,
      notcrawled_notcomp_pages: 0,

      avg_loadtimes: 0,
      avg_depth: 0,
      avg_badhttp: 0,
      avg_inlinks: 0,

      avg_words: 0,
      avg_unicity: 0,
      pct_duptitles: 0,
      pct_duph1: 0,
      pct_dupdesc: 0,
      pct_similarity: 0
    });
  }
}

const Hello = props => (
  <div>
    <Row className="top-div">
        <Col xs={2} className="logo">
            <center><h1>SEO GUY</h1></center>
        </Col>
        <Col xs={10} className="top-bar">
            <span>Week #{state.week}</span>
        </Col>
    </Row>
    <Tab.Container id="left-tabs-example" defaultActiveKey="first" activeKey={state.key}>
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
                                           <span className="indicator">{state.bossIntro}</span>
                                           <br/><br/>
                                           <span className="indicator">{state.bossText}</span>
                                           <br/><br/>
                                           <span className="indicator">{state.bossConslusion}</span>
                                        </p>
                                       </Col>
                                   </Row>

                                </div>
                            </Col>
                            <Col md={12} lg={6}>
                                <div className="left-1">
                                <h3 className="kpi"><span className="tag">Visits</span><br/>{state.evoData[state.week-1].visits} +X%</h3>

                                   <div className="box-4">
                                       <ResponsiveContainer height={110}>
                                        <AreaChart data={state.evoData}
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

                                        <h4><span className="bold">Deadline:</span> You have {12 - state.week} months left to generate 36K visits per month.</h4>
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
                                        <BarChart data={state.segData}>
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
    <h2>Website Analysis</h2>
                        <Row className="show-grid">
                            <Col md={12} lg={6}>
                                <div className="left-1"><h3>The SEO Course</h3>
                                   <Row className="col-1">
                                       <Col xs={4} className="box-1">
                                          <Image src={teacherguy} responsive className="guyimage" />
                                       </Col>
                                       <Col xs={8} className="box-2">

                                            <p className="guytext-2">
                                                <h4>{state.kpiTextDefTag}</h4>
                                                <span className="indicator">{state.seoCourse}</span> {state.kpiTextDef}
                                                <br/>
                                                <h4>{state.kpiTextToDoTag}</h4> {state.kpiTextToDo}
                                                <span className="indicator">{state.seoConclusion}</span>
                                            </p>


                                       </Col>
                                   </Row>

                                </div>

                            </Col>
                            <Col md={12} lg={6}>
                               <div className="left-1">
                                <h3>Select a KPI to analyze</h3>
                                <div className="box-3">
                                  <Tabs defaultActiveKey={1} id="kpistab">

                                    <Tab eventKey={1} title="Main">
                                        <ButtonToolbar className="kpis-tab">
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Visits','visits', state.evoData[week-1].visits, kpiTextData.visits.def, kpiTextData.visits.todo)}>Visits</Button>
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Pages', 'pages', state.evoData[week-1].pages, kpiTextData.pages.def, kpiTextData.pages.todo)}>Pages</Button>
                                        </ButtonToolbar>
                                        <ButtonToolbar className="kpis-tab">
                                          <Button bsStyle="default" bsSize="large" className="kpibut-3" onClick={event => this.displayEVO(event,'Indexability Ratio', 'pages')}>Indexability Ratio</Button>
                                          <Button bsStyle="default" bsSize="large" className="kpibut-3" onClick={event => this.displayEVO(event,'Crawl Ratio', 'pages')}>Crawl Ratio</Button>
                                          <Button bsStyle="default" bsSize="large" className="kpibut-3" onClick={event => this.displayEVO(event,'Active Ratio', 'pages')}>Active Ratio</Button>
                                        </ButtonToolbar>
                                    </Tab>

                                    <Tab eventKey={2} title="Indexability">
                                        <ButtonToolbar className="kpis-tab">
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2-3" onClick={event => this.displayEVO(event,'Indexable Pages', 'pages')}>Indexable</Button>
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2-3" onClick={event => this.displayEVO(event,'Not Indexable Pages', 'pages')}>Not Indexable</Button>
                                        </ButtonToolbar>
                                        <ButtonToolbar className="kpis-tab">
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2-3" onClick={event => this.displayEVO(event,'Crawled Index. Pages', 'pages')}>Crawled Indexable</Button>
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2-3" onClick={event => this.displayEVO(event,'Crawled Not Index. Pages', 'pages')}>Crawled Not Indexable</Button>
                                        </ButtonToolbar>
                                        <ButtonToolbar className="kpis-tab">
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2-3" onClick={event => this.displayEVO(event,'Active Index. Pages', 'pages')}>Active Indexable</Button>
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2-3" onClick={event => this.displayEVO(event,'Active Not Index. Pages', 'pages')}>Active Not Indexable</Button>
                                        </ButtonToolbar>
                                    </Tab>

                                    <Tab eventKey={3} title="Structure">
                                        <ButtonToolbar className="kpis-tab">
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Internal Links', 'pages')}>Internal Links</Button>
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Avg. Depth', 'pages')}>Depth</Button>
                                        </ButtonToolbar>
                                        <ButtonToolbar className="kpis-tab">
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Avg. Load Times', 'pages')}>Load Times</Button>
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Broken Links', 'pages')}>Broken Links</Button>
                                        </ButtonToolbar>

                                    </Tab>

                                    <Tab eventKey={4} title="Quality">
                                        <ButtonToolbar className="kpis-tab">
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Dup. Titles', 'pages')}>Dup. Titles</Button>
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Words', 'pages')}>Words</Button>
                                        </ButtonToolbar>
                                        <ButtonToolbar className="kpis-tab">
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Similar Pages Ratio', 'pages')}>Similarity %</Button>
                                          <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Anchors Variations', 'pages')}>Anchors Variations</Button>
                                        </ButtonToolbar>
                                    </Tab>
                                  </Tabs>
                                </div>
                                </div>

                            </Col>

                        </Row>
                        <Row className="show-grid">
                            <Col md={12} lg={6}>
                                <div className="left-1">
                                <h3 className="kpi"><span className="tag">{state.kpi}</span><br/>{state.kpiValue} +X%</h3>

                                   <div className="box-4">
                                       <ResponsiveContainer height={110}>
                                        <AreaChart data={state.evoData}
                                            margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                                          <XAxis dataKey="name"/>
                                          <YAxis/>
                                          <CartesianGrid strokeDasharray="3 3"/>
                                          <Tooltip/>
                                          <Area type='monotone' dataKey={state.selected_kpi} stroke='#000' fill='#000' />
                                        </AreaChart>
                                    </ResponsiveContainer>
                                   </div>

                                </div>

                            </Col>
                            <Col md={12} lg={6}>
                                <div className="left-1">
                                <h3>{state.kpi}, by templates</h3>
                                    <div className="box-3">
                                    <ResponsiveContainer height={230}>
                                        <BarChart data={state.segData}>
                                          <XAxis dataKey="name" />
                                          <YAxis />
                                          <CartesianGrid strokeDasharray="3 3" />
                                          <Tooltip />

                                          <Bar dataKey={state.selected_kpi} fill="#000" />
                                        </BarChart>
                                    </ResponsiveContainer>
                                    </div>
                                </div>

                            </Col>

                        </Row>
              </Tab.Pane>
                <Tab.Pane eventKey="third" >
    <h2>SEO Marketing Tasks<br/></h2>
                        <Row className="show-grid">
                            <Col md={12} lg={6}>
                                <div className="left-1"><h3>The Marketing Team</h3>
                                   <Row className="col-1">
                                       <Col xs={4} className="box-1">
                                          <Image src={marketgirl} responsive className="guyimage" />
                                       </Col>
                                       <Col xs={8} className="box-2">

                                        <p className="guytext-2">
                                           <span className="indicator">{state.marketIntro}</span>
                                           <br/><br/>
                                           <span className="indicator">{state.marketText}</span>
                                           <br/><br/>
                                           <span className="indicator">{state.marketConslusion}</span>
                                        </p>


                                       </Col>
                                   </Row>

                                </div>


                            </Col>
                            <Col md={12} lg={6}>




                            </Col>

                        </Row>
                        <Row className="show-grid">
                            <Col md={12} lg={6}>




                            </Col>
                            <Col md={12} lg={6}>




                            </Col>

                        </Row>
                </Tab.Pane>

                <Tab.Pane eventKey="fourth">
    <h2>SEO Technical Tasks<br/></h2>
                        <Row className="show-grid">
                            <Col md={12} lg={6}>
                                <div className="left-1"><h3>The Tech Team</h3>
                                   <Row className="col-1">
                                       <Col xs={4} className="box-1">
                                          <Image src={techguy} responsive className="guyimage" />
                                       </Col>
                                       <Col xs={8} className="box-2">

                                            <p className="guytext-2">
                                                <h4>{state.kpiTextDefTag}</h4>
                                                <span className="indicator">{state.seoCourse}</span> {state.kpiTextDef}
                                                <br/>
                                                <h4>{state.kpiTextToDoTag}</h4> {state.kpiTextToDo}
                                                <span className="indicator">{state.seoConclusion}</span>
                                            </p>


                                       </Col>
                                   </Row>

                                </div>



                            </Col>
                            <Col md={12} lg={6}>




                            </Col>

                        </Row>
                        <Row className="show-grid">
                            <Col md={12} lg={6}>




                            </Col>
                            <Col md={12} lg={6}>




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
)

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <Hello/>,
    document.body.appendChild(document.createElement('div')),
  )
})
