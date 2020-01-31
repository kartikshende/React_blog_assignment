import React from 'react';
import Api_Calls from './Api_Calls';


import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Typography from '@material-ui/core/Typography';


class PostBlogs extends React.Component {

  state = {

    blogsCategory: [],
    valueSelect: null,
  }

  componentDidMount = async () => {

    Api_Calls.posts('categories').getblogs()
      .then(res => {

        this.setState({
          blogsCategory: res.data
        });
        console.log(res.data);
      })

  }


  onhandleSelect = (value) => {

    this.setState({ valueSelect: value });
    console.log(value)
  };


  onhandleSubmit = async (e) => {
    e.preventDefault();
    const postname = e.target.elements.postname.value;
    const postcategorie = this.state.valueSelect;
    const postcontent = e.target.elements.postcontent.value;

    const blogpost = {
      title: postname,
      content: postcontent,
      category_id: postcategorie,
    };

    Api_Calls.posts('posts').postBlogs(blogpost)
      .then(res => {
        console.log(res.data);
      })
  }


  render() {
    const { valueSelect } = this.state;

    return (

      <div className="post-blog-container">

        <form onSubmit={this.onhandleSubmit}>
          <div >

            <Typography variant="h6" color="textSecondary"> Berichtnaam</Typography>

            <TextField
              id="Berichtnaam"
              name="postname"
              placeholder="Placeholder"
              fullWidth
              variant="filled"
            />
          </div>
          <div>

            <Typography variant="h6" color="textSecondary">Categorie</Typography>
            <TextField
              id="selectcat"
              name="selectcat"
              select
              label="Geen categorie"
              value={valueSelect}
              onChange={event => this.onhandleSelect(event.target.value)}
              fullWidth
              variant="filled"
            >
              {this.state.blogsCategory.map(option => (
                <MenuItem key={option.id} value={option.id}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div>
            <Typography variant="h6" color="textSecondary">Bericht</Typography>

            <TextField
              id="postcontent"
              name="postcontent"
              multiline
              rows="25"
              fullWidth
              variant="filled"             
            />
          </div>
          <div className="button-div">
            <button className="buttonC" >
              Bericht aanmaken
              </button>
          </div>
        </form>
      </div>
    );
  }

}

export default PostBlogs;
