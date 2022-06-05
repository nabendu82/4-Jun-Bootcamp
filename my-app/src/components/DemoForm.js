import React, { Component } from 'react'

class DemoForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userId: '',
            title: '',
            body: ''
            // language: 'vue'
        }
    }

    handleUserIdChange = e => {
        this.setState({
            userId: e.target.value
        })
    }

    handleTitleChange = e => {
        this.setState({
            title: e.target.value
        })
    }

    handleBodyChange = e => {
        this.setState({
            body: e.target.value
        })
    }

    handleSubmit = async e => {
        e.preventDefault();
        const url = 'https://jsonplaceholder.typicode.com/posts';
        const settings = {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state)
        }
        const res = await fetch(url, settings);
        const data = await res.json();
        console.log(data);
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label htmlFor="userId">UserId </label>
                    <input type="text" id="userId" value={this.state.userId} onChange={this.handleUserIdChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="title">Title </label>
                    <input type="text" id="title" value={this.state.title} onChange={this.handleTitleChange} />
                </div>
                <br />
                <div>
                    <label htmlFor="body">Body </label>
                    <textarea id="body" value={this.state.body} onChange={this.handleBodyChange}></textarea>
                </div>
                <br />
                {/* <div>
                    <label htmlFor="language">Language</label>
                    <select id="language" value={this.state.language} onChange={this.handleLangChange}>
                        <option value="react">React</option>
                        <option value="vue">Vue</option>
                        <option value="angular">Angular</option>
                    </select>
                </div> */}
                <br />
                <div>
                    <button type='submit'>Submit</button>
                </div>
            </form>
        )
    }
}

export default DemoForm
