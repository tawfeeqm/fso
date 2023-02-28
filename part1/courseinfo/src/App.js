const Header = (props) => {
  return (
    <h1>{props.course}</h1>
  )
}

const Part = (props) => {
    return (
    <p>
      {props.name} {props.exercises}
    </p>
    );
};

const Content = (props) => { 
  const parts = props.parts;
  return (
    <div>
      <Part name={parts[0].name} exercises={parts[0].exercises}/>
      <Part name={parts[1].name} exercises={parts[1].exercises}/>
      <Part name={parts[2].name} exercises={parts[2].exercises}/>
    </div>
  )
}

const Total = (props) => {
  const parts = props.parts;
  const total = parts.reduce((total, part) => total + part.exercises, 0);
  return <p>Number of exercises {total}</p>
}
 
function App() {
  const course = 'Half Stack application development';
  const allParts = [    
    { name: 'Fundamentals of React', exercises: 10 },
    { name: 'Using props to pass data', exercises: 7 },
    { name: 'State of a component', exercises: 14 }
  ]
  return (
    <div>
    <Header course={course} />
    <Content parts={allParts} />
      <Total parts={allParts} />
    </div>
  );
}

export default App;
