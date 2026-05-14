import Image from "next/image";
import "../lib/home.css"
import "../lib/utils.css"

export default function Home() {
  return (
    <div>
      <h1>Daniel Boland</h1>
      <p> Hi, I am a Computer Science graduate from the University of Akron.
        I enjoy gridning out leetcodes, pulling all nighters trying to learn new frameworks
        and learning as much as possible about writing clean effecient code.
      </p>
      <button className="btn">My GitHub</button>
    </div>
  );
}
