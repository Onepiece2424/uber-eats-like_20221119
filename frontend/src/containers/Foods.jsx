import React, { Fragment,useEffect } from 'react';

// apis
import { fetchFoods } from '../apis/foods';

export const Foods = ({ match }) => {

  console.log(match)

  useEffect(() => {
    fetchFoods(match.params.restaurantsId)
    .then((data) =>
      console.log(data)
    )
  }, [match])

  return (
    <Fragment>
      フード一覧
    </Fragment>
  )
}
