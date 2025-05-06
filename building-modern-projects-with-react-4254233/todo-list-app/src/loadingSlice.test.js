import { loadingSliceDef } from "./loadingSlice.js";

function testLoadingSlice(){
    const fakeState = { value: {completed: true} };
    loadingSliceDef.reducers.loadingStarted(fakeState);
    if(fakeState.value.completed){

        throw new error('fail');
    }else{
        console.log('pass');
    }
}

testLoadingSlice();