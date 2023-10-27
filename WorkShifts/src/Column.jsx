import "./Column.css";

export default function Column({ title, content }) {
  return (
    <table>
      <Header title={title}></Header>
      {content.map((c) => (
        <Content content={c}></Content>
      ))}
    </table>
  );
}

function Content({ content }) {
  return (
    <tbody>
      <tr>
        <td>{content}</td>
      </tr>
    </tbody>
  );
}

function Header({ title }) {
  return (
    <thead>
      <tr>
        <td>{title}</td>
      </tr>
    </thead>
  );
}
