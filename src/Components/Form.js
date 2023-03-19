import React, {useState} from 'react';
import Button from './UI/Button';
import classes from './Form.module.css';


const Form = (props)=> {

    const [key, setKey] = useState('');

    const [value, setValue] = useState('');

    const [validForm, setValidForm] = useState(false);

    const inputKeyChangeHandler = (e)=> {
        setKey(e.target.value);
    };

    const inputValueChangeHandler = (e)=> {
        setValue(e.target.value);
    };

    const submitHandler = (e)=> {
        e.preventDefault();
        if(!key || !value){
            return setValidForm(false);
        }else{
            props.onAddKeyValue(key, value);
            setValidForm(true);
        }
        setKey('');
        setValue('');
    }

    return (
        <form onSubmit={submitHandler} className={classes.form}>
            <div className={classes['form-controlls']}>
                <label htmlFor="key">Key: </label>
                <input type="text" id="key" onChange={inputKeyChangeHandler} value={key}/>
            </div>
            <div className={classes['form-controlls']}>
                <label htmlFor="value">Value: </label>
                <input type="text" id="value" onChange={inputValueChangeHandler} value={value}/>
            </div>
            <Button type='submit' isValid={validForm}>Add</Button>
        </form>
    )
};

export default Form;