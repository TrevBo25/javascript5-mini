import React from 'react';
import {Link} from 'react-router-dom';

const Home = () => {
  const styles = {
    button: {
      "backgroundColor": "black",
      "color": "white",
      "border": "none",
      "margin": "10px",
      "fontSize": "20px",
      "padding": "10px",
      "cursor": "pointer",
      "borderRadius": "3px"
    },
    title: {

    }
  }
  return (
    <div>
      <h1 style={styles.title}>JAVASCRIPT 5 MINI</h1>
      <div>
        <Link to="/app1"><button style={styles.button}>APP1</button></Link>
        <Link to="/app2"><button style={styles.button}>APP2</button></Link>
        <Link to="/app3"><button style={styles.button}>APP3</button></Link>
        <Link to="/app4"><button style={styles.button}>APP4</button></Link>
      </div>
    </div>
  )
}

export default Home;