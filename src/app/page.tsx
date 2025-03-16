import Homepage from './Homepage/page'
import Connect from'./connect/page'
import Project from './project/page'
import Tools from './tools/page'

export default function Home() {
  return (
    <>
      <Homepage/>
      <Project/>
      <Tools/>
      <Connect/>
    </> 
  );
}
