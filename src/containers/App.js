import React, { useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll';
import Loader from '../components/Loader';
import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';

    function App() {
    const [ robots, setRobots ] = useState([])
    const [ searchfield, setSearchfield ] = useState('')
    
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(users => setRobots(users));
    },[])

    const onSearchChange = (event) => {
        setSearchfield(event.target.value)
    }

    const filteredRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
    })
        return !robots.length ?
        <Loader/> :
        (
            <div className='tc container'>
                <h1 className='f1 title'>SpaceMen</h1>
                <SearchBox searchChange={onSearchChange} />
                <Scroll>
                    <ErrorBoundry>
                        <CardList robots={filteredRobots} />
                    </ErrorBoundry>
                </Scroll>
            </div>
        );
    }

export default App;