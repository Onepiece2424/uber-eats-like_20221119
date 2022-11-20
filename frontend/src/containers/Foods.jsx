import React from 'react';

export const Foods = ({match}) => {

  console.log(match)

  return (
    <>
      フード一覧
      <p>restaurantsIdは{match.params.restaurantsId}です。</p>
    </>
  )
}
