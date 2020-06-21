import React from 'react'

const Header = (props) => {
	return (
		<div>
		    <h2>{props.course}</h2>
		</div>
	)

}

const Part = (props) => {
	return (
		<div>
		 <p> {props.part.name} {props.part.exercises}</p>
		</div>
	)
}

const Content = ({parts}) => {
	return (
		<div>
            {parts.map(part => 
                <Part key={part.id} part={part}/>
                )}
		</div>
	)
}

const Total = ({ parts }) => {
	return (
		<div>
            <p>
                <b>total of {parts.map(part => 
                    part.exercises).reduce((accumulator, currentValue) => 
                        accumulator + currentValue)} exercises
                </b>
            </p>
		</div>
	)
}

const Course = ({course}) => {
    return (
        <div>
            <Header course={course.name}/>
            <Content parts={course.parts}/>
            <Total parts={course.parts}/>
        </div>
    )
}

export default Course
