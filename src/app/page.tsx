'use client';

import { useState } from "react";
import Alert from "./components/alert";
import Button from "./components/button";
import HelloWorld from "./components/helloWorld";
import Menu from "./components/navigation";

export default function Home() {
  const items = [ 'Main', 'About', 'Talk With Us', 'Ho We Are' ];
  const items2 = [ 'Australia', 'Brazil', 'USA', 'Japan' ];
  const handleSelectItem = (item: string) => {
    console.log(item);
  }
  const [alertVisibile, setAlertVisibility] = useState(false);
  return (
    <>
      <HelloWorld />
      { alertVisibile && <Alert close={() => {setAlertVisibility(false)}}>Alert <span>Example</span></Alert> }
      <Button clicked={() => {setAlertVisibility(true)}} color="success">OK</Button>
      <Menu items={items} heading="Main Menu" onSelectItem={handleSelectItem} />
      <br />
      <Menu items={items2} heading="Countries" onSelectItem={handleSelectItem} />
    </>
  )
}
