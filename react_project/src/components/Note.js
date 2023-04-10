import { useEffect, useState } from 'react';
import {useParams} from 'react-router-dom';
import env from '../env.json';

function Note() {
    let {noteURL} = useParams();
    const [noteText, setNoteText] = useState('');
    const [lineClass, setLineClass] = useState('hide');       
    const [formClass, setFormClass] = useState('hide');
    const [errClass, setErrClass] = useState('hide');
    const [checkAnother, setCheckAnother] = useState('hide');

    useEffect(()=>{
        if(noteURL !== undefined){
            fetch(env.urlBackend, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: JSON.stringify({ "url": noteURL})
            })
                .then( response => response.json())
                .then(response => {
                    if (response.result) {
                        setNoteText(response.note);
                        setLineClass('');
                        setFormClass('hide');
                        setErrClass('hide');
                        setCheckAnother('')
                    }
                    else if(!response.result){

                        setLineClass('hide');
                        setFormClass('hide');
                        setErrClass('');
                        setCheckAnother('');
                    }
                })
        }
        else{
            setLineClass('hide');
            setFormClass('');
            setErrClass('hide');
        }
    },[])

    function getNote (event){
        event.preventDefault();
        let url = event.target.elements.url.value;
        url = url.trim();
        if (url === '') {
            alert('Заполните поля');
            return false;
        }
        noteURL = url;
        window.location.href = env.url+'/'+url;
    }

    const searchNote = (event) =>{
        window.location.href = env.url;
    }

    return (
        <div>
            <div className={lineClass+' block'}>
                <div className="card" style={{width: "18rem"}}>
                    <div className="card-header">
                    NOTE
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">{noteText}</li>
                    </ul>
                </div>
            </div>
            <div className={checkAnother+' block'}>
                <button className='btn btn-primary' onClick={searchNote}>check another note</button>
            </div>
           
            <div className={errClass + ' alert alert-danger'} role="alert"><p>Wrong input hash</p></div>
            <div className='block'>
            <form action="" onSubmit={getNote}>
                <div className={formClass+' col-6'}>
                    <label className='paddbot' htmlFor='url'>Write hash here</label>
                    <input type="text" name="url" id="url" className="form-control"></input>    
                    <button type="submit" className='btn btn-primary'>Check</button>
                </div>
            </form>
            </div>

        </div>

    );
}

export default Note;