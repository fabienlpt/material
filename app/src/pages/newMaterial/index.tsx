import React, {useState} from 'react';
import { useNavigate } from "react-router-dom";
import { config } from "../../config.js";
import styled from 'styled-components';

const NewMaterial: React.FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    
    const navigate = useNavigate();
    
      const handleSubmit = (e: any) => {
        e.preventDefault();
        fetch(`${config.serverBaseURL}/api/material/create`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({name: name, description: description})
        }).then(function (response) {
            console.log(response);
            navigate('/');
        }).catch(function (error) {
            console.log(error);
        });
      };

    return (
        <Container>
            <h1>New Material</h1>

            <div className='form'>
                <label>Material Name: </label>
                <input type='text' name='materialName' onChange={(e)=> {
                    setName(e.target.value) 
                }}/>
                <label>Description: </label>
                <input type='text' name='materialDescription' onChange={(e)=> {
                    setDescription(e.target.value) 
                }}/>
                <button onClick={handleSubmit}>Submit</button>
            </div>
        </Container>
    );
};

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export default NewMaterial;