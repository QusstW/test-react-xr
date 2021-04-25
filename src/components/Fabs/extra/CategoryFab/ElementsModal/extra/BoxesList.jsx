import React from 'react'
import {
  //
  Grid,
  //
  Card,
  CardContent,
  CardActionArea,
  CardMedia,
  Typography
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { Check as CheckIcon } from '@material-ui/icons'

import { BOXES } from '../../../../../../constants'
import useComputer from '../../../../../../hooks/useComputer'

const useStyles = makeStyles((theme) => ({
  titleBox: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: theme.spacing(3)
  },
  image: {
    height: 250
  }
}))

export default function BoxesList() {
  const styles = useStyles()
  const { selectedBox, setBox } = useComputer()

  const renderBox = (box, index) => {
    const isSelectedBox = selectedBox && box.id === selectedBox.id

    return (
      <Grid item xs={12} key={`col${index}`} onClick={() => setBox(box.id)}>
        {/* <Image src={box.image} rounded style={{ width: '150px' }} /> */}
        <Card>
          <CardActionArea>
            <CardMedia
              component='img'
              className={styles.image}
              image={box.image}
            />
            <CardContent className={styles.titleBox}>
              <Typography variant='body1'>{box.name}</Typography>
              {isSelectedBox && <CheckIcon />}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    )
  }

  return (
    <Grid container spacing={3}>
      {BOXES.map(renderBox)}
    </Grid>
  )
}
