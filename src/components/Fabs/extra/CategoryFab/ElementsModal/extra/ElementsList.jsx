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

import { CATEGORIES, ELEMENTS } from '../../../../../../constants'
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

export default function ElementsList({ selectedCategory = null }) {
  const styles = useStyles()
  const { selectedElements, toggleElement } = useComputer()

  const renderElement = (el, index) => {
    const isSelectedElement =
      selectedElements.map((e) => e.id).indexOf(el.id) !== -1

    return (
      <Grid
        item
        xs={12}
        key={`col${index}`}
        onClick={() => toggleElement(el.id)}
      >
        {/* <Image src={box.image} rounded style={{ width: '150px' }} /> */}
        <Card>
          <CardActionArea>
            <CardMedia
              component='img'
              className={styles.image}
              image={el.image}
            />
            <CardContent className={styles.titleBox}>
              <Typography variant='body1'>{el.name}</Typography>
              <Typography variant='body1'>{`${el.price} Руб.`}</Typography>
              {isSelectedElement && <CheckIcon />}
            </CardContent>
          </CardActionArea>
        </Card>
      </Grid>
    )
  }

  const renderCategoryElements = (category) => {
    const categoryElements = ELEMENTS.filter(
      (model) => model.type === category.id
    )

    return categoryElements.map(renderElement)
  }

  return CATEGORIES.map((category, index) => {
    if (
      (selectedCategory && selectedCategory === category.id) ||
      !selectedCategory
    ) {
      return (
        <div key={`block${index}`}>
          {!selectedCategory && (
            <Typography variant='h5'>{category.name}</Typography>
          )}
          <Grid container spacing={3}>
            {renderCategoryElements(category)}
          </Grid>
        </div>
      )
    }
    return null
  })
}
