import {
  BarChart,
  Bar,
  Area,
  AreaChart,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceLine,
} from "recharts";

import img2 from "./image/big1.webp";
import {
  Row,
  Col,
  Container,
  Breadcrumb,
  Button,
  NavDropdown,
  Nav,
  Form,
  FormControl,
  Accordion,
} from "react-bootstrap";
import "./Task.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { CircularProgressbar } from "react-circular-progressbar";
import { Component } from "react";
import { HiOutlinePencil } from "react-icons/hi";
import { BsFillFileEarmarkFill } from "react-icons/bs";
import { MdOutlineDriveFolderUpload } from "react-icons/md";
import { RiDeleteBin6Line } from "react-icons/ri";

export class Side extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <img src={img2} alt="" className="imge" />
        <div className="tytop">
          <h5>Jenna side</h5>
          <h6>Web Desinger</h6>
        </div>
      </>
    );
  }
}

export class Sidemenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <Accordion flush id="total-acc" allowZeroExpanded>
          <Accordion.Item eventKey={this.props.evnt} id="acco-item">
            <Accordion.Header id="acco-head">
              {this.props.head}
            </Accordion.Header>
            <Accordion.Body>
              <ul>
                <li>
                  <Accordion id="inner-acco">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        {this.props.innerHead}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>
                            <div className="mb-3">
                              <Form.Check
                                type="checkbox"
                                id="checkbox"
                                label={this.props.innerOptionOne}
                              />
                            </div>
                          </li>
                          <li>{this.props.innerOptionTwo}</li>
                          <li>{this.props.innerOptionThree}</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </li>
                <li id="other-ul-child">
                  <Accordion id="inner-acco">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        {this.props.optionOne}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>{this.props.innerOptionOne}</li>
                          <li>{this.props.innerOptionTwo}</li>
                          <li>{this.props.innerOptionThree}</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </li>
                <li id="other-ul-child">
                  <Accordion id="inner-acco">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        {this.props.optionTwo}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>{this.props.innerOptionOne}</li>
                          <li>{this.props.innerOptionTwo}</li>
                          <li>{this.props.innerOptionThree}</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </li>
                <li id="other-ul-child">
                  <Accordion id="inner-acco">
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        {this.props.optionThree}
                      </Accordion.Header>
                      <Accordion.Body>
                        <ul>
                          <li>{this.props.innerOptionOne}</li>
                          <li>{this.props.innerOptionTwo}</li>
                          <li>{this.props.innerOptionThree}</li>
                        </ul>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                </li>
              </ul>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </>
    );
  }
}

export class Store extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className={this.props.classN}>
          <Container>
            <Row>
              <Col>
                <Row>
                  <Col lg={6}>{this.props.icon}</Col>
                  <Col lg={6}>
                    <p className="p1">{this.props.right}</p>
                    <p className={this.props.make}>{this.props.right1}</p>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>
      </>
    );
  }
}

export class Graph extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    const data = [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 5400,
      },
      {
        name: "Page B",
        uv: -2000,
        pv: 7398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: -2000,
        pv: -1900,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: -1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: -3800,
        amt: 2500,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
    ];

    return (
      <>
        <div className="  graphSize   makebox ">
          <p className="psize">Email Campaign Monitor</p>
          <hr className="lol" />
          <Row>
            <Col lg={12}>
              <div className="mt-lg-4 mb-lg-3">
                <BarChart
                  width={420}
                  height={120}
                  data={data}
                  margin={{
                    top: -200,
                    right: 30,
                    left: 30,
                    bottom: 0,
                  }}
                >
                  <Tooltip />

                  <ReferenceLine y={0} stroke="#000" />
                  <Bar
                    dataKey="pv"
                    fill="#5e7ddc
    "
                  />
                  <Bar dataKey="uv" fill="#e74a4a" />
                </BarChart>
              </div>
            </Col>
            <Col lg={6}>
              <div className="lheight">
                <p className="psize2">Subscribe</p>
                <p className="bs">6,478</p>
                <p className="chn">last Month</p>
              </div>
            </Col>
            <Col lg={6}>
              <div className="lheight">
                <p className="psize2">UnSubscribe</p>
                <p className="bs">1,784</p>
                <p className="chn">last 30 Month</p>
              </div>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export class SecondGraph extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const data1 = [
      {
        name: "Page A",
        uv: 4000,
        pv: 2400,
        amt: 2400,
      },
      {
        name: "Page B",
        uv: 3000,
        pv: 1398,
        amt: 2210,
      },
      {
        name: "Page C",
        uv: 2000,
        pv: 9800,
        amt: 2290,
      },
      {
        name: "Page D",
        uv: 2780,
        pv: 3908,
        amt: 2000,
      },
      {
        name: "Page E",
        uv: 1890,
        pv: 4800,
        amt: 2181,
      },
      {
        name: "Page F",
        uv: 2390,
        pv: 3800,
        amt: 2500,
      },
      {
        name: "Page G",
        uv: 3490,
        pv: 4300,
        amt: 2100,
      },
    ];

    return (
      <>
        <div className=" makebox me-lg-2  pb-lg-3">
          <p className="psize">Statictics</p>
          <hr className="lol" />
          <AreaChart
            width={780}
            height={247.5}
            data={data1}
            margin={{ top: 10, right: 30, left: 50, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </div>
      </>
    );
  }
}

export class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="square makebox ">
          {" "}
          <h5>Downloading</h5>
          <CircularProgressbar
            value={this.props.value}
            text={`${this.props.value}%`}
            className="makesmall orange"
          />
        </div>
      </>
    );
  }
}

export class Message extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { Message, Cname, paragraph, span, heading1, heading2, img } =
      this.props;
    return (
      <>
        {" "}
        <div className="{Cname}  makebox  makep">
          <h4>{Message}</h4>
          <div className="LLLMOVE1">
            <div className="messages">
              <div className="img">
                <img src={img} alt="" />
              </div>

              <div className="content">
                <h6>
                  {heading1}
                  <span>{span}</span>
                </h6>
                <p>{paragraph}</p>
              </div>
            </div>

            <div className="messages">
              <div className="img">
                <img src={img} alt="" />
              </div>

              <div className="content">
                <h6>
                  {heading2}
                  <span>{span}</span>
                </h6>
                <p>{paragraph}</p>
              </div>
            </div>

            <div className="messages">
              <div className="img">
                <img src={img} alt="" />
              </div>

              <div className="content">
                <h6>
                  {heading1}
                  <span>{span}</span>
                </h6>
                <p>{paragraph}</p>
              </div>
            </div>

            <div className="messages">
              <div className="img">
                <img src={img} alt="" />
              </div>

              <div className="content">
                <h6>
                  {heading2}
                  <span>{span}</span>
                </h6>
                <p>{paragraph}</p>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export class Task extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { Message, Cname, img, heading1, time1 } = this.props;

    return (
      <>
        <div className="{Cname} makebox ">
          <h4>{Message}</h4>
          <div className="LLLMOVE">
            <div className="messages">
              <div className="img">
                <img src={img} alt="" />
              </div>

              <div className="content">
                <h6>{heading1}</h6>
                <span>{time1}</span>
              </div>
            </div>

            <div className="messages mt-2">
              <div className="img">
                <img src={img} alt="" />
              </div>

              <div className="content">
                <h6>{heading1}</h6>
                <span>{time1}</span>
              </div>
            </div>

            <div className="messages mt-2">
              <div className="img">
                <img src={img} alt="" />
              </div>

              <div className="content">
                <h6>{heading1}</h6>
                <span>{time1}</span>
              </div>
            </div>

            <div className="messages mt-2">
              <div className="img">
                <img src={img} alt="" />
              </div>

              <div className="content">
                <h6>{heading1}</h6>
                <span>{time1}</span>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export class Activity extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { Message, Cname, img, heading1, heading2, heading3 } = this.props;

    return (
      <>
        <div className="{Cname} makebox">
          <h4>{Message}</h4>
          <div className="LLLMOVE3">
            <Row className="mt-3 dshift">
              <Col lg={4}>
                <div className="ttop">
                  <div className="ps-2">
                    <div className="img">
                      <img src={img} alt="" />
                    </div>
                  </div>

                  <div className="Activity ps-2 mt-3">
                    <div className="img">
                      <img src={img} alt="" />
                    </div>
                  </div>

                  <div className="Activity ps-2 mt-3">
                    <div className="img">
                      <img src={img} alt="" />
                    </div>
                  </div>

                  <div className="Activity ps-2 mt-3">
                    <div className="img">
                      <img src={img} alt="" />
                    </div>
                  </div>
                </div>
              </Col>

              <Col lg={8} className="ps-0">
                <div className="content1">
                  <div className="texts">
                    <h6>{heading1}</h6>
                    <h6>{heading2}</h6>
                    <span>{heading3}</span>
                  </div>

                  <div className="texts mt-3">
                    <h6>{heading1}</h6>
                    <h6>{heading2}</h6>
                    <span>{heading3}</span>
                  </div>

                  <div className="texts mt-3">
                    <h6>{heading1}</h6>
                    <h6>{heading2}</h6>
                    <span>{heading3}</span>
                  </div>

                  <div className="texts mt-3">
                    <h6>{heading1}</h6>
                    <h6>{heading2}</h6>
                    <span>{heading3}</span>
                  </div>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </>
    );
  }
}

export class Tablepart extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <>
        <div className="makebox">
          <h2 className="aleft">Visitors</h2>
          <div className="shiftL  makebox1">
            <table className="tablemain">
              <thead>
                <tr>
                  <th>ID</th>
                  <th>VISITORS NAME</th>
                  <th>GENDER</th>
                  <th>STATUS</th>
                  <th>PHONE NUMBER</th>
                  <th>DATE</th>
                  <th>LOCATION</th>
                  <th>OPERATION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>#6754</td>
                  <td>Adam berry</td>
                  <td>Male</td>
                  <td>
                    <span className="text-bg">Normal</span>
                  </td>
                  <td>+12 34567890</td>
                  <td>10-10-2018</td>
                  <td>USA</td>
                  <td>
                    <HiOutlinePencil /> <BsFillFileEarmarkFill />{" "}
                    <MdOutlineDriveFolderUpload />
                    <RiDeleteBin6Line />
                  </td>
                </tr>

                <tr>
                  <td>#6754</td>
                  <td>Adam berry</td>
                  <td>Male</td>
                  <td>
                    {" "}
                    <span className="text-bg1">Normal</span>
                  </td>
                  <td>+12 34567890</td>
                  <td>10-10-2018</td>
                  <td>USA</td>
                  <td>
                    <HiOutlinePencil /> <BsFillFileEarmarkFill />{" "}
                    <MdOutlineDriveFolderUpload />
                    <RiDeleteBin6Line />
                  </td>
                </tr>

                <tr>
                  <td>#6754</td>
                  <td>Adam berry</td>
                  <td>Male</td>
                  <td>
                    {" "}
                    <span className="text-bg2">Normal</span>
                  </td>
                  <td>+12 34567890</td>
                  <td>10-10-2018</td>
                  <td>USA</td>
                  <td>
                    <HiOutlinePencil /> <BsFillFileEarmarkFill />{" "}
                    <MdOutlineDriveFolderUpload />
                    <RiDeleteBin6Line />
                  </td>
                </tr>

                <tr>
                  <td>#6754</td>
                  <td>Adam berry</td>
                  <td>Male</td>
                  <td>
                    {" "}
                    <span className="text-bg3">Normal</span>
                  </td>
                  <td>+12 34567890</td>
                  <td>10-10-2018</td>
                  <td>USA</td>
                  <td>
                    <HiOutlinePencil /> <BsFillFileEarmarkFill />{" "}
                    <MdOutlineDriveFolderUpload />
                    <RiDeleteBin6Line />
                  </td>
                </tr>

                <tr>
                  <td>#6754</td>
                  <td>Adam berry</td>
                  <td>Male</td>
                  <td>
                    <span className="text-bg4">Normal</span>
                  </td>
                  <td>+12 34567890</td>
                  <td>10-10-2018</td>
                  <td>USA</td>
                  <td>
                    <HiOutlinePencil /> <BsFillFileEarmarkFill />{" "}
                    <MdOutlineDriveFolderUpload />
                    <RiDeleteBin6Line />
                  </td>
                </tr>

                <tr>
                  <td>#6754</td>
                  <td>Adam berry</td>
                  <td>Male</td>
                  <td>
                    <span className="text-bg5">Normal</span>
                  </td>
                  <td>+12 34567890</td>
                  <td>10-10-2018</td>
                  <td>USA</td>
                  <td>
                    <HiOutlinePencil /> <BsFillFileEarmarkFill />{" "}
                    <MdOutlineDriveFolderUpload />
                    <RiDeleteBin6Line />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <br></br>
        </div>
      </>
    );
  }
}
