import React, { Component } from 'react';
import { Card, Elevation, Tag,Intent} from "@blueprintjs/core";
import MediaQuery from 'react-responsive';


class Element extends Component {

    render() {
      return (
        <div>
          <MediaQuery minWidth={768}>
            <Card className="cvCard" style={{background: this.props.color}} interactive={true} elevation={Elevation.ONE}>
              <div>
                <table  className="pt-html-table">
                  <thead>
                    <tr style={{}}>
                      <th style={{borderRight: '1px solid #4F5C68',width: '150px' }}><h4>{this.props.year}</h4></th>
                      <th style={{borderRight: '1px solid #4F5C68', width: '700px', minWidth:'30%'}}><h4>{this.props.title}</h4></th>
                      <th>Tag</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr >
                      <td style={{borderRight: '1px solid #4F5C68',width: '150px'}}><h5><i>Description</i></h5></td>
                      <td style={{borderRight: '1px solid #4F5C68', width: '700px', minWidth:'30%'}}><p>{this.props.desc}</p></td>
                      <td style={{width: '150px'}}>
                        {this.props.characteristic.map((element,i) => {
                          return <Tag key={i} interactive={true} intent={Intent.WARNING} className=".pt-intent-success" style={{margin:'2px'}}>{element} </Tag>
                        })}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </MediaQuery>


          <MediaQuery maxWidth={767}>
            <Card className="cvCard" style={{borderBottom: '1px solid black', background: this.props.color}} interactive={true} elevation={Elevation.ONE}>
              <div>
              <h4>{this.props.title}</h4>
                <table  className="pt-html-table">
                   
                  <tbody>
                    <tr >
                      <td style={{borderBottom: '1px solid rgba(201,207,211, 0.2)'}}><h4>Year</h4></td>
                      <td style={{width: '80vw', borderBottom: '1px solid rgba(201,207,211, 0.2)'}}><h5>{this.props.year}</h5></td>
                    </tr>
                    <tr>
                      <td style={{borderBottom: '1px solid rgba(201,207,211, 0.2)'}}><h5><i>Description</i></h5></td>
                      <td style={{width: '80vw', borderBottom: '1px solid rgba(201,207,211, 0.2)'}}><h5>{this.props.desc}</h5></td>
                    </tr>
                    <tr>
                      <td><h5 ><i >Tag</i></h5></td>
                      <td style={{width: '80vw'}}>
                          {this.props.characteristic.map((element,i) => {
                            return <Tag key={i} interactive={true} intent={Intent.WARNING} className=".pt-intent-success" style={{margin:'2px'}}>{element} </Tag>
                          })}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </MediaQuery>
        </div>
      );
    }
  }
  
  export default Element;