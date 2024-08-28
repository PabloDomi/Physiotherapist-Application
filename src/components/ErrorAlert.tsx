import { Alert } from "@mui/material"


function ErrorAlert({ message, severity }: { message: string, severity: 'error' | 'warning' | 'info' | 'success' }) {

    if (!message) return null

    return (
        <>
            <Alert sx={{ marginBottom: '1rem' }} severity={severity}>{message}</Alert>
        </>
    )
}

export default ErrorAlert
