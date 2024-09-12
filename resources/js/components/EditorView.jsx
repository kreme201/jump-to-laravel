import MDEditor from "@uiw/react-md-editor";

export default function EditorView({ content }) {
    return <MDEditor.Markdown source={content} />;
}
