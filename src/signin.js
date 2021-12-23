import React from 'react'
import {Button, Divider, TextField} from '@material-ui/core';
import { Link } from 'react-router-dom';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import PersonAddIcons from '@material-ui/icons/PersonAdd';

const signin=()=> {
    return (
        <div>
            <div className='icon'>
               <div className='icon_class'>
                   <PersonAddIcons fontSize="large"></PersonAddIcons>
               </div>
               <div className='text'>signup</div>
            </div>
            
             <div className='row m-2'>
                <div className='col-6 p-2'>
                     <TextField id="firstname" type="text" variant="outlined" label="Enter First Name" fullWidth/>
                </div>
                <div className='col-6 p-2'>
                     <TextField id="lastname" type="text" variant="outlined" label="Enter Last Name" fullWidth/>
                </div>
             </div>
                <div className='row m-2'>
                    <TextField id="email" className="p-2" type="text" variant="outlined" label="Enter Email" fullWidth/>
                    <TextField id="password" classes="p-2" type="text" variant="outlined" label="Enter Password" fullWidth/>
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
                    <Button variant="contained" color="primary">Create Account</Button>
                </div>
                <Divider variant="middle"/>
                <p className="text-center">
                    <Link to="login" className="text-black-50">
                        <h5>Already have an Account?</h5>
                    </Link>
                </p>
        </div>
    )
}

export default signin;

