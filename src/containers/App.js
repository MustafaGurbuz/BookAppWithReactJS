import React, { Component } from 'react';
import {
  Table, Button, Modal, ModalHeader, ModalBody, ModalFooter, Input,
  FormGroup, Label, InputGroup, InputGroupAddon, InputGroupText
} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import PostData from '../components/json/kitap.json';


/*const fs = require('file-system');
var data = fs.readFileSync('yazar.json');
var dt=fs.readFileSync('kitap.json');
var dat=fs.readFileSync('yayinevi.json');
var yayin=JSON.parse(dat);
var kitap=JSON.parse(dt);
var yazar=JSON.parse(data);*/

class App extends Component {
  state = {
    books: [],
    newBookData: {
      title: '',
      author: '',
      publisher: ''
    },
    newBookModal: false
  }
  toggleNewBookModal() {
    this.setState({
      newBookModal: !this.state.newBookModal
    });
  }
  addBook() {
  }
  updateSearch(event) {
    this.setState({ title: event.target.value.substr(0, 20) });
  }
  render() {
    let filteredContents = PostData.filter((search) => {
      return search.title.indexOf(this.state.title) !== -1;
    });

    return (
      <div className="App">
        <InputGroup size="lg" onChange={this.updateSearch.bind(this)}
          value={this.state.newBookData}>
          <InputGroupAddon addonType="prepend">
            <InputGroupText>?</InputGroupText>
          </InputGroupAddon>
          <Input placeholder="search" />
          <Button color="primary" size="lg" onClick={this.toggleNewBookModal.bind(this)}>Add Book</Button>
        </InputGroup>

        <Modal isOpen={this.state.newBookModal} toggle={this.toggleNewBookModal.bind(this)} >
          <ModalHeader toggle={this.toggleNewBookModal.bind(this)}>Add a new Book</ModalHeader>
          <ModalBody>
            <FormGroup>
              <Label for="title">Title</Label>
              <Input type="text" id="title" value={this.state.newBookData.title} onChange={(e) => {
                let { newBookData } = this.state;
                newBookData.title = e.target.value;
                this.setState({ newBookData });
              }} />
            </FormGroup>
            <FormGroup>
              <Label for="author">Author</Label>
              <Input type="text" id="author" value={this.state.newBookData.author} onChange={(e) => {
                let { newBookData } = this.state;
                newBookData.author = e.target.value;
                this.setState({ newBookData });
              }} />
            </FormGroup>
            <FormGroup>
              <Label for="publisher">Publishing House</Label>
              <Input type="text" id="publisher" value={this.state.newBookData.publisher} onChange={(e) => {
                let { newBookData } = this.state;
                newBookData.publisher = e.target.value;
                this.setState({ newBookData });
              }} />
            </FormGroup>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={this.addBook.bind(this)}>Add Book</Button>{' '}
            <Button color="secondary" onClick={this.toggleNewBookModal.bind(this)}>Cancel</Button>
          </ModalFooter>
        </Modal>
        <Table>
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Author</th>
              <th>Publishing House</th>
              <th>Actions</th>
            </tr>
          </thead>

          {filteredContents.map((postDetail, index) => {
            return <tbody>
              <tr>
                <td>{postDetail.id}</td>
                <td>{postDetail.title}</td>
                <td>{postDetail.author}</td>
                <td>{postDetail.publisher}</td>
                <td>
                  <Button color="success" size="sm" className="mr-2">Edit</Button>
                  <Button color="danger" size="sm">Delete</Button>
                </td>
              </tr>
            </tbody>

          })}
        </Table>
      </div>
    );
  }
}

export default App;
