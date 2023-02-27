import React, { useState } from 'react';
import './style.css'

const Dynamic = () => {
    const [name, setName] = useState('');
    const [note, setNote] = useState('');
    const [items, setItems] = useState([]);

    const handleSubmit = (event) => {
        event.preventDefault();
        setItems([...items, { name: name, note: note }]);
        setName('');
        setNote('');
    };

    const handleDelete = (index) => {
        const newItems = [...items];
        newItems.splice(index, 1);
        setItems(newItems);
    };

    return (

        <div className="dynamic-main">

            <form onSubmit={handleSubmit}>
                <label>
                    Name:
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                </label>
                <label>
                    Note:
                    <input type="text" value={note} onChange={(e) => setNote(e.target.value)} />
                </label>
                <button type="submit">Add</button>
            </form>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        <div>
                            <strong>{item.name}</strong> - {item.note}
                        </div>
                        <button onClick={() => handleDelete(index)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Dynamic;

