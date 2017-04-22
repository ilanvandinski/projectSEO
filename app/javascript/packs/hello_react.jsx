// Run this example by adding <%= javascript_pack_tag 'hello_react' %> to the head of your layout file,
// like app/views/layouts/application.html.erb. All it does is render <div>Hello React</div> at the bottom
// of the page.

import React from 'react'
import ReactDOM from 'react-dom'

const Hello = props => (
  <div>Hello {props.name}!</div>
)

var Toto = "je suis toto"

Hello.defaultProps = {
  name: 'David'
}

Hello.propTypes = {
  name: React.PropTypes.string
}

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
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
                                              <h4>{this.state.kpiTextDefTag}</h4>
                                              <span className="indicator">{this.state.seoCourse}</span> {this.state.kpiTextDef}
                                              <br/>
                                              <h4>{this.state.kpiTextToDoTag}</h4> {this.state.kpiTextToDo}
                                              <span className="indicator">{this.state.seoConclusion}</span>
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
                                        <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Visits','visits', this.state.evoData[week-1].visits, kpiTextData.visits.def, kpiTextData.visits.todo)}>Visits</Button>
                                        <Button bsStyle="default" bsSize="large" className="kpibut-2" onClick={event => this.displayEVO(event,'Pages', 'pages', this.state.evoData[week-1].pages, kpiTextData.pages.def, kpiTextData.pages.todo)}>Pages</Button>
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
                              <h3 className="kpi"><span className="tag">{this.state.kpi}</span><br/>{this.state.kpiValue} +X%</h3>

                                 <div className="box-4">
                                     <ResponsiveContainer height={110}>
                                      <AreaChart data={this.state.evoData}
                                          margin={{top: 10, right: 30, left: 0, bottom: 0}}>
                                        <XAxis dataKey="name"/>
                                        <YAxis/>
                                        <CartesianGrid strokeDasharray="3 3"/>
                                        <Tooltip/>
                                        <Area type='monotone' dataKey={this.state.selected_kpi} stroke='#000' fill='#000' />
                                      </AreaChart>
                                  </ResponsiveContainer>
                                 </div>

                              </div>

                          </Col>
                          <Col md={12} lg={6}>
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
                                              <h4>{this.state.kpiTextDefTag}</h4>
                                              <span className="indicator">{this.state.seoCourse}</span> {this.state.kpiTextDef}
                                              <br/>
                                              <h4>{this.state.kpiTextToDoTag}</h4> {this.state.kpiTextToDo}
                                              <span className="indicator">{this.state.seoConclusion}</span>
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
                          <Button bsStyle="primary" bsSize="xlarge" className="nextbutton"  onClick={event => this.goToNextWeek(event)} >Go To The Next Week!</Button>
                      </ButtonToolbar>
              </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
  </Tab.Container>
</div>
  )
})
