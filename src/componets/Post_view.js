import React from 'react';
import Api_Calls from './Api_Calls';


class PostView extends React.Component {

  state = {

    blogs: [],
    visible_blogs: 4,

  }

  componentDidMount = async () => {

    Api_Calls.posts('posts').getblogs()
      .then(res => {

        this.setState({
          blogs: res.data
        });
        console.log(res.data);
      })

  }



  loadmore = () => {
    this.setState({
      visible_blogs: this.state.visible_blogs + 2,
    });
  }

  render() {
    //const classes = this.props;


    return (

      <div className="container-post-view">
        <div className="container">

          {this.state.blogs.slice(0, this.state.visible_blogs).map((bloglist) => {
            var date = new Date(bloglist.created_at);

            return (
              <div key={bloglist.id} className="card">

                <div className="card-container-1">
                  <img src={bloglist.img_url} alt={bloglist.img_url} />

                  <div className="bottomleft">
                    <p>{date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear()}
                    </p>
                  </div>
                  <div className="bottomright">
                    {bloglist.category == null || null ?
                      <p>Null</p>
                      :
                      <p>{bloglist.category.name}</p>

                    }
                  </div>

                </div>

                <div className="card-container-2">
                  <h1>
                    {bloglist.title}
                  </h1>
                  <p>
                    {bloglist.content}
                  </p>
                </div>

              </div>


            );
          }
          )}
        </div >
        <div className="button-div">
          <button onClick={this.loadmore} className="buttonC" >
            Meer laden
              </button>
        </div>
      </div>
    );
  }

}

export default PostView;



// componentDidMount = async () => {

//       axios.get(url, {headers: {'token': `${token}`}})
//           .then(res => {

//               this.setState({
//                   blogs: res.data
//               });
//               console.log(res.data);
//           })

//   }
