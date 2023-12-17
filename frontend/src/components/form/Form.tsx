import { FormControl, InputLabel, MenuItem, FormHelperText, Select, TextField, Button, Box, Typography, Card } from '@mui/material';
import React, { useState } from 'react';
import { ExcuseParameters } from '../../interfaces/excuseParameters';


const Form: React.FC = () => {

    const [language, setLanguage] = useState<string>('');
    const [format, setFormat] = useState<string>('');
    const [formality, setFormality] = useState<string>('');
    const [specificity, setSpecificity] = useState<string>('');
    const [length, setLength] = useState<string>('');
    const [context, setContext] = useState<string>('');

    

    return (
        
        <Card className="form" sx={{
            width: "75vw",
            margin: "0 auto",
            marginTop: "5vh",
            p: "2vh 2.5vw"

        }}>
            <Box className="form-header" sx={{
                m: "2vh 0"
            }}>
                <Typography>Input excuse parameters</Typography>
            </Box>

            <Box className="first-row">
                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Language</InputLabel>
                    <Select
                        value={language}
                        label="Language"
                        onChange={(event) => setLanguage(event.target.value)}
                    >
                        <MenuItem value="english"><em>English</em></MenuItem>

                        {/* Other options */}
                    </Select>
                    <FormHelperText>Choose desired language</FormHelperText>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Format</InputLabel>
                    <Select
                        value={format}
                        label="Format"
                        
                        onChange={(event) => setFormat(event.target.value)}

                    >
                        <MenuItem value="text-message"><em>Text message</em></MenuItem>
                        <MenuItem value="email"><em>Email</em></MenuItem>
                        <MenuItem value="speech"><em>Speech</em></MenuItem>
                    </Select>
                    <FormHelperText>Choose desired format</FormHelperText>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Formality</InputLabel>
                    <Select
                        value={formality}
                        label="Formality"
                        displayEmpty
                        onChange={(event) => setFormality(event.target.value)}

                    >
                        <MenuItem value="1"><em>1</em></MenuItem>
                        <MenuItem value="2"><em>2</em></MenuItem>
                        <MenuItem value="3"><em>3</em></MenuItem>
                        <MenuItem value="4"><em>4</em></MenuItem>
                        <MenuItem value="5"><em>5</em></MenuItem>
                        <MenuItem value="6"><em>6</em></MenuItem>
                        <MenuItem value="7"><em>7</em></MenuItem>
                        <MenuItem value="8"><em>8</em></MenuItem>
                        <MenuItem value="9"><em>9</em></MenuItem>
                        <MenuItem value="10"><em>10</em></MenuItem>

                    </Select>
                    <FormHelperText>Choose desired formality</FormHelperText>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Specificity</InputLabel>
                    <Select
                        value={specificity}
                        label="Specificity"
                        displayEmpty
                        onChange={(event) => setSpecificity(event.target.value)}

                    >
                        <MenuItem value="1"><em>1</em></MenuItem>
                        <MenuItem value="2"><em>2</em></MenuItem>
                        <MenuItem value="3"><em>3</em></MenuItem>
                        <MenuItem value="4"><em>4</em></MenuItem>
                        <MenuItem value="5"><em>5</em></MenuItem>
                        <MenuItem value="6"><em>6</em></MenuItem>
                        <MenuItem value="7"><em>7</em></MenuItem>
                        <MenuItem value="8"><em>8</em></MenuItem>
                        <MenuItem value="9"><em>9</em></MenuItem>
                        <MenuItem value="10"><em>10</em></MenuItem>

                    </Select>
                    <FormHelperText>Choose desired specificity</FormHelperText>
                </FormControl>

                <FormControl sx={{ m: 1, minWidth: 120 }}>
                    <InputLabel>Length</InputLabel>
                    <Select
                        value={length}
                        label="Length"
                        onChange={(event) => setLength(event.target.value)}

                    >
                        <MenuItem value="very-short"><em>Very Short</em></MenuItem>
                        <MenuItem value="short"><em>Short</em></MenuItem>
                        <MenuItem value="medium"><em>Medium</em></MenuItem>
                        <MenuItem value="long"><em>Long</em></MenuItem>

                    </Select>
                    <FormHelperText>Choose desired length</FormHelperText>
                </FormControl>
            </Box>

            <Box className="second-row" sx={{
                marginTop: "2vh"
            }}>
                <TextField id="outlined-basic" label="Enter the context for excuse" variant="outlined" sx={{
                    width: "51.5vw"
                }} onBlur={(event) => setContext(event?.target.value)}/>
                
            </Box>

            <Box className="third-row" sx={{
                marginTop: "2vh"
            }}>
                <Button variant="contained" sx={{
                    
                }}onClick={() => {
                    
                    const excuseParams: ExcuseParameters = {
                        language: language,
                        format: format,
                        formality: formality,
                        specificity: specificity,
                        length: length,
                        context: context
                    }

                    const jsonParams = JSON.stringify(excuseParams);
                    console.log(jsonParams);
                }}>Submit</Button>

            </Box>

        </Card>
    )
}

export default Form;