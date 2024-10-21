import './Hello.css';
export default function Hello({name,surname="bebe",age=34}){

    return (<><h1>Hello world {name}{surname}{age}</h1></>
        
    );
    
    
}