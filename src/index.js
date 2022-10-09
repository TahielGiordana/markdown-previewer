import React from "react";
import ReactDOM from "react-dom/client";
import { marked } from "marked";
import styles from "./styles.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "",
    };
    this.handleChangeEditor = this.handleChangeEditor.bind(this);
  }

  componentDidMount() {
    this.setState({
      content:
        "# Hola\n" +
        "## Mundo\n" +
        "[link]()\n" +
        "\n`console.log('Hello World!')`\n" +
        "```\nfunction log(text){\nconsole.log(text);\n}\n```" +
        "\n- List:\n    - Item1\n   - Item2" +
        "\n > BlockQuote\n" +
        "\n ![Image](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg)\n" +
        "\n **Bold Text**",
    });
  }

  handleChangeEditor(e) {
    this.setState({
      content: e.target.value,
    });
  }

  render() {
    return (
      <div className="app-wrapper">
        <Editor
          content={this.state.content}
          onChangeEditor={this.handleChangeEditor}
        />
        <Previewer
          content={marked.parse(this.state.content, { breaks: true })}
        />
      </div>
    );
  }
}

class Editor extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="editor-wrapper wrapper">
        <h2>Editor</h2>
        <textarea
          id="editor"
          value={this.props.content}
          onChange={this.props.onChangeEditor}
        ></textarea>
      </div>
    );
  }
}

class Previewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log(this.props.content);
    return (
      <div className="preview-wrapper wrapper">
        <h2>Previewer</h2>
        <div
          id="preview"
          dangerouslySetInnerHTML={{ __html: this.props.content }}
        ></div>
      </div>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
