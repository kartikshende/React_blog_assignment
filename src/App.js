import React from 'react';

import './App.css';
import background from './img/logo.svg';
import PostView from './componets/Post_view';
import PostBlogs from './componets/Post';
import { Paper } from '@material-ui/core';


class App extends React.Component {

  render() {

    //const classes = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <img src={background} className="App-logo" alt="logo" />
        </header>

        <div className="container">

          <Paper  >
            <PostBlogs />
          </Paper>

          <Paper  >

            <PostView />

          </Paper>
        </div>

      </div>
    );
  }

}

export default App;




// componentDidMount = async () => {
// //, {headers: {'token': 'pj11daaQRz7zUIH56B9Z'}}   
//     const instance = axios.create({
//       baseURL: url,
//       timeout: 1000,
//       headers: {'token': 'pj11daaQRz7zUIH56B9Z'}
//     });
//     instance.get(url)
//         .then(res => {
//             this.setState({
//                 blogs: res.data
//             });
//             console.log(res.data);
//         })
// }