import React from 'react'

const TopBeersTile = props => {
  let beers = props.beers.map(beer => {
    return(
        <tr>
          <td>{beer.beerName}</td>
          <td>{beer.brewery}</td>
          <td>{beer.rating}</td>
        </tr>
    )
  })
  return(
    <div>
      Top 20 Beers
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Brewery</th>
            <th>Rating</th>
          </tr>
        </thead>

        <tbody>
          {beers}
        </tbody>
      </table>
    </div>
  )
}
export default TopBeersTile