import Image from "next/image";
export default function First(){
  return (
    <div>
      <h3>HELLO WORLD</h3>
      <p>
  I'm jadelim. born in winter of 2004. Maybe because of it, kinda blue thing is my favorite. 
</p>
      <p>Nothing related, anyway this is me about 3 years old.</p>
      <YourComponent />
      <a href="/">   back to home</a>
    </div>
  );
}
const YourComponent=()=>{
   return (
    <Image src="/images/profile1.jpg"
    height={1200} // Desired size with correct aspect ratio
    width={900} // Desired size with correct aspect ratio 
    alt="upload profile" />
);

};
