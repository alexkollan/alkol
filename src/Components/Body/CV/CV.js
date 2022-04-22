import React, { Component } from "react";
import { Button, Card, Elevation, ButtonGroup, Intent, Popover, Menu, MenuItem, MenuDivider, Icon } from "@blueprintjs/core";
import Element from "./Element";
import timeline from "../../../data/timeline.json";
import MediaQuery from "react-responsive";
import CVlayout from "./CVlayout";
import useAnalyticsEventTracker from "../../ga/useAnalyticsEventTracker";
const gaEventTracker = useAnalyticsEventTracker("CV Page");
class CV extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: "",
    };
  }

  componentWillMount() {
    // this.renderAll();
    this.initialize();
    this.displayCV();
  }

  renderAll = () => {
    gaEventTracker("Timeline_Click", "Button");
    let allEvents = [];
    Object.keys(timeline).map((item, key) => {
      switch (timeline[item].characteristic[0]) {
        case "education":
          allEvents.push(
            <Element color="#095256" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
          );
          break;
        case "hobbies":
          allEvents.push(
            <Element color="#005B4B" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
          );
          break;
        case "life":
          allEvents.push(
            <Element color="#087F8C" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
          );
          break;
        case "work":
          allEvents.push(
            <Element color="#022B3A" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
          );
          break;
        case "athletics":
          allEvents.push(
            <Element color="#005B4B" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
          );
          break;
        case "creative":
          allEvents.push(
            <Element color="#005B4B" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
          );
          break;
        case "it":
          allEvents.push(
            <Element color="#022B3A" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
          );
          break;
        case "other":
          allEvents.push(
            <Element color="#022B3A" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
          );
          break;
        case "school":
          allEvents.push(
            <Element color="#095256" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
          );
          break;
        default:
          allEvents.push(<Element key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />);
          break;
      }
      return true;
    });

    this.setState({
      cards: allEvents,
    });
  };

  sort = (characteristic, menu) => {
    let allEvents = [];
    Object.keys(timeline).map((item, key) => {
      for (let i = 0; i < timeline[item].characteristic.length; i++) {
        if (timeline[item].characteristic[i] === characteristic) {
          switch (timeline[item].characteristic[menu]) {
            case "education":
              allEvents.push(
                <Element color="#095256" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
              );
              break;
            case "hobbies":
              allEvents.push(
                <Element color="#005B4B" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
              );
              break;
            case "life":
              allEvents.push(
                <Element color="#087F8C" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
              );
              break;
            case "work":
              allEvents.push(
                <Element color="#022B3A" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
              );
              break;
            case "athletics":
              allEvents.push(
                <Element color="#005B4B" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
              );
              break;
            case "creative":
              allEvents.push(
                <Element color="#005B4B" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
              );
              break;
            case "it":
              allEvents.push(
                <Element color="#022B3A" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
              );
              break;
            case "other":
              allEvents.push(
                <Element color="#022B3A" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
              );
              break;
            case "higher":
              allEvents.push(
                <Element color="#095256" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
              );
              break;
            case "school":
              allEvents.push(
                <Element color="#095256" key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />
              );
              break;
            default:
              allEvents.push(<Element key={key} characteristic={timeline[item].characteristic} year={timeline[item].year} title={timeline[item].title} desc={timeline[item].description} />);
              break;
          }
        }
      }
      return true;
    });
    this.setState({
      cards: allEvents,
    });
    console.log("Sorting Cards...");
  };
  displayCV = () => {
    this.setState({
      cards: <CVlayout />,
    });
  };
  initialize = () => {
    this.setState({
      cards: "",
    });
  };
  taketimeline = () => {
    console.log(this.state.cards);
  };

  render() {
    return (
      <div>
        <h5>{this.state.mytimeline}</h5>
        <MediaQuery minWidth={768}>
          <ButtonGroup style={{ marginTop: "20px" }}>
            <Button active icon="sort" rightIcon="caret-right" text="Sort by:" />
            <Button className="cvButtonCV" onClick={this.taketimeline} text="CV" icon={<Icon icon="code" color="#DDD5CA" />} onClick={this.displayCV} />
            <Button className="cvButtonTime" onClick={this.renderAll} icon={<Icon icon="timeline-events" color="#DDD5CA" />} text="Timeline" />
            <Button className="cvButtonEdu" onClick={() => this.sort("education", 0)} icon={<Icon icon="book" color="#DDD5CA" />} text="Education" />
            <Popover
              minimal
              content={
                <Menu className="cvButtonMenuEdu" intent={Intent.DANGER}>
                  <MenuItem onClick={() => this.sort("school", 1)} intent={Intent.DANGER} text={"School"} icon={<Icon icon="edit" color="#DDD5CA" />} />
                  <MenuDivider />
                  <MenuItem onClick={() => this.sort("higher", 1)} intent={Intent.DANGER} text={"Higher Education"} icon={<Icon icon="book" color="#DDD5CA" />} />
                </Menu>
              }>
              <Button className="cvButtonEdu" icon={<Icon icon="caret-down" color="#DDD5CA" />} />
            </Popover>
            <Button className="cvButtonLife" onClick={() => this.sort("life", 0)} icon={<Icon icon="pulse" color="#DDD5CA" />} text="Life Events" color="#DDD5CA" />
            <Button className="cvButtonWork" onClick={() => this.sort("work", 0)} icon={<Icon icon="briefcase" color="#DDD5CA" />} text="Work" color="#DDD5CA" />
            <Popover
              minimal
              content={
                <Menu className="cvButtonMenuWork" intent={Intent.SUCCESS}>
                  <MenuItem onClick={() => this.sort("it", 1)} intent={Intent.WARNING} text={"IT Related"} icon={<Icon icon="code" color="#DDD5CA" />} />
                  <MenuDivider />
                  <MenuItem onClick={() => this.sort("other", 1)} intent={Intent.WARNING} text={"Other"} icon={<Icon icon="office" color="#DDD5CA" />} />
                </Menu>
              }>
              <Button className="cvButtonWork" icon={<Icon icon="caret-down" color="#DDD5CA" />} />
            </Popover>

            <Button className="cvButtonHob" onClick={() => this.sort("hobbies", 0)} icon={<Icon icon="lightbulb" color="#DDD5CA" />} text="Hobbies" />
            <Popover
              minimal
              content={
                <Menu className="cvButtonMenuHob" intent={Intent.SUCCESS}>
                  <MenuItem onClick={() => this.sort("athletics", 1)} intent={Intent.SUCCESS} text={"Atheltics"} icon={<Icon icon="walk" color="#DDD5CA" />} />
                  <MenuDivider />
                  <MenuItem onClick={() => this.sort("creative", 1)} intent={Intent.SUCCESS} text={"Creative"} icon={<Icon icon="predictive-analysis" color="#DDD5CA" />} />
                </Menu>
              }>
              <Button className="cvButtonHob" icon={<Icon icon="caret-down" color="#DDD5CA" />} />
            </Popover>
          </ButtonGroup>
          <Card className="cvCardContainer" interactive={false} elevation={Elevation.ONE}>
            {this.state.cards}
          </Card>
        </MediaQuery>

        <MediaQuery maxWidth={767}>
          <Button active fill icon="sort" style={{ marginTop: "-20px", fontSize: "0.9em", borderRadius: "0px" }} rightIcon="caret-right" text="Sort by:" />
          <ButtonGroup className="cvButtons" fill style={{ marginTop: "0px", borderRadius: "0px" }}>
            <Button className="cvButtonCV" onClick={this.taketimeline} icon={<Icon icon="code" color="#DDD5CA" />} onClick={this.displayCV} />
            <Button className="cvButtonTime" onClick={this.renderAll} icon={<Icon icon="timeline-events" color="#DDD5CA" />} />
            <Button className="cvButtonEdu" onClick={() => this.sort("education", 0)} icon={<Icon icon="book" color="#DDD5CA" />} />
            <Popover
              minimal
              content={
                <Menu className="cvButtonMenuEdu" intent={Intent.DANGER}>
                  <MenuItem onClick={() => this.sort("school", 1)} intent={Intent.DANGER} text={"School"} icon={<Icon icon="edit" color="#DDD5CA" />} />
                  <MenuDivider />
                  <MenuItem onClick={() => this.sort("higher", 1)} intent={Intent.DANGER} text={"Higher Education"} icon={<Icon icon="book" color="#DDD5CA" />} />
                </Menu>
              }>
              <Button className="cvButtonEdu" icon={<Icon icon="caret-down" color="#DDD5CA" />} />
            </Popover>
            <Button className="cvButtonLife" onClick={() => this.sort("life", 0)} icon={<Icon icon="pulse" color="#DDD5CA" />} />
            <Button className="cvButtonWork" onClick={() => this.sort("work", 0)} icon={<Icon icon="briefcase" color="#DDD5CA" />} />
            <Popover
              minimal
              content={
                <Menu className="cvButtonMenuWork" intent={Intent.SUCCESS}>
                  <MenuItem onClick={() => this.sort("it", 1)} intent={Intent.WARNING} text={"IT Related"} icon={<Icon icon="code" color="#DDD5CA" />} />
                  <MenuDivider />
                  <MenuItem onClick={() => this.sort("other", 1)} intent={Intent.WARNING} text={"Other"} icon={<Icon icon="office" color="#DDD5CA" />} />
                </Menu>
              }>
              <Button className="cvButtonWork" icon={<Icon icon="caret-down" color="#DDD5CA" />} />
            </Popover>

            <Button className="cvButtonHob" onClick={() => this.sort("hobbies", 0)} icon={<Icon icon="lightbulb" color="#DDD5CA" />} />
            <Popover
              minimal
              content={
                <Menu className="cvButtonMenuHob" intent={Intent.SUCCESS}>
                  <MenuItem onClick={() => this.sort("athletics", 1)} intent={Intent.SUCCESS} text={"Atheltics"} icon={<Icon icon="walk" color="#DDD5CA" />} />
                  <MenuDivider />
                  <MenuItem onClick={() => this.sort("creative", 1)} intent={Intent.SUCCESS} text={"Creative"} icon={<Icon icon="predictive-analysis" color="#DDD5CA" />} />
                </Menu>
              }>
              <Button className="cvButtonHob" icon={<Icon icon="caret-down" color="#DDD5CA" />} />
            </Popover>
          </ButtonGroup>
          <Card className="cvCardContainer" interactive={false} elevation={Elevation.ONE}>
            {this.state.cards}
          </Card>
        </MediaQuery>
      </div>
    );
  }
}

export default CV;
