import React from 'react';
import { useState } from 'react';
import env from '../env.json';

function Create() {

    const [url, setUrl] = useState('');
    const [lineClass, setLineClass] = useState('hide'); // скрываем
    const [formClass, setFormClass] = useState(''); // скрываем

    let sendData = (obj) => {
        setFormClass('hide');
        setLineClass('');
        fetch(env.urlBackend, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: JSON.stringify(obj)
        })
            .then( response => response.json())
            .then(response => {
                console.log(response);
                if (response.result) {
                    setUrl(env.url+'/'+response.url);
                }
            })
    }

    let loadDataFromForm = (event) => {
        event.preventDefault();
        let note = event.target.elements.note.value;
        note = note.trim();
        if (note === '') {
            alert('Заполните поля');
            return false;
        }
        sendData({"note" : note});
    }

    return (
        <div>
            <form onSubmit={loadDataFromForm} className={formClass}>
            <div className="card">
                <div className="card-body">
                    <div className="input-group">
                        <span className="input-group-text">Enter new note</span>
                        <textarea className="form-control textarea" name="note" id="note" defaultValue="Test" aria-label="With textarea"></textarea>
                    </div>
                    <div className='createButtonWrap'>
                        <button className="btn btn-primary" type="submit">Create</button>
                    </div>
                   
                </div>
            </div>
                
            </form>
            <div className={lineClass}>
                <div>{url}</div>
                <div>
                    <button type="button" className="btn btn-primary" onClick={function(){window.location.reload()}}>Create new note</button>
                </div>
            </div>

        </div>
    );
}

export default Create;