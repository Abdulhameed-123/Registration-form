import React from 'react'
import {Button, Divider, TextField} from '@material-ui/core';
import { Link } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PersonIcons from '@material-ui/icons/Person';

const login=()=> {
    return (
        <div>
            <div className='icon'>
               <div className='icon_class'>
                   <PersonIcons fontSize="large"></PersonIcons>
               </div>
               <div className='text'>log in</div>
            </div>
            
            
                <div className='row m-2'>
                    <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter Email" fullWidth/>
                    <TextField id="password" className="p-2" type="text" variant="outlined" label="Enter Password" fullWidth/>
                    <FormControlLabel
                            control={
                            <Checkbox
                                icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
                                checkedIcon={<CheckBoxIcon fontSize="small" />}
                                name="checked"
                            />
                            }
                            label="i agree to all terms and condition."
                    />
                    <Button variant="contained" color="primary">Log in</Button>
                </div>
                <Divider variant="middle"/>
                <p className="text-center">
                   <Link to="signup" className="text-black-50">
                      <h5>Create Account</h5>
                   </Link>
                </p>
        </div>
    )
}

export default login;

