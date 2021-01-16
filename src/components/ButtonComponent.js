import React from "react";

import Button from "@material-ui/core/Button";

function AboutComponent() {
  
  const handleDisplay1 = () => {
    alert("Default button");
  };
  const handleDisplay2 = () => {
    alert("Primary button");
  };
  const handleDisplay3 = () => {
    alert("Secondary button");
  };
 
  return (
    <div style={{ padding: "20px" }}>
      <Button variant="outlined" style={{margin:'5px'}} onClick={handleDisplay1}>
        Default
      </Button>
      <Button variant="outlined" color="primary" onClick={handleDisplay2} style={{margin:'5px'}}>
        Primary
      </Button>
      <Button variant="outlined" color="secondary" onClick={handleDisplay3} style={{margin:'5px'}}>
        Secondary
      </Button>
      <Button variant="outlined" disabled  style={{margin:'5px'}}>
        Disabled
      </Button>
    </div>
  );
}

export default AboutComponent;
