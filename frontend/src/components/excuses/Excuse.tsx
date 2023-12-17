import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CopyToClipboardButton from '../buttons/CopyToClipboardBtn';
import React from 'react';

interface ExcuseCardProps {
    title: string;
    dateCreated: Date;
    content: string;
}

const ExcuseCard: React.FC<ExcuseCardProps> = ({title, dateCreated, content}) => {
    return (
        <Card sx={{
            minWidth: 275,
            margin: "0 auto",
            width: "80vw",
            marginTop: "5vh",
        }}>
            <CardContent sx={{
                display: "flex",
                flexDirection: "column",

            }}>
                <Box sx={{ display: 'flex', borderBottom: "1px solid black", alignItems: "baseline" }}>
                    <Typography sx={{ fontSize: 18, p: "0" }} color="text.secondary" >
                        {title}
                    </Typography>

                    <Typography sx={{ marginLeft: 'auto', fontSize: 14 }} color="text.secondary">
                        {dateCreated.toLocaleDateString()}
                    </Typography>
                </Box>

                <Box sx={{ display: 'flex', marginTop: "1vh", alignItems: "center", textAlign: "left"}}>
                    <Typography sx={{ fontSize: 14, alignItems: "baseline" }} color="text.secondary" gutterBottom>
                        {content}
                    </Typography>

                    <Box sx={{ marginLeft: 'auto', }}>
                    
                        <CopyToClipboardButton text="Excuse message" />

                        
                    </Box>

                </Box>
            </CardContent>

        </Card>
    );
}


export default ExcuseCard;