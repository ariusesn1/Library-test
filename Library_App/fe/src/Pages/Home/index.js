import { Fragment, useEffect, useState } from "react";

function Home() {
    const [data,setData] = useState([])
    useEffect(()=>{
      fetch('http://localhost:8081/authors')
      .then(res => res.json())
      .then(data => setData(data))
      .then(data => console.log(data))
      .catch(err => console.log(err))
    }, [])
    return ( <Fragment>
          <h1>Home Page</h1>
          <div style={{"padding":"50px"}}>
            <table>
                <thead>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Nationality</th>
                </thead>
                <tbody>
                    {data.map((d,i) => (
                        <tr key={i}>
                            <td>{d.id}</td>
                            <td>{d.name}</td>
                            <td>{d.nationality}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
          </div>
    </Fragment> );
}

export default Home;