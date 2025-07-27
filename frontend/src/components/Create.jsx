import {React, useState, useEffect} from 'react'
import AxiosInstance from './Axios'
import {Box, Typography} from '@mui/material'
import AddBoxIcon from '@mui/icons-material/AddBox';
import TextForm from './forms/TextForm';
import SelectForm from './forms/SelectForm';
import MultiSelectForm from './forms/MultiSelectForm';
import DescriptionForm from './forms/DescriptionForm';
import Button from '@mui/material/Button';
import {useFormik} from 'formik';

const Create = () =>{
    const [country, setCountry] = useState([])
    const [league, setLeague] = useState([])
    const [characteristc, setCharacteristc] = useState([])

    console.log("Country", country)
    console.log("League", league)
    console.log("Characteristc", characteristc)

    const GetData = () =>{
        AxiosInstance.get(`country/`).then((res) =>{
            setCountry(res.data)
        } )

        AxiosInstance.get(`league/`).then((res) =>{
            setLeague(res.data)
        } )

        AxiosInstance.get(`characteristc/`).then((res) =>{
            setCharacteristc(res.data)
        } )
    }

    useEffect(() =>{
        GetData()
    },[])

    const formik = useFormik({
        initialValues:{
            name: "NAC Breda",
            description:"",
            country:"",
            league: "",
            attendance:"",
            city:"",
            characteristc:[],
        },

        onSubmit: (values) => {
            const formattedValues = {
                ...values,
                attendance: values.attendance ? parseInt(values.attendance) : null
            };
            
            console.log("Submitting data:", formattedValues);
            
            AxiosInstance.post(`footballclub/`, formattedValues)
            .then((response) => {
                console.log("Successful data submission", response.data);
            })
            .catch((error) => {
                console.error("Error submitting data:", error.response ? error.response.data : error);
            });
        }
    })

    console.log("Form values",formik.values)

    return(
        <div>
            <form onSubmit={formik.handleSubmit}>

            <Box className={"TopBar"}>
                <AddBoxIcon/>
                <Typography sx={{marginLeft:'15px', fontWeight:'bold'}} variant='subtitle2'>Create a new club!</Typography>
            </Box>

            <Box className={'FormBox'}>
                
                    <Box className={'FormArea'}>
                        <TextForm
                            label = {"Club name"}
                            name='name'
                            value={formik.values.name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />

                        <Box sx={{marginTop:'30px'}}>
                            <TextForm
                                label = {"City"}
                                name='city'
                                value={formik.values.city}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Box>
                        

                        <Box sx={{marginTop:'30px'}}>
                            <SelectForm
                                label = {"League"}
                                options = {league}
                                name='league'
                                value={formik.values.league}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Box>
                        
                        <Box sx={{marginTop:'30px'}}>
                            <Button type="submit" variant="contained" fullWidth>Submit the data</Button>
                        </Box>
                       

                    </Box>
                    

                    <Box className={'FormArea'}>

                        <SelectForm
                            label = {"Country"}
                            options = {country}
                            name='country'
                            value={formik.values.country}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        
                        <Box sx={{marginTop:'30px'}}>
                            <TextForm
                                label = {"Attendance"}
                                name='attendance'
                                value={formik.values.attendance}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />

                        </Box>                   

                        <Box sx={{marginTop:'30px'}}>
                            <MultiSelectForm
                                label = {"Characteristics"}
                                options={characteristc}
                                name='characteristc'
                                value={formik.values.characteristc}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                        </Box>
                        

                    </Box>


                    <Box className={'FormArea'}>
                         <DescriptionForm
                            label = {"Description"}
                            rows={9}
                            name='description'
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                    </Box>

                    



            </Box>
            </form>
        </div>
    )
}

export default Create