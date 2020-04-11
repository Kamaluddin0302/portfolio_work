import React from "react";
import Paper from "@material-ui/core/Paper";
import PermanentDrawerLeft from "../../components/navbar/navbar";
import "./home.css";
import Grid from "@material-ui/core/Grid";

import {
  SamaData,
  NayaDuarEnglishData,
  NayaDuarUrduData,
  SindhiCourierData,
  SindhExpressData,
  KawishData,
  HumSubData,
  DailyTimeData,
} from "./../../confige/function";
import { Link } from "@material-ui/core";

export default class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  async componentDidMount() {
    let login = await localStorage.getItem("login");
    console.log(login);
    if (!login) {
      console.log(login);
      login = JSON.parse(login);
      this.props.history.push("/");
    }
    let Sama = await SamaData();
    let NayaDuarEnglidh = await NayaDuarEnglishData();
    let NayaDuarUrdu = await NayaDuarUrduData();
    let SindhiCourier = await SindhiCourierData();
    let SindhExpress = await SindhExpressData();
    let Kawish = await KawishData();
    let HumSub = await HumSubData();
    let DailyTime = await DailyTimeData();
    this.setState({
      Sama,
      NayaDuarEnglidh,
      NayaDuarUrdu,
      SindhiCourier,
      SindhExpress,
      Kawish,
      HumSub,
      DailyTime,
    });
  }

  render() {
    console.log(this.props);
    return (
      <div>
        <PermanentDrawerLeft
          history={this.props.history}
          title="My journalistic portfolio"
          content={
            <div>
              {this.state.Sama ? (
                <>
                  <h1>Sama</h1>
                  {this.state.Sama.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" ,color: "blue"}}
                        target="_blank"
                      >
                        {v.title}
                      </a>
                    </>
                  ))}
                </>
              ) : (
                <></>
              )}

              {this.state.NayaDuarEnglidh ? (
                <>
                  <h1>NayaDuarEnglidh</h1>
                  {this.state.NayaDuarEnglidh.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" }}
                        target="_blank"
                      >
                        {v.title}
                      </a>
                    </>
                  ))}
                </>
              ) : (
                <></>
              )}

              {this.state.NayaDuarUrdu ? (
                <>
                  <h1>NayaDuarUrdu</h1>
                  {this.state.NayaDuarUrdu.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" }}
                        target="_blank"
                      >
                        {v.title}
                      </a>
                    </>
                  ))}
                </>
              ) : (
                <></>
              )}

              {this.state.SindhiCourier ? (
                <>
                  <h1>SindhiCourier</h1>
                  {this.state.SindhiCourier.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" }}
                        target="_blank"
                      >
                        {v.title}
                      </a>
                    </>
                  ))}
                </>
              ) : (
                <></>
              )}

              {this.state.SindhExpress ? (
                <>
                  <h1>SindhExpress</h1>
                  {this.state.SindhExpress.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" }}
                        target="_blank"
                      >
                        {v.title}
                      </a>
                    </>
                  ))}
                </>
              ) : (
                <></>
              )}

              {this.state.Kawish ? (
                <>
                  <h1>Kawish</h1>
                  {this.state.Kawish.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" }}
                        target="_blank"
                      >
                        {v.title}
                      </a>
                    </>
                  ))}
                </>
              ) : (
                <></>
              )}

              {this.state.HumSub ? (
                <>
                  <h1>HumSub</h1>
                  {this.state.HumSub.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" }}
                        target="_blank"
                      >
                        {v.title}
                      </a>
                    </>
                  ))}
                </>
              ) : (
                <></>
              )}

              {this.state.DailyTime ? (
                <>
                  <h1>DailyTime</h1>
                  {this.state.DailyTime.map((v, i) => (
                    <>
                      <a
                        href={v.link}
                        style={{ display: "block" }}
                        target="_blank"
                      >
                        {v.title}
                      </a>
                    </>
                  ))}
                </>
              ) : (
                <></>
              )}
            </div>
          }
        />
      </div>
    );
  }
}
