import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"

type CardProps = {
  image: string;
  cardTitle: string;
  cardDescription: string;
}

const CardComponent = (props: CardProps) => {
  const { image, cardTitle, cardDescription } = props;
  return (
    <Card sx={{ width: "100%", maxWidth: 338 }}>
      <CardMedia
        sx={{ height: 240 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {cardTitle}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary', wordBreak: "break-word"}}>
          {cardDescription}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  )
}

export default CardComponent