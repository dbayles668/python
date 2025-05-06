import { getCompletedTodos } from './selectors.js';

function testSelectors(){
    const fakeState = { 
        todos: {
            value: [{text: 'l', isCompleted: false,  },{text: '2', isCompleted: true,  }]
        }
     };
    const result = getCompletedTodos(fakeState);
    if(result.length === 1 && result[0].text === '2'){
        console.log('pass');
    }
}

testSelectors();