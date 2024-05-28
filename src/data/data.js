let stack=[];

function pushStack(type, matricle, name, birthdate) {
    stack.push({ tipo: type, matricula: matricle, nombre: name, fecha: birthdate });
    return true
}

function popStack() {
    if (stack.length === 0) {
        return null;
    }
    return stack.pop();
}

function sizeStack(){
    return stack.length;
}

const getObj = () => {
    return stack;
}

export { pushStack, popStack, getObj, sizeStack };