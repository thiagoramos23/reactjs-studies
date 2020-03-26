import React from 'react'

const person = (props) =>  {
	return (
		<div>
			<p onClick={props.click}>I'am a Person and my name is {props.name} and I am {props.age}</p>
			<p>{props.children}</p>
			<input type="text" onChange={props.changed} value={props.name}></input>
		</div>
	)
};

export default person;