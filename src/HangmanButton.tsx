import { Button } from '@mui/material';

export default function HangmanButton(props: any) {
  return (
    <div>
      <Button
        sx={{
          height: 48,
          width: 167,
          color: '#B026FF',
          marginTop: 3,
          marginBottom: 10,
          borderColor: '#B026FF',
          '&:hover': {
            borderColor: '#512da8',
            color: '#512da8'
          }
        }}
        onClick={() => {
          window.location.href='https://hangman.solwager.io'
        }}
        variant="outlined"
      >
        Launch
      </Button>
    </div>
  )
}
