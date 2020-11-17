import React, { useEffect, useState } from "react";
import styled from "styled-components";
import connect from "../services/FhirClient";

/**
 * Use Styled-components to create easy styling
 * https://github.com/styled-components/styled-components
 */
const Container = styled.div`
  display: flex;
  margin: 2rem;
  justify-content: center;
`;

const Box = styled.div`
  padding: 5px;
  flex: 1;
`;

const TextArea = styled.textarea`
  width: 100%;
`;

/**
 * Functional components return JSX to render.
 */
function App() {
  const [client, setClient] = useState({});
  const [patient, setPatient] = useState();

  /**
   * useEffect is where we can make API calls
   */
  useEffect(() => {
    const fetchData = async () => {
      try {
        const client = await connect();
        setClient(client);
        console.log(JSON.stringify(client));

        /* Fetch the Patient and other resources here using FhirClient */

        // const patient = await client.request(`Patient/${client.patient.id}`);

        /* use setState to store it in the component state */

        // setPatient(patient);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Box>
        <h1>FHIR App Starter</h1>
        <p>Quick links:</p>
        <ul>
          <li>
            <a href="launch.html?launch=eyJhIjoiMSIsImYiOiIxIn0&iss=https%3A%2F%2Flaunch.smarthealthit.org%2Fv%2Fr4%2Ffhir">
              Simulate EHR Launch
            </a>
          </li>

          <li>
            <a href="http://hl7.org/fhir/smart-app-launch/">
              SMART on FHIR HL7 documentation
            </a>
          </li>
          <li>
            <a href="https://reactjs.org/tutorial/tutorial.html">
              React tutorial
            </a>
          </li>
        </ul>
        {client ? (
          <TextArea rows={20} value={JSON.stringify(client)} disabled />
        ) : null}
      </Box>
      <Box>
        {/* Render resources */}
        {/* <TextArea
          rows={30}
          value={JSON.stringify(patient, null, 2)}
        /> */}
      </Box>
    </Container>
  );
}

export default App;
