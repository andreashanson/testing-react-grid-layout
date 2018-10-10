import React, { Component } from 'react';
import './css/App.css';
import '../node_modules/react-grid-layout/css/styles.css';
import '../node_modules/react-resizable/css/styles.css';
import RGL, { WidthProvider } from 'react-grid-layout';
import WidgetLayout from './Components/WidgetLayout';
import Menu from './Components/Menu';
import WidgetHeader from './Components/WidgetHeader';
import WidgetFooter from './Components/WidgetFooter';
import ToolbarMenu from './Components/ToolbarMenu';
import WidgetModal from './Components/WidgetModal';

const GridLayout = WidthProvider(RGL);

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      id: 1,
      customer_id: 2,
      widgets: [],
      system: {system: "", version: ""},
      position: {},
      user_details: {},
      show_widget_modal: false

    }
  }

  
  componentDidMount() {
    var id = this.state.id;
    fetch("http://localhost:8080/user/" + id + "/", {method: "GET"}).then(res => res.json()).then(
      (result) => {
        this.setState({
          isLoaded: true,
          widgets: result.widgets,
          user_details: result.user_details
        });
      },
      (error) => {
        this.setState({
          isLoaded: true,
          error
        });
      }
    )
  }


  addWidget = (type, grid) => {
    let widgets = this.state.widgets;
    let keys = this.state.widgets.map(widget => {
      return parseInt(widget.id, 10);
    });

    var newKey;

    if (keys.length===0) {
      newKey = 0;
    }
    else {
      newKey = Math.max(...keys)+1;
    }

    newKey = newKey.toString();

    let newWidget = {type: type, id: newKey, visiblebody: true, layout: {i: newKey, x: grid.x, y: grid.y, w: grid.w, h: grid.h, moved: false, static: false, isDraggable: true, isResizable: true, maxH: grid.maxH, maxW: grid.maxW, minH: grid.minH, minW: grid.minW}}
    this.state.widgets.push(newWidget);
    this.setState({
      widgets: widgets
    });
  }


  removeWidget = (id) => {
    var newWidgetList = this.state.widgets;
    this.state.widgets.forEach(function(widget, i) {
      if (widget.id === id) {
        newWidgetList.splice(i, 1);
      }
    });
    this.setState({
      widgets: newWidgetList
    });
  }

  minifyWidget = (id) => {
    var changedWidget = this.state.widgets;
    this.state.widgets.forEach(function(widget, i) {
      if (widget.id === id) {
        if (changedWidget[i].visiblebody) {
          changedWidget[i].visiblebody = false;
        }
        else {
          changedWidget[i].visiblebody = true;
        }
      }
    });
    this.setState({
          widgets: changedWidget
    });
  }
  

  save = () => {
    var widgets = this.state.widgets;
    var id = this.state.id
    var url = 'http://localhost:8080/user/' + id + '/';
    var data = {"widgets": widgets};

    fetch(url, {
      method: 'POST', // or 'PUT'
      body: JSON.stringify(data), // data can be `string` or {object}!
      headers: {
       'Content-Type': 'application/json'
      }
    }).then(res => res.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));
  }

  
  onLayoutChange = (layouts) => {
    var newWidgets = [];
    this.state.widgets.forEach(widget => {
      var newLayout = layouts.find(layout => layout.i === widget.id);
      widget.layout = newLayout;
      newWidgets.push(widget);
    });
    this.setState({
      widgets: newWidgets
    });
  }

  openWidgetModal = () => {
    this.setState({
      show_widget_modal: true
    })
  }

  closeWidgetModal = () => {
    this.setState({
      show_widget_modal: false
    })
  }


  render() {
    let widgets;
    widgets = this.state.widgets.map(widget => {
      return (
        <div id={widget.id} key={widget.id} data-grid={widget.layout} className="card">
            <WidgetHeader close={this.removeWidget} minify={this.minifyWidget} id={widget.id} type={widget.type} visibleBody={widget.visiblebody} />
            <WidgetLayout type={widget.type} visiblebody={widget.visiblebody} />
            <WidgetFooter />
        </div>
      )
    });
    if (this.state.show_widget_modal) {
      return (
        <div className="App">
          <Menu add={this.addWidget} save={this.save} user_details={this.state.user_details} openWidgetModal={this.openWidgetModal} />
            <div className="GridLayoutContainer">
            <ToolbarMenu save={this.save} userName={this.state.user_details.name} />
            <GridLayout className="layout" cols={20} rowHeight={50} width={1200} onLayoutChange={this.onLayoutChange}>
              {widgets}
            </GridLayout>
          </div>
          <div className="modal">
          <div className="WidgetModalContainer">
              <WidgetModal close={this.closeWidgetModal} user_details={this.state.user_details} add={this.addWidget} />
            </div></div>
        </div>
      )
    }
    else {
      return (
        <div className="App">
          <Menu add={this.addWidget} save={this.save} user_details={this.state.user_details} openWidgetModal={this.openWidgetModal} />
          <div className="GridLayoutContainer">
            <ToolbarMenu save={this.save} userName={this.state.user_details.name} />
            <GridLayout className="layout" cols={20} rowHeight={50} width={1200} onLayoutChange={this.onLayoutChange}>
              {widgets}
            </GridLayout>
          </div>
        </div>
      )
    }
  }
}


export default App;
