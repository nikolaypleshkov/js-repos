import React from 'react';
import { useState, useRef } from 'react'

interface Person{
    firstName: string;
    secondName: string;
}

interface Props{
    text: string;
    ok?: boolean;
    i?: number;
    fn?: (bob: string) => void;
    obj?: {
        f1: string
    }
    person?: Person;
    handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TextNode{
    text: string
}

export const TextField: React.FC<Props> = ({handleChange}) => {
    const [count, setCount] = useState<TextNode>({text: 'hello'});
    const inputRef = useRef<HTMLInputElement>(null);
    const devRef = useRef<HTMLDivElement>(null);
    return(
        <div ref={devRef}>
            <input ref={inputRef} onChange={handleChange} />
        </div>
    );
}