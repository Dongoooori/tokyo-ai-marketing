import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material"
import { cardList } from "../../constant/cardList";

const CardComponent = () => {
  return (
    <>
    {cardList.map((item) => (
      <Card key={item.id} sx={{ width: "100%", maxWidth: 338 }}>
        <CardMedia
          sx={{ height: 240 }}
          image={item.image}
          title="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {item.title}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary', wordBreak: "break-word"}}>
            {item.description}
          </Typography>
        </CardContent>
        <CardActions className="flex justify-end">
          <Button 
            sx={{
              color: "black",
              border: "1px solid gray",
              paddingLeft: "10px",
              paddingRight: "10px",
              paddingTop: "4px",
              paddingBottom: "4px",
            }}
            size="small"
          >
            View More</Button>
        </CardActions>
      </Card>
    ))}
    </>
  )
}

export default CardComponent