import { Button, Card, CardActionArea, CardContent, Typography } from "@mui/material";
import { useGlobalState } from "../store/useGlobalState";
import { Id } from "../utils/types";
import '../css/Estadisticas.css'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export default function PatientCard({ patientId, handleGoBack }: { patientId: Id, handleGoBack: (event: React.MouseEvent<HTMLButtonElement>) => void }) {

    const theme = useGlobalState(state => state.theme)
    const patients = useGlobalState(state => state.patients)

    const patient = patients?.find(patient => patient.id === patientId)

    return (
        <Card
            id={theme === 'dark' ? 'patient-card-dark' : 'patient-card-light'}
        >
            <Button
                onClick={handleGoBack}
                id={theme === 'light' ? 'button-home-icon' : 'button-home-icon-dark'}>
                <ArrowBackIcon />
            </Button>
            <CardActionArea>
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                        {patient?.name + ' ' + patient?.surname}
                    </Typography>
                    <Typography variant="body2">
                        <ul>
                            <li>Nombre: {patient?.name}</li>
                            <li>Apellidos: {patient?.surname}</li>
                            <li>Edad: {patient?.age}</li>
                            <li>Sexo: {patient?.gender}</li>
                            <li>Id de rutina: {patient?.routine_id}</li>
                        </ul>
                    </Typography>
                </CardContent>
            </CardActionArea>
        </Card>
    );
}
