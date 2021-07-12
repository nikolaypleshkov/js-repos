import React, {useState, useEffect} from 'react'
import { Button, Text } from './button-styled'

function TypeButton() {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
        if(count == 10){
            alert('Working')
        }
        else{
           console.log(count);
        } 
    });
    return (
        <Button onClick={() => setCount(count+1)} >
            <Text>Next</Text>
        </Button>
    )
}

export default TypeButton
